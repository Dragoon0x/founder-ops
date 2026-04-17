# Mode: Crisis Management

## Purpose

When something breaks badly — outage, security incident, key employee leaves,
funding pulled, PR crisis — execute fast, communicate clearly, learn deeply.

## The Crisis Decision Framework

### Step 1: Classify Severity (60 seconds)

| Level | Definition | Response time |
|-------|-----------|---------------|
| **P0 — Existential** | Threatens company survival within 30 days | Immediate, all hands |
| **P1 — Major** | Significant revenue / reputation impact | < 4 hours |
| **P2 — Important** | Localized impact, contained | < 24 hours |
| **P3 — Minor** | Operational issue, no external impact | Standard process |

### Step 2: Activate Right Response Team

| Severity | Team |
|----------|------|
| P0 | Founders + relevant exec + outside counsel + comms advisor |
| P1 | Founder + relevant exec(s) + comms |
| P2 | Domain owner + comm if customer-facing |
| P3 | Domain owner |

### Step 3: Communicate Within Time SLA

**P0/P1 communication SLAs:**
- Internal team: within 1 hour
- Affected customers: within 4 hours
- Investors: within 12 hours
- Public (if needed): within 24 hours

## Crisis-Specific Playbooks

### Outage / Service Down

**First 15 minutes:**
1. Confirm scope (one customer, segment, all customers?)
2. Post status page update (acknowledged)
3. Assemble response team
4. Begin investigation

**First hour:**
1. Identify root cause hypothesis
2. Communicate to all affected customers
3. Implement fix or rollback
4. Update status page every 30 min

**Within 24 hours:**
1. Service restored
2. Post-incident review document started
3. Personal apology to enterprise customers (CEO call)

**Within 1 week:**
1. Public post-mortem published (if outage > 1 hour)
2. SLA credits processed automatically
3. Specific actions to prevent recurrence

### Security Incident

**First hour:**
1. Contain the breach (isolate affected systems)
2. Preserve evidence (logs, snapshots)
3. Engage outside security counsel + IR firm
4. Notify cyber insurance carrier

**First 24 hours:**
1. Determine scope (what data, how many customers)
2. Assess regulatory notification requirements (GDPR: 72hr, state laws vary)
3. Draft customer notification (do NOT send yet — counsel review)
4. Brief board / key investors

**Within 72 hours:**
1. Customer notification (if data accessed)
2. Regulatory filings as required
3. Public statement if material
4. Update security controls

**Within 30 days:**
1. Full forensic report
2. Public security update (what happened, what changed)
3. Third-party audit (SOC 2, pen test)

### Key Employee Departure (founder, exec, critical engineer)

**First 24 hours:**
1. Confirm decision (is this final or negotiable?)
2. Plan transition (who covers what, for how long)
3. Inform direct reports privately
4. Plan internal announcement

**First week:**
1. Internal announcement (clear, dignified)
2. Customer communication (only if customer-facing)
3. Investor update (only if material)
4. Job rec posted (if backfilling)
5. Knowledge transfer plan documented

**During notice period:**
1. Document everything they own
2. Transfer relationships explicitly
3. Update access permissions
4. Schedule exit interview
5. Negotiate non-solicit / non-disparagement if relevant

**After departure:**
1. Access revoked (Day 1)
2. Equity status confirmed (vested vs not)
3. Final paycheck + COBRA notice
4. Customer / partner notifications

### Funding Pulled or Term Sheet Withdrawn

**First 24 hours:**
1. Get the WHY in writing
2. Don't react publicly — process first
3. Assess: did they pull, or is it a negotiation tactic?
4. Run cash analysis: how much runway at current burn

**First week:**
1. Honest internal communication (founders + key team)
2. Cash conservation moves (cut non-essential spend)
3. Reach out to back-up investors
4. Consider bridge round / convertible note

**First month:**
1. New raise plan or extend runway plan
2. Board update (not panicked, with plan)
3. Adjust hiring plan
4. Adjust burn rate

### PR Crisis (negative press, customer complaints, social media)

**First 4 hours:**
1. Assess: viral risk vs contained?
2. Don't respond publicly yet
3. Gather facts (what happened, what's the actual narrative)
4. Engage PR advisor if material

**First 24 hours:**
1. Internal alignment on narrative
2. Statement drafted (if response needed)
3. Direct outreach to journalist or affected customer
4. Decide: respond publicly or let it die

**Communications principles:**
- Acknowledge the impact (not just facts)
- Take responsibility (don't blame customers or third parties)
- Specific actions (what changes)
- No excessive apology (sounds insincere)
- One spokesperson (consistent voice)

## The Post-Mortem Template

After every crisis, within 1 week:

```
## Post-Mortem — [Incident Name] — [Date]

### Summary
[2-3 sentences: what happened, impact, status]

### Timeline
- [Time] — [Event]
- [Time] — [Detection]
- [Time] — [Response action]
- [Time] — [Resolution]

### Impact
- Customers affected: [N]
- Duration: [hours/days]
- Revenue impact: $[X]
- Reputation impact: [qualitative]

### Root cause
[5 whys analysis]

### What went well
- [Specific things that worked]

### What went poorly
- [Specific things that failed]

### Action items
| Action | Owner | Due | Status |
|--------|-------|-----|--------|
| | | | |

### What we changed permanently
- [Process / system / tool change]
```

## Communications Templates

**Customer notification (outage):**
```
Subject: Service interruption update — [date/time resolved]

[Customer name],

Between [start time] and [end time] [timezone], [specific service] was
unavailable. We've fully restored service.

What happened: [brief, honest, no jargon]
Impact to you: [specific to their account if known]
What we're doing: [specific actions to prevent recurrence]
Credit applied: [if applicable]

Questions? Reply to this email or contact [person].

— [Name]
```

**Public statement (security incident):**
```
On [date], we identified [type of incident]. Here's what you need to know:

What happened: [Brief, factual]
What data was affected: [Specific]
What we did: [Containment + investigation + remediation]
What you should do: [Specific actions]

We're committed to [specific changes]. Contact [security@] with questions.

— [Name], [Title]
```

## Output

- `output/incident-comm-[type]-[date].md`
- `reports/post-mortem-[incident]-[date].md`
- `data/incidents.md` (running log of all incidents)

## Adversarial Check

In any crisis:
- Are we minimizing the impact? (Honesty wins long-term)
- Are we communicating fast enough? (Silence is interpreted as guilt)
- Are we reacting publicly before processing internally? (Usually wrong)
- Are we addressing root cause or symptom? (Prevent recurrence)
