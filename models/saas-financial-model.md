# SaaS Financial Model

## Structure

### Revenue Model
```
Revenue Drivers:
├── New MRR
│   ├── Inbound leads × conversion rate × ARPA
│   └── Outbound pipeline × win rate × ARPA
├── Expansion MRR
│   ├── Seat expansion (existing customers × growth rate × price/seat)
│   └── Upsell (% of customers upgrading tier × price differential)
├── Contraction MRR
│   └── Existing MRR × monthly contraction rate
└── Churned MRR
    └── Existing MRR × monthly churn rate
```

### Key Assumptions Table
| Assumption | Pre-Seed | Seed | Series A | Series B |
|-----------|---------|------|----------|----------|
| MoM MRR growth | 15-25% | 10-15% | 8-12% | 5-8% |
| Monthly logo churn | 5-8% | 3-5% | 2-3% | 1-2% |
| Net revenue retention | 90-100% | 100-110% | 110-120% | 115-130% |
| CAC payback (months) | 6-12 | 8-15 | 10-18 | 12-18 |
| Gross margin | 65-75% | 70-80% | 75-85% | 78-85% |

### Expense Model
```
Expenses:
├── People (60-80% of total)
│   ├── Engineering (25-40% of people cost)
│   ├── Sales & Marketing (20-35%)
│   ├── G&A (10-15%)
│   └── Customer Success (5-15%)
├── Infrastructure (5-15%)
│   ├── Cloud hosting
│   ├── Third-party APIs
│   └── DevOps tooling
├── Marketing (5-15%)
│   ├── Paid acquisition
│   ├── Content
│   └── Events
└── G&A (5-10%)
    ├── Office/remote
    ├── Legal
    ├── Accounting
    └── Insurance
```

### Sensitivity Analysis
Model these scenarios:
| Scenario | Revenue Growth | Churn | Hiring Pace |
|----------|---------------|-------|-------------|
| Bull case | +20% vs plan | -20% vs plan | Accelerate |
| Base case | Plan | Plan | Plan |
| Bear case | -30% vs plan | +50% vs plan | Freeze |
| Survival | -50% vs plan | +100% vs plan | Cut 25% |

For each scenario, calculate:
- Runway in months
- Break-even date
- Capital needed to reach next milestone

### Common Modeling Mistakes
1. Revenue hockey stick without justifying the inflection point
2. Assuming churn improves without a specific initiative
3. Underestimating hiring costs (salary + benefits + recruiting + ramp)
4. Not modeling seasonality (Q4 enterprise slowdowns, summer dips)
5. Confusing bookings with revenue (bookings = contracts signed, revenue = recognized)
6. Linear extrapolation of early growth (early growth is easier; it slows)
