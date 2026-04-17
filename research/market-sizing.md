# Market sizing

## Purpose
Estimate TAM (Total Addressable Market), SAM (Serviceable Addressable Market),
and SOM (Serviceable Obtainable Market) credibly. Investors will check your math.

## TAM definitions (use bottom-up unless you can't)

### Top-down (industry analyst report)
"Gartner says the X market is $50B." Easy to write, hard to defend. Investors
discount this aggressively. Use only as a sanity check.

### Bottom-up (the credible one)
TAM = (# of potential customers) * (avg annual revenue per customer)

Example for a SaaS for dental practices:
- 200,000 dental practices in the US (ADA data)
- Avg practice spends ~$5k/year on practice management software
- TAM = 200,000 * $5,000 = $1B

This survives scrutiny because every input is checkable.

### Value-theoretic (the aggressive one)
TAM = total economic value created by solving the problem

Example: "We save dental practices 5 hours/week. Average dentist's time is
$200/hr. 5 * 50 weeks * $200 = $50k/year of value per practice. We capture 10%
= $5k. Times 200k practices = $1B."

Useful for new categories. Investors discount it ~50% because value capture is
hard.

## SAM (Serviceable Addressable Market)

The portion of TAM you can actually reach with your current product, GTM, and
geography.

Filters that shrink TAM into SAM:
- Geography (US-only, EU-only)
- Company size (10-500 employees)
- Tech requirement (must use Stripe)
- Vertical specialization (only B2B SaaS, not consumer)
- Buyer (only ops teams, not eng)

Be specific. "We target US-based dental practices with 2-15 chairs that already
use a digital scheduling tool" gives a defensible SAM number.

## SOM (Serviceable Obtainable Market)

Realistically achievable in the next 3-5 years given your sales motion.

Realistic SOM math:
- Top-of-funnel reachable annually = 10-20% of SAM (with sustained marketing)
- Conversion rate = your actual MQL-to-customer rate
- Stage-aware target market share: 0.5-2% in years 1-3, 5-10% in years 4-7
  (rare to exceed)

## Common errors

1. **Confusing SAM with TAM** in pitch decks. Investors read "TAM $50B" as
   "this person doesn't understand their market."
2. **Stacking categories** ("the marketing software market AND the sales software
   market AND the data infrastructure market"). Pick one, expand later.
3. **Using revenue as proxy for headcount-priced products**. If you charge per
   seat, your TAM is total seats * price, not total companies.
4. **Ignoring price elasticity**. If you 10x your price, your SAM shrinks
   dramatically.
5. **Static market**. TAM grows. Show the rate (CAGR) and source.

## What investors actually want to see

A 1-page market section with:
- Bottom-up TAM math (every number sourced)
- SAM with explicit filters
- 3-year SOM with assumptions
- 1 sentence on why this market grows
- 1 sentence on why now (timing)

If you can't do this in 1 page, you don't understand your market yet.
