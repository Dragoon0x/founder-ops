# Unit Economics Model

## Purpose
Calculate LTV, CAC, and payback at the customer segment level.
If you only have one number for each, your model is wrong.

## The formulas

### CAC
```
CAC = (Sales Spend + Marketing Spend) / New Customers (same period)
```

Nuances:
- **Blended CAC** uses all sales+marketing. Useful for cash planning.
- **Paid CAC** uses only paid channels. Useful for channel decisions.
- **Fully-loaded CAC** includes sales comp, marketing headcount, tooling,
  customer success onboarding. Use this for LTV:CAC analysis.

### LTV

Choice of formula depends on your model:

**For subscription businesses:**
```
LTV = ARPU × Gross Margin % × (1 / Monthly Churn Rate)
```

Example: $100 ARPU × 75% GM × (1 / 2% churn) = $100 × 0.75 × 50 = $3,750

**For contract-based businesses:**
```
LTV = ACV × Gross Margin % × Average Contract Length (years) × (1 + Net Revenue Retention Growth)
```

**Refined LTV (using actual data):**
```
LTV = Sum of (Cohort Revenue × GM) over actual customer lifetime
```

Use the refined version once you have 18+ months of cohort data.

### Payback Period
```
CAC Payback = CAC / (ACV × Gross Margin / 12)

= Months to recover CAC from gross profit
```

### Targets by business type

| Business | LTV:CAC | CAC Payback | Net Retention |
|----------|---------|-------------|---------------|
| SMB SaaS | 3x+ | < 12 mo | 100%+ |
| Mid-market SaaS | 3x+ | < 18 mo | 110%+ |
| Enterprise SaaS | 5x+ | < 24 mo | 120%+ |
| Consumer subscription | 3x+ | < 6 mo | N/A (cohort) |
| Marketplace | 4x+ | < 12 mo | 100%+ |
| Transactional | 3x+ | < 3 mo | N/A |

## Segmenting

Calculate all three metrics for at least:
- By acquisition channel (organic, paid search, outbound, referral)
- By customer segment (SMB, Mid-market, Enterprise)
- By product tier (Starter, Pro, Business)
- By cohort (monthly acquisition cohort)

If any segment has LTV:CAC < 1x, you're buying unprofitable customers
there. Stop or fix.

## Common mistakes

1. **Using revenue instead of gross profit in LTV.** Revenue isn't LTV.
2. **Ignoring churn compounding.** If annual churn is 24%, monthly is
   NOT 2%. Use actual monthly churn.
3. **Blended CAC hides problems.** Organic CAC is often near zero;
   paid CAC is often 4x higher. Your blended number lies.
4. **Annual contracts at monthly churn rates.** If you bill annually,
   your monthly churn is closer to 1/12 of annual. Don't double-count.
5. **Not including sales comp in CAC.** Fully-loaded or the math lies.
6. **Counting expansion in LTV without counting the time to expand.**
   Expansion in year 3 is worth less than expansion in year 1.

## What your unit econ should tell you

- Which channels to double down on (lowest CAC with adequate LTV).
- Which customer segments to pursue (highest LTV:CAC).
- Whether you can afford a VP Sales (can you pay their cost from margin?).
- Whether to raise a round (if payback > 24 months and you need to scale,
  you need cash).
- Whether to cut unprofitable customers (segments below 1x LTV:CAC
  that you can't fix).

## Reporting cadence
- Monthly: CAC and payback by channel
- Quarterly: Full LTV:CAC by segment
- Annually: Retrospective on actual vs model

## Time to build
- Simple version: 3 hours with 6 months of data
- Full segmented version: 12 hours with clean data
- Ongoing maintenance: 1 hour/month if reporting is automated
