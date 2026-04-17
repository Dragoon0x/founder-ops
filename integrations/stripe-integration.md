# Stripe integration

## Why this matters
Stripe is the ground truth for revenue. If your dashboard says one number and
Stripe says another, Stripe is right. Founder-ops uses Stripe as the canonical
source for MRR, ARR, churn, expansion, and gross margin.

## Signals tracked

| Signal | Cadence | Threshold |
|---|---|---|
| MRR | daily | growth rate vs target |
| Net new MRR | weekly | logo wins/losses + expansion + contraction |
| Logo churn (monthly) | monthly | >5% SMB / >2% mid / >1% enterprise = warning |
| Net revenue retention | monthly | <100% = leak; >120% = winning |
| Gross revenue retention | monthly | <90% SMB / <95% enterprise = warning |
| Days sales outstanding | weekly | >45 = collection issue |
| Payment failure rate | daily | >3% = dunning issue |
| Free trial -> paid conversion | weekly | <15% B2B SaaS = activation issue |
| Annual vs monthly mix | monthly | annual % drop = deal-quality concern |

## What to wire

1. Stripe restricted key with read-only on: Customers, Subscriptions, Charges,
   Invoices, Coupons, Products, Prices, Refunds, Disputes.
2. Set `STRIPE_API_KEY` in `.env`.
3. Run `node scripts/stripe-pull.mjs` daily at 02:00 UTC (after Stripe's nightly
   reconciliation).
4. Outputs: `data/stripe/mrr-daily.json`, `data/stripe/cohorts.json`,
   `data/stripe/customers.json`.

## MRR definition (use this one, not Stripe's default)

Founder-ops normalizes MRR using these rules:
- Annual subscriptions divided by 12 (not amortized at recognition date)
- One-time charges excluded
- Setup fees excluded
- Discounts applied
- Sales tax / VAT excluded
- Failed payments NOT counted until successful
- Trialing subscriptions NOT counted until first successful charge

If your investor reporting uses different rules, configure them in
`config/stripe.yaml` and document the choice in the README so the gap is explicit.

## Cohort definition

Cohorts are by month of first successful charge. Retention is by logo (not
revenue) for the GRR view, and by revenue for the NRR view. Show both. They tell
different stories.

## Common mistakes founder-ops protects against

1. Counting failed-then-recovered payments as new revenue (double-count)
2. Including refunds in churn (they're already in net new MRR)
3. Reporting bookings as revenue (bookings = signed; revenue = recognized)
4. Smoothing one-time revenue into MRR (hides the cliff)
5. Forgetting to subtract chargebacks from gross revenue
6. Reporting NRR without GRR (NRR can be >100% while you're losing every customer)

## When Stripe isn't enough

If you have manual / wire-transferred enterprise contracts, drop them into
`data/stripe/manual-arr.csv` and founder-ops will fold them in. Format:
```
customer_id,arr_usd,start_date,end_date,renewal_terms,notes
```
