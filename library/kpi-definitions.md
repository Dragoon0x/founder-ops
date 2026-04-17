# KPI Definitions and Formulas

Standard definitions for the metrics that matter. When team members
disagree on a number, it's almost always a definition mismatch.

## Revenue Metrics

### MRR (Monthly Recurring Revenue)
```
MRR = Sum of all monthly subscription payments active in period
```
- Excludes one-time fees, professional services
- Includes only committed recurring revenue
- Annual contracts: divide by 12 to attribute monthly

### ARR (Annual Recurring Revenue)
```
ARR = MRR × 12
```
Or:
```
ARR = Sum of annualized active subscriptions
```
- Same metric, different scale
- Public companies typically report ARR

### New MRR / Expansion MRR / Contraction MRR / Churned MRR
```
Net New MRR = New MRR + Expansion MRR - Contraction MRR - Churned MRR
```
- New: from new customers
- Expansion: existing customers paying more (upgrade, additional seats)
- Contraction: existing customers paying less (downgrade)
- Churned: customers who canceled

### NDR (Net Dollar Retention) / NRR (Net Revenue Retention)
```
NDR = (Starting MRR + Expansion - Contraction - Churn) / Starting MRR
```
For a cohort over a period (typically 12 months).
- 100% = customers retained at original spend
- 110%+ = customers expanding
- <100% = customers shrinking on net

### GDR (Gross Dollar Retention) / GRR (Gross Revenue Retention)
```
GDR = (Starting MRR - Contraction - Churn) / Starting MRR
```
- Same as NDR but excludes expansion
- Always ≤ 100%
- Healthy SaaS: 90%+

## Customer Metrics

### Customer Acquisition Cost (CAC)
```
CAC = Total Sales & Marketing Spend in period / New Customers in period
```
Variants:
- **Blended CAC**: Includes all S&M spend
- **Paid CAC**: Only includes paid acquisition spend
- **Organic CAC**: Excludes paid acquisition (can be misleading)
- **Fully-loaded CAC**: Includes salaries, tools, content costs

### Customer Lifetime Value (LTV)
```
LTV = ARPU × Gross Margin × (1 / Monthly Churn)
```

Example:
- ARPU = $100/month
- Gross Margin = 80%
- Monthly Churn = 5%
- LTV = $100 × 0.8 × (1/0.05) = $1,600

For longer-horizon cohorts:
```
LTV = Σ (Period Revenue × Gross Margin × Period Retention)
```

### LTV:CAC Ratio
```
LTV:CAC = LTV / CAC
```
- 3:1+ = healthy
- 5:1+ = excellent
- <3:1 = unit economics broken

### CAC Payback Period
```
CAC Payback = CAC / (Monthly ARPU × Gross Margin)
```
- <12 months = healthy SaaS
- 6-9 months = excellent
- >18 months = concerning

### Customer Churn (Logo Churn)
```
Monthly Logo Churn = Customers Lost in Month / Customers at Start of Month
Annual Logo Churn = 1 - (1 - Monthly Churn)^12
```
- 5% monthly = 46% annual
- 2% monthly = 22% annual
- 1% monthly = 11% annual

### Revenue Churn
```
Monthly Revenue Churn = MRR Lost in Month / MRR at Start of Month
```
Different from logo churn — high-revenue customer losses weight more.

## Engagement Metrics

### Daily Active Users (DAU) / Weekly (WAU) / Monthly (MAU)
- Define "active" precisely (logged in? performed action?)
- Stick to your definition — don't change it
- Track unique users in period

### Stickiness
```
Stickiness = DAU / MAU
```
- 50%+ = daily habit
- 25-50% = frequent
- <10% = occasional

### Engagement Rate
```
Engagement Rate = Users Performing Core Action / Total Users
```
- Define "core action" precisely (e.g., "sent a message," "completed a task")
- Track over time

## Sales Metrics

### Pipeline Coverage
```
Pipeline Coverage = Total Pipeline Value / Quota
```
- 3x = minimum healthy
- 4-5x = ideal
- <3x = not enough deals

