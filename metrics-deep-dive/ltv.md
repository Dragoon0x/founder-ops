# LTV (Lifetime Value)

LTV is the most commonly misstated metric in startup land. Here's the honest version.

## The basic formula

LTV = ARPU × gross margin / churn rate

Where:
- ARPU = average revenue per user (annual)
- Gross margin as decimal (e.g., 0.75)
- Churn rate as annual decimal (e.g., 0.1 = 10%)

Example: $1,200 × 0.75 / 0.1 = $9,000 LTV.

## Why this formula lies

### Problem 1: churn isn't constant

Early cohorts churn fast (30-50% in month 1 for consumer, 10-30% for SaaS). Late cohorts churn slow. A single rate averages these and hides structure.

**Fix:** cohorted LTV. Track each cohort's cumulative revenue over time. When the curve flattens, extrapolate.

### Problem 2: LTV assumes no expansion

If you have 120% NRR, your real LTV is much higher than formula suggests.

**Fix:** use net dollar retention in the formula:

LTV (with expansion) = ARPU × GM / (churn - expansion rate)

If churn < expansion rate, LTV → infinity (theoretically). In practice, cap at 5-7 years.

### Problem 3: ARPU is not static

Prices change. Mix shifts. New products launch. Using current ARPU × current churn projects current cohort dynamics forward, ignoring how things evolve.

**Fix:** use cohort-specific ARPU and churn, not blended.

### Problem 4: gross margin drifts

Infra costs change. Support load changes. New customer mix has different COGS. Using current GM assumes it holds.

**Fix:** re-measure GM annually. Sensitivity-test LTV at ±5% GM.

## The honest LTV formulation

Best version:

LTV = Σ (revenue per period × retention probability × gross margin), over lifetime

Where retention probability comes from cohort data, not a single rate.

Practical approach:
1. Build cohort revenue table (months 0, 1, 2 … 36)
2. For each cohort, compute cumulative revenue × GM
3. Extrapolate tail using curve fit (exponential decay typical)
4. Cap at reasonable lifetime (5-7 years)

## LTV for forecasting vs valuation

- **Forecasting:** use conservative LTV (fresh cohorts, steady-state churn)
- **Valuation / investor deck:** use LTV with expansion if NRR > 100% (defensible)
- **Unit economics health:** compare LTV to CAC with same conservatism

## Benchmarks

LTV alone means nothing. LTV:CAC matters.

- <1:1 — losing money per customer
- 1-2:1 — survival
- 3:1 — healthy
- 5:1+ — strong (possibly under-investing in growth)

## Cohort-based LTV by vertical (rough)

| Vertical | Typical LTV |
|----------|-------------|
| SaaS SMB | $3k-15k |
| SaaS mid-market | $25k-100k |
| SaaS enterprise | $150k-500k+ |
| Consumer subscription | $50-500 |
| Consumer marketplace (buyer) | $100-1000 |

Use these as sanity checks. If you're claiming $20k LTV for SMB SaaS, you need receipts.
