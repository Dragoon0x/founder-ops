# Mode: Security & Compliance

## Purpose

Build security incrementally. Pass enterprise security reviews without
hiring a CISO at seed. Avoid the breach that ends your company.

## Submodes

### 1. Security Maturity by Stage

| Stage | Required | Recommended | Don't Bother |
|-------|----------|-------------|--------------|
| Pre-seed | Strong passwords, MFA, backups | Encrypted laptops | SOC 2, pen tests |
| Seed | + role-based access, secrets manager, basic logging | Vulnerability scanning | ISO 27001 |
| Series A | + SOC 2 Type I, vulnerability mgmt, security training | SOC 2 Type II, pen test | FedRAMP |
| Series B+ | + SOC 2 Type II, ISO 27001 (if enterprise), pen tests | HIPAA/PCI (if relevant) | — |

### 2. The Security Basics (every company)

**Identity & access:**
- [ ] MFA on every critical service (Google, GitHub, AWS, Stripe, payroll)
- [ ] SSO via Google/Microsoft for all SaaS where supported
- [ ] Password manager (1Password / Bitwarden) for everyone
- [ ] No shared accounts (separate logins per person)
- [ ] Quarterly access review (who has access to what — still need it?)

**Devices:**
- [ ] Full disk encryption on all laptops (FileVault/BitLocker)
- [ ] Auto-screen-lock < 5 min
- [ ] OS auto-update enabled
- [ ] Remote wipe capability (MDM at Series A+)

**Code & infrastructure:**
- [ ] No secrets in source code (use AWS Secrets Manager, Vault, etc)
- [ ] Branch protection on main (require reviews)
- [ ] Dependency scanning (Dependabot, Snyk)
- [ ] HTTPS everywhere
- [ ] Database encryption at rest

**Backups:**
- [ ] Automated daily backups
- [ ] Backups stored separately from production
- [ ] Test restore quarterly
- [ ] Backups encrypted

### 3. SOC 2 Roadmap

**Type I (point-in-time):** 3-6 months effort, $20-40K + auditor

**Process:**
1. Choose framework auditor (Vanta, Drata, Secureframe — automation tools)
2. Engage auditor firm (separate from automation)
3. Implement controls (mostly written policies + tooling)
4. Evidence collection period (1 month for Type I)
5. Audit (4-8 weeks)
6. Receive report

**Common controls:**
- Documented security policies (employee handbook section)
- Background checks for all employees
- Annual security training
- Incident response plan
- Change management (code review, approvals)
- Access reviews (quarterly)
- Vendor management

**Type II (over time):** 6-12 month observation period, $30-50K + auditor

**Most enterprise customers will accept Type I initially, then require Type II within 12 months.**

### 4. Customer Security Reviews

Enterprise customers will send a security questionnaire. Be ready:

```
## Security Documentation Pack

1. Security Whitepaper (10-15 pages)
   - Architecture diagram
   - Data flow
   - Encryption (in transit, at rest)
   - Access controls
   - Incident response
   - Backup & recovery

2. Standard Information Gathering (SIG) responses
   - Pre-fill SIG Lite (50 questions) and SIG Full (300+)

3. SOC 2 report (under NDA)

4. DPA template

5. Subprocessor list

6. Penetration test summary (if Series A+)
```

Having these pre-built saves 2-4 weeks per enterprise deal.

### 5. Incident Response Plan

```
## Incident Response Plan

### Severity levels
- SEV 1: Customer data breach, total outage > 1 hour
- SEV 2: Partial outage, security vulnerability discovered
- SEV 3: Single customer issue, suspicious activity
- SEV 4: Known issue, low impact

### Roles
- Incident Commander: [name + backup]
- Communications Lead: [name + backup]
- Technical Lead: [name + backup]

### Process
1. Detect (alert / report / monitoring)
2. Assess (severity, scope, impact)
3. Contain (stop the bleeding)
4. Eradicate (remove root cause)
5. Recover (restore service)
6. Learn (post-mortem within 7 days)

### Communication templates
- Internal: Slack #incidents within 5 min
- Customer: Status page update within 30 min for SEV 1-2
- Legal: For data incidents, contact counsel within 1 hour

### Post-mortem (blameless)
- What happened (timeline)
- What was the impact
- What was the root cause
- What worked well
- What didn't work
- Action items (with owners + dates)
```

### 6. Vulnerability Management

| Severity | Time to Patch |
|----------|--------------|
| Critical (CVSS 9.0+) | 24 hours |
| High (CVSS 7.0-8.9) | 7 days |
| Medium (CVSS 4.0-6.9) | 30 days |
| Low (CVSS < 4.0) | 90 days or risk-accept |

**Sources:**
- Dependabot / Snyk for dependencies
- AWS Inspector / similar for infrastructure
- Pen test findings
- Bug bounty (Series B+)
- Responsible disclosure (security@ email)

### 7. Data Privacy Hygiene

**For US customers:**
- Privacy Policy compliant with CCPA (California)
- Right to deletion
- Right to access
- Data inventory (what data, where stored, how long)

**For EU customers:**
- GDPR Article 30 records
- DPO if processing requires (most B2B SaaS doesn't)
- Standard Contractual Clauses for US data transfer
- Data subject access request (DSAR) process — 30 day response

**For health data:** HIPAA + BAA with all subprocessors

**For payments:** PCI DSS (mostly handled by Stripe if you don't store cards)

### 8. Phishing & Social Engineering Defense

Most breaches start with phishing:
- Annual security awareness training
- Quarterly simulated phishing (KnowBe4 / similar)
- Wire transfer verification policy (always voice-confirm > $5K)
- Vendor change verification (callback to known number)
- Beware of "CEO emails asking for gift cards" (classic scam)

## Anti-Patterns

| Pattern | Problem | Fix |
|---------|---------|-----|
| Wait for breach to invest | Too late | Build basics from day 1 |
| Hire CISO at seed | Premature, expensive | Use security platform + part-time CISO |
| Skip SOC 2 to save money | Lose enterprise deals | Worth $30-50K when first $1M deal needs it |
| Manual access reviews | Drift, no audit trail | Automate with Vanta/Drata |
| No incident response plan | Chaos during incident | Plan + run drills |

## Output

- `output/security-whitepaper.md`
- `data/security-controls.md`
- `reports/incident-postmortem-[date].md`
- `reports/access-review-[quarter].md`
