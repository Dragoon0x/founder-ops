# Anti-Pattern: Technical Debt Denial

## What It Looks Like
"We'll refactor later." Later never comes. The codebase becomes increasingly fragile. Feature development slows. Bug count rises. Engineers burn out. But the CEO says "we need to ship features, not refactor."

## Why It Happens
- Tech debt is invisible to non-technical stakeholders
- Short-term incentives favor features over infrastructure
- "We'll fix it after the fundraise / launch / hire"
- Lack of measurement: no one quantifies the cost of tech debt

## Detection Signals
- Feature development velocity declining quarter over quarter
- Bug reports increasing despite stable codebase
- Deploy frequency decreasing
- Engineers spending > 30% of time on bug fixes and maintenance
- "Only [one person] understands how this works" is said often
- New hires take > 3 months to be productive in the codebase

## Quantifying the Cost
Track developer hours:
- What % of engineering time goes to new features vs maintenance vs bug fixes?
- Healthy: 70% new / 20% maintenance / 10% bugs
- Unhealthy: 40% new / 35% maintenance / 25% bugs

In dollar terms: if your 10-person eng team costs $2M/year, the difference between healthy and unhealthy is $600K/year in lost productivity.

## Recovery Playbook
1. **Measure it**: Track the new/maintenance/bug split weekly
2. **Budget for it**: Reserve 15-20% of engineering capacity for tech debt every sprint. Non-negotiable.
3. **Make it visible**: Translate tech debt into business impact ("This slows every feature by 30%")
4. **Prioritize it**: Not all tech debt matters equally. Use the Impact × Risk / Effort formula from the tech-debt-triage workflow
5. **Celebrate it**: When the team pays down debt that speeds up future development, recognize that in all-hands
