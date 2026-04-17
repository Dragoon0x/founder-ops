# Prompt: Customer Interview Prep

## Inputs
- Prospect name and company
- What you know about them (role, company, signals of problem)
- What you're trying to learn

## Time
~2 minutes Claude run time

## Output
`output/interview-prep-[prospect].md`

## Follow-ups
After the interview: `customer-interview-synthesis.md`

---

## Prompt Template

```
I have a customer discovery interview scheduled with [PROSPECT NAME] at 
[COMPANY]. They are [ROLE]. I found them because [HOW YOU FOUND THEM — 
e.g., "they posted on LinkedIn about X", "our mutual friend intro'd", 
"they signed up for our waitlist"].

My hypothesis: [WHAT YOU BELIEVE ABOUT THEIR PROBLEM — 2-3 sentences]

My uncertainty: [WHAT YOU DON'T KNOW YET — what would change your mind]

Generate an interview guide using /founder-ops discovery. I need:

1. A pre-interview note to myself (objective, hypotheses to test, red flags 
   in my own behavior to watch for)

2. 12-15 open-ended questions in order:
   - Start with their world (past behavior, current workflow)
   - Move to workarounds (what have they tried)
   - End with motivation (why change)
   - Zero leading questions
   - Zero "would you use X?" hypotheticals
   - Zero pitching

3. Notes on:
   - What signals mean this is real (strong pull, unprompted details)
   - What signals mean this is polite interest (vague answers, "interesting", no specifics)
   - When to kill the interview early (they don't have the problem)

4. A 1-page cheat-sheet I can have on screen during the call.

Save as output/interview-prep-[PROSPECT NAME].md.
```
