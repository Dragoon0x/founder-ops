# CAC (Customer Acquisition Cost)

Almost every founder underreports CAC. Here's how to do it right.

## The formula

CAC = fully-loaded sales + marketing spend / new customers acquired (same period)

**Fully-loaded S&M means:**
- Sales team salaries (AEs, BDRs, SEs, sales managers)
- Marketing team salaries
- Ad spend (Google, Meta, LinkedIn, etc.)
- Events, sponsorships, trade shows
- Content production (blog, video, podcasts, SEO agency)
- Tools (CRM, marketing automation, outbound tools, analytics)
- Commissions and bonuses
- Sales travel and entertainment
- Marketing agency fees

**Common exclusions that are wrong:**
- "We don't count CS salaries" → right, those belong in COGS or retention
- "We don't count founder time" → wrong at early stage; attribute a fair % if founder is selling
- "We don't count brand spend" → wrong; it's marketing, period

## Blended vs paid CAC

**Blended CAC:** all S&M / all new customers (organic + paid).

**Paid CAC:** paid-channel S&M / customers from paid channels only.

**Organic CAC:** organic-channel cost (SEO, PR, content salaries) / organic customers.

Reporting ONLY blended makes organic-heavy companies look great when ad scale is broken. Reporting ONLY paid hides the fact that organic is capped.

Report both.

## CAC by channel

Break down CAC by channel:

| Channel | Cost | Customers | CAC |
|---------|------|-----------|-----|
| Google Ads | $50k | 20 | $2,500 |
| LinkedIn Ads | $30k | 8 | $3,750 |
| SEO/content | $25k | 15 | $1,667 |
| Outbound (BDR salary+tools) | $60k | 10 | $6,000 |
| Referrals | $5k | 8 | $625 |
| Events | $40k | 4 | $10,000 |

Cut channels where CAC > 0.33 × LTV. Double down where CAC < 0.2 × LTV.

## Time lag issues

Marketing spend this month produces customers 2-6 months later (especially for content/SEO). Ad spend produces customers in days.

Use trailing 3-month average for CAC to smooth noise.

For content/SEO, lag is 6-12 months. Separate those attribution models.

## CAC over time

Expect CAC to RISE as you scale. Why:
- Easy wins go first
- Ad auction prices rise as you bid more
- Brand saturation in your ICP
- Competitors bid up keywords
- Harder-to-convert segments remain

Plan for 10-30% CAC inflation year over year at minimum.

## Blended CAC = weighted average

If:
- 40% of customers from organic (CAC $500)
- 60% of customers from paid (CAC $4,000)

Blended = 0.4 × $500 + 0.6 × $4,000 = $2,600

Mix shift matters. If organic % drops from 40% to 20%, blended CAC jumps even though each channel's CAC didn't change.

## CAC payback

CAC payback = CAC / (monthly gross profit per customer)

Where monthly gross profit = (ARR / 12) × gross margin

This is more actionable than LTV:CAC because it shows when you get cash back.

## Benchmarks

| Sector | SMB CAC | Mid-market CAC | Enterprise CAC |
|--------|---------|----------------|----------------|
| SaaS horizontal | $500-1,500 | $5,000-15,000 | $30,000+ |
| SaaS vertical | $800-2,500 | $8,000-20,000 | $50,000+ |
| Fintech SMB | $300-1,000 | - | - |
| Consumer subscription | $30-150 | - | - |
| Marketplace (buyer) | $20-80 | - | - |
| Marketplace (seller) | $500-5,000 | - | - |

## Red flags

- CAC trending up AND LTV trending down = death spiral
- Paid CAC > 2× organic CAC AND paid % rising = scaling inefficiently
- CAC payback > 24 months (SMB) or > 36 months (enterprise) = model doesn't work
- CAC from same channel varies 3x month over month = attribution broken
