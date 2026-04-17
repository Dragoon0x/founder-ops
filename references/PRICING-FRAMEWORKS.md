# Pricing Frameworks Reference

A reference catalog of pricing models used by SaaS, marketplaces, hardware, and consumer companies. Each includes: when it works, failure modes, examples.

## Per-seat pricing

**When it works**: product value scales with individual user activity; buyer can approve additional seats without re-selling; adoption is broad.

**Failure modes**:
- Admins buy fewer seats than actually use
- Seat audits destroy customer goodwill
- Caps growth once everyone has access
- Viral product loops break (invited users can't access)

**Examples**: Slack, Notion, Figma, Asana, Atlassian.

**Benchmarks**:
- Typical range: $5–50 per user per month (SMB), $15–300 (enterprise)
- Contract tier uplift: 20–40% for annual vs monthly
- Multi-year uplift: 10–15% for 2-year commit

## Usage-based (consumption) pricing

**When it works**: value is directly tied to usage; cost of goods scales with usage; buyer prefers pay-as-you-go.

**Failure modes**:
- Revenue unpredictability (both ways)
- Large customer cost spikes → retention crisis
- Sales team can't forecast
- Complex bills confuse buyers

**Examples**: AWS, Twilio, Stripe, Snowflake, OpenAI API.

**Benchmarks**:
- Price per unit should imply 70–80% gross margin
- Volume discounts: tiered breaks at 100x, 1000x
- Minimum commitments common for enterprise

## Value-based pricing

**When it works**: you can quantify customer ROI; buyer has centralized P&L; sales cycle allows discovery.

**Failure modes**:
- Discovery overhead extends sales cycle
- Customers feel punished for success
- Hard to benchmark across accounts
- Required sales-led motion

**Examples**: Gong (revenue generated), Outreach (rep productivity), Pendo (user engagement uplift).

**Benchmarks**:
- Target: 20–30% of measured value delivered
- Discovery takes 3–5 meetings
- Cycle typically 90–180 days

## Tiered pricing (Good / Better / Best)

**When it works**: feature differentiation is clear; buyer self-segments; expansion path obvious.

**Failure modes**:
- Most customers buy the middle tier regardless of fit
- Top tier becomes cost ceiling, not aspiration
- Feature gating creates adversarial upgrade conversations

**Examples**: HubSpot, Salesforce, Zendesk, Intercom.

**Benchmarks**:
- Typical spread: 1x / 3x / 8x across tiers
- 60–70% of new customers choose middle tier
- Top tier adoption: 10–20% of revenue, 30–50% of sales cycles

## Freemium

**When it works**: viral or product-led growth; marginal cost near zero; free tier is genuinely useful for specific use case.

**Failure modes**:
- Free users support cost without conversion
- Premium features aren't differentiated enough
- Sales team disrespects free-user pipeline
- Free tier cannibalizes paid

**Examples**: Dropbox (storage), Slack (message history), Notion (blocks), Canva (design).

**Benchmarks**:
- Free-to-paid conversion: 2–5% (SaaS), 10–15% (strong PLG)
- Time to conversion: 30–180 days
- Free tier should solve for "me" use case; paid for "team"

## Flat-rate pricing

**When it works**: simple product, one buyer persona, strong differentiation.

**Failure modes**:
- Cannot price-discriminate across customer sizes
- Leaves money on the table for enterprise
- Commoditizes vs tiered competitors

**Examples**: Basecamp ($99/mo flat), early Superhuman ($30/mo).

**Benchmarks**: typically used at sub-$5M ARR, converts to tiered past that.

## Per-transaction pricing

**When it works**: fintech, payments, marketplaces; value tied to a discrete event.

**Failure modes**:
- Regulatory caps
- Race to the bottom on rate
- Can't differentiate on price alone

**Examples**: Stripe (2.9% + 30¢), Shopify (2.4–2.9% card not present), PayPal.

## Hybrid pricing

**When it works**: base platform fee for predictability + usage for upside.

**Failure modes**:
- Complexity
- Both teams (yours and theirs) confused

**Examples**: Datadog (host + custom metrics), Segment (MTU + destinations).

**Benchmarks**:
- Base covers 60–70% of revenue
- Usage covers 30–40%

## Volume pricing

**When it works**: enterprise motion; large commit upfront; customer knows their scale.

**Failure modes**:
- Customer over-commits, doesn't use
- Shelfware becomes renewal fight
- Usage spikes cost them more than list

**Benchmarks**:
- 10–25% discount for volume commits
- True-up at end of term
- Credit carryover for unused committed spend

## Psychological pricing principles

- Anchoring: show the highest tier first
- Charm pricing ($99 vs $100): 5–10% lift on consumer, not B2B
- Decoy pricing: 3 tiers with middle designed to be chosen
- Contrast: compared-to pricing builds willingness to pay
- Bundling: combines sticky with vitamin to increase overall value

## When to change pricing

Signals:
- Gross margin below target
- Low-value customers consume disproportionate support
- Competitor prices tell you you're mispriced
- Conversion rates jumped recently (signal you're too cheap)
- Win rates dropped (signal you're too expensive)

Never change pricing:
- During a bad quarter (looks desperate)
- Right before a raise (investors flag)
- Without grandfathering existing customers
- Without telling the team first

## Pricing change rollout

- Internal alignment: 4 weeks
- Grandfather plan: minimum 12 months for existing
- Communication: 30–60 days notice
- Test in segments before full rollout
- Measure: churn, ACV, deal cycle, CAC payback

## Further reading

- *Monetizing Innovation* by Madhavan Ramanujam
- *Confessions of the Pricing Man* by Hermann Simon
- OpenView Pricing reports (annual, free)
- Profitwell / Paddle benchmarks
