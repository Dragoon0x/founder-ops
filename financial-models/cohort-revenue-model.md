# Cohort Revenue Model

Top-down revenue forecasts are founder theater. Cohort models are honest.

## The structure

Each row = a monthly cohort (when customers were acquired).
Each column = months since acquisition.

| Cohort | M0 | M1 | M2 | M3 | M6 | M12 | M24 |
|--------|-----|-----|-----|-----|-----|------|------|
| Jan 2025 | $10k | $9.5k | $9.2k | $9k | $8.5k | $8k | $7.5k |
| Feb 2025 | $12k | $11.5k | $11.2k | $11k | ... | ... | ... |

Each cell = revenue from that cohort in that month.

## Retention curves

Stack cohorts on top of each other. You want:

- Early months: retention curve trends down (expected)
- Later months: curve flattens (stable base)
- Best case: curve bends UP (expansion revenue exceeds churn)

A flat-but-high curve is PMF. A curve that keeps dropping = no PMF.

## Forecasting new revenue

For each future month:
1. Forecast new cohort size (new logos × ACV)
2. Apply retention curve from historical data
3. Apply expansion curve from historical data
4. Sum all active cohorts = total MRR for that month

This is bottom-up. It will diverge from your top-down forecast. If bottom-up is lower, trust it.

## Key questions the model answers

- When do we hit $1M ARR? $10M ARR?
- What cohort retention rate do we need to hit plan?
- If churn increases 2 points, what does ARR look like in 24 months?
- How much new logo growth do we need if retention stays flat?

## Common mistakes

- Using a single blended retention rate instead of cohort curves
- Ignoring month-0 churn (the "did they ever actually use it" drop)
- Not separating SMB cohorts from enterprise cohorts
- Assuming new cohorts will retain as well as old ones (they often retain better OR worse — never assume flat)
- Forgetting to model the "empty cohort" months when you just didn't acquire

## Advanced: cohort GM

Overlay gross margin per cohort. Older cohorts often have worse GM because they're on legacy pricing. Or better GM because they're cheap to serve.

The answer matters for resource allocation. Your CS team's time should flow to cohorts with the highest expansion potential, not the biggest absolute revenue.
