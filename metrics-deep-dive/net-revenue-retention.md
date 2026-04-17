# Net Revenue Retention (NRR / NDR)

## The formula
```
NRR = (Starting ARR + Expansion - Churn - Contraction) / Starting ARR

Measured for a specific cohort over a specific period (usually 12 months).
Does NOT include new logos.
```

## Why it's the most important SaaS metric
If NRR > 100%, your existing customers pay you more next year than
this year. You grow even without new customers. Best-in-class SaaS
companies have 130%+ NRR.

If NRR < 100%, you're losing revenue from existing base. You must
acquire new customers faster than you lose to hit growth targets.
This compounds poorly.

## What "good" looks like

| Segment | Median NRR | Top quartile | Best in class |
|---------|-----------|--------------|---------------|
| SMB | 95–105% | 115% | 125%+ |
| Mid-market | 105–115% | 125% | 135%+ |
| Enterprise | 115–125% | 135% | 145%+ |

(Source: SaaS benchmarks 2024, OpenView, Bessemer)

## How to read NRR

### NRR 85–95% (problem)
You're losing ~10% of revenue annually from existing customers. Either
churn is too high, contractions are too common, or expansion motion
doesn't exist.

Diagnosis steps:
1. Decompose: is it churn (customers leaving) or contraction (customers
   downgrading)?
2. Check by segment: is it all segments or just one?
3. Check by cohort: is the issue new or persistent?

### NRR 95–105% (okay for SMB, problem for mid-market+)
You're treading water. New logos drive all growth. Vulnerable to
market slowdowns.

### NRR 105–115% (healthy)
Existing customers grow with you. Expansion revenue fills some of
the bucket even if you slow on new logos.

### NRR 115–130% (strong)
World-class SMB, typical mid-market, expected enterprise.

### NRR > 130% (exceptional)
Indicates one of:
- Strong land-and-expand motion (rare but real)
- Usage-based pricing that scales with customer success
- Contract escalators baked in (e.g., 10% annual raises accepted)

## How to debug a low NRR

Step 1: Decompose.
```
Starting ARR: $10M
Churn (full customer exits): -$400K  (4%)
Contraction (downgrades): -$200K  (2%)
Expansion (upgrades): +$700K  (7%)
Ending ARR from base: $10.1M
NRR: 101%
```

Step 2: Identify the lever.
- If churn is the biggest component, fix retention (product fit,
  customer success).
- If contraction is biggest, fix pricing (over-buy), success (under-use),
  or stickiness.
- If expansion is low, fix sales motion (farmer vs hunter) or product
  (no expansion features).

Step 3: Segment.
Break NRR by:
- ACV band (low ACV churns faster typically)
- Industry
- Acquisition channel
- Time since purchase (year 1 vs year 2+ retention often differ)
- Product tier

The problem usually localizes to one segment.

## How to improve NRR (in order of typical impact)

1. **Reduce involuntary churn.** 30–50% of SMB churn is failed credit
   cards. Dunning, card updater, retry logic.
2. **Fix onboarding.** Churn in month 1–3 is often "didn't get value."
3. **Identify contraction triggers.** Usage drops 6 weeks before
   contraction. Proactive outreach can save them.
4. **Build expansion moments.** Usage-based tiers, seat-based
   expansion, add-on products.
5. **Customer success motion.** Not a cost center — a revenue function.
   Health scores, QBRs for top customers.
6. **Contract structure.** Multi-year contracts with annual escalators
   build NRR mechanically.

## Common NRR mistakes

1. **Including new logos.** That's CAC-based growth, not retention.
2. **Measuring in monthly NRR at high volatility.** Annualize.
3. **Cohort vs aggregate confusion.** Cohort NRR is per-starting-cohort.
   Aggregate NRR is all customers in period. Different numbers, both
   useful.
4. **Counting expansion that's just price increases.** If you raised
   prices 10% and NRR is 109%, you had 0% real expansion. Investors
   will catch this.
5. **Ignoring segment differences.** 120% NRR overall might hide 90%
   SMB NRR and 150% enterprise NRR.

## Reporting cadence
- Monthly: aggregate NRR
- Quarterly: cohort NRR by segment
- Annually: full retrospective

## What NRR tells investors
- NRR > 120% at Series A: market has strong pull, expansion motion works
- NRR 100–110%: market is okay, execution is okay
- NRR < 100%: retention problem, deal-breaker at Series B+

## Questions to ask about NRR
1. Is this trending up or down over the last 4 quarters?
2. Is it concentrated in one segment or broad?
3. Is it driven by expansion or by pricing?
4. What's the forecasted NRR if we do nothing new?
5. What's the NRR of our best cohort vs worst?
