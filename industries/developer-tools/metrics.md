# Developer Tools — Key Metrics & Benchmarks

## Core Devtool Metrics

### 1. Activated Developers
- **What**: Devs who completed first meaningful action (deployed something, ran first query, etc.)
- **Critical**: Define "activation" precisely for YOUR product
- **Benchmark**: 30-50% of signups should activate within 7 days

### 2. Time to First Value (TTFV)
- **What**: Minutes from signup to first "wow" moment
- **Benchmark**:
  - <5 min: Excellent (instant value)
  - 5-30 min: Good
  - 30-60 min: Acceptable for complex tools
  - 1+ hour: Most users will drop off

### 3. Daily Active Developers / Monthly Active Developers
- **DAU/MAU ratio**: Daily-use vs occasional-use
- **Benchmarks**:
  - 20%+: Occasional-use tools (CI/CD, deploy)
  - 50%+: Daily-use tools (IDEs, dashboards)
  - 70%+: Constant-use tools (language servers, terminals)

### 4. Self-Serve Conversion Rate
- **What**: % of signups that become paid (without sales touch)
- **Benchmarks**:
  - 1-3%: Typical for freemium with high free tier
  - 3-5%: Good
  - 5-10%: Excellent

### 5. PLG → Sales Touch Threshold
- **Common patterns**:
  - $5K ARR: Self-serve only
  - $5K-25K ARR: PQL (product-qualified lead) → sales-assist
  - $25K+ ARR: Sales-led with PLG support
  - $100K+ ARR: Full sales process

### 6. Net Revenue Retention (especially for usage-based)
- **Different math than seat-based SaaS**
- **Benchmarks**:
  - 100%: Stagnant
  - 110%+: Healthy
  - 130%+: Exceptional (Snowflake-tier)

### 7. Documentation Engagement
- **Pages per session**: Indicator of evaluation depth
- **Search queries**: What people are trying to do
- **Doc-to-signup conversion**: Are docs converting?

### 8. Community Health
- **GitHub stars** (if OSS): Vanity but useful
- **Discord/Slack member count and DAU**
- **Stack Overflow questions about your product**
- **NPM downloads / package install rates**
- **Conference talks featuring your product**

## Devtool-Specific Benchmarks

### Open Source Conversion (for COSS)
- **OSS users → Paid users**: 0.1-1% (most are non-paying forever)
- **Implication**: Need 100K-1M OSS users for $1M ARR
- **Critical**: Free tier must NOT be enterprise-ready

### API Pricing Patterns
| Pricing Model | When |
|---------------|------|
| Free tier with usage limit | Encouraging trial |
| Per API call / token | Linear scaling |
| Per resource (record, document) | Storage/database APIs |
| Per seat | Tools with collaboration |
| Hybrid (seat + usage) | Most common at scale |

### Developer Experience Metrics
- **Setup success rate**: % of users who complete setup without help
- **First success rate**: % who get first successful action
- **Time to first deploy / publish / send**: For specific products
- **Support ticket categories**: 80% of tickets = top friction points

## Stage-Based Benchmarks

| Stage | Devs (active) | ARR | OSS Stars (if applicable) | Team |
|-------|---------------|-----|--------------------------|------|
| Pre-seed | 100-1K | $0-50K | 100-2K | 1-3 |
| Seed | 1K-10K | $50K-1M | 2K-15K | 3-10 |
| Series A | 10K-100K | $1M-5M | 15K-50K | 10-30 |
| Series B | 100K-1M | $5M-25M | 50K+ | 30-100 |
| Series C+ | 1M+ | $25M+ | 100K+ | 100+ |

## Channel-Specific Metrics for Devtools

| Channel | Key Metric | Benchmark |
|---------|-----------|-----------|
| Hacker News launch | Front page = 10K-50K signups | 50%+ stay active 24hrs |
| Twitter/X | Engagement on technical content | Followers from devs |
| YouTube tutorials | Views → signups | 1-3% conversion |
| Conference talks | Conference attendance → signups | 5-15% within 30 days |
| OSS issue / PR engagement | Time to first response | <24 hours |
| Documentation SEO | Organic traffic to docs | 30%+ of total traffic |

## The "Stripe Test"

Stripe set the standard for devtool excellence:
- ✓ Sign up in <60 seconds
- ✓ First API call in <5 minutes
- ✓ Docs that are world-class
- ✓ Pricing transparent on the homepage
- ✓ Status page with real history
- ✓ Customer support that's actually technical

Score yourself against this. Below 4/6 = not yet competitive.
