# Reference: Startup Metrics Glossary

## Revenue Metrics

### MRR (Monthly Recurring Revenue)
The predictable, recurring revenue normalized to a monthly basis.
- **New MRR:** From new customers
- **Expansion MRR:** Existing customers paying more (upgrades, seat expansion)
- **Contraction MRR:** Existing customers paying less (downgrades)
- **Churn MRR:** From customers who left
- **Net New MRR:** New + Expansion - Contraction - Churn

### ARR (Annual Recurring Revenue)
MRR × 12, OR sum of annual contract values for annual subscriptions.

### ACV (Annual Contract Value)
Average annualized value of a single customer contract.

### TCV (Total Contract Value)
ACV × contract length (in years). Includes one-time fees.

### ARPU (Average Revenue Per User)
Total revenue / number of customers, monthly.

### Run Rate
Current MRR × 12 (annualized assuming nothing changes).

## Growth Metrics

### Growth Rate (MoM)
(This month MRR - Last month MRR) / Last month MRR

### Growth Rate (YoY)
(This year ARR - Last year ARR) / Last year ARR

### CMGR (Compound Monthly Growth Rate)
((Current month / Start month)^(1/N months)) - 1
Used to project growth.

### T2D3 (Triple, Triple, Double, Double, Double)
Salesforce-era benchmark: 3x ARR years 1-2, 2x ARR years 3-5.

### Magic Number
Net new ARR / Sales & marketing spend (efficiency of growth investment)
- Magic > 1.5: Press accelerator
- Magic 0.75-1.5: Healthy
- Magic < 0.75: Slow down

## Retention Metrics

### Churn Rate
Customers lost / total customers (monthly or annual).
- Logo churn (customer count): Lost customers / total customers
- Revenue churn: Lost revenue / total revenue

### Net Revenue Retention (NRR)
(MRR at start of period - Churn + Expansion) / MRR at start of period
- NRR > 100%: Existing customers grow faster than they leave (great)
- NRR 90-100%: Healthy
- NRR < 90%: Leaky bucket

### Gross Revenue Retention (GRR)
NRR without expansion. Just: how much of starting revenue did we keep?

### CAC Payback Period
CAC / (ARPU × Gross Margin)
How many months to recover acquisition cost.

### Cohort Retention
Of customers who joined month X, how many are still here in month X+N?

## Unit Economics

### CAC (Customer Acquisition Cost)
Total spend on acquiring customers / new customers acquired (in same period).
- Blended CAC: All acquisition costs (sales + marketing)
- Paid CAC: Just paid acquisition (excludes organic)

### LTV (Customer Lifetime Value)
ARPU × Gross Margin × (1 / Churn Rate)
Or: ARPU × Gross Margin × Average Customer Lifetime (in months)

### LTV:CAC Ratio
LTV / CAC. Healthy SaaS: 3:1+

### Gross Margin
(Revenue - Cost of Goods Sold) / Revenue
- Healthy SaaS: 70%+
- Marketplace: 20-40%
- Hardware: 30-50%

### Contribution Margin
Revenue - direct variable costs (incl. CAC), divided by revenue.

## Burn Metrics

### Gross Burn
Total monthly expenses (cash going out).

### Net Burn
Gross burn - Revenue (actual cash burn).

### Runway
Cash on hand / Monthly net burn = months until you run out.

### Burn Multiple (Bessemer)
Net new ARR / Net burn
- < 1x: Excellent (efficient growth)
- 1-1.5x: Healthy
- 1.5-2x: Acceptable
- > 2x: Inefficient

## Product Metrics

### DAU / MAU (Daily / Monthly Active Users)
Unique users active in last day / month.

### DAU/MAU Ratio
DAU / MAU
- > 50%: Daily-use product
- 20-50%: Weekly-use product
- < 20%: Occasional use

### Activation Rate
% of new signups who reach the "aha moment" (your defined success event).

### Time to Value (TTV)
Median time from signup to activation.

### Engagement Frequency
Median number of sessions per user per week / month.

### Stickiness
Returning users / total users in a period.

## Sales Metrics

### Win Rate
Closed deals / total qualified opportunities.

### Sales Cycle Length
Average days from qualified lead to closed deal.

### Pipeline Coverage
Total pipeline value / quota for the period (target: 3-4x).

### Average Deal Size
Total bookings / number of deals.

### Sales Velocity
(# opportunities × avg deal size × win rate) / sales cycle length

## Marketing Metrics

### Conversion Rates by Stage
- Visitor → Lead
- Lead → MQL (Marketing Qualified Lead)
- MQL → SQL (Sales Qualified Lead)
- SQL → Opportunity
- Opportunity → Customer

### CAC by Channel
Cost per customer broken down by acquisition source.

### Channel ROI
LTV from channel / CAC from channel.

## Investor / Board Metrics (the dashboard)

What investors actually look at:
1. ARR (with growth rate)
2. Net retention
3. Burn / runway
4. Magic number / burn multiple
5. CAC payback period
6. Cohort retention
7. Customer concentration (top 10 = ?% of revenue)
8. Sales pipeline (next 3 quarters)
9. Team headcount (growth + key hires)
10. Cash position
