# Anti-Pattern: Feature Factory

## What It Looks Like
The team ships feature after feature but never measures impact. The roadmap is a list of customer requests with no prioritization framework. "We shipped 47 features this quarter" is celebrated without asking if any of them moved a metric.

## Why It Happens
- Output is easier to measure than outcome
- Customer requests feel urgent and specific
- Sales team promises features to close deals
- "Building more" feels productive
- No one owns the success of shipped features

## Detection Signals
- Roadmap is a list of features, not a list of problems
- No feature has defined success criteria before building
- Feature adoption is never measured post-launch
- > 30% of features used by < 5% of users
- Product team velocity is high but key metrics are flat
- Engineering team feels like a "ticket-taking" organization

## The Numbers
Pendo's research: the average SaaS product has 80% of features that are rarely or never used. Each unused feature adds maintenance cost, cognitive load for users, and engineering debt.

## Recovery Playbook
1. **Feature audit**: Measure adoption of every feature shipped in the last 6 months. Kill or hide anything used by < 5% of users.
2. **Outcome-based roadmap**: Every roadmap item must answer: "What metric will this move, and by how much?"
3. **Success criteria before build**: No feature goes into development without defined success metrics and a measurement plan
4. **Post-launch review**: 30 days after launch, measure adoption vs target. If below 50% of target, understand why before building the next thing.
5. **Say no to sales-driven features**: Create a process where sales can request features but product decides based on data, not volume of requests
6. **Feature budgets**: Limit new features to 2-3 per quarter. Spend the rest of engineering on improving existing features.
