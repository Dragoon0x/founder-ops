# Marketplace — Key Metrics & Benchmarks

## The Core Marketplace Metrics

### 1. GMV (Gross Merchandise Volume)
- **What**: Total dollar value of all transactions on the platform
- **Formula**: Sum of all completed transactions
- **Note**: This is NOT your revenue; revenue = GMV × take rate

### 2. Net Revenue
- **What**: Your actual revenue
- **Formula**: GMV × Take Rate (after refunds/chargebacks)
- **Importance**: This is what investors actually evaluate, not GMV

### 3. Take Rate (Commission)
- **What**: % of GMV you keep
- **Benchmarks by category**:
  - Real estate: 1-3% (high price points)
  - Travel/Lodging (Airbnb): 12-18%
  - Ride-sharing (Uber): 20-30%
  - Food delivery (Doordash): 25-35%
  - Freelance services (Fiverr/Upwork): 15-30%
  - Handmade/Goods (Etsy): 5-7% + listing fees
  - Used goods (eBay): 10-13%
- **Increase over time**: Most marketplaces start lower, raise as they prove value

### 4. Liquidity
- **Buyer-side liquidity**: % of buyers who find what they want and transact
- **Supply-side liquidity**: % of listings that sell within X days
- **Critical threshold**: Without liquidity, you don't have a marketplace
- **Benchmark**: 60%+ of buyer searches result in transaction (good)

### 5. Match Rate
- **What**: % of demand-side queries that result in a successful match
- **Benchmark**: 80%+ for service marketplaces; 30%+ for goods marketplaces
- **If low**: Either supply is insufficient or matching algorithm is bad

### 6. Frequency
- **What**: How often each user transacts
- **Benchmarks**:
  - High frequency (Uber, Doordash): 10+ per month
  - Medium frequency (Airbnb): 1-3 per year per traveler
  - Low frequency (Real estate): Once per 5-7 years
- **Frequency drives LTV**: High-frequency marketplaces have better unit economics

### 7. Repeat Rate
- **What**: % of users who transact again within X days
- **Benchmark**: 30%+ within 30 days (for high-frequency)
- **Driver**: Quality of first experience determines repeat

### 8. Take Rate × Frequency × Average Transaction Value
- **What**: Revenue per active user
- **Why**: This is the unit economics math
- **Improvement levers**: Increase any of the three

## Stage-Based Benchmarks

| Metric | Pre-Seed | Seed | Series A | Series B |
|--------|----------|------|----------|----------|
| GMV | $0-$500K | $500K-$5M | $5M-$50M | $50M-$500M |
| Net revenue | $0-$50K | $50K-$500K | $500K-$5M | $5M-$50M |
| Active users (both sides) | 100s | 1Ks | 10Ks | 100Ks+ |
| Liquidity (any geo) | Proving | Proven in 1 | Proven in 5+ | Proven in 20+ |
| Take rate | 5-10% | 8-15% | 10-20% | 15-25% |
| Frequency growth | N/A | Stable | Increasing | Mature |

## The Liquidity Quality Index

For each geography or category:

**Liquidity Quality = (Match Rate × Repeat Rate × Frequency) / Time to Match**

A marketplace with:
- 80% match rate
- 50% repeat within 30 days
- 5 transactions/user/month
- Average match time of 2 hours

Has Liquidity Quality = (0.8 × 0.5 × 5) / 2 = 1.0

Higher = stronger liquidity.

## Cohort Analysis for Marketplaces

Track separately:
- **Buyer cohorts**: When did they first transact? Did they come back?
- **Seller cohorts**: When did they first list? Are they still active?

Critical patterns:
- **Healthy**: Both cohorts retain at 30%+ after 90 days
- **Buyer churn dominant**: Bad UX, no inventory match, or off-platform leakage
- **Seller churn dominant**: Low payouts, bad take rate, off-platform poaching

## Take Rate Evolution

Most marketplaces follow this pattern:

| Stage | Take Rate | Why |
|-------|-----------|-----|
| Cold start | 0-5% | Need liquidity first |
| Growth | 5-15% | Prove value to both sides |
| Mature | 15-25% | Network effect locked in |
| Dominant | 20-35% | High switching cost |

Don't raise take rate before:
1. You have measurable network effects
2. Suppliers can't easily go off-platform
3. Demand can't easily switch
