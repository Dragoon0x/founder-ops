# ARR / MRR

The core measure of SaaS revenue. Also the metric founders most frequently report wrong.

## The definition

**MRR (Monthly Recurring Revenue):** the normalized monthly value of all subscription contracts currently active.

**ARR (Annual Recurring Revenue):** MRR × 12.

Both are **run-rate** metrics. They represent what you would earn over the next month/year if nothing changed.

## What counts

- Monthly subscription: billed $500/mo, MRR = $500.
- Annual subscription: billed $6,000 upfront, MRR = $500, ARR = $6,000.
- Multi-year prepaid: billed $12,000 for 2 years, MRR = $500 (not $1,000 — only current month).

## What doesn't count

- **One-time fees:** setup, implementation, consulting. Not recurring = not MRR.
- **Overages:** usage above plan, unless it's predictable/recurring. Track separately.
- **Trial revenue:** until it converts, it's not in MRR.
- **Pending contracts:** signed but not started = not yet in MRR.
- **Services revenue:** professional services. Track as separate line.

## The four MRR movements

Every month, MRR moves via:

1. **New MRR:** MRR from new customers this month
2. **Expansion MRR:** MRR increase from existing customers (upsells, added seats)
3. **Contraction MRR:** MRR decrease from existing customers (downgrades)
4. **Churned MRR:** MRR from customers who canceled

Ending MRR = Starting MRR + New + Expansion - Contraction - Churned

Report all four separately. Blended growth hides structural issues.

## Net new ARR

Net new ARR (month or quarter) = New + Expansion - Contraction - Churned

This is the number that matters. Growing gross ARR by adding new logos while losing equal amounts to churn = zero net new ARR = company not growing.

## Common reporting mistakes

- **Committed ARR vs booked ARR:** committed includes signed-but-not-started. Use booked (currently live).
- **Run-rate revenue (actual monthly) vs ARR:** actual monthly includes services, overages, one-time. ARR is subscription only.
- **Pipeline as "potential ARR":** pipeline is not revenue. Until signed and live, it doesn't count.
- **Double counting expansion:** if a customer's new contract has a price increase, the increase is expansion MRR. The base is still the same MRR, not "new" MRR.

## Reporting cadence

- **Monthly:** ending MRR, four movements, sales team performance
- **Quarterly:** trailing 3-month net new ARR, cohort performance
- **Annually:** year-over-year growth rate, retention cohorts

## The honest view

When you report "$1M ARR" to the board, they will ask:
1. Is that GAAP-recognized? (Probably not if annual is billed upfront and you're reporting run-rate.)
2. Is that committed or active?
3. What's the NRR trend?
4. What's the gross retention?
5. What's the cohort curve?

Have answers ready. If you don't, your ARR number is theater.

## Benchmarks (ARR growth YoY)

| Stage | Good | Great | Best-in-class |
|-------|------|-------|---------------|
| <$1M | 5x | 10x | 15x+ |
| $1-10M | 2.5x | 3.5x | 4x+ |
| $10-50M | 1.8x | 2.3x | 2.8x+ |
| $50-100M | 1.5x | 1.9x | 2.2x+ |
| $100M+ | 1.3x | 1.6x | 1.9x+ |

T2D3 (triple-triple-double-double-double) is the classic benchmark: $1M → $3M → $9M → $18M → $36M → $72M in 5 years. Few hit it.
