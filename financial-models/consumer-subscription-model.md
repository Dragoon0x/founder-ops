# Consumer Subscription Model

Consumer subscription is deceptively simple: users pay recurring fees for a product. In reality, churn will kill you if you don't model it right.

## Core formula

MRR (month N) = MRR (month N-1) × (1 - churn rate) + new MRR

## Churn curves, not churn rates

A single churn rate is a lie. Real consumer subscription churn:

- Month 1 (trial): 30-50% churn (the "did they even activate" drop)
- Month 2-3: 15-25% churn (the "did they get value" drop)
- Month 4-6: 5-10%/month
- Month 7-12: 3-5%/month
- Month 12+: 2-3%/month (loyal base)

A blended rate of 8% hides that your M1 churn is 40%. Same blended number, completely different business.

## LTV under churn curves

Standard formula LTV = ARPU × GM / churn assumes flat churn. Wrong for consumer.

Real LTV = Σ (ARPU × GM × probability of still being subscribed at month N), over lifetime (usually 60 months max).

Example: $10/mo subscription, 75% GM, first-year churn curve above, 3% steady state.

- M1-12 retention probability: 0.35 (after layered churn)
- M13-60 retention probability: decays at 3%/mo

LTV ≈ $10 × 0.75 × (sum of month-by-month probabilities). Comes out to roughly $50-80 for this profile.

## Payback discipline

Consumer payback must be <6 months or you die. Why:
- CAC is almost entirely paid media (ads)
- Churn removes customers before they pay back
- Next quarter's CAC is higher (ad saturation)

If payback is 4 months, you can raise, reinvest, grow. If it's 10 months, you're in a death spiral.

## Annual vs monthly plans

Annual plans transform economics:
- Prepaid cash = float
- Churn happens at annual mark, not monthly (so measured "monthly churn" is lower)
- LTV higher because of prepay commitment

Aggressive push to annual is the single biggest lever in consumer subscription. Bonus: reduces churn 30-50%.

## Free trials

- **No credit card required:** higher funnel volume, lower conversion (5-15% typical)
- **Credit card required:** lower funnel volume, higher conversion (30-60%)
- **Freemium (free forever tier):** depends on whether free users are "future buyers" (good) or "replacement for paid" (bad)

Test each. No right answer.

## Reactivation

Most churned consumers never come back. But some do, especially on content or tool subscriptions.

- Day 30 reactivation: 10-20% of churned
- Day 90 reactivation: 5-10%
- Day 180+: <3%

Include reactivation revenue in model but don't overweight it.

## Pricing experiments

- Price elasticity in consumer is real. 10% price hike ≈ 5-10% volume drop for most categories.
- Bundling > raising price for the same user (bigger ARPU, less perceived loss).
- Tiered pricing captures segments (budget tier + premium tier > single tier).

## Churn reduction levers

- Onboarding improvements (kill M1 churn)
- Habit formation features (notifications, streaks, reminders)
- Annual plan incentives (shift mix)
- Pause feature (in lieu of cancel, capture 20-30%)
- Win-back offers (30% discount for 3 months)
- Content/feature investment (reduce late churn)

## Benchmarks (consumer subscription)

| Metric | Benchmark |
|--------|-----------|
| Monthly churn (blended after year 1) | <5% (good), <3% (great), <2% (best-in-class) |
| Trial-to-paid | 30-60% (CC required), 5-15% (no CC) |
| Annual plan % of mix | 40%+ |
| Payback | <6 months |
| LTV:CAC | 3:1+ |
| Gross margin | 75-90% |
