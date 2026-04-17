# AI-Native Product Benchmarks

AI products have inverted economics: engineering cheap, inference
expensive. Margins are pressured, churn is high, differentiation is hard.

## Gross Margin

| Stage / Approach | Gross Margin |
|------------------|--------------|
| Heavy LLM passthrough (no caching) | 30-50% |
| Smart routing + cache + small models | 55-70% |
| Self-hosted models (open-source) | 65-80% |
| Mostly classical ML, occasional LLM | 75-85% |
| Pure SaaS, AI as feature | 75-85% (standard SaaS) |

**Major risk:** Most AI startups have 50-65% gross margin. SaaS
investors expect 75%+. Be ready to explain the path to 70%.

## Inference Cost Trends (declining)

GPT-4 class model cost per 1M tokens (output):
- 2023: $60
- 2024: $30
- 2025: $15
- 2026: $5-10

If your business model needs 50% gross margin TODAY, model what happens
when costs drop 5x in 18 months. Usually price drops too.

## Customer Acquisition

| Channel | CAC for AI products |
|---------|---------------------|
| Organic content (SEO, "X with AI") | $0-50 |
| Product Hunt launch | Spike then decay |
| AI directory listings | Low quality |
| Twitter / building in public | $0 (founder time) |
| Paid (Google) | $50-300 |
| Paid (Meta) | $30-200 |
| Sales-led (enterprise) | $5K-50K |

## Conversion Rates

| Funnel Stage | Benchmark |
|--------------|-----------|
| Visit → signup | 5-15% (above-fold demo helps) |
| Signup → activated (used core feature) | 30-50% |
| Activated → paid | 5-20% (much lower than SaaS) |
| Paid → retained 6 months | 30-50% |

## Retention is the Hardest Problem

| Cohort Period | Typical AI Product | Healthy AI Product |
|---------------|-------------------|--------------------|
| Week 1 | 60% | 80% |
| Week 4 | 25% | 50% |
| Month 3 | 12% | 30% |
| Month 6 | 7% | 20% |

**Why retention is brutal in AI:**
- Novelty wears off
- Competitor launches every week
- Open source equivalent appears
- Use case dies (e.g., "summarize PDF" became commoditized)

The way out: integrate into workflow, accumulate user data over time
(personalization moat), or own a vertical use case deeply.

## Pricing Models for AI

**Subscription:** Cleanest, but expose pricing risk if usage is high
**Credits / tokens:** Aligns with cost but confusing UX
**Per-seat:** Works if AI is a feature in a SaaS app
**Pay-per-output:** Niche cases (image generation, document)
**Hybrid (subscription + overage):** Most common — base + usage cap

**Pricing examples:**
- ChatGPT Plus: $20/mo
- Claude Pro: $20/mo
- Cursor Pro: $20/mo
- Midjourney: $10-120/mo tiered
- Perplexity Pro: $20/mo
- Notion AI: $10/mo (add-on)
- Github Copilot: $10/mo individual, $19/mo business

The $20/mo price point is the consumer AI norm. Going above $50/mo
requires clear ROI (developer tools, enterprise tier).

## Differentiation Vectors (since model layer is commoditized)

1. **Workflow integration** (lives where work happens)
2. **Vertical depth** (knows healthcare/legal/finance specifically)
3. **Custom training data** (private dataset others don't have)
4. **UX innovation** (the chat interface isn't the answer for most products)
5. **Distribution** (already have the user base)
6. **Trust / compliance** (SOC 2, HIPAA, on-prem deployment)
7. **Latency / quality SLA** (better than ChatGPT for specific task)
8. **Cost engineering** (cheaper to serve = lower price = higher conversion)

## Engineering Cost Inversion

Traditional SaaS: 60-70% of cost is people, 5-10% is infra
AI products: 40-50% people, 25-40% inference

**Implications:**
- Smaller engineering teams (LLMs do more per engineer)
- Cost optimization team (caching, routing, fine-tuning)
- Different ratios: 1:1 backend:ML eng instead of 4:1 SE:ML

## Common AI Product Anti-Patterns

| Anti-Pattern | Why It Fails |
|--------------|-------------|
| "ChatGPT but for X" | No moat, OpenAI launches your feature |
| Charging for the LLM (passing through cost) | Users compare to GPT directly |
| Generic chatbot UI | Chat is wrong UX for most workflows |
| Heavy prompt engineering as moat | Trivially copyable |
| Marketing AI features without demo | Users skeptical now |
| Promising AGI-level outcomes | Sets unrealistic expectations, churn |

## What Investors Look For

- Clear moat beyond the foundation model
- Path to >70% gross margin
- Retention curves (most AI products have terrible retention)
- Distribution advantage
- Vertical/use-case ownership
- Engineering team that's done ML before (not just prompt engineers)
