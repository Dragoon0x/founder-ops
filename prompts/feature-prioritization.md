# Prompt: Feature Prioritization

## Inputs
- List of features under consideration (5-20 items)
- Current customer / roadmap context

## Output
`reports/prioritization-[date].md`

---

## Prompt Template

```
I have [N] features under consideration for next quarter. I need to pick 
[3-5] to actually ship and explicitly kill the rest.

Features:
1. [FEATURE A] — [1-2 sentence description]
2. [FEATURE B] — [1-2 sentence description]
[...continue for all features]

Current context:
- Team size: [N engineers, PM, design]
- Quarter length: [weeks available]
- What I'm actually optimizing for this quarter: [growth / retention / expansion / enterprise]
- Current top customer asks: [what customers ask for most]

Run /founder-ops prioritize on this. I need:

1. A RICE score for each feature:
   - Reach (users per quarter)
   - Impact (0.25 / 0.5 / 1 / 2 / 3)
   - Confidence (0.5-1.0)
   - Effort (person-weeks)
   
2. Ranked table with scores and brief reasoning

3. Top 3-5 to ship this quarter (must fit team capacity)

4. Explicit kill list for the rest — each with WHY killed

5. For the top 3-5, for each:
   - Why this feature NOW
   - Pre-committed kill criteria (what metric, what threshold, what date)
   - Adversarial check: strongest argument against shipping this

6. One-paragraph summary I could paste into a Slack update to team

Be brutal. Most features should be killed. Default to cutting.

Save as reports/prioritization-[DATE].md.
```
