# Mode: Legal

## Purpose

Flag legal issues, NOT provide legal advice. Founder-ops helps you know
when to call a lawyer (and which questions to ask).

## DISCLAIMER
This mode is for educational purposes only. It is NOT legal advice.
Always consult a qualified attorney for actual legal decisions.

## Submodes

### 1. Contract Review Flags

When reviewing a contract (customer, vendor, employment, partnership),
flag these:

**Customer contracts:**
- [ ] Termination clause (notice period, reasons allowed)
- [ ] Payment terms (net 30? net 60? upfront?)
- [ ] Liability caps (usually 12 months of fees)
- [ ] Indemnification (who's on the hook for what)
- [ ] IP ownership (who owns what they create with your product)
- [ ] Data handling (GDPR, CCPA, data retention)
- [ ] Security requirements (SOC 2, ISO 27001, etc.)
- [ ] SLA commitments (uptime guarantees, penalties)
- [ ] Auto-renewal (opt-out period)
- [ ] MFN clauses (must offer them best price)

**Vendor contracts:**
- [ ] Same as above, reversed
- [ ] Data processing agreement (DPA) for any vendor that touches PII
- [ ] Right to audit
- [ ] Exit terms (what happens to your data)
- [ ] Pricing escalation (how much can they raise prices)

**Employment contracts:**
- [ ] At-will vs fixed term
- [ ] IP assignment (comprehensive)
- [ ] Non-compete (often unenforceable but varies by state)
- [ ] Severance terms
- [ ] Equity vesting (4 years, 1 year cliff standard)
- [ ] Acceleration on termination or acquisition

**Partnership contracts:**
- [ ] Exclusivity (avoid unless critical)
- [ ] Revenue share calculation method
- [ ] IP ownership in joint work
- [ ] Term and termination
- [ ] Dispute resolution (arbitration vs courts)

### 2. Vendor Evaluation

For any vendor handling customer data or critical operations:

```
## Vendor Evaluation — [Vendor Name]

### Basics
- Website / Company
- Location / Jurisdiction
- Funding / Stability
- Team size

### Security
- Compliance: [SOC 2 / ISO 27001 / other]
- Data handling: [where, how encrypted]
- Breach history
- Security page (do they have one?)

### Legal
- Terms of service review
- Data processing agreement
- Liability limits
- Termination terms (what happens to your data)

### Risk Assessment
- What happens if they go out of business?
- What happens if they have a breach?
- Can we export our data?
- Are there data residency issues?

### Recommendation
Proceed / Proceed with conditions / Do not proceed
```

### 3. ToS / Privacy Policy Basics

Every product needs:
- **Terms of Service** — contract between you and users
- **Privacy Policy** — what data you collect and why
- **Cookie Policy** — if using tracking cookies

What they MUST include:
- Who you are (company name, address)
- What data you collect
- Why you collect it
- Who you share it with
- How users can delete their data
- Jurisdiction and dispute resolution
- Contact email for legal/privacy

Use a lawyer OR a trusted template service (Termly, Iubenda, TermsFeed).
Never copy a competitor's ToS verbatim.

### 4. When to Call a Lawyer (non-exhaustive)

Call a lawyer for:
- Any contract > $10K or > 12 months
- Any contract with a much larger company (they wrote it for THEM)
- Anything involving IP transfer or exclusivity
- Employment agreements (especially with equity)
- Incorporation and cap table decisions
- Fundraising documents (always)
- Any threatened or actual litigation
- Cross-border transactions
- Data privacy issues in regulated industries (health, finance, edu)

Don't call a lawyer for:
- Standard vendor signups (read the ToS yourself)
- Basic customer SaaS agreements under $10K
- Employment offers you've negotiated before
- Routine operational contracts

### 5. Common Early-Stage Legal Mistakes

| Mistake | Consequence | Fix |
|---------|-------------|-----|
| No IP assignment from contractors | They own their code | Always include IP assignment |
| Verbal agreements with co-founders | Cap table disputes | Founders' agreement early |
| No trademark on name | Competitor registers it | File trademark before launch |
| No terms/privacy policy | Non-compliance, liability | Use template service if no budget |
| Hiring without offer letters | Disputes over equity/terms | Always written offers |
| Using customer data beyond scope | Privacy violations | Explicit consent + purpose |

## Output

- `output/contract-review-[name].md` — flags + questions for lawyer
- `reports/vendor-evaluation-[name].md` — risk assessment
