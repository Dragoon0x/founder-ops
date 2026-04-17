# AI-Native Products — Operating Manual

## If you're new to AI products

You're competing with both incumbent SaaS adding AI features AND with
the foundation models themselves potentially eating your use case. The
moat is rarely the model — it's distribution, data, workflow, or UX.

## Stage Operating Priorities

### Pre-PMF
- Pick a use case the foundation models DON'T solve well
- Build a prototype in a week using API + prompts
- Get 10 users immediately, measure retention
- Don't fundraise on "GPT wrapper" thesis — investors are skeptical

### Early PMF
- Optimize for retention (huge problem in AI products)
- Cost engineering: route between models, cache aggressively
- Vertical depth or workflow integration > horizontal "AI for X"
- Watch model providers' roadmap obsessively

### Scaling
- Differentiation needs to compound (data, workflow, integrations)
- Cost engineering team
- Enterprise tier (data privacy, on-prem deployment options)
- Compliance for regulated industries

### Growth
- Multi-model architecture
- Possibly fine-tuned or proprietary models
- Distribution and integration moats
- International expansion

## The Moat Question

You need to answer: "If OpenAI/Anthropic ships your feature next month,
what do users still come to you for?"

Valid moats:
- **Workflow integration**: Lives in their CRM, IDE, design tool
- **Vertical depth**: Knows healthcare/legal/finance better
- **Data accumulation**: User data improves the product over time
- **Distribution**: Already have the relationship/users
- **UX innovation**: Chat is wrong UX for most workflows
- **Compliance**: SOC 2, HIPAA, on-prem
- **Cost engineering**: Cheaper to serve = better unit economics
- **Latency/reliability**: Better SLA than ChatGPT for specific task

Invalid moats:
- "Better prompts"
- "Our wrapper has nicer UI"
- "We chain multiple LLM calls"

## Mode Overrides for AI Products

### `pricing-deeper`
AI pricing dilemma: cost is variable, customers want flat
- Subscription: cleanest, but exposes you to high-usage users
- Credits/tokens: aligns with cost, confusing UX
- Usage-based: works for API products
- Hybrid (sub + overage): most common

Consumer AI sweet spot: $20/month
Pro/business AI: $30-100/month
Enterprise AI: $50-500/seat/month

### `metrics`
AI-specific metrics:
- Cost per query / inference
- Quality score (eval framework needed)
- Cache hit rate
- Model routing distribution
- User satisfaction (thumbs up/down)
- Time to value
- Retention curves (notoriously bad for AI products)

### `growth`
AI product channels:
- Building in public on Twitter/X
- Demo videos (LLM products are visual)
- Product Hunt launch (mixed signal)
- Open source companion (showing technical depth)
- Specific use-case SEO ("[task] with AI")
- Avoid: AI directories (low quality traffic)

### `tech-strategy`
AI-specific tech decisions:
- Foundation model: stay multi-model from day 1
- Caching strategy (semantic + exact)
- Eval framework (test changes before deploying)
- Cost monitoring per user / per query
- Rate limiting (abuse is real)
- PII handling (especially for enterprise)

## Cost Engineering Priorities

In order of impact:
1. **Caching** — semantic cache + exact match cache (50-80% savings on repeated queries)
2. **Model routing** — small model for easy queries, large for hard (40-70% savings)
3. **Prompt optimization** — shorter prompts, fewer tokens (20-50% savings)
4. **Batching** — for non-realtime workloads (30-50% savings)
5. **Fine-tuning** — for specific tasks (60-90% savings vs frontier model)
6. **Self-hosting** — for high volume + simple tasks (variable savings)

## AI Product Anti-Patterns

| Pattern | Why It Fails |
|---------|-------------|
| ChatGPT wrapper for vague use case | OpenAI launches it next |
| Charging for the LLM (passthrough) | Users compare to GPT directly |
| Generic chatbot UI | Wrong UX for most workflows |
| No eval framework | Quality regressions invisible |
| Single model dependency | Vendor lock + cost + reliability risk |
| Marketing AI features without demo | Skepticism is high |
| Promising AGI outcomes | Sets unrealistic expectations |
| Ignoring retention until later | Compounds against you |

## Reference Benchmarks

See `benchmarks/ai-products.md` for gross margin, retention, conversion,
and pricing benchmarks specific to AI-native products.
