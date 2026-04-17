# Marketplace Benchmarks

Two-sided marketplaces (supply + demand) operate on different math than SaaS.
Take rate, GMV growth, cohort retention, and the chicken-and-egg problem
dominate decisions.

## Take Rate by Marketplace Type

| Marketplace Type | Take Rate Range | Examples |
|------------------|-----------------|----------|
| Travel / lodging | 10-20% | Airbnb (~14%), Booking.com (~15%) |
| Food delivery | 15-30% | DoorDash (~13% restaurant + delivery fee) |
| Rideshare | 20-30% | Uber (~25%), Lyft (~26%) |
| Freelance services | 10-25% | Upwork (~13% + contract fees) |
| Goods | 5-15% | Etsy (~6.5% + transaction + listing) |
| Real estate | 1-5% | Compass, Zillow Premier |
| B2B services | 10-20% | ServiceTitan, Faire |
| Vertical labor | 15-30% | Toptal, Wonolo |
| Education | 30-50% | Udemy (50% if instructor brings student) |
| Crypto exchanges | 0.1-0.5% | Coinbase, Binance (volume-based) |

**Pricing constraint:** As take rate climbs, supply incentive to bypass
the marketplace climbs faster. >25% is hard to defend long-term.

## GMV Growth Benchmarks

| Stage | Annual GMV Growth |
|-------|-------------------|
| Pre-PMF (<$1M GMV) | 300%+ to be venture-fundable |
| Early ($1M-$10M) | 200-400% |
| Growth ($10M-$100M) | 100-200% |
| Scale ($100M-$1B) | 50-100% |
| Mature ($1B+) | 20-40% |

## Liquidity Metrics

**Liquidity** = the % of supply that gets matched with demand within a target time window.

| Marketplace Type | Healthy Liquidity |
|------------------|-------------------|
| Rideshare | 90%+ within 5 minutes |
| Food delivery | 95%+ within 1 hour |
| Lodging | 60%+ within booking window |
| Freelance | 50%+ within 7 days |
| Goods | 30%+ within 90 days |

Liquidity matters more than total supply or demand. A marketplace with
high liquidity in 1 city beats one with mediocre liquidity in 50 cities.

## Cohort Retention Benchmarks

For consumer marketplaces (e.g., Airbnb, DoorDash):

| Month from first transaction | % of cohort still transacting |
|-----------------------------|------------------------------|
| Month 1 | 100% (definition) |
| Month 3 | 30-50% |
| Month 6 | 20-35% |
| Month 12 | 15-25% |
| Month 24 | 10-20% |

The "smile curve" — retention curve dips then stabilizes — is the gold standard.
Pure decline = dying marketplace.

## Two-Sided Health

For each side, track:

**Supply side:**
- Active suppliers per period
- Earnings per active supplier
- Supplier churn (left platform in last X period)
- Time-to-first-transaction (new supplier)

**Demand side:**
- Active buyers per period
- GMV per active buyer
- Buyer churn
- Buyer→repeat-buyer conversion rate

**Chicken-and-egg test:** Could you survive a 30% drop on either side?
- If supply drops 30%, does demand churn? (Probably yes)
- If demand drops 30%, does supply leave? (Probably yes)
The asymmetry tells you which side to over-invest in.

## Network Effects Strength (a16z framework)

Score 1-5 on each:
1. **Quality of matches** — Does more supply make matches better, not just available?
2. **Asymptotes** — At what point does adding more supply stop adding value?
3. **Cross-side network effects** — Does adding supply attract demand and vice versa?
4. **Same-side effects** — Do users on one side benefit from more users on the same side?
5. **Disintermediation risk** — Can buyers and sellers transact off-platform after meeting?

If you score below 15/25, you're not really a marketplace — you're a directory.

## Unit Economics

```
Contribution Margin = Net Revenue per transaction
                    - Variable costs per transaction
                    - Variable acquisition cost per transaction

Healthy CM/GMV ratio: 5-10% (after take rate, payments, fraud, support)
```

## Acquisition CAC

| Marketplace | CAC per side |
|-------------|-------------|
| Local services | $20-100 |
| Freelance platform | $50-300 |
| Vertical labor | $100-500 |
| B2B marketplace | $500-5,000 |
| Enterprise marketplace | $5,000-50,000 |

LTV:CAC target on both sides: 3:1+, but for marketplace economics LTV must
include the value of the OTHER SIDE this user creates (network value).

## Marketplace Headcount Ratios

At $50M+ GMV:

| Function | % of total |
|----------|-----------|
| Engineering | 30-40% |
| Operations (per geography) | 15-25% |
| Trust & Safety | 8-12% |
| Marketing | 8-12% |
| Sales (B2B side) | 5-15% |
| Customer Support | 8-12% |
| G&A | 8-10% |

Trust & Safety is a major delta vs SaaS. If you don't have a T&S function,
you're one fraud event from a PR crisis.
