# Marketplace GMV Model

Marketplaces are bi-modal. They die or they dominate. The model shows which.

## The fundamental unit

GMV = number of transactions × average order value.

Revenue = GMV × take rate.

Everything else flows from this.

## The liquidity problem

A marketplace is only valuable if both sides are active. The model must account for:

- Supply side: how many sellers, how much inventory, utilization rate
- Demand side: how many buyers, search-to-transaction conversion
- Match rate: % of buyer searches that result in transactions

Low match rate kills marketplaces. You can have plenty of supply and plenty of demand but no matches if:
- Geography doesn't overlap (local marketplaces)
- Price doesn't overlap
- Quality doesn't meet demand expectations
- Trust is missing

## Forecasting GMV

Bottom-up:
1. Forecast buyers (acquisition + retention curve)
2. Forecast order frequency per buyer
3. Forecast AOV
4. GMV = buyers × frequency × AOV

Top-down (for sanity check):
1. Total addressable market GMV
2. Your achievable % share in X years
3. Back into buyer/seller counts

## Take rate strategy

| Take rate | Implications |
|-----------|--------------|
| <5% | Low margin, high volume needed, hard to be profitable |
| 5-10% | Competitive, most mature marketplaces |
| 10-20% | Premium positioning, curated, trust/quality driven |
| >20% | Capture-heavy; disintermediation risk |

Raising take rate later is hard. Starting too low is a deep hole.

## Disintermediation risk

Once buyers and sellers know each other, they go around you. Defenses:
- Payment integration (they need you to get paid)
- Trust/escrow (they need you for safety)
- Discovery (they need you to find each other)
- Aggregation (they need you for convenience)
- Analytics/tools (you provide ops value)

Model disintermediation rate explicitly: % of repeat transactions that happen off-platform. If it's >20%, you have a structural problem.

## Cohort analysis per side

Track both buyer and seller cohorts.

For sellers:
- Onboarding rate (signup to first listing)
- Activation (first sale)
- Month-1 GMV, month-3, month-6
- Retention (seller still active at 6, 12 months)

For buyers:
- Search-to-transaction conversion
- Month-1 orders
- Repeat rate at 30/90/180 days

## CAC by side

Usually asymmetric. Sellers are harder to acquire early (chicken and egg). Buyers cost more once sellers are dense.

At seed stage, spend 70% of CAC on supply. Flip to 70% on demand by Series B when supply is self-serve.

## The steady-state test

In steady state (not growth), does GMV per active user × take rate × gross margin > CAC per user / acceptable payback?

If no, the unit economics don't work even at scale. Either raise take rate or reduce CAC structurally.

## Benchmarks

| Metric | Early | Scale |
|--------|-------|-------|
| Take rate | 10-15% | 8-20% |
| Buyer repeat (6mo) | 30% | 60%+ |
| Seller retention (12mo) | 50% | 75%+ |
| Liquidity (% searches → txn) | 10-20% | 40%+ |
| GMV growth (YoY) | 3-10x | 30-50% |
| Contribution margin | 20-40% | 60-80% |
