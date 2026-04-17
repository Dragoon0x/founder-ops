# Mode: Finance

## Purpose

Model runway, evaluate pricing, understand unit economics. Not a CFO —
a founder's co-pilot for financial decisions.

## Submodes

### 1. Runway Modeling

```
Current cash: $[X]
Monthly burn: $[Y]
Monthly revenue: $[Z]
Net burn: $Y - $Z
Runway: Current cash / Net burn = [months]
```

Build three scenarios:

**Scenario A: Status quo**
[No changes — what's the runway?]

**Scenario B: Cut 20%**
[Specific cuts — what does runway look like?]

**Scenario C: Hit growth target**
[Revenue doubles in 6 months — what does runway look like?]

Output:
```
## Runway Analysis — [Date]

Current position: [X] months runway at current burn
Break-even point: $[Y] MRR (need [Z]% growth per month)
Red zone: [M] months out if no changes

Recommendations:
1. [Specific cut or growth target]
2. [Specific cut or growth target]
```

### 2. Pricing Experiments

Pricing has 3 levers:
- **Price point** (the number)
- **Packaging** (what's in each tier)
- **Positioning** (who it's FOR)

Most founders under-price by 50%. Run pricing experiments:

```
## Pricing Experiment

### Current state
- Plan: [name]
- Price: $[X]/month
- Conversion: [%]
- Churn: [%]

### Hypothesis
"If we [change], conversion will [direction] and revenue will [direction]"

### Variants to test
A: Current ($X)
B: +30% ($1.3X)
C: +50% ($1.5X) with added features
D: Annual commit discount

### Metrics to watch
- Conversion rate
- Revenue per visitor
- Churn (next 3 months)

### Kill condition
- If conversion drops >40%, revert
- If churn increases >20%, revert

### Duration
- 4 weeks minimum for statistical significance
```

### 3. Unit Economics

```
## Unit Economics — [Customer Segment]

### Revenue
- ARPU (monthly): $[X]
- Annual contract value: $[Y]
- Upsell/expansion: [%] per year

### Costs (per customer)
- COGS (hosting, APIs, support): $[X]/month
- Gross margin: [%]

### Acquisition
- CAC (blended): $[X]
- CAC by channel: [breakdown]
- Payback period: [months]

### Retention
- Monthly churn: [%]
- Net revenue retention: [%]
- LTV: $[X]

### The ratios that matter
- LTV:CAC = [X]:1 (target 3:1+)
- Payback < 12 months (target 6-9 for SaaS)
- Gross margin > 70% (for healthy SaaS)
```

### 4. Financial Red Flags

Watch for these:
| Signal | Meaning |
|--------|---------|
| Declining gross margin | Product is getting more expensive to deliver |
| CAC increasing faster than LTV | Unit economics breaking |
| Net revenue retention < 100% | Customers churning or downgrading |
| Payback period > 18 months | Too expensive to acquire at current pricing |
| Gross margin < 40% (for SaaS) | Pricing is too low or costs too high |

### 5. Pre-Fundraise Financial Prep

Before investor meetings, prepare:
- 18 months historical financials (monthly)
- 18 month forecast (monthly)
- Cohort retention chart
- CAC by channel chart
- ARR growth chart
- One-page financial summary
- Honest assessment of 2-3 risks

Never:
- Overstate TAM
- Project hockey-stick without explaining the mechanism
- Show only favorable metrics (investors will ask)
- Pretend the hard parts are solved

## Anti-Patterns

| Pattern | Problem | Fix |
|---------|---------|-----|
| Under-pricing for "product-market fit" | Reinforces wrong signal | Price to value, not affordability |
| Comparing to "market average" | Your customer doesn't care about average | Price to willingness to pay |
| Not tracking cohort metrics | Hides churn in aggregate growth | Always look at cohorts |
| Chasing revenue over unit economics | Scale breaks the model | Unit economics first, scale second |
