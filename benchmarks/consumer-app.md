# Consumer App Benchmarks

B2C apps live and die by retention curves. Acquisition is rarely the
problem at scale; retention almost always is.

## Day 1 / Day 7 / Day 30 Retention Targets (D1/D7/D30)

| Category | D1 | D7 | D30 |
|----------|----|----|-----|
| Hyper-casual game | 35% | 12% | 5% |
| Mid-core game | 45% | 20% | 8% |
| Social/community | 50% | 25% | 15% |
| Productivity | 60% | 35% | 20% |
| Daily-use utility | 70% | 50% | 35% |
| Habit-forming (Duolingo, Strava) | 70% | 50% | 30% |

**Top decile:** Add ~50% to each number above.

## DAU / MAU (stickiness)

| Tier | DAU/MAU |
|------|---------|
| Daily habit (FB, IG, TikTok) | 50-65% |
| Frequent use | 25-40% |
| Occasional use | 10-20% |
| Sporadic use | <10% |

Pre-PMF: <10% is normal. PMF signal: stickiness rises and stabilizes.

## ARPU / ARPDAU Benchmarks

| Category | ARPDAU (USD) | Notes |
|----------|--------------|-------|
| Hyper-casual game | $0.05-0.15 | Ad-monetized |
| Mid-core game | $0.30-1.00 | IAP + ads |
| Casino game | $1.00-5.00 | High IAP |
| Social media | $0.10-0.50 | Ads |
| Productivity (subscription) | $0.30-2.00 | Subscriptions |
| Dating | $0.20-1.50 | Subscriptions + IAP |

## Subscription App Benchmarks

**Trial → paid conversion:**
- Free trial 7 days: 20-30%
- Free trial 14 days: 25-40%
- Free trial 30 days: 30-45%
- Hard paywall (no trial): 1-5%

**Annual vs monthly mix:**
- Healthy: 30-50% on annual
- Annual subs reduce churn 60-70%

**Churn (consumer subscription):**
- Monthly subs: 5-10% monthly churn
- Annual subs: 30-50% annual churn (don't auto-renew)

## CAC by Channel (consumer mobile)

| Channel | CAC range |
|---------|-----------|
| Organic (App Store search, word of mouth) | <$1 |
| TikTok ads | $2-15 |
| Meta ads | $3-20 |
| Google UAC | $4-25 |
| Apple Search Ads | $2-10 |
| Influencer | $5-50 |
| Paid PR | $10-100 |

**Reality check:** If your CAC is >$20 and ARPU is <$10, you're funding
a hobby, not a business.

## App Store Conversion Funnel

| Stage | Benchmark Conversion |
|-------|---------------------|
| Impression → Page view | 2-5% (browse) / 25-40% (search) |
| Page view → Install | 25-45% |
| Install → First open | 75-90% |
| First open → D1 retained | per category above |

## Engagement Hierarchy

Track in this priority:
1. **DAU** (most engaged users) — north star for habit apps
2. **WAU** (weekly active) — north star for utility apps
3. **MAU** (monthly active) — vanity metric, but used for valuation
4. **Quality DAU** — DAU who do the core action (e.g., posted, completed)

**MAU without quality DAU = dying app.** Set a "core action" definition and
track the % of MAU who completed it in the period.

## Virality (K-factor)

`K = invitations sent per user × conversion rate of invites`

| K | Outcome |
|---|---------|
| <0.5 | No viral growth, paid only |
| 0.5-1 | Slows decay, doesn't grow |
| 1-2 | Slow viral growth |
| 2-5 | Strong viral growth (rare) |
| 5+ | Hyper-viral (TikTok, Wordle moment) |

K above 1.5 is extremely rare. If you think you have K>2, your tracking is wrong.

## Cohort Stabilization

For habit-forming apps, retention should DECAY THEN STABILIZE — the "smile."
- Dropoff weeks 1-4 is normal
- Stabilization at month 3-6 is the target
- Continued decline = no PMF

The flat segment of the smile = your "core" cohort. Their retention curve
is the one that matters for LTV math.
