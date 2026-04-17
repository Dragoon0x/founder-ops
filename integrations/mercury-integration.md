# Mercury integration

## Why this matters
Cash is the only metric that ends companies. Founder-ops watches Mercury as the
ground truth on runway, burn rate, and cash position. It computes runway with
multiple methodologies (you'll need them all for different audiences).

## Signals tracked

| Signal | Definition | Cadence |
|---|---|---|
| Cash on hand | All Mercury accounts + treasury | daily |
| Net burn (last 30d) | Cash out - cash in, last 30d | daily |
| Net burn (last 90d trailing) | smoother for runway calc | daily |
| Gross burn | Cash out only, last 30d | daily |
| Runway (months) | Cash / 90d-trailing-net-burn | daily |
| Runway (months, gross) | Cash / 90d-trailing-gross-burn | daily |
| AR aging | Outstanding receivables by bucket | weekly |
| AP aging | Outstanding payables by bucket | weekly |
| Largest outflows last 30d | Top 10 by amount | weekly |

## What to wire

1. Mercury API key (Settings -> API). Read-only.
2. Set `MERCURY_API_KEY` in `.env`.
3. Run `node scripts/mercury-pull.mjs` daily at 06:00 local.
4. Outputs: `data/mercury/balances.json`, `data/mercury/transactions.json`.

## Runway methodologies (report all three)

1. **Trailing net burn** — Cash / (avg net burn last 90d). Most common.
2. **Forward burn** — Cash / (planned burn from forecast). Optimistic.
3. **Worst-case burn** — Cash / (gross burn at current run rate, no new revenue).
   The number that should not freak you out.

If gap between #1 and #3 is >6 months, your business depends on the next quarter
of sales coming in. Plan for the case where it doesn't.

## Burn categorization

Founder-ops auto-categorizes outflows into:
- Payroll + contractors (typically 60-75% at seed-stage SaaS)
- Cloud + tooling (typically 5-15%)
- Marketing + sales tools (typically 5-15%)
- Office + operations (typically 2-10%)
- Legal + accounting (typically 2-5%)
- Other

Categories that exceed range get flagged. Most common warning: tooling sprawl
(too many SaaS subscriptions). Founder-ops surfaces the top 20 SaaS line items
quarterly for trim review.

## Alerts

| Trigger | Alert |
|---|---|
| Runway <12 months | yellow — start fundraise prep |
| Runway <9 months | orange — fundraise mode |
| Runway <6 months | red — bridge / cut decisions now |
| Single outflow >5% of cash | review needed |
| Burn up >20% MoM unexplained | investigate |
| AR >30d aging >$50k | collection escalation |

## Defensive notes

- Runway is not a single number. It's a range with assumptions. Always show the
  assumption set to investors and the board.
- Don't include unfunded commitments (signed but unfunded SAFEs/notes) in cash.
- Do include treasury yield in cash-in if material.
- Severance reserves should be carved out of usable cash for layoff modeling.
