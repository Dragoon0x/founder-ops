# Time to Value (TTV)

The time between signup and the user experiencing the core value proposition.

## Definition

TTV = time from (first product entry) to (user's "aha moment" / activation).

## Benchmarks

| Product type | Target TTV |
|-------------|-----------|
| Consumer mobile | <60 seconds |
| Consumer web | <5 minutes |
| PLG SaaS | <15 minutes |
| Bottom-up B2B | <24 hours |
| Top-down B2B (implementation) | <2 weeks |
| Enterprise platform | <30 days |

## Why it matters

Every minute of TTV past the median doubles churn risk. Users forget their initial motivation within 72 hours for most products.

If TTV is 2 weeks and users don't see value in week 1, you've lost them.

## Measurement

TTV is not a single number; it's a distribution. Report:
- Median TTV
- 25th percentile (fast adopters)
- 75th percentile (slow adopters)
- % of users who never reach value (hit a timeout)

## Friction sources

1. Account creation / email verification
2. Setup required before value (config, integrations, data import)
3. Learning curve (interface complexity)
4. Waiting (data processing, AI training, approval)
5. Upstream dependencies (admin needs to provision, IT needs to approve)

Identify the biggest. Fix it.

## TTV reduction tactics

- **Sample / template data:** users see value before entering their own
- **Pre-filled account:** use signup info to auto-configure
- **Demo mode:** interactive tour with fake data
- **Progressive disclosure:** hide advanced features until user masters basics
- **AI assist:** LLM-powered onboarding that builds for the user
- **Parallelize setup:** async integrations that don't block first value

## TTV and PLG

PLG (product-led growth) only works if TTV is measured in minutes, not days.

If your TTV is >24 hours, you need a sales-assist motion. Don't pretend you're PLG if users need handholding.

## TTV for different stages of buyer

- **Evaluator:** first TTV (what they get in their first 15 minutes)
- **Pilot / POC:** second TTV (what the team gets in their first week)
- **Production:** third TTV (what the org gets in first quarter)

Each has its own drop-off. Instrument all three.

## TTV vs activation

TTV is the time dimension. Activation is the event. Together:
- Low TTV + high activation rate = product is accessible and sticky
- Low TTV + low activation = fast but shallow; users leave after initial value
- High TTV + high activation = slow but sticky (common in B2B)
- High TTV + low activation = broken onboarding, fix now
