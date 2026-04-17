# Pricing Models — Concrete Examples

## Per-Seat (User-Based)

**Best for:** Collaboration tools, productivity software, anything where more users = more value

**Examples:**
- Notion: $10/user/month (Plus), $15 (Business), $25 (Enterprise)
- Linear: $8/user/month (Standard), $14 (Plus)
- Slack: $7.25 (Pro), $12.50 (Business+), $15.50 (Enterprise+)
- Figma: $12/editor/month (Professional), $45 (Organization)

**Pros:**
- Predictable revenue
- Aligns with team growth
- Easy to forecast

**Cons:**
- Customer over-buys seats or under-buys (gaming)
- Doesn't capture value of individual usage
- Can be a barrier for large team adoption

## Tiered (Feature-Based)

**Best for:** Products serving multiple segments with different needs

**Examples:**
- Webflow: Starter ($14), Basic ($23), CMS ($39), Business ($49), Enterprise (custom)
- Stripe Atlas: One-time $500
- Zapier: Free, Starter ($30), Professional ($73), Team ($103), Company ($146)

**Pros:**
- Captures different segments
- Discovery via free/low tier
- Upgrade path is clear

**Cons:**
- Complexity
- Risk of confusion ("which tier do I need?")
- Can leave money on the table for power users

## Usage-Based

**Best for:** APIs, infrastructure, anything where consumption varies wildly

**Examples:**
- AWS: per request, per GB, per hour
- Stripe: 2.9% + $0.30 per transaction
- OpenAI API: per 1M tokens
- Twilio: per message
- Snowflake: per credit

**Pros:**
- Aligns price with value
- Low barrier to entry
- Scales with customer success

**Cons:**
- Unpredictable revenue
- Customer worry about runaway costs
- Forecasting harder for buyer and seller

## Hybrid (Subscription + Overage)

**Best for:** Most modern SaaS — predictable base + usage upside

**Examples:**
- Vercel: $20/seat (Pro) + usage overage
- HubSpot: monthly tier + per-contact overages
- Mailchimp: monthly tier + email volume
- Cloudflare: monthly tier + bandwidth/request overage

**Pros:**
- Predictability + alignment with growth
- Removes pricing barrier (subscription is the gate)
- Captures power users

**Cons:**
- Complexity in billing
- Customer surprise on bills (manage with alerts)

## Per-Resource / Per-Object

**Best for:** Infrastructure where customer thinks in units (databases, projects, sites)

**Examples:**
- Render: per-service ($7/month per web service, etc.)
- Heroku: per dyno
- MongoDB Atlas: per cluster
- Supabase: per project + tier

**Pros:**
- Maps to mental model
- Predictable for the customer

**Cons:**
- Can be gamed (combine resources)
- Creates incentives that don't align with product use

## Capacity-Based / Tier-Sized

**Best for:** Database, storage, anything where size of "thing" matters

**Examples:**
- MongoDB Atlas: per tier (M10 = $57/mo, M30 = $200/mo, etc.)
- Sentry: per 50K events/mo
- LogRocket: per session/recording

**Pros:**
- Customer chooses based on need
- Predictable revenue per customer

**Cons:**
- Customer often over-provisions
- Annoyance when hitting limits

## Freemium

**Best for:** Network effects products, distribution-led GTM

**Examples:**
- Slack (free for small teams, paid above 10K messages)
- Notion (free for individuals)
- Calendly (free with one calendar, $10+ for advanced)
- Loom (free with limited recordings)

**Pros:**
- Massive top-of-funnel
- Word of mouth distribution
- Real product feedback at scale

**Cons:**
- Conversion is hard (1-5% typical)
- Support cost on free users
- Feature gating creates frustration

## Free Trial (Time-Limited)

**Best for:** Self-serve products where users need to experience before buying

**Examples:**
- Most B2B SaaS: 14 or 30-day trial
- Adobe Creative Cloud: 7 days
- Linear: 14 days
- Notion: indefinite free, paid upgrade for advanced features

**Pros:**
- Lowers buying friction
- Forces decision (vs freemium drift)
- Higher conversion than freemium (10-30% in B2B)

**Cons:**
- Activation must happen FAST
- Support cost during trial
- Some users game by signing up multiple times

## Per-Outcome / Performance-Based

**Best for:** Marketing tools, hiring, anything where outcome is measurable

**Examples:**
- Most ad networks (per click, per impression, per conversion)
- Some HR tools (per hire)
- Affiliate platforms (per conversion)
- AppSumo (one-time per access)

**Pros:**
- Maximally aligned with customer success
- Easy ROI story

**Cons:**
- Requires great attribution
- Can incentivize gaming
- Disputes about outcome attribution

## Marketplace Take Rate

**Best for:** Two-sided marketplaces

**Examples:**
- Airbnb: ~14% (host + guest fees)
- Etsy: 6.5% + listing fee
- Fiverr: 20% from seller, ~5% service from buyer
- Upwork: 10% from freelancer + payment processing

**Pros:**
- Aligns with marketplace volume
- No upfront customer cost

**Cons:**
- Disintermediation risk above ~25%
- Hard to capture full value of platform

## Contract / Project (One-Time)

**Best for:** Services, implementations, agencies, training

**Examples:**
- Implementation fees (often one-time + ongoing subscription)
- Consulting engagements
- Training packages

**Pros:**
- Clear scope, clear price
- Captures value of work

**Cons:**
- Not recurring
- Renewal requires re-sale

## Pricing Mistakes to Avoid

| Mistake | Cost |
|---------|------|
| Underpricing for "PMF" | Reinforces wrong signal, hard to raise |
| Single tier (no upsell path) | Leaves money on table |
| Hiding pricing | Top-of-funnel friction |
| Pricing on cost (not value) | Low margin |
| Annual without monthly | Loses self-serve discovery |
| Hidden fees on bill | Trust erosion |
| Aggressive discounting at end of quarter | Trains customers to wait |
| Too many tiers (5+) | Decision paralysis |
| Tier names that don't communicate value | Confusion ("Standard" vs "Business") |
| Pricing that doesn't scale with value | Hits a ceiling at any one customer |

## Pricing Page Best Practices

1. **Show 3 tiers** (4 max) with the middle tier as the anchor
2. **Highlight a recommended tier** with visual emphasis
3. **Show annual price by default** (with monthly toggle)
4. **List features per tier as differentiators**, not as a feature dump
5. **Include "Enterprise" or "Custom" tier** at top end
6. **Show pricing for each tier explicitly** — never "Contact us" except enterprise
7. **Add FAQ below pricing** addressing top objections
8. **Link to comparison page** for detailed feature compare
9. **Include trust signals** (logos, testimonials, security badges)
10. **A/B test prices** with proper sample sizes (don't change weekly)
