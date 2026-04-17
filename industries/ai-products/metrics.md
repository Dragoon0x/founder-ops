# AI Products — Metrics

Last updated: 2026-Q1

## North-star candidates by archetype

| Archetype | Good north-star |
|-----------|-----------------|
| AI-native app | Weekly active users × task success rate |
| AI feature on SaaS | Attach rate × retention lift on users who adopt |
| AI infrastructure | Tokens/requests processed through your stack |

## Product metrics

### Quality metrics (measure every deploy)

- **Task success rate.** Of tasks the product claims to do, % completed to user satisfaction. Target: 85%+ for narrow tasks, 65%+ for open-ended.
- **Acceptance rate.** Of suggestions shown, % accepted by user. Benchmark: code completion 25-40%, email draft 40-60%, chat response 60-80%.
- **Edit distance.** Levenshtein or semantic diff between AI output and what user kept. Rising edit distance = quality regression.
- **Hallucination rate.** % of factual claims that are wrong. Should be under 1% for any RAG product, under 0.1% for any product touching money/health/law.
- **Refusal rate.** % of reasonable requests refused. Under 3% for horizontal products.

### Engagement metrics

- **Daily active / Weekly active ratio.** Above 0.4 indicates habit formation.
- **Sessions per week per active user.** Track by cohort.
- **Queries/tasks per session.** Indicator of product depth.
- **Time to first value (TTFV).** Seconds from signup to first useful output. Under 30s for consumer, under 2min for B2B.

### Retention

AI products show specific retention patterns:
- **Month 2 retention** is the honest signal. Novelty drops users in month 1.
- Healthy AI-native B2B: M2 retention above 60%, settling to above 80% at M6.
- Healthy AI-native consumer: M2 retention above 35%, settling to above 55%.

## Economic metrics

### Unit economics

- **Gross margin.** Revenue minus inference cost minus other COGS, divided by revenue. Target 55%+ by GA, 70%+ at Series B.
- **Contribution margin per active user.** Revenue per user minus variable cost per user.
- **Inference cost per active user per month.** Track trend. Should fall 30%+ per year through model price drops and optimization.
- **Cost per task.** Total inference cost / tasks completed. Compare to willingness-to-pay per task.

### Revenue quality

- **Revenue mix.** Subscription vs. usage vs. outcome-based. All-usage revenue is lumpy; all-seat is leaving money on table for heavy users.
- **Net revenue retention (NRR).** Target 110%+ for B2B; usage-based products often reach 130%+.
- **Expansion-driven growth %.** What fraction of new ARR comes from existing accounts.

## Operational metrics

- **P50 latency per query type.** Sub-second for inline, sub-3s for chat, sub-30s for agent tasks.
- **P99 latency.** The long tail is where users churn.
- **Error rate.** Non-200 responses / total. Under 0.5%.
- **Model uptime weighted by traffic.** If you use 3 models at 30/50/20% traffic mix, compute weighted uptime.
- **Cache hit rate.** For deterministic queries, prompt-level cache hit rate. 30-60% is achievable for most apps; every % is money.

## The AI product scorecard (monthly)

Track these 10 numbers every month:

1. WAU / MAU
2. Task success rate
3. Hallucination rate
4. P50 latency
5. Gross margin
6. Inference cost per active user
7. NRR
8. Quality eval pass rate (%)
9. Revenue (MRR)
10. % of revenue from proprietary data advantage (vs. pure model capability)

## See also

- benchmarks/ai-products.md
- modes/metrics.md
- references/METRICS-GLOSSARY.md
