# Incident Response Checklist

Something is broken. Use this when the problem affects >10% of customers
or involves data exposure.

## Severity Decision Tree

**SEV1 (all-hands):**
- Service down for all users
- Data loss
- Security breach (confirmed)
- Payment processing failed
- Customer-visible data exposure

**SEV2 (urgent, team):**
- Partial service disruption
- Core feature broken for many users
- Severe degradation (>10x slower, frequent errors)

**SEV3 (normal, engineering):**
- Minor feature broken
- One customer affected
- Degradation that only some notice

This checklist covers SEV1-2.

## Minute 0: Acknowledge

- [ ] Acknowledge in on-call channel
- [ ] Set up dedicated incident channel (#incident-[date-brief])
- [ ] Page backup on-call if you need help
- [ ] Status page updated: "Investigating"

## Minute 5-10: Assess

- [ ] Scope: how many users affected?
- [ ] Severity: confirm SEV level
- [ ] Duration so far: when did it start?
- [ ] Initial hypothesis: what's likely broken?
- [ ] Blast radius contained? (Can it get worse?)

## Roles Assigned (incidents are collaborative)

- [ ] **Incident Commander:** makes decisions, not in the weeds
- [ ] **Tech Lead:** debugging, shipping fixes
- [ ] **Comms Lead:** status page, customer comms, internal updates
- [ ] **Scribe:** documenting the timeline

(Small team: one person may wear multiple hats, but name them.)

## Minute 15-30: Mitigate

- [ ] Identify the MINIMUM action to stop the bleed
- [ ] Ship it (over fixing root cause)
- [ ] Verify mitigation (not just "it should work")
- [ ] Status page: "Identified, mitigating"

### Options by type

**Service down:**
- Revert last deploy
- Failover to backup region
- Scale up capacity
- Feature flag off the bad path

**Data issue:**
- Stop writes to affected table/bucket
- Read-only mode if needed
- Queue requests for later processing

**Security incident:**
- Revoke all sessions if credentials leaked
- Rotate affected credentials
- Block attacker IPs
- Preserve logs (do NOT delete)

## After Mitigation

- [ ] Status page: "Service restored, monitoring"
- [ ] Initial customer communication sent
- [ ] Internal update in ops channel
- [ ] Root cause investigation begins

## Customer Communication (CRITICAL)

### SEV1 timing
- Minute 10: First status page update ("Investigating")
- Every 30 min: Status page update until resolved
- Minute 60: Email to affected customers (if not public-facing only)

### SEV2 timing
- Minute 15: Status page if customer-facing
- Every 60 min: Update
- Email only if prolonged (>2 hours)

### What to say
- Specific: what's affected (not "some users")
- Honest: what you know, what you don't
- Time-bounded: "Next update in 30 minutes"
- No blame on vendors until confirmed (and usually not even then publicly)

### What NOT to say
- "It should be fine"
- "Unknown" (give a directional estimate)
- "Soon" (give a specific time)
- Promises of exact resolution time (you don't know)

## Security Incidents Extra Steps

- [ ] Legal notified within 1 hour
- [ ] Preserve evidence (logs, affected systems)
- [ ] Assess data exposure (specifically: PII, credentials, financial)
- [ ] Breach notification timer starts (GDPR: 72 hours; US varies by state)
- [ ] External investigator engaged if severe
- [ ] PR / external comms only after legal sign-off

## After Resolution (First 24 hours)

- [ ] Full timeline reconstructed
- [ ] Root cause identified (not just the trigger — the underlying cause)
- [ ] Contributing factors listed
- [ ] Action items (specific, owned, dated)
- [ ] Status page: "Resolved"
- [ ] Final customer communication with:
  - What happened (plain language)
  - What was affected
  - What you did
  - What you're doing to prevent recurrence
  - Credits / refunds if applicable

## Postmortem (within 5 days)

- [ ] Blameless postmortem written
- [ ] Team review meeting held
- [ ] Action items tracked (all with owners + dates)
- [ ] Shared internally (or externally if customer-facing issue)

### Postmortem template
- Incident summary
- Timeline
- Impact
- Root cause
- Contributing factors
- What went well
- What went poorly
- Action items

## Learn & Prevent

- [ ] Similar incident pattern check (have we seen this before?)
- [ ] Runbook updated (this will happen again)
- [ ] Automation added (alerting gap closed?)
- [ ] Process improvement (did roles work?)

## Monthly

- [ ] Review all incidents from the month
- [ ] Trend analysis (same root cause repeating?)
- [ ] Runbook updates based on lessons

## Never Do

- [ ] Don't blame individuals publicly
- [ ] Don't speculate on root cause before you know
- [ ] Don't over-promise on resolution time
- [ ] Don't skip the postmortem because you're tired
- [ ] Don't hide an incident from customers (they'll find out)

## Related
- `playbooks/public-pr-crisis.md`
- `modes/crisis.md`
- `templates/incident-postmortem-template.md`
