# Lifetime Value (LTV)

## Definition
The total revenue you expect to earn from a customer over their entire relationship with you.

## Formulas

### Simple LTV
```
LTV = ARPA × Average Customer Lifetime (months)
```
Where ARPA = Average Revenue Per Account per month.

### LTV with gross margin
```
LTV = (ARPA × Gross Margin %) × Average Customer Lifetime
```
More accurate because it accounts for the cost of serving the customer.

### LTV from churn rate
```
LTV = ARPA × Gross Margin % / Monthly Churn Rate
```
This assumes steady-state churn, which is a simplification.

### LTV with expansion
```
LTV = (ARPA × Gross Margin % × (1 + Monthly Expansion Rate)) / (Monthly Churn Rate + Monthly Expansion Rate)
```
Accounts for revenue growth within accounts over time.

## Benchmarks

| Stage | Minimum LTV/CAC | Target LTV/CAC |
|-------|----------------|----------------|
| Pre-seed | > 2:1 | > 3:1 |
| Seed | > 3:1 | > 4:1 |
| Series A+ | > 3:1 | > 5:1 |

An LTV/CAC < 1:1 means you're paying more to acquire customers than they're worth. You're literally losing money on every customer.

An LTV/CAC of exactly 3:1 means: 1/3 goes to acquisition cost, 1/3 goes to operating costs, 1/3 is profit.

## Segment your LTV
LTV varies dramatically by:
- Customer size (enterprise LTV is 5-20x SMB LTV)
- Acquisition channel (referral customers typically have 2x LTV of paid)
- Cohort (early adopters vs late majority)
- Industry vertical

A blended LTV is useful for investor conversations but useless for operational decisions. Segment it.

## Common mistakes
1. Using revenue instead of gross margin (overstates LTV by 20-40%)
2. Not accounting for expansion revenue (understates LTV for growing accounts)
3. Using average churn when churn varies by segment (misleading)
4. Projecting LTV beyond observable data (you don't know 5-year LTV when you're 18 months old)
5. Comparing LTV/CAC across different business models (PLG vs enterprise have different benchmarks)

## Alert thresholds
- LTV/CAC dropping below 3:1
- LTV declining QoQ (customers becoming less valuable)
- LTV variance by segment > 5x (you might be in two different businesses)
