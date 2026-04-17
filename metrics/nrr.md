# Net Revenue Retention (NRR)

## Definition
The percentage of revenue retained from existing customers over a period, including expansion and contraction.

## Formula
```
NRR = (Starting MRR + Expansion - Contraction - Churn) / Starting MRR × 100
```

Measured for a cohort of customers over 12 months (most common) or monthly.

## Why NRR matters
NRR > 100% means you grow even if you acquire zero new customers.
This is the most important SaaS metric after product-market fit.

- NRR of 120% means every $1 of existing revenue becomes $1.20 in a year
- NRR of 80% means every $1 of existing revenue becomes $0.80 in a year
- The compounding effect is massive over 3-5 years

## Benchmarks

| NRR Range | Rating | Typical Company Profile |
|-----------|--------|------------------------|
| > 130% | Elite | Strong platform with deep expansion (Snowflake, Datadog) |
| 120-130% | Excellent | Good expansion + low churn (top quartile SaaS) |
| 110-120% | Good | Healthy expansion, manageable churn |
| 100-110% | Okay | Expansion roughly offsets churn |
| 90-100% | Concerning | Losing revenue from existing base |
| < 90% | Critical | Leaky bucket, growth requires constant new acquisition |

## NRR by segment
| Segment | Typical NRR | Why |
|---------|-------------|-----|
| Enterprise | 115-140% | Large expansion headroom, sticky |
| Mid-market | 105-120% | Moderate expansion, moderate churn |
| SMB | 85-105% | High churn, limited expansion |
| Consumer | 70-95% | Very high churn, minimal expansion |

## Expansion levers
To improve NRR:
1. **Seat expansion**: Price per seat, grow with the customer's team
2. **Usage expansion**: Price on consumption, grow with usage
3. **Upsell to higher tier**: Feature gating that drives upgrades
4. **Cross-sell**: Additional products sold to existing customers
5. **Price increases**: Annual rate adjustments (2-7% typical)

## Churn reduction levers
To improve NRR from the other side:
1. **Onboarding**: 80% of churn is decided in the first 30 days
2. **Health scoring**: Predict churn before it happens, intervene early
3. **Switching costs**: Deep integrations, data gravity, workflow lock-in
4. **Value realization**: Regular QBRs showing ROI to the economic buyer
5. **Community**: Customers who connect with peers churn 30-50% less

## Common mistakes
1. Calculating NRR monthly instead of annual (monthly NRR is volatile and misleading)
2. Excluding downgrades from the calculation (overstates NRR)
3. Not segmenting by customer size (enterprise NRR masks SMB churn)
4. Including reactivations in NRR (reactivated customers are not "retained")

## Alert thresholds
- NRR < 100% for any quarter
- NRR declining for 2+ consecutive quarters
- Enterprise NRR < 110% (should be your best segment)
- Expansion MRR growth rate declining while logo count grows (new customers aren't expanding)
