# Cap Table Scenarios

Dilution is not a tax you pay once. It's compounding. Model it before each round.

## Baseline structure

| Holder | Shares | % |
|--------|--------|---|
| Founders (2) | 8,000,000 | 80% |
| Option pool | 1,500,000 | 15% |
| Angels (SAFE) | 500,000 | 5% |
| **Total** | **10,000,000** | **100%** |

At seed, this gets diluted.

## The pre-money / post-money math

If you raise $3M at $12M pre-money:

- Post-money = $12M + $3M = $15M
- New investor % = $3M / $15M = 20%
- Existing holders diluted: 80% × (1 - 20%) = 64% of post-money

## SAFE conversion (the trap)

SAFEs convert at the priced round. If you had $1M in SAFEs with $8M cap and raise at $12M pre-money:

- SAFE converts at $8M cap (lower of cap or round price)
- SAFE holders get: $1M / $8M = 12.5% of pre-money shares
- This happens BEFORE new round investors buy in

New post-money breakdown is materially different from what you'd calculate ignoring SAFE conversion. Run it through a tool or spreadsheet.

## Option pool refresh

VCs usually require an expanded option pool, calculated on POST-money basis but issued PRE-money (the "option pool shuffle").

If they want 15% post-money pool and current pool is 5%:

- Need: 15% × $15M = $2.25M worth of options
- Pre-money valuation effectively drops: founders absorb the dilution
- Real pre-money for founders ≈ $12M - $2.25M = $9.75M

This is a standard move. Negotiate the size (often can push from 15% to 10-12%) but accept the principle.

## Multi-round scenarios

Model to Series C. Assume:

| Round | Amount | Pre | Dilution |
|-------|--------|-----|----------|
| Seed | $3M | $12M | 20% |
| A | $10M | $30M | 25% |
| B | $25M | $80M | 24% |
| C | $60M | $250M | 19% |

Founder starting at 40% (after co-founder split) ends at:
- Post-seed: 32%
- Post-A: 24%
- Post-B: 18%
- Post-C: 14.6%

That's before option refreshes. With refreshes, could be 12% or lower.

Know this number before you start. A 12% outcome on a $500M exit is $60M. Fine. On a $50M exit it's $6M. Life-changing for most, but not "founder dream" money.

## Founder math at exit

At exit, liquidation preferences hit first. Then common.

| Scenario | $200M exit | $500M exit |
|----------|-----------|-----------|
| 1x non-part preferences, $100M raised | Common gets $100M | Common gets $400M |
| Founder @ 12% of common | $12M | $48M |

If you have participating preferred or higher multiples (rare in good rounds), math gets worse.

## Model the downside

- What if the next round is a down round at -30%?
- What if anti-dilution fires? (full ratchet vs weighted average)
- What if you need a bridge at unfavorable terms?

Run these. Keep the spreadsheet open during term sheet negotiations.

## Tools

- Carta / Pulley (source of truth)
- Ledgy (EU)
- Angellist dilution calculator (quick check)
- Custom Google Sheet for scenarios

Do not trust a deck you haven't modeled yourself.
