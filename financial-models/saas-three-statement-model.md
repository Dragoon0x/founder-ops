# SaaS Three-Statement Model

## Purpose
Build a monthly model that connects P&L, cash flow, and the cap table.
At seed stage, you need this to forecast runway. At Series A, you need
it to survive diligence. At Series B, your CFO owns it.

## Structure (12 tabs in a spreadsheet)
1. **Assumptions** — every number that varies lives here
2. **Revenue** — new ARR, churn, expansion, by month
3. **COGS** — hosting, support, customer success
4. **People** — headcount plan with start dates and fully-loaded cost
5. **OpEx** — non-people costs by category
6. **P&L** — revenue, gross margin, opex, EBITDA
7. **Cash Flow** — collections vs billings, DSO, working capital
8. **Balance Sheet** — cash, AR, deferred revenue, equity
9. **Cap Table** — who owns what, per round
10. **Scenarios** — base, upside, downside with 3 toggles
11. **Charts** — for board decks
12. **Cover** — 10 KPIs at a glance

## The essential formulas

### Revenue
```
ARR[month] = ARR[month-1]
           + New ARR[month]
           - Churned ARR[month]
           + Expansion ARR[month]
           - Contraction ARR[month]

MRR[month] = ARR[month] / 12

Net New ARR[month] = New ARR + Expansion - Churn - Contraction

Gross Retention = 1 - (Churn ARR / Starting ARR)
Net Retention = (Starting ARR - Churn + Expansion) / Starting ARR
```

### Gross Margin
```
Revenue = Recognized revenue (not billings)
COGS = Hosting + Support + CS + Payment processing
Gross Margin = (Revenue - COGS) / Revenue

Target: 75%+ for SaaS by Series A
```

### Burn
```
Monthly Gross Burn = Total OpEx (including people)
Monthly Net Burn = Gross Burn - Revenue
Runway = Cash / Monthly Net Burn

(Use a rolling 3-month average for Net Burn in forecasts,
not the current month)
```

### Unit Economics
```
CAC = Sales & Marketing spend / New customers acquired (same period)
LTV = Average Contract Value × Gross Margin × (1 / Monthly Churn)
CAC Payback = CAC / (ACV × Gross Margin / 12)

Target:
- LTV / CAC > 3x
- CAC Payback < 18 months (SaaS), < 12 months (SMB)
```

### Hiring Ties to Revenue
```
Sales Capacity = Number of AEs × Avg Quota × Productive Ramp %
Required AEs = Target New ARR / Avg Quota Attainment

Don't hire AEs ahead of pipeline.
Don't hire engineers ahead of revenue that justifies them.
```

## The inputs that actually matter

Rank these by impact on runway, from highest to lowest:

1. **Monthly new ARR** (most sensitive)
2. **Monthly churn rate**
3. **Fully-loaded cost per hire**
4. **Hiring pace (months per hire)**
5. **Gross margin**
6. **Collections timing (DSO)**
7. **Tooling spend per employee**

If you tune your model, tune these first. Fluff costs like office or
legal are 3rd-order.

## Common mistakes

1. **Using billings as revenue.** Revenue is recognized monthly.
   Billings is cash. They diverge in annual-billing SaaS.
2. **Forgetting fully-loaded cost.** A $150K salary is actually
   $195K with benefits, equipment, tooling, and real estate.
3. **Optimistic ramp times.** New AEs take 3–6 months to be
   productive. New engineers take 2–4 months.
4. **Straight-line churn.** Real churn is lumpy and seasonal.
   Model monthly, not annualized.
5. **No scenario toggles.** One-case models are wish-casting.
   Three-case models are forecasts.
6. **Not connecting tabs.** If the P&L doesn't flow to the cash flow,
   the model is broken.
7. **No hire dates, just quarterly headcount.** Dates matter because
   costs matter by month.

## Output targets by stage

| Stage | Monthly accuracy | Forward months | Detail |
|-------|------------------|----------------|--------|
| Pre-seed | ±30% | 12 | Simple |
| Seed | ±20% | 18 | Medium |
| Series A | ±15% | 24 | Full |
| Series B | ±10% | 36 | Full + board version |

## What investors will stress-test

- Can you defend each number in Assumptions?
- What happens if new ARR drops 30%?
- What happens if churn doubles?
- What's the runway at 0% new ARR?
- What's the worst month in the plan?
- Does the hiring plan match the revenue plan?

If any answer is "I don't know," fix the model before the meeting.

## Time to build
- First version: 8–12 hours
- Quarterly refresh: 2 hours
- Investor-ready polish: add another 6 hours

Never let a board member see a model you haven't stress-tested yourself.
