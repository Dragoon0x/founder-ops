# Runway Waterfall Model

## Purpose
Model month-by-month cash balance with explicit burn, revenue, and hiring.
The most important number in a pre-profitability startup.

## The waterfall structure

Columns are months (24+ forward).
Rows are:
```
Starting Cash
+ Collections (from revenue and previous billings)
+ Financing (new rounds, debt, grants)
- People Costs (by role, with start dates)
- Hosting & Infrastructure
- Software & Tools
- Sales & Marketing (non-people)
- Professional Services (legal, accounting)
- Rent & Utilities
- Other
= Net Change
= Ending Cash
= Months of Runway (Ending Cash / Next 3 months avg burn)
```

## The critical distinction: Cash vs. P&L

A P&L shows revenue when earned. Cash flow shows money when it moves.

For a SaaS business with annual billings:
- Sell $120K annual contract on Jan 1.
- P&L: $10K/month recognized revenue.
- Cash: $120K collected in Jan (usually Feb after DSO).

Your runway depends on cash, not revenue.

## DSO (Days Sales Outstanding)

```
DSO = (Accounts Receivable / Revenue) × Days in Period
```

Typical DSO:
- Consumer SaaS (card-pay): 0–5 days
- SMB SaaS (annual contracts): 15–30 days
- Mid-market (quarterly or annual): 30–45 days
- Enterprise: 45–90 days

If DSO > 60 days, your cash position is worse than your P&L suggests.

## Burn reality check

Burn has three definitions. Use the right one:

1. **Gross burn** = Total cash out (all expenses).
2. **Net burn** = Gross burn minus revenue collected.
3. **Operating burn** = Net burn excluding one-time items.

For runway: use Net Burn, 3-month trailing average.

## The hiring impact

Every hire changes your burn. Model each hire with:
- Start date (not offer date)
- Fully-loaded monthly cost
- Ramp (especially for sales)

Don't lump hires into quarterly headcount counts. Monthly dates matter
because cash flows monthly.

## Scenarios

Build three:
1. **Base case**: plan you're executing
2. **Downside**: new ARR 30% lower, churn 50% higher, hiring delayed 1 month
3. **Severe downside**: new ARR 50% lower, hiring frozen, 10% RIF

Your runway in scenario 3 is your real safety net. If it's less than
12 months, you need to raise or cut.

## The 24-month rule

At all times, you should have either:
- 24 months of runway, OR
- A clear path to profitability within 24 months, OR
- An active raise closing in 6 months

If none of these are true, you're in runway risk. Act immediately:
- Cut non-critical spend this month.
- Pause hiring that isn't revenue-producing.
- Start raise conversations.

## Common mistakes

1. **Using revenue instead of cash collections.** You run out of cash,
   not revenue.
2. **Ignoring prepaid annual contracts.** They're cash today but
   liability tomorrow.
3. **Missing raise costs.** Banker fees, legal fees, accounting
   diligence can run $50–300K.
4. **Forgetting taxes.** State and payroll taxes hit.
5. **Static hiring in the model.** In reality, you'll miss some
   hires and over-hire in others. Use ranges.
6. **Not rolling 3-month average.** Single bad month looks like a cliff.

## What your runway tells you to do

| Runway | Action |
|--------|--------|
| > 24 months | Invest aggressively in growth |
| 18–24 months | Scale carefully, raise opportunistically |
| 12–18 months | Start planning raise, tighten hiring |
| 9–12 months | Actively raising, pause optional hires |
| 6–9 months | Bridge from insiders or plan major cut |
| < 6 months | Cut now, bridge now, sell now |

## Reporting

For yourself: monthly.
For the team: key metrics at monthly all-hands.
For the board: monthly or quarterly.

Always report burn with 3 numbers: current month, 3-month trailing avg,
and forward 3-month forecast.

## Time to build
- Simple version (cash in/out only): 2 hours
- Full model with scenarios: 10 hours
- Connected to revenue, hiring, P&L: 20+ hours
- Board-ready polish: +6 hours
