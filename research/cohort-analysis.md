# Cohort analysis

## Purpose
Cohort analysis reveals whether your product is getting better or worse over
time. A single retention number is meaningless without cohorts.

## The basic cohort table

Group users by month of signup (or first paid event). Track % still active in
month 1, 2, 3, ... 12.

Example:
```
Cohort   M0    M1    M2    M3    M6    M12
Jan-25   100%  60%   45%   38%   30%   25%
Feb-25   100%  62%   48%   40%   33%   --
Mar-25   100%  68%   55%   48%   38%   --
Apr-25   100%  72%   60%   --    --    --
May-25   100%  75%   --    --    --    --
```

What this tells you: retention is improving cohort-over-cohort. The product is
getting better at keeping users.

## Two retention curve shapes you must distinguish

1. **Smiling curve** — drops then plateaus. The plateau height is your
   "core user" retention. Healthy products plateau at 30-60% (B2B SaaS), 5-25%
   (consumer subscription), 1-10% (consumer free).
2. **Sliding curve** — keeps falling, never plateaus. This is a leaky bucket.
   Growth from acquisition will eventually fail to keep up.

If your curve doesn't plateau, you don't have product-market fit yet, regardless
of what your growth chart says.

## Plateau benchmarks (rough)

| Category | M3 plateau | Notes |
|---|---|---|
| B2B SaaS (mid-market) | 80-95% | High plateau expected |
| B2B SaaS (SMB) | 50-70% | Churn higher; activation matters |
| Consumer subscription | 25-50% | Free trial conversion + retention |
| Consumer free (social) | 20-40% | Heavily product-dependent |
| Marketplace | 30-50% | Liquidity moves the needle |

## Cohort segmentation

Run cohorts separately by:
- Acquisition channel (organic vs paid vs referral)
- ICP fit score (high-fit vs low-fit cohorts often look like different products)
- Plan (free vs paid, SMB vs enterprise)
- Activation status (activated vs not in first 7 days)

The activated cohort should retain ~3x better than non-activated. If the gap is
smaller, your activation event is wrong.

## Common cohort errors

1. **Showing only revenue retention** — hides logo loss. Show both.
2. **Truncating cohorts at the cohort length** — looks like all cohorts
   eventually go to zero (they don't; you just don't have data yet).
3. **Mixing cohort definitions** — month-of-signup vs month-of-first-paid look
   very different. Pick one and stick with it.
4. **Ignoring resurrection** — users who churned and came back. Track separately.
5. **Calling MoM retention "monthly active" without defining active** — define
   active explicitly per product.

## What to do with the data

- If recent cohorts retain better than old ones: you're shipping wins. Continue.
- If recent cohorts retain worse: regression. Roll back recent UX changes,
  audit onboarding, check support volume.
- If cohorts stable but plateau is below benchmark: product is consistent but
  weak. Onboarding work + activation work needed.
- If plateau differs sharply by channel: channel is poisoning the cohort. Cut
  the channel or fix the targeting.
