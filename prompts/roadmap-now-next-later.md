# Prompt: Now / Next / Later Roadmap

## Output
`output/roadmap-[quarter].md`

---

## Prompt Template

```
I need to build a now/next/later roadmap for [COMPANY] for [TIME PERIOD].

Current state:
- Stage: [seed / series A / etc]
- Key metric we're optimizing: [revenue / retention / activation / etc]
- Team capacity: [N eng, N design, N PM]
- Biggest threats: [competitive, market, execution]

Candidate initiatives:
[LIST 10-30 POSSIBLE THINGS — features, experiments, strategic moves]

Customer signals (top 5):
1. [WHAT CUSTOMERS KEEP ASKING FOR]
2. [...]

Run /founder-ops product roadmap and produce:

## NOW (shipping this quarter, already staffed)
3-5 initiatives. For each:
- Name
- Why this quarter (not next, not later)
- Success metric (specific, numeric)
- Week-by-week milestones
- Owner
- Kill criteria

## NEXT (next quarter, planned but not staffed yet)
5-8 initiatives. For each:
- Name  
- What we need to learn before committing (discovery work this quarter)
- Dependencies
- Rough effort estimate

## LATER (thinking about, no commitment)
5-10 initiatives. For each:
- Name
- Why this might matter
- What would trigger moving to NEXT

## KILL LIST (things I'm choosing NOT to do)
- Name
- Why not (be specific; "not aligned with strategy" is insufficient)
- What would change my mind

## Sequencing logic
1-2 paragraphs on WHY this order:
- What's the theme?
- What's the risk being managed?
- What's the compounding advantage?

Save as output/roadmap-[QUARTER].md.
```
