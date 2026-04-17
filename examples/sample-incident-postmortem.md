# Sample Incident Post-Mortem

## Incident: API Outage — March 12, 2026
**Severity**: SEV-1
**Duration**: 3 hours 42 minutes (09:18 - 13:00 UTC)
**Impact**: All API endpoints returned 503 errors. 100% of customers affected. Estimated revenue impact: $4,200 in SLA credits.

## Timeline
| Time (UTC) | Event |
|-----------|-------|
| 09:18 | Monitoring alerts fire: API error rate spikes to 100% |
| 09:21 | On-call engineer acknowledges alert, begins investigation |
| 09:28 | Incident declared, #inc-2026-03-12 channel created |
| 09:35 | Root cause identified: database connection pool exhausted |
| 09:40 | Attempted fix: restart application servers. No improvement. |
| 09:55 | Deeper investigation: connection leak traced to new query introduced in yesterday's deploy |
| 10:15 | Rollback initiated to previous version |
| 10:25 | Rollback complete. Error rate dropping. |
| 10:45 | Error rate at 5%. Monitoring for stability. |
| 11:00 | Status page updated: "Identified, mitigating" |
| 12:30 | Error rate at 0.1%. Service stable for 90 minutes. |
| 13:00 | Incident resolved. Status page updated. |

## Root Cause
A new database query introduced in deploy v2.14.3 (shipped March 11) opened a database connection but did not properly release it in the error path. Under normal load, connections leaked slowly (~10/hour). Overnight, the connection pool (max 100) filled completely. When morning traffic arrived at 09:15 UTC, new requests could not obtain connections.

## Contributing Factors
1. **No connection pool monitoring**: We monitored query latency but not pool utilization
2. **No staging load test**: The leaking query was tested functionally but not under sustained load
3. **Rollback took 40 min**: Our rollback process requires manual steps that could be automated
4. **Status page update delayed**: First public update was 1.5 hours after incident start

## Action Items
| Action | Owner | Deadline | Status |
|--------|-------|----------|--------|
| Add connection pool utilization metric + alert at 80% | Platform team | March 19 | ✅ Complete |
| Automated rollback script (one-command) | DevOps | March 26 | In progress |
| Add connection leak detection to CI pipeline | Backend lead | April 2 | In progress |
| Status page update SLA: < 30 min from incident declaration | On-call team | March 15 | ✅ Complete |
| Load testing for all queries touching connection pools | QA lead | April 9 | Not started |

## Lessons Learned
- Connection pool exhaustion is silent until catastrophic. Monitoring the pool is as important as monitoring queries.
- Our rollback process being manual added 25 minutes of downtime. Automation would have reduced total impact to ~2 hours.
- The deploy that caused the issue shipped without a load test. We need load testing for database-touching changes, not just functional tests.
