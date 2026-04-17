# Product Hunt integration

## Why this matters
Product Hunt isn't a customer acquisition channel. It's a one-day signal flare
that compresses a year of feedback into 24 hours. Founder-ops treats it as a
launch instrument, not a lead source.

## What to wire (lightweight)

1. Product Hunt API key (developer.producthunt.com).
2. Set `PRODUCTHUNT_TOKEN` in `.env`.
3. Run `node scripts/ph-monitor.mjs` every 15 minutes during launch day.

## Pre-launch checklist (T-14 to T-0)

See `checklists/product-hunt-launch-checklist.md` for the full version. Highlights:
- T-14: Final asset shoot. Hero image, gallery (4-6), demo GIF (<10MB), tagline
  (60ch max), description (260ch first paragraph matters most)
- T-7: Hunter confirmed. Hunter is not a marketer; pick someone with reach in
  your category whose endorsement is real
- T-2: Notify your network. Personal DMs, not blast emails. ~50-100 personal DMs
  is the realistic threshold
- T-1: Prepare comment-storm answers. The first 5 hours of comments determine
  ranking. Have draft answers for the 10 questions you know are coming
- T-0: Launch at 12:01 AM PT. Yes, even if you live in Europe. Set a calendar
  alert. Be ready to respond for first 6 hours

## What to monitor (live)

- Upvote velocity (every 15min)
- Comment volume (engagement matters more than upvotes for ranking)
- Top-of-page time
- Daily rank
- Conversion from PH visit to signup (UTM-tagged)

## Post-launch (T+1 to T+7)

- Response to every comment within 24h (build fanbase)
- Ship one fix in public from feedback (signal you ship)
- Newsletter to PH signups within 48h with founding-customer offer
- Compile feedback into product backlog (this is the actual ROI)

## Honest expectations

- Top 5 of the day at launch generates roughly 1,000-3,000 visits, 50-300 trials,
  10-50 paying customers in B2B SaaS (varies wildly)
- The traffic spike lasts 3-5 days max
- The real value is the credibility badge for press and the cold raw feedback
  from people outside your bubble

## What founder-ops will NOT do

- Buy upvotes or coordinate fake engagement (banned, also embarrassing)
- Spam your own Slack/Twitter/Reddit (bad for the brand, and PH detects it)
