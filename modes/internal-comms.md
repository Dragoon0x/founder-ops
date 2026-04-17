# Mode: Internal Communications

## Purpose

Run internal comms that build trust, reduce drama, and align the team.
Avoid the founder-shouting-into-the-void problem and the gossip-fills-the-void problem.

## Submodes

### 1. Communication Cadence

| Frequency | Channel | Purpose | Length |
|-----------|---------|---------|--------|
| Daily | Slack #general | Vibes, light updates | 1-2 messages |
| Weekly | All-hands meeting | Sync, decisions, recognition | 30-45 min |
| Weekly | Async update email | What shipped, what's next | 1-2 paragraphs |
| Bi-weekly | Skip-levels (per person) | Direct feedback | 30 min |
| Monthly | Founder Q&A | Anything goes | 60 min |
| Monthly | Investor update (shared internally) | Transparency | Email |
| Quarterly | Strategy update | Direction, priorities | 60 min |
| Quarterly | All-hands retro | What's working/not | 60 min |
| Annually | Off-site | Vision, planning, bonding | 2-3 days |

### 2. Weekly All-Hands Structure (45 min)

```
0:00-0:05 — Welcome + recognition (call out specific work)
0:05-0:15 — Metrics dashboard walkthrough
0:15-0:30 — Team updates (each function: 2 min max)
0:30-0:40 — Founder spotlight (one topic worth depth)
0:40-0:45 — Open questions (live or pre-submitted)
```

**Critical:** Take questions in advance via form. Most controversial questions
won't be asked live but will be asked anonymously.

### 3. Async Weekly Update Template

```
Subject: [Company] — Week of [date]

## Shipped
- [Specific things, with names of people responsible]

## Up Next
- [Top 3 priorities for next week]

## Metric Spotlight
- [One metric worth highlighting + why]

## Customer Story
- [One customer interaction worth sharing]

## Hiring
- [Open roles, hires confirmed]

## Heads Up
- [Anything unusual: outages planned, exec travel, etc.]

## Shoutouts
- [Specific recognition: who did what]
```

Sent every Friday by 4pm. Read time: < 3 minutes.

### 4. Hard News Communication

**The framework: Be First, Be Honest, Be Specific.**

**Layoffs:**
- Decide first, communicate within 48 hours
- All-hands meeting (live, not async)
- Explain why (specific business reason, not "the market")
- Explain who (numbers + functions, not names publicly)
- Explain support (severance, benefits, references, outplacement)
- Take questions
- Follow with detailed FAQ
- Individual conversations with affected (same day, in person/video)
- Smaller team comms within 24 hours
- External comms (customers, investors, press) within 48 hours

**Major outage:**
- Status page within 30 min
- Customer email within 2 hours
- Social media within 4 hours
- Internal Slack updates every 30 min during incident
- Public post-mortem within 7 days

**Funding round:**
- Internal first (24-48 hours before public)
- Why this matters for the team
- What changes (or doesn't)
- New hires planned
- Q&A

**Co-founder departure:**
- All-hands the day it's decided
- Founder gives the message (not via memo)
- Honest about reasons (within reason)
- Clear about role coverage
- Customer/investor comms next

**CEO transition:**
- Board approves, then announce within 1 week
- All-hands meeting
- Joint statement from outgoing + incoming
- 1:1s with key execs over the next 2 weeks

### 5. Anti-Gossip Hygiene

When founders are silent, gossip fills the void. Counter-program:

- Acknowledge open questions even if you can't answer them
- "I don't know yet, here's how I'll figure it out"
- Address rumors directly when they emerge ("I've heard that X — here's the truth")
- Encourage direct conversation ("If you have concerns, ask me directly")
- Demonstrate consequences when gossip hurts trust

### 6. Recognition

Specific > generic. Public > private (mostly).

**Bad recognition:**
- "Great job everyone!"
- "Thanks to the eng team for shipping"
- "Awesome week"

**Good recognition:**
- "Sarah's analysis of our churn cohorts directly led to the 3 fixes we shipped this week. The data is already showing improvement. This is exactly the kind of work that compounds."
- "Marcus jumped on the production incident at 2am and had it resolved by 4am. Customers never noticed. Quiet heroism that deserves loud thanks."

**Patterns:**
- Tie recognition to outcomes, not effort
- Name the specific behavior (so others can model it)
- Be timely (within days, not weeks)
- Mix public (Slack, all-hands) and private (1:1, written note)

### 7. Decision Communication

When you make a decision (especially a controversial one):

```
## Decision: [What was decided]

### What we considered
- Option A: [pros/cons]
- Option B: [pros/cons]
- Option C: [pros/cons]

### What we chose
[Decision]

### Why
[Reasoning, including tradeoffs we accepted]

### What this means for the team
- [Specific impact]
- [Specific impact]

### What's NOT changing
[Important to clarify]

### How we'll know if we're right
[Specific metric or signal]

### Open to feedback on
[Where you genuinely want input]
```

### 8. Slack Hygiene

Channels:
- #general (everyone, low traffic, important)
- #random (everyone, social, informal)
- Functional channels (#eng, #sales, #product)
- Project channels (#proj-x)
- #wins (celebration only)
- #learnings (post-mortems, retro, education)

Rules:
- DM should be exception, not norm (loses team learning)
- Threads for replies (preserves channel readability)
- Mentions only when needed (don't @here unnecessarily)
- Async-first (not all responses needed in 5 min)
- Office hours / slow channels for deep work

### 9. Anonymous Feedback

Quarterly anonymous survey beyond eNPS:

```
1. What's the best part of working here right now?
2. What would you change if you could change one thing?
3. Is there anything you're not telling [CEO/founders]?
4. How would you rate [each leader] (1-10) and one piece of feedback for each?
5. What's blocking you from doing your best work?
6. Are you considering leaving in the next 6 months? (Yes/No/Maybe)
```

Read every response. Share aggregated themes (not individual responses).
Act on patterns visibly.

## Anti-Patterns

| Pattern | Problem | Fix |
|---------|---------|-----|
| All-hands becomes status updates | Boring, no decisions | Recognition + spotlight + Q&A |
| Hide bad news | Trust erodes when discovered | Be first to share |
| Vague language ("synergy", "alignment") | Nobody knows what you mean | Specific words |
| Founder-only voice | Team feels like audience | Distribute speaking slots |
| Anonymous feedback ignored | Team stops responding | Visible action on themes |
| Every meeting is "everyone" | Big meetings, no decisions | Right people, right meeting |
| Gossip allowed to spread | Toxic culture | Address head-on |

## Output

- `output/all-hands-script-[date].md`
- `output/weekly-update-[date].md`
- `output/hard-news-comm-[topic].md`
- `reports/internal-comms-effectiveness-[quarter].md`
