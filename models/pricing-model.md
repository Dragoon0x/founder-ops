# Pricing Model Framework

## Pricing Architecture

### Value Metric
The unit you charge for. This should correlate with value delivered.

| Value Metric | Best For | Example |
|-------------|---------|---------|
| Per seat | Collaboration tools | Slack, Figma |
| Per usage | Infrastructure, data | AWS, Twilio |
| Per feature tier | Horizontal SaaS | Most B2B SaaS |
| Flat rate | Simple products | Basecamp |
| Per transaction | Marketplaces, payments | Stripe, Shopify |
| Per outcome | High-trust relationships | Performance marketing |

### Tier Structure
3 tiers is the sweet spot (paradox of choice with > 4, no anchor with < 3).

| Tier | Purpose | Pricing Strategy |
|------|---------|-----------------|
| Starter / Free | Acquisition, activation | Free or low-cost, core features only |
| Growth / Pro | Main revenue driver | 3-5x starter, full feature set |
| Enterprise | High-value accounts | Custom pricing, premium support, compliance |

### Pricing Research Methods
1. **Van Westendorp Price Sensitivity Meter**: Ask 4 questions to find the acceptable price range
2. **Conjoint analysis**: Trade-off analysis to find which features drive willingness to pay
3. **Competitor benchmarking**: What do alternatives charge? (But don't just copy)
4. **Customer interviews**: "If this solved [problem], what would you pay?" (Unreliable for exact price, useful for magnitude)
5. **A/B testing**: Test different prices on landing page (ethical if you honor the lowest tested price)

### Pricing Psychology
- Anchor high: Show enterprise price first, growth tier feels reasonable by comparison
- Annual discount: 15-20% discount for annual prepay (improves cash flow, reduces churn)
- Odd pricing: $49 vs $50 (consumer psychology, less relevant for B2B > $1K)
- Usage visibility: Show usage dashboards so customers see value before seeing the bill
- Upgrade triggers: In-product prompts when the customer hits a limit ("Upgrade to unlock X")

### Price Increase Framework
When to raise prices:
- NPS > 40 (customers love you enough to tolerate it)
- LTV/CAC > 5:1 (you have room)
- Significant new features/value added
- Market prices have increased
- You haven't raised in > 18 months

How much to raise:
- 5-10% annually is usually accepted without friction
- 10-20% requires clear value justification
- > 20% requires new tier or packaging restructure

See workflows/pricing-change.md for the execution playbook.
