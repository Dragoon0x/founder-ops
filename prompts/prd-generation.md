# Prompt: PRD Generation

## Inputs
- Problem statement (what's broken, who has it)
- Hypothesis (what you'd build and why)
- Success metric(s)

## Output
`output/prd-[feature-name].md`

---

## Prompt Template

```
I need a PRD for [FEATURE NAME].

Context:
- Problem: [1-2 sentences — who has the pain, what the pain is]
- Evidence of the problem: [data, quotes, or tickets]
- My hypothesis: If we build [X], then [METRIC] will [DIRECTION] by [AMOUNT] because [REASON]
- Current team capacity: [N weeks of eng, N designer days]
- Target ship date: [DATE]

Run /founder-ops product PRD and produce a complete PRD:

## 1. One-line summary
Crisp. 15 words or less.

## 2. Problem
- Customer pain: quantified
- Who has it: specific
- Evidence: concrete
- Current workarounds

## 3. Hypothesis
Format: "If [X] then [Y metric] will [direction] by [amount] because [reason]"

## 4. User stories (5-8)
Format: "As a [role], I want to [action] so I can [outcome]"

## 5. Success metrics
- Primary (1 metric, must move)
- Secondary (2-3 metrics that should co-move)
- Guardrails (what must NOT break)

## 6. Scope
- In: what we're building
- Out: what we're explicitly NOT building (and why)
- Later: what comes after if this works

## 7. Dependencies
- Tech, people, other features

## 8. Open questions (with suggested resolution path)

## 9. Alternatives considered
- 2-3 alternatives
- Why we didn't pick them

## 10. Timeline
- Design: N weeks
- Eng: N weeks  
- QA/launch: N weeks

## 11. KILL CRITERIA (pre-committed)
- We will sunset this feature if:
  - Adoption < X% after N weeks
  - NPS impact < +Y
  - Support tickets > Z/week
- Revisit date: [DATE]

## 12. Adversarial check
- Strongest argument this is the wrong thing to build
- What we'd do differently if that's true

Save as output/prd-[FEATURE-NAME].md.
```
