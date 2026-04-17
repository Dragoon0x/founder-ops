# Marketplace — Operating Manual

## If you're new to marketplaces

You're building a two-sided business. Both sides matter, but they're
asymmetric — one side is harder to acquire, one side has more leverage.
Identify which side is the constrained side and over-invest there.

## The Chicken-and-Egg Problem

Five proven approaches:

1. **Single-player mode** — make it valuable for one side even without the other
   (Etsy: sellers got a portfolio site even with no buyers)
2. **Subsidize the constrained side** — pay supply or demand to participate
   (Uber paid drivers minimums; DoorDash paid restaurants to list)
3. **Geographic concentration** — saturate one city before expanding
   (rideshare, food delivery)
4. **Vertical narrowness** — start in a tight niche where liquidity is achievable
   (Faire started in 1 product category)
5. **Manual matching** — operations team matches buyers and sellers manually
   until volume justifies automation

Pick one. Don't try all five.

## Stage Operating Priorities

### Pre-PMF (no liquidity yet)
- Pick ONE city / segment / category
- Manually match supply and demand
- Founders DO operations work to learn the dynamics
- Track: time-to-match, % of demand matched
- Don't build software for problems you don't yet understand

### Early PMF (proven liquidity in 1 wedge)
- Document the playbook from the wedge
- Test if the playbook transfers (next city, next category)
- Build operational tools (matching, dispatch, monitoring)
- Hire ops lead per geography or category

### Scaling (multi-wedge)
- Standardize ops across geographies
- Build ML/automation for matching (replace manual)
- Trust & Safety becomes critical
- First brand investments

### Growth (national or category leader)
- Network effects compounding
- Premium services (extra trust, faster matching)
- Adjacent categories (cross-sell)
- International expansion

## Mode Overrides for Marketplaces

### `metrics`
North star options:
- GMV growth (most common)
- Active users on each side
- Liquidity rate (% supply matched)
- Net buyer adds + net seller adds

Pick ONE that defines success and report it weekly.

### `growth`
- Acquisition splits in two: supply acquisition AND demand acquisition
- Supply CAC vs demand CAC differs (often 5-10x)
- Don't optimize one without the other
- Cross-side network effects are the moat

### `pricing-deeper`
Take rate determines viability:
- <10%: hard to build a real business unless very high volume
- 10-20%: sweet spot for most marketplaces
- 20-30%: defensible only with strong network effects
- >30%: suppliers will route around you

### `compete`
- Marketplaces have winner-take-most dynamics in defined geographies
- Top 1-2 players capture 80%+ of value in mature category
- Existential question: are we #1 or #2 in our wedge? If not, focus.

### `operations`
- Trust & Safety team is non-optional past 1K+ transactions
- Fraud rate, dispute rate, refund rate are core operating metrics
- Customer support volume is 10-100x SaaS at same revenue

## Marketplace Anti-Patterns

| Pattern | Why It Fails |
|---------|-------------|
| Optimizing supply growth without demand match | Inventory sits, suppliers leave |
| Charging both sides up front | High friction, neither side commits |
| Going national before nailing one city | Spread thin, no liquidity anywhere |
| Ignoring disintermediation risk | Buyers and sellers go off-platform |
| Building tech before knowing the unit economics | Wrong tech for wrong economics |
| Subsidizing both sides indefinitely | Bleeds cash, no path to profitability |
| Letting bad actors stay (one side) | Quality erodes, churn increases |

## Defining Your Liquidity Standard

For each marketplace, define and track:
- "Liquidity event" = supply matched with demand in target time
- Liquidity rate = liquidity events / total demand
- Target by category (e.g., 95%+ for rideshare, 60%+ for B2B services)

If your liquidity rate is below target, fix that BEFORE growing supply or demand.

## Reference Benchmarks

See `benchmarks/marketplace.md` for take rate, GMV growth, retention, and
unit economics benchmarks by marketplace type.
