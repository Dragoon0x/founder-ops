# NRR / GRR

Net and gross revenue retention. The two most important metrics after ARR growth.

## Definitions

**Gross Revenue Retention (GRR):** % of MRR you retained from a cohort, before expansion.

GRR = (starting MRR - churned MRR - contraction MRR) / starting MRR

GRR is bounded at 100%. Anything below is bleeding.

**Net Revenue Retention (NRR):** % of MRR you retained INCLUDING expansion.

NRR = (starting MRR - churned - contraction + expansion MRR) / starting MRR

NRR can exceed 100% if expansion exceeds churn.

## Why both matter

- **GRR alone** shows if customers stay. If GRR is 85%, you're losing 15% of every cohort every year. Bad regardless of expansion.
- **NRR alone** hides churn. 120% NRR with 80% GRR means you're making up huge churn with massive expansion. Fragile.
- **Together** tell the truth: GRR = can you keep them, NRR = can you grow them.

## Benchmarks (annual)

| Stage | GRR target | NRR target |
|-------|-----------|------------|
| SMB SaaS | 85%+ | 100%+ |
| Mid-market | 90%+ | 115%+ |
| Enterprise | 95%+ | 125%+ |
| Best-in-class (any) | 95%+ | 130%+ |

Snowflake was ~170% NRR pre-IPO. Twilio ~130%. These are exceptional.

## Calculating correctly

Use a cohort of customers active 12 months ago. Track THAT cohort's MRR today.

- Starting MRR (12 months ago) for cohort: $100k
- Churned in those 12 months: $10k
- Contraction: $5k
- Expansion: $30k
- Ending MRR today for cohort: $115k
- NRR = 115 / 100 = 115%
- GRR = (100 - 10 - 5) / 100 = 85%

Common error: using starting MRR from a month ago, which captures too little churn/expansion to be meaningful.

## What drives NRR

**Positive drivers:**
- Seat-based expansion (more users over time)
- Usage-based expansion (more API calls, more data)
- Tier upgrades (bronze → silver → gold)
- Add-on modules / products
- Price increases at renewal

**Negative drivers:**
- Gross churn (lost customers)
- Downgrades
- Seat reductions
- Discounts given to retain

## What drives GRR

- Product value / stickiness
- Switching costs (data lock-in, integrations)
- Customer success motion
- Contract length (annual > monthly for GRR)
- Payment terms (prepay > postpay)

## Red flags

- GRR declining over time = product getting worse or customer segment getting worse
- NRR > 130% with GRR < 90% = fragile; big accounts masking churn
- NRR and GRR diverging = expansion is real but you're losing logos
- Logo retention > revenue retention = losing big accounts, keeping small (bad segmentation)
- Revenue retention > logo retention = losing small, keeping big (often fine — ICP pruning)

## Reporting

To board: NRR, GRR, and logo retention monthly. Trailing 12 months. Plus cohort curves quarterly.

If you can only report one? GRR. Expansion is a choice you can accelerate; retention is structural.
