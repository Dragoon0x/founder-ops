# Data Breach Playbook

Average cost of a data breach in 2025 was $4.88M globally, $9.48M in the US. Average time to identify and contain: 258 days. Your job is to compress that timeline and do right by your users.

## Hour 0 (detection)

Detection source will be one of:
- Security tool alert (SIEM, EDR)
- Employee report
- Customer report
- Third-party researcher
- Threat actor contact (extortion)
- Law enforcement contact

Regardless of source, treat as real until proven otherwise.

## Hour 0–1: contain

1. Isolate affected systems (do not power off — preserves evidence)
2. Rotate credentials for any possibly-exposed accounts
3. Revoke API keys, rotate secrets
4. Document exact time, system, signal
5. Preserve logs (extend retention immediately)
6. Call incident commander (designated person, not necessarily CEO)

## Hour 1–4: assess

- What data was accessed? (customer, employee, financial, health, children)
- How many records? (order of magnitude is enough for hour 4)
- What systems were touched?
- Is the attacker still in?
- What regulatory jurisdictions apply?

## Hour 4–24: legal and external

- Engage breach counsel (specialized firm, not general counsel)
- Engage forensic firm (Mandiant, CrowdStrike, Stroz Friedberg)
- Notify cyber insurance (many policies void if late)
- Board chair briefed
- Law enforcement notification decision
- Draft customer communication (do not send yet)
- Public statement template prepared (in case of leak)

## Day 2–7: investigate

- Forensic timeline: how did they get in, how long were they there, what did they take
- Scope of affected records
- Vector and root cause
- Indicators of compromise shared with peer companies (ISACs)
- Remediation plan

## Regulatory notification windows

| Jurisdiction | Window |
|--------------|--------|
| GDPR (EU) | 72 hours to regulator, undue delay to users |
| California (CCPA) | Most expedient time possible |
| Colorado (CPA) | 30 days |
| HIPAA (US health) | 60 days |
| PCI DSS | Immediately to card brands |
| SEC (material, public co) | 4 business days |
| Texas | 60 days |
| New York SHIELD | Most expedient time |

For international companies, you'll be notifying multiple regulators simultaneously. Breach counsel will triage.

## User notification

Template:

> Subject: Important security notice regarding your [company] account
>
> On [date], [company] identified a [security incident / unauthorized access / data breach] that affected [category] of your information, including [specific fields].
>
> What happened: [2 sentences, factual, no passive voice]
> What information was affected: [list]
> What we're doing: [remediation steps]
> What you can do: [specific actions for them]
> Support: [dedicated email and phone]
>
> We take this seriously and are [specific concrete action]. We're sorry for [specific harm]. Thank you for your patience as we work through this.

Do not:
- Blame a third party without evidence
- Claim no harm when you don't know
- Use passive voice ("data was accessed" without saying by whom if known)
- Offer credit monitoring as a substitute for disclosure
- Bury the notification on a status page

## Public communication

- Dedicated landing page on main domain
- FAQ with specific questions users will have
- Press statement coordinated with legal and PR
- Status page updated
- Social media holding statement ready
- CEO video optional but often helpful

## Technical remediation

- Root cause fix (not just the symptom)
- Security posture review (not just the affected system)
- Logging and detection gaps identified
- Third-party security audit scheduled
- Bug bounty or pen test follow-up

## Customer support surge

- Dedicated email address for breach inquiries
- Phone line if B2C
- Response SLA committed publicly (24 hours is realistic)
- Scripts for common questions
- Escalation path for angry/legal-threatening responses
- CS team pulled from normal queue; backfill with contractors

## Financial impact model

- Incident response costs (forensic, legal, comms): 500k–5M
- Regulatory fines: 0–150M depending on scope and cooperation
- Customer churn: 3–7% for affected users
- Deal delays on active pipeline: 20–30%
- Insurance deductible and limit review

## 30 / 60 / 90 day follow-up

**Day 30**: Final forensic report, regulator responses filed, all users notified
**Day 60**: Remediation complete, external audit begins, post-mortem to board
**Day 90**: External audit complete, SOC 2 or equivalent re-certified, public post-mortem (optional but builds trust)

## Long-term trust rebuilding

- Transparency report (annual security posture)
- Bug bounty program (if not already)
- Customer security council
- Third-party certifications (SOC 2, ISO 27001)
- Regular tabletop exercises

---

*A data breach is not a PR problem. It is a promise broken. Keep the next one.*
