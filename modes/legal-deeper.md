# Mode: Legal — Deep Dives

## Purpose

Beyond contract review (`/founder-ops legal`). The harder legal situations:
IP strategy, international expansion, equity disputes, employment issues,
acquisitions. NOT legal advice — guidance on when to call a lawyer and
what to ask.

## DISCLAIMER
This mode is educational only. NOT legal advice. Always consult a qualified
attorney for actual legal decisions.

## Submodes

### 1. IP Strategy

**Trademark:**
- File USPTO trademark BEFORE public launch
- Search USPTO database first (free)
- Cost: $250-350 USPTO fee + $1-3K legal
- Timeline: 6-12 months to registration
- Protects: Company name, product names, logos

**Copyright:**
- Automatic on creation (no filing needed)
- Register for valuable works ($45/work)
- Protects: Code, content, designs

**Patents:**
- Software patents are tricky and expensive
- Provisional patent: $130 USPTO + $5-10K legal, 12 months protection
- Utility patent: $1.6K USPTO + $15-30K legal, 20 years
- File only if: defensive moat, M&A signaling, regulatory differentiation
- Don't file if: not in roadmap, alternative implementations easy

**Trade secrets:**
- Free, no filing
- Protected by NDAs, employee agreements, access controls
- Best for: algorithms, customer lists, processes, formulas

### 2. Cap Table Hygiene

Mistakes are expensive (or fatal) to fix later:

**Day 1:**
- [ ] DE incorporation
- [ ] 83(b) election filed within 30 days of stock grant
- [ ] Founders' agreement with vesting
- [ ] All IP assigned to company

**Each round:**
- [ ] Cap table updated and shared with investors
- [ ] Pro forma cap tables for pre/post money
- [ ] Option pool sized appropriately (10-15% pre-A, 15-20% pre-B)
- [ ] Use software (Carta, Pulley, AngelList) — not spreadsheets

**Common cap table disasters:**
- Promised equity verbally, never papered (legal nightmare)
- Failed 83(b) election (massive tax bill)
- Co-founder leaves before vesting cliff (huge dilution)
- Investor MFN clauses creating waterfall complications
- Anti-dilution provisions misunderstood

### 3. International Expansion

**Selling internationally (no entity):**
- US LLC/Corp can sell to most countries
- VAT registration may be required (EU, UK)
- Use Stripe Tax / Vertex / Avalara for tax compliance
- Currency: charge in USD initially, expand later

**Hiring internationally (no entity):**
- Use Employer of Record (EOR): Deel, Remote, Rippling EOR
- Cost: $500-700/employee/month over their salary
- Trade-off: simple but expensive long-term
- Switch to direct entity at 5-10 employees in same country

**Setting up an entity:**

| Country | Setup Cost | Annual Cost | Time |
|---------|-----------|-------------|------|
| UK | £500-2K | £3-10K | 2-4 weeks |
| Ireland | €5-10K | €15-30K | 4-8 weeks |
| Singapore | S$5-10K | S$15-30K | 4-8 weeks |
| Germany | €15-25K | €30-60K | 8-12 weeks |
| India | ₹50K-2L | ₹2-5L | 4-8 weeks |
| Brazil | R$20-50K | R$50-200K | 12-24 weeks |

### 4. Employment Issues

**Termination:**
- Always document performance issues (PIP if applicable)
- Get legal review for terminations of:
  - Anyone with > 6 months tenure
  - Anyone in protected class who's complained
  - Anyone with disability accommodation
  - Anyone who took FMLA recently
- Provide severance in exchange for release (typical: 1-2 weeks/year, 12 weeks min for execs)

**Discrimination/harassment claims:**
- Take seriously immediately
- Engage outside HR investigator (not internal)
- Don't retaliate (huge legal exposure)
- Document everything
- Consider: D&O insurance + EPLI insurance

**Equity disputes:**
- Disgruntled ex-employee claiming verbal promise
- Co-founder leaving and claiming larger share
- Always get equity grants in writing, board-approved, signed

### 5. Customer Disputes

**Refund demands:**
- Have written refund policy
- Document customer behavior (abuse / fraud)
- For larger disputes: small claims court is rare but possible

**Service outage damages:**
- Liability cap in MSA (typically 12 months of fees)
- SLA credits (not cash refunds)
- Force majeure clauses for cloud provider issues

**Data breach:**
- Notify customers per contract terms
- Notify regulators per applicable law (GDPR: 72 hours)
- Engage breach counsel immediately
- Have cyber insurance

### 6. Vendor Disputes

When a vendor screws you:

1. Document the failure (emails, support tickets, timeline)
2. Reference the SLA/contract terms violated
3. Demand specific remedy (credit, fix, termination)
4. Escalate to their account exec, then their legal
5. If unresolved: dispute the chargeback (if recent), small claims (< $10K), or breach of contract

### 7. M&A Preparation

If acquisition is on the horizon:

**6-12 months before:**
- Clean cap table
- Audited financials (Series A+)
- All IP assigned and documented
- Employee agreements in order
- All commercial contracts assignable
- Customer concentrations documented
- Pending litigation: none or disclosed

**Common deal-killers in due diligence:**
- IP not properly assigned (ex-contractor, ex-employee)
- Material customer dependency (> 20% of revenue)
- Pending litigation
- Tax issues (sales tax in states where you didn't register)
- Cap table errors
- Promised equity not granted
- Open source license violations (GPL, AGPL contamination)

### 8. When to Hire In-House Counsel

**Don't hire in-house counsel until:**
- Series A+ with $5M+ ARR, OR
- Spending > $20K/month on outside counsel, OR
- Highly regulated (fintech, healthtech)

**Hire fractional GC first:**
- 5-15 hrs/week from former AmLaw partner
- $300-500/hr (cheaper than outside counsel)
- Familiar with your business

**Full-time GC:** Series B or 50+ employees

## Anti-Patterns

| Pattern | Risk |
|---------|------|
| DIY contracts pulled from internet | Provisions may not apply / be unenforceable |
| Verbal equity promises | Legal nightmare, lawsuit risk |
| Skip 83(b) election | Massive tax bill years later |
| No IP assignment from contractors | They own their code |
| Ignore international compliance | Fines, can't sell in market |
| No cyber insurance | Catastrophic if breach happens |
| Friend-of-friend lawyer | Often wrong specialty |

## When You Need a Lawyer (always)

- Anything involving the cap table
- Any acquisition / M&A discussion
- Any equity dispute
- Any termination of someone in protected class
- Any data breach
- Any regulatory inquiry
- Any threatened lawsuit
- Any contract > $50K or > 24 months
- International entity setup
- Any IP transfer

## Output

- `output/ip-strategy.md`
- `reports/cap-table-audit.md`
- `output/legal-issues-tracker.md`
