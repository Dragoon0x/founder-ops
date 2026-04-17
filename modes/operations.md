# Mode: Business Operations

## Purpose

The boring stuff that keeps a startup alive. Process design, vendor
management, internal tools, business systems. NOT product engineering —
the stuff that makes the company run.

## Submodes

### 1. Business Systems Stack by Stage

| Stage | Required | Optional | Don't Bother |
|-------|----------|----------|--------------|
| Pre-seed | Email, Slack, Google Workspace, Notion | Stripe (when revenue) | CRM, HRIS, ERP |
| Seed | + Stripe, basic CRM (HubSpot free), simple accounting | Linear, Figma | Salesforce, Workday |
| Series A | + HubSpot/Salesforce, accounting (Quickbooks/Xero), HRIS (Rippling/Gusto) | Data warehouse, BI | Custom-built tools |
| Series B+ | + Snowflake/BigQuery, dbt, Looker/Hex, full ERP | Enterprise versions | Bespoke ERP |

### 2. Internal Tool Build vs Buy

For every internal tool decision:

```
## Build vs Buy — [Tool Category]

### Buy if
- Total cost < 1 engineer-month/year
- Solution exists and serves 80% of need
- Not core to your competitive advantage
- Vendor lock-in acceptable
- Time to value < 2 weeks

### Build if
- Core to your business model
- Existing tools fit < 50% of need
- You'll iterate weekly
- Cost of vendor exceeds 5x build cost over 3 years
- Customer-facing differentiator

### Almost always BUY
- Email
- Calendar
- Document storage
- Payment processing
- Authentication
- Analytics (basic)
- Support tools
- HRIS

### Sometimes BUILD
- Customer-facing dashboard
- Internal admin
- Data pipelines (if heavy ML)
- Workflow automation (if unique)

### Hybrid
- Buy the platform, build the customizations
- Use Retool/Internal/Pory for low-code internal tools
```

### 3. Vendor Selection Framework

```
## Vendor Evaluation — [Category] — [Date]

### Requirements (must-have)
- 
- 

### Nice-to-have
- 

### Vendors evaluated
| Vendor | Pricing | Key Pros | Key Cons | Decision |
|--------|---------|----------|----------|----------|
|  |  |  |  |  |

### Decision criteria weighting
- Functionality fit: 40%
- Total cost (3yr): 25%
- Ease of switching: 15%
- Vendor stability: 10%
- Integration with existing stack: 10%

### Recommendation
[Vendor] because [reasons]
Migration plan: [steps + timeline]
Total 3-year cost: $[X]
```

### 4. Process Documentation

When to document a process:
- 3+ people will do it
- It's done > monthly
- Mistakes cost > $1K
- Customer-facing
- Compliance-relevant

```
## Process — [Name]

### Purpose
[Why this process exists]

### Owner
[Single person responsible]

### Inputs
- [What's needed to start]

### Steps
1. [Action] (owner: [role], expected time: [duration])
2. [Action]
3. [Action]

### Outputs
- [What's produced]

### Quality bar
- [How we know it was done right]

### Common failures
- [What goes wrong, how to recognize, how to fix]

### Last reviewed
[Date - reassess every 6 months]
```

### 5. Renewal/Cancel Cycles

Track every recurring vendor cost:

| Vendor | Annual Cost | Renewal Date | Decision Needed By | Status |
|--------|------------|--------------|-------------------|--------|
| AWS | $24K | Auto | Quarterly review | Keep |
| Vercel | $1.2K | 2026-08 | 2026-07-15 | Evaluate |
| Notion | $3.6K | 2026-09 | 2026-08-15 | Keep |

**Set calendar reminder 30 days before each renewal.** Auto-renewal is a
silent budget killer.

### 6. SaaS Cost Audit (quarterly)

For each SaaS subscription:
- [ ] How many active users (vs paid seats)?
- [ ] When was it last used?
- [ ] What does it do that another tool we have can't?
- [ ] Could we negotiate the price down?
- [ ] Is there a cheaper competitor that meets 80%?

Typical findings:
- 30-40% of SaaS spend is on tools used by < 50% of paid seats
- 10-20% of tools haven't been opened in 30 days
- Annual contracts can usually be renegotiated 15-30% down

### 7. Compliance & Legal Hygiene

By stage:

**Pre-seed:**
- Incorporation in DE
- Founders' agreement
- Standard ToS / Privacy Policy

**Seed:**
- Above + 
- Standard MSA template
- Standard NDA template
- IP assignment from all contractors
- Employee/contractor agreements

**Series A:**
- Above +
- SOC 2 (if B2B SaaS)
- Data Processing Agreement (DPA) template
- GDPR compliance review
- CCPA compliance (if California)

**Series B+:**
- Above +
- ISO 27001 (if enterprise)
- HIPAA (if health)
- PCI DSS (if payments)
- Annual security audits
- General counsel (full-time)

### 8. Office / Workspace

| Stage | Setup |
|-------|-------|
| Pre-seed | Co-working day passes ($50-100/mo) |
| Seed (remote) | $200-300/mo home office stipend |
| Seed (in-person) | Sublet 2-4 desks ($1-3K/mo) |
| Series A (remote) | + co-working memberships, quarterly off-sites |
| Series A (in-person) | Direct lease (12-month, ~$10K/mo for 10 people) |
| Series B+ | Multi-year lease, dedicated office |

**Avoid early-stage:** Long leases, custom build-outs, expensive furniture.

## Anti-Patterns

| Pattern | Problem | Fix |
|---------|---------|-----|
| Building internal tools too early | Engineering spent on non-product | Buy until you can't |
| Ignoring SaaS sprawl | Death by $50/mo subscriptions | Quarterly audit |
| No process docs for things done weekly | Knowledge in heads, not systems | Document at 3+ users |
| Annual contracts without negotiation | Leaving 15-30% on the table | Negotiate every renewal |
| Office before team needs it | Burns cash, locks geography | Wait until 8+ in same city |

## Output

- `reports/saas-audit-[quarter].md`
- `output/vendor-eval-[category].md`
- `data/processes.md`
- `data/vendor-costs.md`
