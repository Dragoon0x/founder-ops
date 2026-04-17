# Hardware BOM Model

Hardware kills most hardware startups. Model BOM and working capital first, revenue second.

## Bill of Materials (BOM)

Every component × quantity × unit cost = BOM cost.

Typical categories:
- Processors / chips
- Sensors
- Display
- Battery
- Casing / enclosure
- PCBs (boards)
- Connectors / cables
- Screws / fasteners
- Labels / packaging
- Manuals / inserts

BOM is NOT your unit cost. Unit cost = BOM + assembly + yield loss + testing + packaging + freight + tariffs + warranty reserve.

## True unit cost structure

| Line | % of unit cost |
|------|---------------|
| BOM | 60-75% |
| Assembly labor | 5-15% |
| Yield loss (defects) | 2-5% |
| Testing | 2-5% |
| Packaging | 3-8% |
| Freight + tariffs | 5-15% |
| Warranty reserve | 2-4% |

A $100 BOM can easily be $130-160 landed cost in your warehouse.

## Margin stack

| Line | Example |
|------|---------|
| Retail price | $299 |
| Channel discount (50%) | -$150 (wholesale price to retail) |
| Your COGS (landed) | -$140 |
| Gross margin | $9 (3%) |

If you sell direct (D2C):

| Line | Example |
|------|---------|
| Retail price | $299 |
| COGS (landed) | -$140 |
| Fulfillment + payment proc | -$25 |
| CAC (ads, content) | -$60 |
| Gross margin after CAC | $74 (25%) |

D2C math is better. Channel math is often broken at small scale. Be honest about which you're doing.

## Working capital death spiral

Hardware requires paying suppliers 30-90 days BEFORE shipping, which is BEFORE customer pays. If you grow 50% QoQ:

- Q1: produce 1,000 units ($140k COGS, pay supplier)
- Q2: sell Q1's 1,000 + produce 1,500 units ($210k COGS, pay supplier)
- Q3: sell Q2's 1,500 + produce 2,250 units ($315k COGS)

Cash demand grows faster than revenue. Each growth period eats cash.

Solution: secure inventory financing, extend supplier terms, get customer deposits, ship smaller batches.

## Yield loss

Contract manufacturers quote yield as 95%+. Reality for new products: 70-85%.

That 15% gap is pure cost. Model it. Improve it with engineering runs and CM coordination over first 3-6 production batches.

## Tooling / NRE

Non-recurring engineering: molds, custom tooling, certifications. $50k-$500k+ depending on complexity.

- Molds: $10-100k each, last 100k-500k units
- Certifications: FCC, CE, UL, each $10-50k
- PCB tooling: $5-20k

Amortize over expected unit volume. At 10k units, $100k tooling = $10/unit. At 100k units, $1/unit. Volume matters.

## Inventory risk

Inventory you can't sell is dead money. Causes:
- Forecasting too high
- Product updates (old version stranded)
- Seasonal miss
- Quality issues

Target: <60 days of inventory on hand. At high growth, slightly more. Liquidate stale inventory aggressively (discount, B-stock, liquidators).

## Revenue recognition

- Direct sales: revenue at ship (or delivery)
- Channel sales: at sell-through (usually revenue when channel sells, not when you sell to channel — unless terms allow)
- Subscriptions (hardware + service): hardware at ship, service over subscription period

Subscriptions transform hardware economics. $99 hardware + $10/mo service is a subscription business wearing hardware clothes.

## Benchmarks

| Metric | Range |
|--------|-------|
| Hardware GM | 30-50% |
| Hardware + software bundle GM | 50-70% |
| Return rate | <3% |
| Yield at maturity | 92-97% |
| Inventory turns/year | 4-6 |
| Days sales outstanding | 30-60 |
