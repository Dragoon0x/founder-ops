# Pilot integration

## Why this matters
Once you're past pre-seed, you need GAAP-compliant books. Pilot (or Bench, or
ScaleFactor, or your in-house controller) produces the monthly close. Founder-ops
reads the closed books to compute SaaS-specific metrics that don't appear on the
P&L.

## What to wire

1. Pilot doesn't have a public API as of this writing. Use the monthly close PDFs
   + the Excel exports they email.
2. Drop monthly closes into `data/pilot/closes/{YYYY-MM}.xlsx`.
3. Run `node scripts/pilot-parse.mjs` after each close.

## Metrics derived from the close

- **Revenue (GAAP)** — recognized revenue, not bookings, not cash
- **Gross profit** — revenue minus COGS (hosting, support, third-party fees)
- **Gross margin %** — should be 70-85% for SaaS, 40-60% for services-heavy
- **CAC** — sales + marketing spend / new customers in same period (lagging)
- **CAC payback** — CAC / (ARR per customer * gross margin / 12) months
- **LTV** — gross profit per customer * (1 / monthly churn rate)
- **LTV/CAC** — should be >3 to be sustainable; >5 is great
- **Magic Number** — net new ARR / sales+marketing spend, by quarter; >0.7 = invest more
- **Rule of 40** — growth % + EBITDA margin % >= 40

## Bookings vs revenue vs cash

Founder-ops always shows all three because they're all real and they're all
different:
- **Bookings** = signed contracts (forward-looking)
- **Revenue** = recognized per GAAP (current)
- **Cash** = received money (lagging)

For an annual contract signed today: bookings = $120k, revenue this month = $10k,
cash = $120k (if billed annually upfront). Each tells you a different thing about
the business.

## Common errors found in monthly closes

Founder-ops runs basic sanity checks against the close and flags:
- Revenue jumps >20% MoM unexplained
- Negative cash adjustments (timing or error)
- COGS that don't track revenue (margin drift)
- Operating expenses without P&L line item assignment
- Payroll variance >5% MoM (reorg, missed bonus accrual)

Catches data quality issues before the board sees them.
