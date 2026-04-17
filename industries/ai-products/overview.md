# AI Products — Industry Overview

Last updated: 2026-Q1

## What counts as an AI product

Three rough archetypes, each with different economics:

1. **AI-native application.** LLM or model inference is the core UX. Without the model, the product stops working. Examples: Cursor, Perplexity, Harvey, Glean.
2. **AI feature on top of a product.** Existing SaaS, model is a differentiating capability. Examples: Notion AI, Gong forecast, Intercom Fin.
3. **AI infrastructure.** Tools that other AI builders use. Examples: LangChain, Pinecone, Together, Modal, Weights & Biases.

Economics differ sharply across these. Treat them as three industries, not one.

## What is different about AI products (vs. classic SaaS)

| Dimension | Classic SaaS | AI Product |
|-----------|--------------|------------|
| COGS as % of revenue | 5-15% | 25-60% at launch, 15-35% mature |
| Moat source | Workflow + data + network | Workflow + data + distribution; weights alone are not a moat |
| Quality bar | Deterministic; bugs binary | Probabilistic; quality is a distribution |
| User trust | Earned in weeks | Earned in months; lost in one hallucination |
| Pricing model | Per-seat stable | Per-seat + usage + outcome; unstable |
| Cost curve | Flat after build | Scales with usage; model prices falling ~70%/yr |

## Key numbers (benchmarks at 2026-Q1)

- Typical gross margin for AI-native apps: 55-75% (vs. SaaS 75-85%)
- Frontier model cost per million tokens, input: $3-15 (Opus-class), $0.30-3 (Sonnet-class), $0.10-0.60 (Haiku-class)
- Model price decline observed 2023-2026: ~65-75% per year for equivalent capability
- Inference cost as % of revenue at maturity: target under 25% for healthy unit economics
- Latency expectations: P50 under 3s for chat, under 800ms for autocomplete, under 200ms for inline suggestions

## The three defensibility questions

1. **What happens when the model gets 10x cheaper?** If your product becomes 10x cheaper to replicate, that is a distribution/workflow moat problem. Solve before Series A.
2. **What happens when the model gets 10x better?** If the next model makes your scaffolding unnecessary, you are a feature not a company. Recent example: chain-of-thought wrappers eaten by reasoning models.
3. **What proprietary data or workflow do you accumulate?** Every interaction should make your product better for that user/organization in a way competitors cannot replicate.

## Common failure modes

- **Wrapper trap.** Thin layer over GPT/Claude with no workflow lock-in. Competitor replicates in a week.
- **Quality drift.** Model version change breaks prompts, users churn. No regression testing.
- **Cost bleed.** Usage grows faster than revenue. Margins invert at scale.
- **Evals debt.** Team ships without evals, then cannot confidently upgrade models.
- **Demo-to-production gap.** Looks magical in demo, fails on 5% of real cases. That 5% is the usage you keep.

## What good looks like

- Gross margin above 60% within 12 months of GA
- Quality evals run on every deploy, dashboards visible to everyone
- At least one proprietary data advantage (customer data, interaction data, labeled corpus)
- Distribution moat building (embedding in existing tools, channel partnerships, consumer brand)
- Prompt/scaffold code versioned like application code, not buried in strings
- Model abstraction layer so vendor swap is a config change not a rewrite

## Stage-by-stage focus

**Pre-seed/Seed.** Prove the wedge. Quality > cost. Manual evals are fine.

**Series A.** Build the evals flywheel. Start measuring cost per task/conversation/seat. Vendor abstraction.

**Series B+.** Own a proprietary data loop. Drive inference cost down via caching, routing, finetuning. Defend with distribution.

## See also

- industries/ai-products/metrics.md
- industries/ai-products/pitfalls.md
- benchmarks/ai-products.md
- verticals/ai-products.md
