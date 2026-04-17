# Prompt: Candidate Scorecard

## Output
`reports/candidate-[name].md`

---

## Prompt Template

```
I just finished an interview loop with [CANDIDATE NAME] for [ROLE].

My notes from each interview (or I interviewed alone):
---
Screening call: [NOTES]
Work sample: [LINK OR NOTES]
Team interviews: [NOTES FROM EACH]
References: [NOTES FROM EACH CALL]
---

The role requires:
- [MUST-HAVE 1]
- [MUST-HAVE 2]
- [MUST-HAVE 3]

Run /founder-ops hire scorecard and produce:

## SUMMARY
- Final score (0-100)
- Hire / No hire / Further review
- Confidence in the decision (1-10)

## SCORECARD BY DIMENSION

| Dimension | Score (0-10) | Evidence | Concern |
|-----------|--------------|----------|---------|
| Raw capability | | | |
| Domain fit | | | |
| Ownership / drive | | | |
| Communication | | | |
| Collaboration | | | |
| Growth trajectory | | | |
| Values alignment | | | |

## STRENGTHS (specific, not generic)
- [CONCRETE EXAMPLE WITH EVIDENCE]
- [...]

## CONCERNS (be honest — these kill hires)
- [CONCRETE EXAMPLE WITH EVIDENCE]
- [MITIGATION (if possible)]

## WORK SAMPLE ANALYSIS
- Quality of output
- Process visible in the work
- Follow-through on ambiguity
- Red flags or green flags

## REFERENCE SYNTHESIS
- Patterns across references
- What they volunteered unprompted (high signal)
- What they were evasive about (high signal)
- Direct "would you rehire" answer

## FINAL RECOMMENDATION

### If HIRE
- What to offer (base, equity, title)
- What to manage around on day 1
- First 30-day bar
- Which existing concerns to revisit at 60 days

### If NO HIRE
- Specific reasons (not "felt off")
- What would change mind
- How to decline (script)

### If FURTHER REVIEW
- Specific thing to test next
- Timeline
- Decision criteria

## ADVERSARIAL CHECK
Before committing, ask:
- Am I hiring them because they're good, or because we're desperate?
- If they were expensive, would I still hire them?
- Would my most critical advisor hire them?

Save as reports/candidate-[NAME].md.
```
