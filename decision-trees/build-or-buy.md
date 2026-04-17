# Build or Buy (software)

## Context
You need a capability. Build it in-house or use a third-party tool/library/service?

## The tree

### Step 1: Is this core to your competitive advantage?
- YES (it's the thing customers pay for): build.
- NO (it's infrastructure): strong lean toward buy.
- Ambiguous: proceed.

### Step 2: Does off-the-shelf exist and is it 80%+ of your need?
- YES: buy. Wrap with thin custom layer for the 20%.
- NO: proceed.

### Step 3: What's the cost comparison?
Build cost = eng-months × $25K/month (fully loaded) × 1.5 (risk padding).
Buy cost = annual SaaS × 5 years (TCO horizon for early-stage decisions).

Build often wins for multi-year horizons with simple capabilities. Buy usually wins for anything complex (auth, payments, search, monitoring, analytics).

### Step 4: Maintenance cost
Every line of code costs forever. Estimate 20% of build cost per year for maintenance.

Buy: vendor maintains, you pay subscription. Risk: vendor dies or 10x prices.
Build: you maintain. Risk: team grows, knowledge walks out the door.

### Step 5: Switching cost
If you buy and need to switch:
- Auth / payments: painful but doable (3-12 months)
- CRM: extremely painful (6-18 months)
- Analytics: medium (2-6 months)
- Email / marketing: medium (1-3 months)
- Database: extreme (6-36 months)

Factor switching cost into buy decision.

## Specific calls

### Buy (almost always)
- Auth: Clerk, Auth0, WorkOS, Supabase auth
- Payments: Stripe
- Email delivery: Resend, Postmark, SES
- Error monitoring: Sentry
- Analytics: PostHog, Mixpanel, Amplitude
- CRM: HubSpot or Salesforce depending on stage
- Accounting: QuickBooks, Xero, Pilot
- HR/Payroll: Gusto, Rippling
- Video calls: Zoom, Google Meet
- Cloud infra: AWS, GCP, Vercel, Fly, Render
- Search: Algolia, Typesense, Meilisearch

### Build (if core)
- Your actual product
- Your core data pipelines (if data is differentiator)
- Custom ML models (if that's your moat)
- Novel UX that's unique to your value prop

### Gray zone
- Internal dashboards: build if you have strong data platform, buy (Retool, Metabase) if not
- Feature flags: buy (LaunchDarkly, Statsig) unless you have 50+ engineers
- Workflow engines: buy (Temporal, Inngest) unless core business logic
- Auth for B2B SSO: buy (WorkOS, Clerk B2B)

## Tiebreakers
- **Team's energy.** Engineers want to build auth. Don't let them. It's not their job.
- **Hiring signal.** Would you hire someone just to maintain this? If no, buy.
- **Customer visibility.** Does the customer care that YOU built it? No? Buy.

## Common wrong answers
- "Building will be faster this time." (It won't.)
- "All vendors suck at X." (Usually means you don't know the vendor space.)
- "We can always build it later if the vendor gets expensive." (True but rare; you'll be bought into the data model.)
- "Not-invented-here is a red flag." (Stop building wheel.)

## Reversibility
- Buy → build later: possible with planning. Build migration path from day 1.
- Build → buy: always possible, often trades code-maintenance for vendor lock-in.
