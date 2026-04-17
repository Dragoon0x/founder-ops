# Scenario: Extended Service Outage (> 4 hours)

## Trigger
Service is down or severely degraded for more than 4 hours.

## Severity by Duration
| Duration | Impact Level | Expected Churn | SLA Credit |
|----------|-------------|---------------|------------|
| 4-8 hrs | Significant | 1-2% at-risk | 5% monthly credit |
| 8-24 hrs | Severe | 3-5% at-risk | 10-25% monthly credit |
| 24-72 hrs | Critical | 5-15% at-risk | Full month credit |
| > 72 hrs | Existential | 15-30% at-risk | Full quarter + negotiation |

## Immediate Response
See incident-response workflow for technical response.

Additional CEO actions during extended outage:
1. **Hour 4**: Post public status update. Be specific about what's broken and ETA.
2. **Hour 8**: CEO records personal video/written update. Apology + what happened + what we're doing.
3. **Hour 12**: Personal outreach to top 10 customers by ARR. Phone call, not email.
4. **Hour 24**: If still unresolved, escalate to backup engineering (external consultants if needed).

## Post-Outage (72 hrs)
1. Blameless post-mortem (see incident-response workflow)
2. Customer communication: detailed write-up of what happened, why, and what changes you're making
3. SLA credits processed proactively (don't wait for customers to ask)
4. Technical remediation: specific timeline for preventing recurrence
5. Internal retrospective: process and tooling gaps that made this worse

## Longer-term
- Invest in redundancy and disaster recovery
- Set up external monitoring (don't rely on internal tools to detect your own outage)
- Create a customer communication playbook so comms aren't improvised during crisis
- Consider SLA insurance or higher-tier cloud commitments
