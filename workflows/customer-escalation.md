# Customer Escalation Workflow

## Trigger
Any customer issue that meets one or more criteria:
- Customer explicitly requests to speak with a manager/executive
- Revenue at risk > $10K ARR (or > 5% of a named account's contract)
- Issue unresolved after 3 support interactions
- Customer mentions churn, cancellation, or competitor
- NPS response of 0-3 (Detractor) with written feedback
- Social media complaint gaining traction (> 10 engagements)

## Escalation Path

### Level 1: Support Lead (response within 2 hrs)
- Reviews full ticket history
- Calls the customer (not email, not chat)
- Authorized to offer: extended trial, feature workaround, priority bug fix
- Resolution target: 24 hrs

### Level 2: Head of Customer Success (response within 4 hrs)
Triggered when:
- L1 attempted and customer still unsatisfied
- ARR at risk > $25K
- Issue requires product/engineering involvement

Actions:
- Personal call from CS head
- Authorized to offer: partial refund (up to 1 month), expedited feature development, dedicated support channel
- Loop in product manager if issue is a feature gap
- Resolution target: 48 hrs

### Level 3: CEO/Founder (response within same business day)
Triggered when:
- ARR at risk > $100K
- Potential PR/reputation risk
- Customer is a strategic account (top 10 by revenue or reference value)
- Legal threat received

Actions:
- Founder calls within 4 hrs
- Full post-mortem shared with customer
- Authorized to offer: full refund of affected period, SLA credits, roadmap commitment with timeline
- Written follow-up within 24 hrs with remediation plan

## Escalation Tracking
Every escalation gets logged:
- Customer name, ARR, account age
- Issue category: bug, feature gap, service quality, billing, onboarding
- Escalation level reached
- Resolution: what was offered, what was accepted
- Outcome at 30 days: retained, churned, downgraded, expanded

## Patterns to Watch
Review escalations monthly. If you see:
- > 3 escalations/month from the same root cause: it's a product problem, not a support problem
- > 2 escalations from the same customer in 90 days: assign a dedicated CSM
- Escalation rate > 5% of active accounts: systemic issue, exec review required
- L3 escalations > 1/quarter: your L1/L2 process is broken
