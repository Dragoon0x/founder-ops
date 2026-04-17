# Quick Ratio

A growth efficiency metric that captures whether gross expansion beats contraction.

## Formula

Quick Ratio = (New MRR + Expansion MRR) / (Churn MRR + Contraction MRR)

## Interpretation

| Quick Ratio | Verdict |
|-------------|---------|
| > 4 | Excellent |
| 2-4 | Good |
| 1-2 | Marginal |
| < 1 | Shrinking |

At Quick Ratio = 1, you're adding as much as you're losing. Flat. Anything less = contraction.

## Why it's useful

- Focuses on the four movements of MRR
- Doesn't double-count (unlike net new ARR)
- Shows if you're adding real growth or just masking churn

## Example

Month of April:
- New MRR: $80k
- Expansion MRR: $40k
- Churn MRR: $20k
- Contraction MRR: $10k

Quick Ratio = (80+40) / (20+10) = 120/30 = 4.0. Excellent.

## Decomposing

A Quick Ratio of 2.0 could mean:
- Healthy: new $100k, expansion $50k, churn $50k, contraction $25k
- Fragile: new $100k, expansion $200k, churn $100k, contraction $50k (expansion-heavy, churn-heavy)

Look at the four components, not just the ratio.

## Benchmarks by stage

| Stage | Target Quick Ratio |
|-------|-------------------|
| Seed | 3+ |
| Series A | 3-4 |
| Series B | 2-4 |
| Scale | 1.5-3 |

Drops at scale because churn grows in absolute terms with customer base.

## Action triggers

- Quick Ratio < 2 for 2+ months → investigate
- Quick Ratio < 1 → emergency mode, retention is broken
- Quick Ratio > 5 → possibly under-investing in sales (can you pour more fuel in?)
