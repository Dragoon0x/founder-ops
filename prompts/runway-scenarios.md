# Prompt: Runway Scenarios

## Output
`reports/runway-[date].md`

---

## Prompt Template

```
I need to model runway scenarios.

Current state:
- Cash on hand: $[X]
- MRR: $[Y]  (or ARR: $[Z])
- Monthly gross burn: $[W]
- Monthly net burn (after revenue): $[V]
- MRR growth rate (last 3 months avg): [G]%
- Gross margin: [M]%
- Team size: [T]

What I'm trying to decide:
[SPECIFIC DECISION — e.g., "hire 4 people", "go all-in on paid acquisition", 
"wait on hiring and raise Series A in 9 months"]

Run /founder-ops finance runway-scenarios and produce:

## BASELINE (NO CHANGES) — Scenario A

Month-by-month projection for 18 months:
- MRR (assuming current growth rate)
- Gross burn (flat)
- Net burn
- Cash end of month
- Cumulative runway

Visualize the key inflection:
- Month cash-flow positive (if any)
- Month cash runs out (if never CF+)

## CHANGE SCENARIO — Scenario B (aggressive)

Whatever you're considering (hiring, spend increase, etc.):
- Same 18-month projection
- With the change
- Assumptions explicitly stated

## HYBRID — Scenario C (balanced)

Half-version of the change:
- 50% of the hiring you want
- Or delayed by 3 months
- Same projection

## STRETCH SCENARIO — Scenario D (growth hits)

If growth rate increases to [2X G]:
- Same spend
- Show when that changes the math

## FOR EACH SCENARIO

| Month | MRR | Burn | Net Burn | Cash EOM |
|-------|-----|------|----------|----------|
| M+1 | | | | |
| M+2 | | | | |
| ...through M+18 | | | | |

Key values:
- Month of first profitability (if any)
- Month cash drops below 3 months (danger zone)
- Month cash runs out (if applicable)
- Dollar at end of 18 months

## THE REAL QUESTION

Not "how much runway" but:
"What's the Series A / next round story we'll have at month [N]?"

For each scenario:
- At month 12: ARR, growth rate, retention, team size
- Is that a Series A story at current market multiples?
- What would be different by month 15 with this scenario?

## DECISION FRAMEWORK

| Scenario | Pros | Cons | Right if... |
|----------|------|------|-------------|
| A (baseline) | | | Growth is working, don't fix what's not broken |
| B (aggressive) | | | Market window is closing, capital is cheaper than missing it |
| C (hybrid) | | | Uncertainty is high, want optionality |
| D (growth upside) | | | You have evidence growth will accelerate |

## RECOMMENDATION

One specific recommendation with:
- Which scenario (A/B/C)
- Why
- Confidence (1-10)
- What would change the recommendation
- What to watch for (trip-wire that says "we were wrong")

## HIRING SEQUENCING (if applicable)

If the recommendation involves hiring:
- Who first, who later
- Why that sequence
- Each person's expected ROI / impact

## WHEN TO FUNDRAISE

Given the recommended scenario:
- Ideal window to START fundraise: [MONTH]
- Ideal close by: [MONTH]
- What metrics will you need to show by then?
- What's the "if growth doesn't show up by month X, raise early" trigger?

## ADVERSARIAL CHECK

What's the skeptical take on my recommended scenario?
- Most likely failure mode:
- Early warning signs:
- Fall-back plan:

Save as reports/runway-[DATE].md.
```
