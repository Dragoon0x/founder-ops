# Prompt: Job Description

## Output
`output/jd-[role].md`

---

## Prompt Template

```
Writing a JD for [ROLE TITLE].

Context:
- Company stage: [PRE-SEED / SEED / A / B+]
- Team size now: [N people total, N in this function]
- Reports to: [CEO / OTHER — and what that person does]
- Comp range: [$X-Y base, Z% equity]
- Remote / hybrid / office: [SPECIFY]

The role in specifics:
- Why I'm hiring NOW (not 3 months ago, not 3 months later): [TRIGGER]
- What this person will have DONE in 90 days: [3-5 concrete outcomes]
- What this person will have DONE in 12 months: [3-5 outcomes]
- What makes this role unusually hard: [HONEST]
- What makes this role unusually rewarding: [HONEST]

The person (don't guess; be specific):
- 2-3 must-haves (ruthless)
- 2-3 nice-to-haves
- Anti-patterns (who should NOT apply)

Run /founder-ops hire JD and produce:

## DRAFT

### Hook (the opportunity)
2-3 sentences. What they'll build/own. Why it matters NOW.

### What You'll Do (First 90 Days)
Concrete outcomes (not responsibilities). Quantified where possible.

### What You Bring (Required — keep to 3-5)
Specific, measurable. No "rockstar" or "10x".

### Nice to Have
2-3 things. Explicit.

### How We Work
- Pace
- Autonomy
- Communication rhythm
- Tool stack (if relevant)

### Compensation
- Base: $X - $Y
- Equity: Z%
- Benefits

### Location
- Remote / hybrid / on-site
- Timezone expectations
- Travel if any

### Process
1. [CONCRETE STEP]
2. [CONCRETE STEP]
...
- Response commitment: we respond to every applicant
- Decision timeline: we decide within N business days

## TONE CHECK
- Honest about hard parts
- Confident without being cocky  
- No corporate speak
- "You" not "the successful candidate"
- Specific outcomes, not generic responsibilities

## ADVERSARIAL CHECK
- Would a great candidate be EXCITED reading this?
- Would a wrong-fit candidate self-select OUT?
- Is there anything generic here I should cut?

## VARIANTS
Give me 2 versions:
- Short version (for LinkedIn / networks — 250 words max)
- Long version (for the careers page — 500-700 words)

Save as output/jd-[ROLE].md.
```
