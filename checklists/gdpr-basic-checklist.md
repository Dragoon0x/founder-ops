# GDPR Basic Checklist

For startups with EU users. Minimum viable compliance. Hire a lawyer for
anything beyond this.

## Scope Decision

Does GDPR apply to you?

- [ ] You have EU-based users (even 1 = yes)
- [ ] You process personal data of EU residents
- [ ] You offer goods/services targeting EU market
- [ ] You monitor behavior of EU users

If any = yes → GDPR applies.

## Data Mapping

- [ ] List every place you collect personal data (signup forms, analytics, support, etc.)
- [ ] For each: what data, why, how long retained, who has access
- [ ] Identify special category data (health, biometric, political — extra rules apply)
- [ ] Document transfer to third parties (vendors, subprocessors)

## Legal Basis

For each data processing activity, identify lawful basis:
- [ ] Consent (user explicitly opts in)
- [ ] Contract (needed to provide service)
- [ ] Legal obligation
- [ ] Vital interests (rare)
- [ ] Public task (rare)
- [ ] Legitimate interests (with documented balancing test)

Most SaaS startups rely on: contract + legitimate interests.

## Privacy Policy

- [ ] Published and accessible (footer link on every page)
- [ ] Written in plain language (not legalese — this is law)
- [ ] Covers:
  - [ ] What data you collect
  - [ ] Why you collect it (legal basis)
  - [ ] Who it's shared with (named where possible)
  - [ ] How long you retain it
  - [ ] User rights (below)
  - [ ] Contact for privacy questions (a real email, not legal@)
  - [ ] Your legal entity details
  - [ ] International transfer mechanism (SCCs if transferring to US)
- [ ] Last updated date visible
- [ ] Version history kept

## User Rights — Implement These

- [ ] **Right to access** — user can request all data you have on them
- [ ] **Right to rectification** — user can correct errors
- [ ] **Right to erasure** — "delete my account + data" flow
- [ ] **Right to restriction** — pause processing (rare to exercise)
- [ ] **Right to portability** — export data in machine-readable format
- [ ] **Right to object** — especially for marketing
- [ ] Response to requests within 30 days (must be free unless excessive)

### Implementation tactics
- [ ] In-app "Download My Data" button (JSON/CSV export)
- [ ] In-app "Delete My Account" flow
- [ ] Privacy request inbox or form (privacy@company.com)
- [ ] Process to respond within 30 days (escalation path)

## Consent

If you rely on consent (analytics, marketing emails):
- [ ] Explicit opt-in (not pre-checked boxes)
- [ ] Granular (separate consent for different purposes)
- [ ] Easy to withdraw
- [ ] Logged (when, what they consented to)
- [ ] Cookie banner compliant (if using non-essential cookies)

## Data Processing Agreements (DPAs)

- [ ] DPA signed with every vendor processing personal data on your behalf
- [ ] Inventory of processors (Stripe, SendGrid, Mixpanel, Intercom, etc.)
- [ ] Subprocessor list published (users can see who processes their data)

## Data Transfers

If you transfer EU data to US (most SaaS):
- [ ] Standard Contractual Clauses (SCCs) in place with US processors
- [ ] Transfer Impact Assessment (TIA) documented
- [ ] Supplementary measures documented (encryption, pseudonymization)

## Breach Notification

- [ ] Incident response plan includes GDPR 72-hour rule
- [ ] Template for supervisory authority notification prepared
- [ ] Template for user notification prepared

## Data Protection Officer (DPO)

- [ ] Required if: core activities involve large-scale monitoring or special category data
- [ ] Not required but recommended: a named privacy lead (even part-time)

## Practical Setup (Most Startups)

Small startups can meet minimum viable GDPR with:
- [ ] Clear privacy policy
- [ ] Cookie banner (if any cookies beyond strictly necessary)
- [ ] "Delete my account" in-app flow
- [ ] "Export my data" in-app flow
- [ ] privacy@ inbox with 30-day response SLA
- [ ] DPA on file with key vendors
- [ ] Documented data map
- [ ] Breach response plan

Don't over-engineer at Seed stage. Don't under-comply either.

## When to Get a Lawyer

- [ ] First 500 EU users
- [ ] Complex use case (health data, children, employment)
- [ ] Expanding to EU-specific products
- [ ] Enterprise customer asks for DPA with specific clauses
- [ ] Investigation or complaint from supervisory authority

## Fines to Know

- Technical/procedural violations: up to €10M or 2% of revenue
- Rights/consent violations: up to €20M or 4% of revenue

Most startups get a warning first. Don't get multiple warnings.

## Related
- `checklists/soc2-readiness-checklist.md`
- `modes/legal.md`
- `modes/security.md`
