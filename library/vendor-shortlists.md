# Vendor Shortlists for Startups

Validated vendors per category. Last reviewed: April 2026.

## Engineering Infrastructure

**Hosting / Compute**
- Vercel (frontend, serverless)
- Render (backend, simple deploys)
- Fly.io (global edge, Postgres)
- Railway (developer-friendly Heroku-like)
- AWS / GCP / Azure (when scale requires)
- Cloudflare (workers, R2 storage, edge)

**Databases**
- Postgres (managed): Neon, Supabase, Railway Postgres, AWS RDS
- Vector: Pinecone, Weaviate, Qdrant (self-hosted), pgvector (Postgres extension)
- Cache: Upstash Redis, AWS ElastiCache
- Analytics: ClickHouse, BigQuery, Snowflake

**Authentication**
- Clerk (best for B2C and small B2B SaaS)
- WorkOS (enterprise SSO/SAML, AD)
- Auth0 (legacy enterprise)
- Supabase Auth (if using Supabase already)
- NextAuth (open-source, BYOI)

**Payments**
- Stripe (default for almost everyone)
- Paddle (global tax handling)
- Lemon Squeezy (merchant of record)
- Chargebee / Stripe Billing (subscription complexity)
- Maxio (formerly Chargify, advanced billing)

## Product & Design

**Design**
- Figma (universal)
- Penpot (open-source alternative)

**Product analytics**
- PostHog (open source, all-in-one — recommended)
- Mixpanel (powerful, expensive)
- Amplitude (powerful, expensive)
- June (B2B-specific)

**User research**
- Maze (unmoderated tests)
- UserTesting (moderated, expensive)
- Lookback / dscout (moderated)
- Notably (research repo)

**Session replay**
- PostHog (bundled)
- LogRocket
- FullStory (enterprise)

## Sales & Marketing

**CRM**
- Attio (modern, fast — recommended for early stage)
- HubSpot (broad, free tier good)
- Salesforce (enterprise only, painful at smaller scale)
- Folk (modern, simple)
- Affinity (relationship-based, VC favorite)

**Email outreach**
- Apollo (database + sequencing)
- Outreach / SalesLoft (enterprise sequencing)
- Lemlist (creative cold email)
- Smartlead (deliverability-focused)

**Email marketing**
- Resend (transactional, dev-friendly)
- Loops (modern, fast)
- Customer.io (advanced workflows)
- ConvertKit (creators, newsletters)

**Marketing automation**
- HubSpot (broad)
- Customer.io (data-driven)
- Default (modern alternative)

**Content / SEO**
- Ahrefs / Semrush (research)
- Frase (content briefs)
- Google Search Console (free, essential)
- Ghost / Webflow (publishing)

## Customer Success / Support

**Help desk**
- Plain (modern, dev-team friendly)
- Pylon (B2B SaaS focused)
- Intercom (broad, getting expensive)
- Front (shared inbox)
- Zendesk (enterprise legacy)

**Onboarding**
- Userpilot
- Appcues
- Pendo (enterprise)
- Userflow

**Customer success platforms**
- Vitally (modern, recommended)
- ChurnZero (mid-market)
- Gainsight (enterprise)
- Catalyst (newer entrant)

## Finance & Operations

**Accounting**
- QuickBooks Online (US default)
- Xero (UK / global)
- Pilot (bookkeeping service)
- Bench (bookkeeping service)

**Cap table & equity**
- Carta (default for funded startups)
- Pulley (strong alternative)
- Capbase (early-stage friendly)
- LTSE Equity (formerly Captable.io)

**Banking**
- Mercury (default for tech startups)
- Brex (cards + banking)
- Bluevine (small business)
- SVB (post-collapse, still functional)

**Expense management**
- Brex (cards + expense)
- Ramp (cards + expense + bill pay)
- Mercury (basic)

**Bill pay / accounts payable**
- Ramp Bill Pay
- BILL (formerly Bill.com)
- Mercury Bill Pay

**Payroll**
- Gusto (US small biz)
- Rippling (modern, scale-friendly)
- Justworks (PEO, includes benefits)
- Deel / Remote (international)

**HR / People**
- Rippling (broad)
- BambooHR (legacy mid-market)
- Notion (early stage, just a doc)

**Legal**
- Stripe Atlas (incorporation)
- Clerky (incorporation, hiring docs)
- LegalGPS (subscription legal)
- Vela (modern legal ops)

## Communication & Collaboration

**Internal comms**
- Slack (default)
- Discord (developer/community)
- Notion (docs, wiki)
- Linear (issues, projects)
- Loom (async video)

**Documentation**
- Notion (broad)
- Mintlify (developer docs)
- GitBook (technical docs)
- ReadMe (API docs)

**Calendar / scheduling**
- Google Calendar
- Calendly / SavvyCal
- Cal.com (open source)
- Vimcal (founder-friendly)

## Security & Compliance

**SOC 2 / Compliance**
- Vanta (default for startups)
- Drata (strong alternative)
- Secureframe
- Sprinto (cheaper, growing)

**Identity & access**
- 1Password Business
- Bitwarden (open source)
- Dashlane Business

**Penetration testing**
- Cobalt
- HackerOne / Bugcrowd
- Inhibit
- BishopFox

**Endpoint security**
- Kandji (Mac-focused, recommended)
- Jamf (Mac, enterprise)
- Crowdstrike (broad EDR)

## AI & Productivity

**AI coding**
- Cursor (default)
- Claude Code (terminal/agent)
- Aider (open source)
- GitHub Copilot

**AI writing/research**
- Claude (general)
- ChatGPT (general)
- Perplexity (research)
- Notion AI (in-context)

**Meeting AI**
- Granola (recommended for founders)
- Otter.ai (broad)
- Fireflies.ai
- Read.ai

## Vendor Selection Process

For each major vendor:
1. **Trial 2-3 alternatives** — never single-source big decisions
2. **Check pricing at scale** — current cost is misleading; project to your 12-month state
3. **Read the SLA** — what happens if they go down?
4. **Check security posture** — SOC 2 minimum for anything touching customer data
5. **Check the export path** — can you leave with your data?
6. **Read the contract termination clause** — what's the penalty for switching?
7. **Talk to 2-3 reference customers** — actual users, not the ones the vendor recommends
