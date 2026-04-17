# SOC 2 Readiness Checklist

For startups needing SOC 2 Type 1 or Type 2. Typical first certification 
timeline: 3-6 months. Budget: $15K-50K (auditor + tooling).

## Phase 1: Decision (Month -1)

- [ ] Business case confirmed (customers asking, enterprise deals requiring)
- [ ] Audit firm selected (Vanta-partnered firm often fastest; or A-LIGN, Prescient, etc.)
- [ ] Scope chosen (Type 1 snapshot vs. Type 2 period)
- [ ] Trust Service Criteria selected:
  - [x] Security (required)
  - [ ] Availability (if uptime matters)
  - [ ] Confidentiality (if customer data requires)
  - [ ] Processing Integrity (rare for early-stage)
  - [ ] Privacy (if applicable)

## Phase 2: Tooling (Month 1)

- [ ] Compliance automation tool selected (Vanta, Drata, Secureframe, Thoropass)
- [ ] Tool integrations set up:
  - [ ] HR/IdP (Okta, Google Workspace, 1Password)
  - [ ] Cloud (AWS, GCP, Azure)
  - [ ] Code (GitHub, GitLab)
  - [ ] Monitoring (Datadog, etc.)
  - [ ] Endpoint (JumpCloud, Kandji)
- [ ] Auto-evidence collection confirmed running

## Phase 3: Policies & Processes (Months 1-2)

### Required policies (templates in Vanta/Drata)
- [ ] Information Security Policy
- [ ] Acceptable Use Policy
- [ ] Access Control Policy
- [ ] Password / Credential Policy
- [ ] Data Classification Policy
- [ ] Incident Response Policy
- [ ] Vendor Management Policy
- [ ] Business Continuity / Disaster Recovery Policy
- [ ] Change Management Policy
- [ ] Code of Conduct
- [ ] Background Check Policy

### Customization
- [ ] Policies customized to your actual operations (don't rubber-stamp)
- [ ] Policies reviewed by legal / compliance
- [ ] All policies have: version, owner, review date

## Phase 4: People Operations (Month 2)

- [ ] Employee acceptance of policies tracked (signature or tool)
- [ ] Background checks on all employees
- [ ] Security awareness training (annual)
- [ ] Onboarding checklist includes compliance
- [ ] Offboarding checklist (access revocation, device return)

## Phase 5: Technical Controls (Months 2-3)

### Access
- [ ] SSO for critical applications
- [ ] MFA enforced everywhere
- [ ] Least privilege access reviewed
- [ ] Access reviews quarterly (documented)

### Security
- [ ] Endpoint protection (antivirus, firewall)
- [ ] Encryption at rest (databases, S3)
- [ ] Encryption in transit (TLS 1.2+ everywhere)
- [ ] Secure development practices (code review, SAST)
- [ ] Dependency scanning (Dependabot, Snyk)

### Monitoring
- [ ] Log aggregation (1-year retention)
- [ ] Alerting for anomalies
- [ ] Uptime monitoring
- [ ] Vulnerability scanning (monthly)

### Incident Response
- [ ] Runbook for common incidents (see `checklists/incident-response-checklist.md`)
- [ ] On-call rotation
- [ ] Post-mortem template ready
- [ ] Customer notification policy

## Phase 6: Vendors (Month 3)

- [ ] Vendor inventory (every tool that touches data)
- [ ] Risk-rated vendors (critical / high / medium / low)
- [ ] SOC 2 reports collected for critical vendors
- [ ] DPAs signed where required

## Phase 7: Audit Prep (Month 4-5)

- [ ] Internal gap assessment complete
- [ ] All "No" items addressed in automation tool
- [ ] Auditor kickoff call
- [ ] Evidence bundle reviewed by auditor before audit

## Phase 8: Audit (Month 5-6)

- [ ] Audit meetings scheduled (typically 2-4 weeks)
- [ ] Evidence access granted to auditor
- [ ] Interviews conducted (CTO, HR, DevOps typically)
- [ ] Follow-up questions answered within 24h
- [ ] Remediations for findings (some always come up)

## Phase 9: Report (Month 6)

- [ ] Draft report reviewed
- [ ] Management response drafted for any exceptions
- [ ] Final report issued
- [ ] Customer sharing process established (NDA gates, hosted at Drata)
- [ ] Marketing announcement (if Type 1 → Type 2, share publicly)

## Ongoing (Post-Certification)

### Monthly
- [ ] Evidence collection running (automation)
- [ ] Vendor reviews as contracts come up

### Quarterly
- [ ] Access reviews
- [ ] Risk assessments
- [ ] Policy review

### Annually
- [ ] Type 2 audit for next period
- [ ] All policies reviewed and re-signed
- [ ] Security awareness training
- [ ] Pen test (often required by customers)

## Budget Reality Check

| Item | Cost |
|------|------|
| Compliance tooling | $8K-20K/year |
| Audit firm (Type 1) | $10K-20K |
| Audit firm (Type 2) | $20K-40K |
| Pen test | $8K-25K |
| Internal time | 100-400 hours |

Total first year: $40K-90K.

## Related
- `checklists/gdpr-basic-checklist.md`
- `checklists/incident-response-checklist.md`
- `modes/security.md`
