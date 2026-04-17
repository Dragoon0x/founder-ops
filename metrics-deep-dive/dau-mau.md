# DAU / MAU (and ratios)

Engagement metrics. Misused almost as often as they're reported.

## Definitions

**DAU:** Daily Active Users — unique users with a qualifying action in a day.

**MAU:** Monthly Active Users — unique users with a qualifying action in a month.

**WAU:** Weekly Active Users — unique users in a week.

**Stickiness:** DAU/MAU ratio. How many of your monthly users come back daily.

## What counts as "active"

Critical to define and stick to. Options:

- Logged in (weak — could be bot, could be no real action)
- Performed any action (better)
- Performed a valuable action (best — like "sent a message" not just "opened the app")

Define your activity threshold explicitly. Change it once, flag it always.

## Benchmarks (stickiness = DAU/MAU)

| Product type | Healthy DAU/MAU |
|-------------|-----------------|
| Consumer social | 50%+ (daily habit) |
| Messaging | 60%+ |
| Productivity tool (work) | 30-50% |
| Productivity tool (personal) | 10-30% |
| Media / content | 20-40% |
| Marketplace (transactional) | 5-15% |

A 20% stickiness consumer social app is broken. A 20% stickiness infrequent-use productivity tool might be great.

## When DAU/MAU is misleading

- **Low-frequency products:** tax software should have 5% stickiness in March and 0.5% in August. DAU/MAU is wrong lens.
- **Enterprise tools with consumer metrics:** sales team using Salesforce weekly is fine. Don't report daily active.
- **Total counts vs engaged counts:** MAU of 1M with 100k DAU is different from 500k MAU with 100k DAU. Ratio matters.

## L7 / L28 distributions

Better than DAU/MAU for habit-forming products.

- **L7:** number of days active in last 7 days (0-7)
- **L28:** number of days active in last 28 days (0-28)

Plot the distribution. For a habit-forming product, you want a bimodal distribution: lots of 0s (churned) and a mass at high numbers (habit users). Flat distribution = no one has a habit.

## Power user percentile

% of users with L28 > 20 (or similar high threshold).

- 5-10%: reasonable for most products
- 15-25%: strong habit product
- >30%: extremely sticky (Slack, Discord, etc.)

## DAU/MAU traps

1. Treating it as a growth metric (it's not — MAU growth is the growth metric)
2. Reporting DAU alone without MAU (missing context)
3. Redefining "active" after the fact (can't compare over time)
4. Including bots / fake accounts
5. Over-counting with push notifications (user opens a notification then leaves — is that active?)

## Use DAU/MAU for

- Retention of active cohorts
- Engagement quality comparison across segments
- Feature launch health (did new feature affect DAU/MAU?)

## Don't use DAU/MAU for

- B2B seat expansion
- Low-frequency but high-value products (legal software, tax)
- One-shot transactions (marriage websites, etc.)
- Total growth (that's MAU alone)
