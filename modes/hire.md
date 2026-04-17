# Mode: Hiring

## Purpose

Write JDs that attract the right people, score candidates fairly,
design interviews that predict performance, check references that matter.

## Submodes

### 1. JD Writing

Every JD has these sections in this order:

```
## [Role Title]

### The Opportunity (2-3 sentences)
[What this person will build/own, why it matters NOW]

### What You'll Do (3-5 bullets)
[Specific outcomes in first 90 days]

### What You Bring (required)
[3-5 MUST HAVES — things that determine fit]

### Nice to Have (optional)
[Preferences that don't disqualify]

### How We Work
[2-3 sentences on pace, autonomy, communication style]

### Compensation
[Range. Yes, actually post it. Candidates won't apply if unclear.]

### Location
[Remote/hybrid/on-site, with timezone expectations]
```

**Anti-patterns:**
- "Rockstar", "ninja", "10x" (off-putting, attracts wrong people)
- "Must have 10+ years" for a senior engineer role (discriminatory, inaccurate)
- Laundry list of 20 must-haves (nobody has all)
- Vague responsibilities ("help grow the company")
- No comp range (filters out quality candidates)

### 2. Candidate Scoring

Score each candidate 1-5 on:

| Dimension | Weight | How to Assess |
|-----------|--------|--------------|
| Technical/Role skill | 30% | Work samples, take-home, live problem |
| Ownership | 20% | "Tell me about a time you..." |
| Communication | 15% | Written async + live |
| Culture fit | 10% | Values alignment, not "like me" |
| Growth trajectory | 10% | References + self-assessment |
| Mission fit | 10% | Why us specifically |
| Red flags | 5% | Any concerns |

**Weighted score × 20 = 100-point scale**

- 85+: Hire
- 70-84: Additional interview or reference check
- < 70: Pass

### 3. Interview Design

For a 1-hour interview, structure:

```
5 min — Intro + context
15 min — Work sample / live problem (main signal)
15 min — Deep-dive on past work (STAR stories)
15 min — Candidate questions (their questions are signal)
5 min — Logistics, next steps
5 min — Buffer
```

**Interview question bank:**

**Technical signal:**
- "Walk me through [project from their resume]. What tradeoffs did you make?"
- "What's a technical decision you'd make differently if you could redo it?"
- "What's the hardest bug you've ever debugged? Walk me through it."

**Ownership:**
- "Tell me about a time you disagreed with a decision and what you did about it."
- "What's something you owned end-to-end that you're proud of?"
- "When was the last time you had to push back on a stakeholder?"

**Red flags in answers:**
- Blames others for every failure
- Vague "we" language when asked about specific contributions
- Can't articulate tradeoffs in their decisions
- No questions about the product/team/challenges

### 4. Reference Checks

Don't ask vague questions. Ask specific ones:

- "Walk me through a typical week working with [candidate]"
- "What's one thing they're exceptional at, and one thing they struggle with?"
- "Would you hire them again? Why or why not?"
- "What's the best environment for them to succeed?"
- "What's a situation where they didn't perform well?" (if hesitation: follow up)

**Critical:** Ask for 2 references THEY choose, then ask each reference
to recommend 1 more person. Those back-channel references are the most honest.

### 5. Take-Home Assessments

Rules:
- **Max 4 hours** of candidate time. Respect their time.
- **Paid** if over 2 hours
- **Specific brief** with expected deliverable
- **Based on real work** you'd actually do
- **No trick questions** or nonsense puzzles

Sample brief:
```
Build a small feature that demonstrates [specific skill].
Time budget: 3-4 hours.
Submit: code + README explaining tradeoffs + 1 paragraph on what you'd
do with more time.
We'll review and give feedback within 48 hours regardless of outcome.
```

### 6. Offer Process

- Present verbally before email
- Be transparent about equity math (strike price, vesting, dilution)
- Give 3-5 business days to decide (not 24 hours)
- If they're interviewing elsewhere, match their timeline if possible
- If they ask for more: have a clear policy on what you'll flex on

## Output Files

- `output/jd-[role]-[date].md`
- `reports/candidate-scorecard-[name].md`
- `data/hires.md` (running pipeline)
