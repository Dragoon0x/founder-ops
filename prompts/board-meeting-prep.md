# Prompt: Board Meeting Prep

## Output
Files in `output/board-[meeting-date]/`

---

## Prompt Template

```
Board meeting on [DATE]. Attendees: [LIST].

Last meeting (notes / key decisions):
[SUMMARY OR LINK]

What's happened since:
- Metrics: [RECAP]
- Wins: [LIST]
- Losses: [LIST]
- Team: [CHANGES]
- Product: [SHIPPED]
- Fundraising: [STATUS]

What I want OUT of this meeting:
[SPECIFIC DECISIONS, APPROVALS, OR INPUT]

What I'm worried about going in:
[SENSITIVE TOPICS, PUSHBACK I'M EXPECTING]

Run /founder-ops board meeting-prep and produce:

## AGENDA (90 minutes typical)

### (5 min) Approve last minutes, administrative

### (15 min) CEO Update
- TL;DR: 3 bullets
- Highlights (what went well)
- Lowlights (what didn't, and what you're doing)
- Key decisions this period

### (30 min) Deep Dive (pick ONE)
- Option A: GTM effectiveness / funnel diagnostics
- Option B: Product strategy / roadmap trade-offs
- Option C: Hiring plan / org design
- Option D: Specific strategic decision

### (20 min) Q&A / Discussion
Pre-identified topics likely to come up.

### (15 min) Forward Look
- Next quarter priorities
- Resources needed
- Risks tracked

### (5 min) Specific Asks
Directly, in writing.

## BOARD DECK (12-15 slides)

Slide 1: Cover (period)
Slide 2: Agenda
Slide 3: TL;DR (3 bullets)
Slide 4: Key metrics dashboard (no more than 8 numbers)
Slide 5: Financial snapshot (cash, burn, runway, revenue)
Slide 6: Quarter-over-quarter trend (revenue + retention)
Slide 7: Customer update (new wins, key losses, pipeline)
Slide 8: Product highlights (shipped + impact)
Slide 9: Team update (hires, departures, gaps)
Slide 10: Deep dive topic [chosen above]
Slide 11: Competitive landscape (brief)
Slide 12: Quarter priorities (next)
Slide 13: Risks + mitigations
Slide 14: Specific asks from the board
Slide 15: Open Q&A prompt

## PRE-READ MEMO (2-3 pages)

Sent 48 hours before meeting. Contains:
- Everything that will be in the deck as prose
- Additional context board doesn't need to discuss but should know
- Specific questions for their written input

## ANTICIPATE PUSHBACK
Given the sensitive topics you flagged, prepare for:

1. [LIKELY QUESTION] — [BEST ANSWER]
2. [...]

## DECISIONS I NEED FROM THIS MEETING
- [DECISION 1] — [WHAT I'M RECOMMENDING] — [WHAT I NEED FROM THEM]
- [...]

## WHAT I DON'T WANT ON THE AGENDA
Things that will suck air out of the room. Table for 1:1 with the 
concerned board member afterward.

Save everything in output/board-[DATE]/
```
