# CAC Payback

CAC payback is the single cleanest efficiency metric. LTV:CAC is a projection. Payback is cash in the door.

## Formula

CAC payback (months) = CAC / (monthly gross profit per customer)

Where monthly gross profit = (ARPU / 12) × gross margin.

Example: CAC $3,000, ARPU $12,000, GM 75%:
- Monthly gross profit = ($12,000 / 12) × 0.75 = $750
- Payback = $3,000 / $750 = 4 months

## Why payback > LTV:CAC

LTV:CAC tells you theoretical return. Payback tells you when cash comes back. Cash comes back is what matters when you're funding growth from revenue or fundraise.

Short payback = you can fund growth from cash. Long payback = you need external capital to grow.

## Benchmarks

| Segment | Payback target | World-class |
|---------|---------------|-------------|
| Consumer subscription | <6 mo | <3 mo |
| SaaS SMB | <12 mo | <6 mo |
| SaaS mid-market | <18 mo | <12 mo |
| SaaS enterprise | <24 mo | <18 mo |
| Marketplace (buyer-side) | <6 mo | <3 mo |
| Hardware | <12 mo | <6 mo |

Enterprise allows longer payback because contracts are multi-year and NRR is high. SMB must be fast because churn is high.

## Cohort payback

Best version: plot cumulative gross profit by cohort over time. When line crosses zero = cohort paid back.

If the curve flattens below zero, that cohort never pays back. Likely explanation: churn outpaced revenue accumulation. Kill the acquisition source, improve the product, or both.

## Payback with expansion

Formula above uses initial ARPU. If NRR is 120%, real payback is faster.

**Adjusted payback:** use blended monthly gross profit over expected lifetime.

For a cohort with expansion, effective payback can be 30-50% faster than formula suggests.

## Payback vs runway

Founders often conflate. They're related but different:
- **Payback:** time until a customer pays back their CAC
- **Runway:** time until you run out of cash

A company with 4-month payback and 6 months runway is in good shape (cash grows monthly). A company with 24-month payback and 6 months runway is in crisis.

## Levers to shorten payback

1. **Raise prices.** Direct increase in gross profit per month.
2. **Improve gross margin.** Infra optimization, reduce support costs.
3. **Shift mix to annual plans.** Cash upfront = same payback but positive cash flow.
4. **Reduce CAC.** Cut expensive channels, improve conversion, increase organic.
5. **Upsell at signup.** Higher starting ARPU compresses payback.

## Red flags

- Payback trending longer month-over-month = efficiency declining
- Payback < 1 month = pricing way below value (raise prices)
- Payback > benchmark for your segment = structural problem
- Payback varies 3x by channel = attribution broken or channel selection broken
