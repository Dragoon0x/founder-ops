# Prompt: Quarterly Planning

## Output
`output/quarterly-plan-[quarter].md`

---

## Prompt Template

```
Planning Q[N] [YEAR].

Looking back at Q[N-1]:
- What we said we'd do: [TOP 3-5 GOALS]
- What actually shipped: [WHAT HAPPENED]
- What we learned: [INSIGHTS]
- What we're carrying forward: [UNFINISHED BUSINESS]

Current state:
- Stage: [SEED / A / B]
- Team: [SIZE + COMPOSITION]
- Key metrics: [3-5 NUMBERS]
- Runway: [N MONTHS]

What's changed in the market / competition / customer behavior:
[OBSERVATIONS]

Big question for this quarter:
[THE ONE THING WE NEED TO ANSWER OR PROVE]

Run /founder-ops strategy quarterly-planning. Produce:

## THE THEME
One sentence that captures what this quarter is ABOUT.
Examples: "Prove enterprise motion", "Fix retention", "Launch v2 + scale GTM"

## NORTH STAR METRIC
- What we're optimizing above all else
- Current value
- Target for end of quarter
- Leading indicators to track weekly

## TOP 3 OBJECTIVES (OKR style)

For each:
- Objective (qualitative, ambitious)
- 3 Key Results (quantitative, measurable)
- Owner (ONE person)
- Dependencies

## WHAT WE'RE NOT DOING (explicit)
3-5 things that are tempting but wrong for this quarter. Kill list with 
reasoning.

## WEEK-BY-WEEK ROADMAP

Week 1-2: [KICK-OFF ACTIVITIES]
Week 3-4: [BUILD PHASE]
Week 5-6: [CHECKPOINT — are we on track?]
Week 7-8: [ADJUSTMENT IF NEEDED]
Week 9-10: [PUSH PHASE]
Week 11-12: [CLOSE + RETRO PREP]

## SUCCESS / FAILURE CRITERIA

Clear statement:
- If [METRIC] hits [TARGET] by [DATE], we succeeded.
- If [METRIC] is below [MIN] by [DATE], we failed.
- The grey zone between is discussed at retro.

## HIRING PLAN
Roles to hire this quarter:
- Priority 1: [ROLE] — why now, impact
- Priority 2: [...]

## RISKS
Top 3 risks that could derail the quarter:
1. [RISK] — [MITIGATION] — [EARLY WARNING]
2. [...]

## BUDGET / BURN
- Planned spend: $[X]
- Runway at end of quarter: [N months]
- Fundraise timing implications

## CASCADE
What each person/team should have on THEIR quarterly plan to support this.

## ADVERSARIAL CHECK
- What would a smart critic say about this plan?
- Where are we delusional?
- What's most likely to go wrong?

Save as output/quarterly-plan-[QUARTER].md.
```
