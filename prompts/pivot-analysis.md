# Prompt: Pivot Analysis

## Output
`reports/pivot-analysis-[date].md`

---

## Prompt Template

```
I'm seriously considering a pivot at [COMPANY].

What we're doing today:
- Product: [DESCRIPTION]
- For whom: [ICP]
- How we make money: [BUSINESS MODEL]
- Current metrics: [KEY NUMBERS + TREND]

What's not working:
[HONEST LIST]

What might work (top candidates):
1. [DIRECTION 1 — what + who + why]
2. [DIRECTION 2]
3. [DIRECTION 3]

What we've already tried:
[EXPERIMENTS + RESULTS]

Run /founder-ops strategy pivot-analysis. BEFORE recommending a pivot, 
try to kill the pivot idea. Produce:

## DIAGNOSIS FIRST — IS THIS ACTUALLY A PIVOT PROBLEM?

Before considering pivot, rule out:
1. Execution problem (right idea, bad execution)
2. Timing problem (right idea, wrong year)
3. GTM problem (right product, wrong channel/audience)
4. Sales problem (have PMF, can't sell)
5. Retention problem (acquire but can't keep)

For each, evaluate:
- Evidence this is the actual issue
- Confidence (1-10)
- Fixes that would address it without pivoting

## IF STILL CONSIDERING PIVOT

### What kind of pivot are we talking about?
- Zoom-in (one feature → whole product)
- Customer segment (same product, different users)
- Platform (app → platform, or vice versa)
- Technology (same problem, new tech)
- Full (new problem entirely)

### For each candidate direction:

**Direction [X]: [NAME]**

- The problem: (in their words, not yours)
- Who has it: (specific ICP)
- Evidence the problem is real (from discovery interviews, data, market signal)
- What we'd build differently:
- What transfers from current (team, tech, relationships):
- What's brand new (learning, capital, time):
- Estimated time-to-first-customer: [WEEKS]
- Estimated time-to-proof-of-PMF: [MONTHS]
- Capital needed:

### The Comparison Matrix

| Dimension | Current | Pivot A | Pivot B | Pivot C |
|-----------|---------|---------|---------|---------|
| Market size | | | | |
| Your fit | | | | |
| Capital efficiency | | | | |
| Team conviction | | | | |
| 18-month outlook | | | | |

## THE HARD QUESTIONS

1. If current direction had 6 more months of focus, what's the realistic best case?
2. If we pivot and it fails, what's the fallback?
3. Which direction aligns with what the team actually wants to build?
4. What do investors think? (Don't just take their opinion; understand their concerns)
5. What does customer discovery ACTUALLY say (not what you want it to say)?

## RUNWAY CHECK

If pivoting:
- Cash today: $[X]
- Estimated burn during pivot: $[Y]/mo
- Months to PMF on new direction: [Z]
- Cash at point of PMF proof (or not): $[W]

Does this math work? Be honest.

## RECOMMENDATION

- Pivot / Don't pivot / Need more evidence
- If pivot: which direction
- Confidence (1-10)
- What would change the recommendation

## 30-DAY EVIDENCE-GATHERING PLAN

If "need more evidence":
- 15 customer conversations in new direction (specific ICPs)
- 2-3 prototypes to test (mockups or rough products)
- 3 "will you pay" conversations for new direction
- Team conviction pulse

By day 30, you should be able to commit or not commit.

## COMMUNICATION PLAN (if pivoting)

- Board: first, before anyone
- Team: direct conversation, same day
- Investors: written email within 24h
- Customers: depends on material impact
- Press: only after internal alignment

Save as reports/pivot-analysis-[DATE].md.
```
