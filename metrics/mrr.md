# Monthly Recurring Revenue (MRR)

## Definition
The predictable, normalized monthly revenue from all active subscriptions.

## Formula
```
MRR = Sum of (monthly value of each active subscription)
```

For annual plans: divide by 12.
For usage-based: use the contracted minimum or trailing 3-month average.

## Components
- **New MRR**: Revenue from customers who subscribed this month
- **Expansion MRR**: Revenue increase from existing customers (upgrades, add-ons, seat additions)
- **Contraction MRR**: Revenue decrease from existing customers (downgrades, seat removals)
- **Churned MRR**: Revenue lost from cancelled subscriptions
- **Reactivation MRR**: Revenue from previously churned customers who return

```
Net New MRR = New MRR + Expansion MRR + Reactivation MRR - Contraction MRR - Churned MRR
```

## What to include
- Recurring subscription fees
- Recurring platform fees
- Contracted minimum usage fees

## What NOT to include
- One-time setup fees
- Professional services revenue
- Overages above contracted minimums (until recurring)
- Free trial users
- Pilot customers on temporary pricing

## Benchmarks by stage

| Stage | Good MRR Growth Rate | Great MRR Growth Rate |
|-------|---------------------|----------------------|
| Pre-seed ($0-50K MRR) | 15-20% MoM | > 25% MoM |
| Seed ($50-200K MRR) | 10-15% MoM | > 20% MoM |
| Series A ($200K-1M MRR) | 8-12% MoM | > 15% MoM |
| Series B ($1-3M MRR) | 5-8% MoM | > 10% MoM |

## Common calculation mistakes
1. Including one-time revenue (inflates MRR, deflates next month)
2. Not normalizing annual contracts (shows spike when annual deal closes)
3. Double-counting expansion when a customer cancels and resubscribes at higher price
4. Not removing churned customers promptly (lagging churn recognition)
5. Including free/beta users who haven't converted to paid

## Alert thresholds
- MRR growth rate declining for 3 consecutive months
- Net New MRR negative in any month
- Churned MRR > New MRR for 2 consecutive months
- Expansion MRR < 20% of New MRR (not enough upsell motion)
