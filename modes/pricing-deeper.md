# Mode: Pricing — Deep Dives

## Purpose

Beyond basic pricing experiments (`/founder-ops finance`). The strategic
pricing decisions: model selection, tier design, packaging, willingness-to-pay
research, price changes for existing customers.

## Submodes

### 1. Pricing Model Selection

| Model | Best For | Pros | Cons |
|-------|----------|------|------|
| Per seat | Collaboration tools | Predictable, easy to understand | Penalizes growth |
| Per usage | Infrastructure, APIs | Aligns price with value | Unpredictable bills, customer anxiety |
| Tiered (Good/Better/Best) | SaaS, broad market | Captures different segments | Complex pricing pages |
| Flat fee | Productized services, agencies | Simple | Doesn't capture value differences |
| Hybrid (base + usage) | Mid-market SaaS | Captures both | Complex |
| Per outcome | High-value B2B | Aligns incentives perfectly | Hard to define / measure |
| Free + paid (freemium) | Network effects, viral | Top of funnel | Conversion is hard |
| Free trial → paid | Most SaaS | Low friction trial | Trial extension wars |

### 2. Tier Design

**3-tier framework (Good / Better / Best):**

```
## Pricing Tiers

### Starter (Good) — $X/mo
For: [smallest customer segment]
Includes:
- [Core feature 1]
- [Core feature 2]
- [Core feature 3]
Limits: [user/usage caps]

### Pro (Better) — $X * 3/mo  ← anchor pricing here
For: [main customer segment, your ICP]
Everything in Starter, plus:
- [Premium feature 1]
- [Premium feature 2]
Limits: [higher caps]

### Enterprise (Best) — Contact us
For: [largest customers]
Everything in Pro, plus:
- SSO/SAML
- SLA guarantees
- Dedicated support
- Custom contracts
- Volume pricing
```

**Rules:**
- Pro should be 2-3x Starter (anchor effect)
- Most customers should be on Pro (60-70%)
- Starter exists to convert, not to sit on
- Enterprise should be qualified by sales (gate behind "Contact us")

### 3. Willingness-to-Pay Research

**Methods:**

**Van Westendorp (4 questions):**
1. At what price would [product] be so cheap you'd question quality?
2. At what price would [product] be a bargain?
3. At what price would [product] start to feel expensive?
4. At what price would [product] be too expensive?

Plot intersections to find optimal price range.

**Gabor-Granger:**
- Show 3-5 price points
- Ask: "Would you buy at $X?"
- Calculate revenue-maximizing price

**Direct customer interviews:**
- "What would you pay if there was no other option?"
- "What does your team budget for tools like this?"
- "What other tools cost about the same?"
- "What price would feel insulting to you (too cheap)?"

### 4. Value-Based Pricing

Calculate what you save / earn for the customer:

```
## Value Calculation — [Customer]

### Time saved
- Hours saved per week: X
- Hourly cost (loaded): $Y
- Annual time savings: X * Y * 52

### Revenue increased
- New revenue enabled: $X
- Increased close rate: Y%
- Annual revenue impact: $Z

### Cost reduced
- Tools replaced: $X/year
- Headcount avoided: $Y
- Annual cost savings: $Z

### Total annual value: $X
### Pricing target (10% of value): $X / 10 = $Y
```

**Rule of thumb:** Charge 10-25% of value created.
Below 10% = under-priced.
Above 25% = customer feels gouged, churns.

### 5. Price Changes (Increases)

**For new customers:** Easy. Just change the pricing page.

**For existing customers:** Carefully.

**Grandfather everyone OR grandfather nobody — never partial.**

**Communication template:**
```
Subject: A price increase for [Product]

[Customer name],

After 3 years of holding our prices flat, we're increasing prices effective [date].

Why now: [specific reasons — added features, infrastructure costs, value delivered]

What this means for you:
- New price: $X/month (currently $Y)
- Effective: [date — give 60+ days notice]
- 12-month price lock available if you renew now

We've also expanded what's included:
- [New feature added in last year]
- [New feature added in last year]
- [New feature added in last year]

If you have questions or want to discuss, reply directly or schedule time: [link]

Thank you for being part of [Product].

[Founder name]
```

**Rules:**
- 60+ days notice (legal in most jurisdictions, ethical everywhere)
- Offer annual lock-in at old price (rewards loyalty)
- Be direct about why
- Don't apologize — you've earned it
- Expect 3-7% churn (normal)

### 6. Pricing Page Design

**Above the fold:**
- Tier names (clear positioning)
- Price (no "starting at" — actual prices)
- "Most popular" badge on Pro tier
- 3-5 features per tier
- Primary CTA per tier

**Below the fold:**
- Full feature comparison table
- FAQ
- Customer logos
- Money-back guarantee (if applicable)

**Anti-patterns:**
- Hidden pricing ("Contact us" for everything except Enterprise)
- Per-feature add-ons (creates analysis paralysis)
- Daily pricing trick ($0.99/day vs $30/month)
- 5+ tiers
- "Free forever" without clear monetization path

### 7. Annual vs Monthly

| | Monthly | Annual |
|---|---------|--------|
| Price | $X | $X * 10 (saves 16%) |
| Cash flow | Smooth | Lumpy |
| Churn | Higher | Lower (locked in) |
| Sales cycle | Faster | Slower (procurement) |
| LTV | Lower | Higher |

**Default to annual at SMB+; offer both at SMB and below.**

### 8. Discounting Strategy

**When to discount:**
- Annual pre-payment (10-20% off)
- Multi-year contracts (additional 5-10% per year)
- Volume thresholds (per-seat discounts at 50, 100, 250 seats)
- Strategic customers (logo value > revenue)

**When NOT to discount:**
- Customer just asks for it (start with no)
- End of quarter (creates expectation)
- All requests treated equally (no negotiation skill needed)
- Below your floor (have a floor, never go below)

**Discount approval ladder:**
- AE: 0-10%
- AE Manager: 10-15%
- VP Sales: 15-25%
- CEO/Founder: > 25%

## Anti-Patterns

| Pattern | Problem |
|---------|---------|
| Pricing too low for "PMF" | Reinforces wrong customer segment |
| Letting customers pick the price | They'll always pick the lowest |
| Per-feature pricing | Overwhelming, creates negotiation hell |
| Free tier with no upgrade path | Just a cost center |
| Match competitor pricing exactly | Race to the bottom |
| Increase prices reactively (in panic) | Loses customer trust |
| Discount everyone | Resets the floor permanently |

## Output

- `reports/pricing-research-[date].md`
- `output/price-change-comm.md`
- `output/pricing-tiers-v[N].md`
