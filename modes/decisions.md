# Mode: Decision Frameworks

## Purpose

Founders make 50-100 decisions a week. Most don't matter. Some matter
enormously. This mode helps classify decisions and apply the right
framework.

## The Reversibility Test (Bezos's two-door framework)

| Type | Definition | Approach |
|------|-----------|----------|
| **Type 1 (one-way door)** | Hard or impossible to reverse | Slow, rigorous, multiple opinions |
| **Type 2 (two-way door)** | Reversible with low cost | Fast, default to action |

**Rule:** If it's a Type 2 decision and you're spending more than 1 hour, you're over-thinking it.
If it's a Type 1 decision and you're spending less than 1 day, you're under-thinking it.

## Decision Classification

| Decision | Type | Reasoning |
|----------|------|-----------|
| What feature to ship next | Type 2 | Can change roadmap |
| Who to hire | Type 1 | Hard to reverse |
| Pricing model change | Type 1 | Customer trust on the line |
| Marketing copy change | Type 2 | Easy to revert |
| Co-founder split | Type 1 | Permanent |
| New office location | Type 1 | Long lease, team disruption |
| Refactor decision | Type 2 (usually) | Code is malleable |
| Brand redesign | Type 1 | Customer recognition |
| Sales process change | Type 2 | Iterate quickly |
| Acquisition / partnership | Type 1 | Permanent commitment |
| Termination of employee | Type 1 | Cannot undo |
| Pricing experiment | Type 2 | Run and revert |

## Decision Frameworks

### 1. The Inversion Framework
For any decision, ask: "What would I do to ensure the WORST outcome?"
The opposite of those actions is what you should do.

Example: "What would I do to make this hire fail?"
- Skip reference checks → DO check references
- Hire fast without tests → DO take time, do work samples
- Avoid hard topics in interview → DO ask the hard questions

### 2. The Pre-Mortem
Before making a Type 1 decision:
"Imagine it's 12 months from now and this decision was a disaster.
Why did it fail?"

Write 5-10 specific failure scenarios. For each, ask:
- How likely is this?
- How costly is this?
- What can we do now to prevent or mitigate?

### 3. The 10/10/10 Framework (Suzy Welch)
For decisions where emotion clouds judgment:
- How will I feel about this in 10 minutes?
- How will I feel about this in 10 months?
- How will I feel about this in 10 years?

If the 10-minute feeling is the only positive one → don't do it.
If the 10-year feeling is positive → do it even if uncomfortable now.

### 4. The Regret Minimization Framework
"At [age], will I regret NOT doing this?"
If yes → do it.
If you'd regret doing it → don't.
If neutral → it's a Type 2 decision, just pick.

### 5. RAPID (for organizational decisions)
- **R**ecommend: Who proposes the decision?
- **A**gree: Who must agree (veto power)?
- **P**erform: Who executes?
- **I**nput: Who provides input (advisory)?
- **D**ecide: Who makes the final call?

Typically: ONE person decides. Multiple recommend and input.
Avoid "everyone decides" (= no one decides).

### 6. The 70% Rule (Jeff Bezos)
"Most decisions should probably be made with somewhere around 70% of
the information you wish you had. If you wait for 90%, in most cases,
you're probably being slow."

For Type 2 decisions, decide at 50-60%.
For Type 1 decisions, decide at 70-80%.
Below 50% = need more research.
Above 90% = you're procrastinating.

## Decision Output Format

For any non-trivial decision:
```
## Decision: [Name]

### Classification
Type: [1 / 2]
Reversibility: [reasoning]

### Options considered
1. [Option] — pros / cons
2. [Option] — pros / cons
3. [Option] — pros / cons

### Decision
[What we're choosing]

### Reasoning
[Why this option, what trade-offs we accept]

### What would change my mind
[Specific evidence that would warrant revisiting]

### Revisit date
[When to evaluate the outcome — for Type 2: weeks; for Type 1: months]

### Owner
[Who owns the outcome]
```

## Decision Anti-Patterns

| Anti-pattern | Cost | Fix |
|--------------|------|-----|
| Decision by committee | Slow + diluted | Single decider, multiple inputs |
| Endless analysis (Type 2) | Wasted time | 70% rule, time-box |
| Snap decisions (Type 1) | Disaster | Pre-mortem + sleep on it |
| Confirmation bias | Wrong decision | Steelman the opposite |
| Decision avoidance | Decision by default | "Not deciding" IS a decision |
| Re-deciding past Type 1 | Constant churn | Document and move on |
| Over-explaining decisions | Hedging signals weakness | State + reason + move on |

## Output
- `reports/decision-[name]-[date].md`
- `data/decisions.md` (running log)