### Win Rate
```
Win Rate = Closed-Won Deals / Total Closed Deals
```
By stage:
- Discovery → Demo: 40-60%
- Demo → Proposal: 30-50%
- Proposal → Close: 50-70%
- End-to-end: 7-25% depending on segment

### Average Sales Cycle
```
Avg Sales Cycle = Total Days from Open to Close / Closed Deals
```
By segment:
- Self-serve: hours/days
- SMB: 7-30 days
- Mid-market: 30-90 days
- Enterprise: 90-180 days

### Average Contract Value (ACV)
```
ACV = Total Annual Contract Value / Number of Contracts
```
For multi-year contracts: divide TCV by years.

### Total Contract Value (TCV)
```
TCV = ACV × Contract Length in Years
```

### Magic Number (Sales Efficiency)
```
Magic Number = (Q4 ARR - Q3 ARR) × 4 / Q3 Sales & Marketing Spend
```
- 0.75+ = invest more in GTM
- 0.5-0.75 = optimize before scaling
- <0.5 = something's broken

## Marketing Metrics

### Marketing Qualified Lead (MQL)
- Define explicitly (e.g., "downloaded whitepaper + matches ICP firmographic")
- Track conversion: MQL → SQL → Opportunity → Closed-Won

### Sales Qualified Lead (SQL)
- Sales has accepted and started working
- Different definitions per company — be consistent

### Cost per Lead (CPL)
```
CPL = Marketing Spend / Leads Generated
```
- Vary widely by channel
- Track LTV from channel, not just CPL

### Conversion Rate (Marketing)
```
Visitor → Signup: 2-5%
Signup → Activated: 30-60%
Activated → Paid: 5-30%
```

## Product Metrics

### Time to First Value
```
Time from signup to "core action" completion
```
- B2B SaaS: <14 days for SMB, <30 days for enterprise
- Consumer: should be in first session

### Activation Rate
```
Activation Rate = Activated Users / Signups
```
Define "activated" precisely (e.g., "completed onboarding + used core feature within 7 days")

### Feature Adoption
```
Adoption Rate = Users of Feature in 90 days / Total MAU
```
- 25%+ = healthy adoption for new feature
- <10% after 6 months = consider deprecation

### Net Promoter Score (NPS)
```
NPS = % Promoters (9-10) - % Detractors (0-6)
```
Range: -100 to +100
- Above 50 = excellent
- 30-50 = good
- 0-30 = ok
- Below 0 = bad

### Customer Satisfaction (CSAT)
```
CSAT = (Number of 4-5 star ratings / Total ratings) × 100
```
- 90%+ = great
- 75-90% = good
- <75% = problem

## Financial Metrics

### Gross Margin
```
Gross Margin = (Revenue - COGS) / Revenue
```
COGS for SaaS includes:
- Hosting / infrastructure
- Third-party APIs and data
- Customer support costs
- Customer success (sometimes)
- Payment processing fees

### Burn Rate
```
Net Burn = Monthly Cash Out - Monthly Cash In
Gross Burn = Total Monthly Expenses (ignoring revenue)
```

### Burn Multiple (Bessemer)
```
Burn Multiple = Net Burn / Net New ARR
```
- <1x = best
- 1-1.5x = great
- 1.5-2x = ok
- >2x = inefficient

### Runway
```
Runway (months) = Cash on Hand / Monthly Net Burn
```

### Rule of 40
```
Rule of 40 = Revenue Growth Rate (%) + Profit Margin (%)
```
- 40%+ = healthy SaaS at scale
- Common at $50M+ ARR

### Quick Ratio (SaaS)
```
Quick Ratio = (New MRR + Expansion MRR) / (Contraction MRR + Churned MRR)
```
- 4+ = excellent
- 2-4 = good
- <2 = struggling

## Common Definition Mistakes

| Mistake | Fix |
|---------|-----|
| Counting non-recurring revenue in MRR | Strict definition |
| Different "active user" defs across teams | Single definition, document it |
| Including expansion in churn calc | Separate them |
| Mixing logo and revenue churn | Report both, label clearly |
| Counting MQLs that don't match ICP | Tighter definition |
| Reporting blended CAC when paid CAC matters | Be explicit which |
| Using marketing-attribution-only LTV | Include retention truth |
