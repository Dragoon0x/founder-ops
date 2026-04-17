# Developer Tools Benchmarks

Devtools have unique dynamics: developers as buyers, free tiers as
acquisition, expansion via team adoption, OSS as moat.

## PLG / Self-serve Developer Tools (Vercel, Linear, Plausible)

| Metric | Healthy |
|--------|---------|
| Free → paid conversion (signup → paying) | 2-5% |
| Time to convert | 30-90 days median |
| Free tier MAU | 10-100x paid users |
| ARPU (paid users) | $20-200/month |
| Net retention | 130-160% (very high — teams expand) |
| Logo retention | 90%+ |
| Annual contract mix | 60-80% (after team adoption) |

## Bottom-Up Sales (Atlassian, GitHub, MongoDB pattern)

Stage 1: Self-serve adoption by individual devs
Stage 2: Team-paid expansion (Pro tier)
Stage 3: Enterprise contracts (with security/compliance)

| Stage | ARR per Account |
|-------|----------------|
| Individual | $20-100/month |
| Team | $200-2K/month |
| Department | $5K-50K/year |
| Enterprise | $50K-500K+/year |

## OSS-Adjacent Companies (HashiCorp, Confluent, Elastic)

| Metric | Range |
|--------|-------|
| OSS users : paying customers | 1,000:1 to 10,000:1 |
| OSS download to enterprise customer conversion | 0.05-0.2% |
| Avg ACV (enterprise) | $100K-$500K |
| Sales-assisted close: 70-90% of revenue |

## Developer Acquisition Channels (effectiveness)

| Channel | Quality | Cost |
|---------|---------|------|
| Organic search (technical content) | High | Time-intensive |
| Open source contribution | Very high | High effort, no $ |
| Hacker News launch | High but spiky | Free |
| Developer conferences | Medium-high | $5K-50K per event |
| Twitter/X tech community | High | Founder time |
| Reddit (r/programming, r/javascript) | Medium | Free, careful tone |
| Dev podcasts | Medium-high | Free, founder time |
| Sponsorships (newsletters, podcasts) | Medium | $1-10K per drop |
| Paid search | Low-medium | $5-50/click |
| LinkedIn | Low | Don't bother for IC engineers |
| Cold email | Low to mid (unless senior) | $0-2K/month |

**Devs hate ads, marketing, sales.** Build in public, ship in public, write
in public. Conversions follow.

## Documentation Quality Bar

For PLG devtools, docs ARE the product:
- Time to first "Hello World": <5 minutes
- Time to production-ready: <1 hour
- Quickstart guide: yes
- Reference docs: full coverage of API
- Examples: minimum 10 working examples per major feature
- Search: dedicated docs search

Bad docs = 2-3x lower conversion, regardless of product quality.

## Developer Engagement Metrics

| Metric | Healthy |
|--------|---------|
| Docs page views per dev per month | 5-20 |
| Time to first deployment | <30 min |
| Weekly returning rate | 60-80% |
| Forum/Discord active members (% of users) | 5-15% |
| GitHub star ratio (stars / paid customers) | 50:1 to 500:1 |
| Time on docs per session | 3-15 min |

## Pricing Strategies

**Per-seat:** Linear, Notion — predictable, expansion via team growth
**Per-resource:** Vercel (per project), Render (per service) — usage-tied
**Per-usage:** Stripe (per transaction), AWS (per request) — fully variable
**Hybrid:** GitHub (per seat + per minute on actions) — best of both
**Capacity-based:** MongoDB Atlas (cluster size) — predictable platform spend

## Free Tier Calibration

Free tier should:
- Solve a complete problem for an individual or small team
- Hit a wall at team/scale boundary (force upgrade decision)
- Cost you <$1-5/free user/month to support

Common free tier mistakes:
- Too generous → no upgrade incentive (Cloudflare's strategy works because of platform play)
- Too stingy → no adoption
- Wrong metering → users hit limits unpredictably

## Dev Tool Sales Anti-Patterns

- Calling devs without permission (they hate this)
- "Schedule a demo" instead of letting them try
- Locking the docs behind signup
- Sales-led pricing without self-serve floor
- Hiding pricing
- Multi-step signup forms (>3 fields)
