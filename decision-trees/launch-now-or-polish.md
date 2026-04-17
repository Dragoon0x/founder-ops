# Launch Now or Polish

## Context
Product or feature is "almost ready." Launch or keep polishing?

## The tree

### Step 1: What's the cost of shipping too early?
- **Reputation-critical product (medical, financial, trust-heavy)**: polish more. Bugs are catastrophic.
- **Early-stage product with early-stage users**: ship. They forgive bugs.
- **Late-stage product with enterprise users**: polish more. They don't forgive.
- **Platform or API other builders depend on**: polish more. Breaking changes later are expensive.

### Step 2: What's the cost of shipping too late?
- Competitive window closing: ship.
- Internal momentum decaying: ship.
- Team lost faith it will ever ship: ship.
- Customer explicitly waiting: ship.

### Step 3: What's broken vs what's missing?
- **Broken**: fix first. Broken > missing.
- **Missing but critical**: build, ship narrower scope.
- **Missing but nice-to-have**: ship without.

### Step 4: Who are you really delaying for?
Often the person asking to polish is you, not the user. Ask:
- Have 5 real users tried it end-to-end? If no: get data before another polish cycle.
- Are you getting the same feedback or new feedback? Same = close to stable; new = still raw.
- Are you afraid of being judged? Ship anyway.

### Step 5: Reversibility of launch
- Silent launch (few users): very reversible. Ship.
- Quiet launch (email to waitlist, social): medium. Ship with "beta" framing.
- Full public launch (PR, launch event): less reversible. Polish to "good enough."

## The 80/20 rule of launch
- You have the 20% of features that cover 80% of users.
- Polish the 20% until they work cleanly.
- Ship. Defer the other 80% of features.

## Scope cut heuristics (what to cut)
- Cut anything that adds scope to onboarding (one delay at onboarding kills usage).
- Cut anything your top 3 beta users haven't asked for.
- Cut settings/preferences (start opinionated, add settings later).
- Cut admin/internal dashboards (build minimum, improve under pressure).

## What to polish before launch
- First-run experience. Everything.
- The top 3 use cases, end-to-end.
- Error messages (rewrite each one clearly).
- Pricing page and checkout flow.
- Core navigation.

## Common wrong answers
- "Let's add one more feature then ship." (Slippery slope.)
- "Let's wait for the design refresh." (Design never stops.)
- "We need to add auth / tests / analytics first." (Ship without, add after. Analytics after launch still captures most data you need.)
- "The PR strategy isn't ready." (Launch quietly, PR later.)

## Test: can you launch in 2 weeks?
If the answer is "no, we'd need 6 weeks," probably the gap is scope, not polish. Cut scope.

## Reversibility
- Ship rough → iterate: default for software. 95% recoverable.
- Delay → lose momentum: 50% recoverable.
- Delay → never ship: very common. 0% recoverable.

The asymmetry strongly favors shipping.
