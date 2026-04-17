# Diagnostic: Engineering Health

Run quarterly. CTO + engineering leads.

## DORA Metrics
| Metric | Elite | High | Medium | Low |
|--------|-------|------|--------|-----|
| Deploy frequency | Multiple/day | Weekly | Monthly | < Monthly |
| Lead time for changes | < 1 hour | < 1 week | < 1 month | > 1 month |
| Change failure rate | < 5% | < 10% | < 15% | > 15% |
| Time to restore | < 1 hour | < 1 day | < 1 week | > 1 week |

Score 5 for Elite, 4 for High, 2 for Medium, 1 for Low.

## Additional Dimensions

### Code Quality (20 points)
- Test coverage: 5 pts if > 80%, 1 pt if < 40%
- Code review turnaround: 5 pts if < 4 hrs, 1 pt if > 2 days
- Tech debt ratio (maintenance time / total eng time): 5 pts if < 15%, 1 pt if > 40%
- Documentation coverage: 5 pts if all critical systems documented, 1 pt if tribal knowledge

### Team Health (20 points)
- Developer satisfaction (survey): 5 pts if > 4/5, 1 pt if < 3/5
- On-call burden: 5 pts if < 2 pages/week, 1 pt if > 10
- Engineer retention: 5 pts if < 10% annual attrition, 1 pt if > 25%
- New hire ramp time: 5 pts if < 2 weeks to first PR, 1 pt if > 6 weeks

### Infrastructure (20 points)
- Cloud cost per user/month: 5 pts if declining, 1 pt if growing faster than user growth
- Security posture: 5 pts if all critical vulnerabilities patched < 48 hrs, 1 pt if backlog > 30 days
- Monitoring coverage: 5 pts if all critical paths monitored with alerts, 1 pt if significant gaps
- Disaster recovery: 5 pts if tested quarterly with < 1 hr recovery, 1 pt if untested

## Action Items by Score
- < 40: Invest in fundamentals (CI/CD, testing, monitoring) before feature work
- 40-60: Dedicate 25% of sprint capacity to infrastructure improvements
- 60-80: Optimize and refine. Focus on developer experience.
- > 80: Maintain. Share practices externally (blog, open source).
