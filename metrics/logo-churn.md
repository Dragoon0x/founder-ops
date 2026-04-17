# Logo Churn (Customer Churn Rate)

## Definition
The percentage of customers who cancel their subscription in a given period.

## Formula
```
Monthly Logo Churn = Customers Lost This Month / Customers at Start of Month × 100
```

```
Annual Logo Churn = 1 - (1 - Monthly Churn Rate)^12
```

Note: annual churn compounds. 5% monthly churn = 46% annual churn, not 60%.

## Benchmarks

| Segment | Good Monthly Churn | Great Monthly Churn |
|---------|-------------------|-------------------|
| Enterprise | < 0.5% | < 0.25% |
| Mid-market | < 1% | < 0.5% |
| SMB | < 3% | < 2% |
| Consumer | < 5% | < 3% |
| Usage-based | < 2% | < 1% |

## Churn cohort analysis
Don't just look at blended churn. Segment by:
1. **Cohort month**: Is churn improving for newer cohorts?
2. **Customer size**: Are you losing SMBs or enterprise?
3. **Acquisition channel**: Do referral customers churn less than paid?
4. **Feature adoption**: Do customers using feature X churn less?
5. **Onboarding completion**: Did they finish onboarding?

## Leading indicators of churn
These signals predict churn 30-60 days before it happens:
- Login frequency declining > 30% from baseline
- Key feature usage dropping
- Support ticket volume increasing (frustrated customer)
- Champion leaves the company (your internal advocate is gone)
- Billing issues (failed payments, downgrade requests)
- No engagement with product updates/emails

## Common mistakes
1. Not counting downgrades as partial churn (they reduce revenue even if logo stays)
2. Confusing logo churn with revenue churn (one enterprise cancellation can be 100x the churn of one SMB)
3. Reporting gross churn without net revenue retention context
4. Not identifying reason for churn (you can't fix what you don't understand)
5. Only measuring voluntary churn (involuntary = failed payments, which is fixable)

## Alert thresholds
- Monthly logo churn > 5% for SMB-focused business
- Monthly logo churn > 1% for enterprise-focused business
- Churn rate increasing for 3+ consecutive months
- > 30% of churned customers cite the same reason (product gap)
