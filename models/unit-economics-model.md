# Unit Economics Model

## The Core Equation
```
Unit Profit = LTV - CAC - Cost to Serve
```

If this number is negative, every new customer makes you poorer.

## Full Model

### Revenue Side
```
LTV = ARPA × Gross Margin % × Customer Lifetime (months)

Where:
- ARPA = Average Revenue Per Account / month
- Customer Lifetime = 1 / Monthly Churn Rate
```

Example:
- ARPA = $500/month
- Gross Margin = 80%
- Monthly churn = 2%
- Customer Lifetime = 1 / 0.02 = 50 months
- LTV = $500 × 0.80 × 50 = $20,000

### Cost Side
```
Fully-loaded CAC = (Sales + Marketing cost) / New customers

Where Sales + Marketing includes:
- Sales team comp (base + commission + benefits)
- Marketing spend (paid + content + tools)
- SDR/BDR team cost
- Agency fees
```

Example:
- Monthly S&M spend: $50,000
- New customers per month: 10
- CAC = $50,000 / 10 = $5,000

### Cost to Serve (per customer over lifetime)
```
Cost to Serve = (Support cost + CS cost + Infrastructure cost per customer) × Lifetime

Where:
- Support: avg tickets/customer × cost/ticket
- CS: CSM salary / customers managed
- Infrastructure: hosting cost / active customers
```

Example:
- Monthly support cost per customer: $20
- Monthly CS cost per customer: $30
- Monthly infra cost per customer: $10
- Monthly cost to serve: $60
- Lifetime cost to serve: $60 × 50 months = $3,000

### Unit Profit
```
Unit Profit = $20,000 - $5,000 - $3,000 = $12,000
```

### Key Ratios
| Ratio | Your Number | Target |
|-------|------------|--------|
| LTV/CAC | 4.0x | > 3.0x |
| CAC Payback | 12.5 months | < 18 months |
| Gross Margin | 80% | > 75% |
| Unit Profit Margin | 60% | > 50% |

## Sensitivity: What Moves the Needle Most?

| Change | Impact on Unit Profit |
|--------|---------------------|
| Reduce churn from 2% to 1.5% | LTV increases from $20K to $26.7K (+33%) |
| Increase ARPA by 10% | LTV increases from $20K to $22K (+10%) |
| Reduce CAC by 20% | CAC drops from $5K to $4K (+8% unit profit) |
| Improve gross margin by 5pp | LTV increases from $20K to $21.25K (+6%) |

Churn reduction is almost always the highest-leverage improvement.
