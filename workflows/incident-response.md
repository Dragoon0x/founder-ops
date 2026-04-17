# Incident Response Workflow

## Trigger
Any event that meets one or more criteria:
- Service downtime > 5 minutes affecting > 10% of users
- Data breach or unauthorized access (any scope)
- Revenue-impacting bug (payments, billing, core workflows broken)
- Security vulnerability with active exploitation
- Customer-facing SLA breach

## Severity Levels

| Level | Definition | Response Time | Who's On |
|-------|-----------|--------------|----------|
| SEV-1 | Total service outage or data breach | < 15 min | CEO + CTO + on-call eng + comms |
| SEV-2 | Major feature broken, > 25% users affected | < 30 min | CTO + on-call eng + support lead |
| SEV-3 | Minor feature broken, < 25% users affected | < 2 hrs | On-call eng + support |
| SEV-4 | Cosmetic issue or edge case | Next business day | Assigned engineer |

## Incident Flow

### 1. Detection & Declaration (0-15 min)
- Incident detected via: monitoring alert, customer report, team member discovery
- Declarer posts in #incidents channel: "INCIDENT: [SEV level] [one-sentence description]"
- Incident commander (IC) assigned. For SEV-1/2, this is the most senior available engineer.
- IC creates dedicated incident channel: #inc-YYYY-MM-DD-short-description

### 2. Triage (15-30 min)
IC drives these questions:
- What is broken? (Specific feature/service)
- Who is affected? (User segment, geography, account type)
- What is the blast radius? (Number of users, revenue impact per hour)
- When did it start? (Check metrics for inflection point)
- What changed recently? (Deploys in last 24 hrs, config changes, third-party incidents)

### 3. Mitigation (30 min - 4 hrs)
Priority: stop the bleeding. Not root cause, not a permanent fix.
Options in order of speed:
1. **Rollback**: If a recent deploy caused it, revert immediately
2. **Feature flag**: If the broken feature can be disabled without cascade
3. **Hotfix**: Minimal code change, expedited review (1 reviewer, not 2)
4. **Workaround**: Manual process to unblock users while fix is built

### 4. Communication (parallel to mitigation)
**Internal:**
- Update #incidents every 15 min for SEV-1, every 30 min for SEV-2
- Format: "STATUS: [investigating/identified/mitigating/resolved] | IMPACT: [description] | ETA: [time or unknown]"

**External (SEV-1/2 only):**
- Status page updated within 30 min of incident declaration
- Affected enterprise customers emailed directly by their CSM
- Public messaging: acknowledge the problem, state what you're doing, give next update time
- Never say "we take security seriously" (it's meaningless). Say what you're actually doing.

### 5. Resolution
- Confirm service restored via monitoring (not just "it looks fine")
- Verify with 2-3 affected customers if possible
- Update status page to "resolved"
- Send resolution comms within 1 hr of resolution

### 6. Post-mortem (within 72 hrs)
Blameless post-mortem document:
- **Timeline**: Minute-by-minute from detection to resolution
- **Root cause**: The actual technical/process failure
- **Contributing factors**: What made detection slow or mitigation hard
- **Impact**: Users affected, revenue lost, SLA credits owed
- **Action items**: Specific preventive measures with owners and deadlines
- **Process improvements**: What would have made this response faster

## Post-Mortem Quality Bar
- Root cause goes at least 3 levels deep (not "the server crashed" but why)
- Action items are specific and time-bound, not "improve monitoring"
- At least one action item is a process fix, not just a code fix
- Document published internally within 5 business days
- For SEV-1: external post-mortem published within 10 business days
