# Incident Postmortem Template

Use for any SEV-1 or SEV-2 incident. Blameless. Written within 5 business days.

---

## Incident summary

- **Incident ID:** [Auto or sequential]
- **Severity:** [SEV-1 / SEV-2 / SEV-3]
- **Date:** [Start date UTC]
- **Duration:** [Minutes from detection to resolution]
- **Customers affected:** [Count or percentage]
- **Data loss:** [None / details]
- **Revenue impact:** [$ direct, $ estimated]
- **Authors:** [Names]

---

## One-paragraph summary

One paragraph that a board member or executive could read and understand what happened, why, and what you did about it.

---

## Timeline (all times UTC)

- **HH:MM** [event]
- **HH:MM** [event]
- **HH:MM** [event]
- **HH:MM** [resolved]
- **HH:MM** [customer communication sent]
- **HH:MM** [internal review scheduled]

Include: the change that caused it, first anomaly signal, first alert, first page, acknowledgement, escalation, hypothesis, fix deployed, recovery, communication.

---

## Root cause

What was the actual cause, not the proximate trigger. Technical detail sufficient for another engineer to understand.

If you have a "5 whys" chain, run it here. Stop when you hit a "because the process / incentive / priority was X."

---

## Why it took [duration]

Break down the time-to-resolve into stages:
1. Anomaly to first signal noticed: [duration]
2. Signal to page: [duration]
3. Page to acknowledged: [duration]
4. Acknowledged to hypothesis: [duration]
5. Hypothesis to fix deployed: [duration]
6. Fix to full recovery: [duration]

For each stage, name what made it slow. These are your real opportunities.

---

## What went well

Deliberate section. Even in bad incidents, things go right. Naming them reinforces practice.

- [Thing that worked]
- [Thing that worked]

---

## What did not go well

- [Thing that was slow, missed, or worse than expected]
- ...

---

## Corrective actions

| ID | Action | Owner | Due | Status |
|----|--------|-------|-----|--------|
| A1 | ... | ... | ... | Open/Done |

Must be specific and owned. Not "improve monitoring." Specifically: "Add alert on P99 latency relative change > 2x over 5 min window, by April 15, owner X."

---

## Customer communication sent

[Exact text or link]

Was it sent? When? Who approved?

---

## Lessons (company-wide)

What should anyone else at the company learn from this? 2-4 short bullets. These are the durable learnings.

---

## Publication

- [ ] Internal review meeting held
- [ ] Public postmortem published (if customer-facing and policy requires)
- [ ] Corrective actions tracked in [tool]
- [ ] Board notified (if SEV-1)

---

## Meta rules for postmortems

1. **Blameless.** Systems and processes, not individuals. Even if a human made the change, the system that allowed the change to cause this is the issue.
2. **Candid.** Hiding findings to protect the team destroys culture.
3. **On time.** 5 business days or the lessons die in calendars.
4. **Evidence-based.** Timeline is objective facts. Feelings go in "what didn't go well" section.
5. **Corrective actions have teeth.** If an action item is still open 60 days later, someone is accountable for escalating.

---

## A useful test

A year from now, can someone read this postmortem cold and understand:
- What happened
- Why it happened
- What was changed to prevent it again
- Whether those changes were effective

If no, the postmortem is incomplete.
