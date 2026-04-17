# Fintech — Metrics

## By sub-vertical

### Neobank / consumer banking
- **Deposits per user.** $1.5k-5k average for prime users
- **Cards per active user.** Target 1.0+, every 0.1 above is meaningful
- **Swipe frequency.** 15-25 transactions/month is active usage
- **Primary bank status %.** Direct deposit as signal; 40%+ is healthy
- **Net interest margin.** 2-4% depending on rate environment
- **Interchange revenue per user per month.** $3-12 for prime demographic

### Lending
- **Origination volume.** $/month in new loans
- **Loss rate (charge-off %).** By vintage cohort, annualized. Prime: 1-3%, near-prime: 4-8%, subprime: 10-25%
- **Net interest margin.** Yield minus cost of capital minus losses. Healthy: 4-8%
- **Approval rate.** % of applications approved
- **Funnel conversion.** Apply → Approve → Accept → Fund, each step
- **Operating cost per loan originated.** Should decline with scale; under $200 at scale

### Payments
- **TPV (Total Payment Volume).** $/month processed
- **Take rate.** Revenue / TPV. Payments processors 2.6-2.9%, infra players 0.2-0.8%
- **Net take rate.** After interchange and scheme fees paid out
- **Chargeback rate.** % of TPV. Under 0.5% is healthy; over 1% attracts scheme scrutiny
- **Fraud loss rate.** % of TPV lost to fraud. Under 0.1% in B2B, 0.2-0.4% consumer

### B2B fintech (accounting, AP, spend)
- **ARR.** Recurring software revenue
- **Card spend per customer per month.** If you issue cards
- **Interchange revenue per customer.** 1-3% of card spend
- **Net revenue.** ARR + interchange net of rewards
- **NRR.** 110-130% is strong

### Wealth/investment
- **AUM.** $ under management
- **AUM growth rate.** Net inflows / AUM, annualized
- **Fee rate (bps).** Basis points charged on AUM. Robo 25-50 bps, specialized higher
- **Revenue per account.** $/year
- **Churn by account size.** Larger accounts churn less

## Cross-cutting metrics

- **CAC and payback.** By channel and cohort
- **Primary user % (DAU/MAU).** Engagement above 0.5 for consumer financial apps is elite
- **Support ticket rate.** Financial services is ticket-heavy; benchmark 3-8% of MAU/month
- **Compliance cost as % of revenue.** 5-15% at scale; higher earlier
- **Fraud cost as % of TPV (or originations).** Goes in benchmarks/fintech.md in detail

## The fintech board deck metrics

For a fintech board meeting, you should have:

1. Revenue (split by source: interchange, NIM, fees, SaaS)
2. Net revenue (after losses, chargebacks, rewards)
3. TPV or originations volume
4. CAC and payback by cohort
5. Loss/fraud rate by vintage
6. Cost of risk (loss provision + fraud) as % of revenue
7. Runway
8. Regulatory/compliance status (RAG)
9. Bank partner health (concentration, contract terms, relationship status)
10. Top 3 risks (fraud, regulatory, partnership, funding)

## See also

- benchmarks/fintech.md
- references/METRICS-GLOSSARY.md
