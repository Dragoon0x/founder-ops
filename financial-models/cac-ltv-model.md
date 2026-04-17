# CAC / LTV Model

Unit economics is the discipline that separates companies that scale from companies that just get bigger.

## Definitions that actually work

### CAC (Customer Acquisition Cost)

CAC = (Sales + Marketing spend in period) / (new customers acquired in period)

**Important:** use fully-loaded S&M. Salaries, tools, ad spend, events, content. Not just ad spend. Most founders undercount by 40-60%.

**Blended CAC vs paid CAC:**
- Blended: total S&M / all new customers (including organic)
- Paid: paid S&M / customers from paid channels only

Blended lies when organic is a big chunk. Report both.

### LTV (Lifetime Value)

LTV = (ARPA × gross margin) / churn rate

Where ARPA = average revenue per account per year, gross margin as decimal, churn as annual gross churn rate.

**Example:** $12,000 ARPA × 80% GM / 10% churn = $96,000 LTV

### Payback period

Payback = CAC / (ARPA × gross margin / 12)

Months until a customer pays back their acquisition cost.

| Stage | Target payback |
|-------|---------------|
| Early SMB | < 12 months |
| Mid-market | < 18 months |
| Enterprise | < 24 months |
| Consumer | < 6 months |

## LTV:CAC ratio

Industry rule of thumb: 3:1 or better.

- < 1:1 — you lose money on every customer
- 1-2:1 — survival mode
- 2-3:1 — okay
- 3-5:1 — healthy
- > 5:1 — you're probably under-investing in growth

Above 5:1 sounds great but usually means you're leaving growth on the table. Press harder.

## Why the formulas lie

**Problem 1: LTV assumes steady-state churn.** Your early cohorts have short retention because the product was worse. Your newer cohorts haven't aged. Use cohorted LTV, not blended.

**Problem 2: CAC is a lagging indicator.** Last month's CAC tells you nothing about next month's. Model forward by channel.

**Problem 3: Gross margin drifts.** Infra costs rise, support costs rise, customer mix shifts. Re-measure quarterly.

**Problem 4: Expansion isn't in the base formula.** If you have 120% NRR, your real LTV is 2-3x the formula suggests. Use:

LTV (with expansion) = ARPA × GM / (churn - expansion rate)

If churn < expansion rate, LTV is infinite (in theory). In practice, cap it at 5-7 years.

## By channel

Model CAC by channel, not just blended:

| Channel | CAC | Payback | Scalable? |
|---------|-----|---------|-----------|
| SEO/content | Low | Fast | Slow to scale |
| Paid search | Medium | Medium | Yes, to a point |
| Paid social | Medium | Medium | Yes, with creative |
| Outbound sales | High | Slow | Yes, with hiring |
| Partnerships | Variable | Slow | Situational |
| Referrals | Very low | Fast | Limited |
| Events | High | Slow | Limited |
| PLG | Very low | Varies | Yes, at scale |

Cut channels where CAC > LTV × 0.33. Double down where CAC < LTV × 0.2.

## Cohort CAC payback chart

Plot cumulative revenue per cohort (y-axis) vs months since acquisition (x-axis). Overlay CAC as horizontal line.

Cohort crosses CAC line = payback reached. If cohort flattens below the line, you never paid back.

This single chart is the most honest view of unit economics you can build.
