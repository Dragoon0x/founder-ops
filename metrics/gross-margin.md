# Gross Margin

## Definition
Revenue minus the direct costs of delivering the product/service, expressed as a percentage.

## Formula
```
Gross Margin = (Revenue - COGS) / Revenue × 100
```

## What counts as COGS for SaaS
- Cloud hosting / infrastructure costs (AWS, GCP, Azure)
- Third-party software embedded in your product (APIs, data providers)
- DevOps / site reliability team costs (salaries allocated to uptime)
- Customer support team costs (front-line support, not customer success)
- Payment processing fees (Stripe takes 2.9% + $0.30)
- Data storage and bandwidth costs

## What does NOT count as COGS
- R&D / product development salaries
- Sales and marketing costs
- G&A (finance, HR, legal)
- Customer success (account management, not support)

## Benchmarks

| Business Model | Target Gross Margin | Below This Is Concerning |
|---------------|-------------------|------------------------|
| Pure SaaS | 75-85% | < 70% |
| SaaS + services | 60-75% | < 55% |
| Infrastructure/platform | 50-70% | < 45% |
| Marketplace | 60-80% | < 50% |
| Hardware + software | 30-50% | < 25% |

## Why gross margin matters for valuation
SaaS companies are valued on revenue multiples, but only if margins justify it.
- 80% gross margin: 8-15x ARR multiple (capital efficient)
- 60% gross margin: 4-8x ARR multiple (heavier cost structure)
- 40% gross margin: 2-4x ARR multiple (not a "true" SaaS business)

## Improvement levers
1. **Optimize cloud spend**: Right-size instances, use reserved pricing, clean up unused resources
2. **Reduce API costs**: Cache aggressively, batch API calls, negotiate volume discounts
3. **Automate support**: Self-serve docs, chatbots for L1, reduce ticket volume
4. **Renegotiate vendors**: Annual renegotiation of infrastructure contracts
5. **Improve code efficiency**: Reduce compute per request (20% efficiency = 20% margin improvement on hosting)

## Alert thresholds
- Gross margin declining for 2+ consecutive quarters
- Gross margin < 70% and trending down (you're becoming a services business)
- Hosting costs growing faster than revenue (infrastructure doesn't scale linearly)
