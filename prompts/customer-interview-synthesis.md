# Prompt: Customer Interview Synthesis

## Inputs
- Your raw notes from 1 interview (or transcript)
- Or notes from N interviews you want synthesized together

## Time
~3 minutes for single, ~5 minutes for multi

## Output
`reports/interview-[prospect]-synthesis.md` or `reports/interview-patterns-[date].md`

---

## Single Interview Prompt

```
I just finished a customer discovery interview with [PROSPECT NAME] at 
[COMPANY]. They are [ROLE]. My raw notes are below.

Raw notes:
---
[PASTE YOUR NOTES]
---

Run /founder-ops discovery synthesis on this and produce:

1. Pre-populated fields:
   - Who they are (1 line)
   - Context of the problem in their world (2-3 sentences)
   
2. Direct quotes (verbatim, highest signal — no paraphrasing)
   - Pull 5-8 actual quoted sentences
   
3. Problems mentioned unprompted (not answered when I asked)

4. Workarounds described (what they do today)

5. Emotional temperature — how much does this pain actually bother them 
   (rate 1-10 with evidence from notes)

6. Signals they will / won't buy:
   - Positive signals (specific)
   - Negative signals (specific)
   - Ambiguous (list explicitly)

7. What changed my thinking:
   - Hypotheses confirmed
   - Hypotheses broken
   - New hypotheses

8. Next hypothesis to test in next interview

Do NOT paraphrase or soften anything. If they didn't say it, don't write it.

Save as reports/interview-[PROSPECT]-synthesis.md.
```

---

## Multi-Interview Pattern Recognition Prompt

```
I've done [N] customer discovery interviews over the past [PERIOD]. 
I've saved the individual syntheses in reports/interview-*-synthesis.md. 

Run /founder-ops discovery patterns and produce:

1. The ICP that actually shows up (not the one I said I was targeting):
   - Role: most common
   - Company size: range and median
   - Industry: top 3
   - Trigger event: what sets them looking

2. The real problem (in their words, not mine):
   - Dominant framing across interviews
   - Where people disagree (2+ interviews contradict)
   
3. Their workarounds (ranked by frequency):
   - Top 3 tools/approaches used
   - What "hacks" they've built

4. Emotional urgency map:
   - Who's urgent (their words)
   - Who's "interesting, someday"
   - Pattern: what makes someone urgent vs. someday

5. Kill list (based on data):
   - Assumptions I had that broke
   - Segments that don't have the problem
   - Features I thought mattered that didn't come up

6. Build list (based on data):
   - Unprompted feature mentions
   - Jobs they're hiring a solution for
   - Capabilities that would unlock deals

7. Three testable hypotheses for next round of interviews

Save as reports/interview-patterns-[DATE].md.
```
