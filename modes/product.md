# Mode: Product

## Purpose

Write PRDs, user stories, feature specs. Make tech decisions. Keep the
product team focused on what matters.

## Submodes

### 1. PRD (Product Requirements Document)

For any feature worth > 1 week of work:

```
## PRD — [Feature Name]

### One-Line Summary
[What this is, in 10-15 words]

### Problem
- What pain exists today?
- Who has it?
- Evidence (customer quotes, data, tickets)?

### Hypothesis
"If we build [X], then [Y metric] will [direction] because [reason]"

### User Stories
As a [persona], I want to [do X] so that [outcome]
- [Primary flow]
- [Edge case 1]
- [Edge case 2]

### Solution Overview
[What we're building, high-level — not implementation details]

### Success Metrics
- Primary: [One measurable metric that defines success]
- Secondary: [Supporting metrics]
- Guardrails: [Things we watch to not break]

### Scope
**In:**
- [Specific functionality included]
- [Specific functionality included]

**Out:**
- [Explicitly excluded — don't build this now]
- [Explicitly excluded]

**Later:**
- [Post-launch: next version]

### Dependencies
- [Tech, team, or external dependencies]

### Open Questions
1. [Unresolved design/product question]
2. [Unresolved tech question]

### Alternatives Considered
1. [Other approach] — why not
2. [Other approach] — why not

### Timeline
- Design: [X weeks]
- Engineering: [Y weeks]
- Launch: [date]

### Risks
- [What could go wrong]
- [Mitigation]
```

### 2. User Stories

**Format:**
```
As a [specific user type],
I want to [specific action]
so that [specific outcome].

Acceptance criteria:
- [ ] [Testable criteria]
- [ ] [Testable criteria]
- [ ] [Testable criteria]
```

**Anti-patterns:**
- "As a user, I want..." (too generic — which user?)
- "I want to have access to..." (implementation, not value)
- Acceptance criteria that aren't testable

### 3. Technical Decision Records (ADR)

For tech decisions worth remembering:

```
## ADR-[N] — [Decision Title]

### Status
[Proposed / Accepted / Rejected / Superseded by ADR-X]

### Context
[What's the situation that requires a decision?]

### Options Considered
1. [Option A]
   - Pros: [list]
   - Cons: [list]
2. [Option B]
   - Pros: [list]
   - Cons: [list]
3. [Option C]

### Decision
[What we chose and why]

### Consequences
- Positive: [what we gain]
- Negative: [what we give up]
- Reversibility: [how hard to undo]

### Revisit When
[Specific condition that would trigger re-evaluation]
```

### 4. Feature Kill Criteria

Before building, define kill criteria:

```
## Kill Criteria — [Feature Name]

We will kill this feature if:
- Adoption < [X]% after [N] weeks
- NPS impact < +5 points
- Support tickets related to this > [N]/week
- CAC increases by > [X]% without LTV offset

Revisit decision in: [N weeks]
Owner of kill decision: [Person]
```

Most features never get killed because there's no pre-commitment.
Pre-commit.

### 5. Product Principles

Establish product principles that guide decisions:

**Example principles:**
- "We ship polish over features" (quality bar)
- "Power users first" (segmentation priority)
- "Explicit over implicit" (behavior philosophy)
- "Keyboard > mouse" (interaction philosophy)
- "Speed over perfection" (shipping philosophy)

When making product decisions, reference the principles:
"Option A aligns with 'speed over perfection', Option B with 'polish.'
Our principle is X, so we go with Option A."

### 6. Roadmap Communication

Don't promise specific dates for things > 1 quarter out.

**Now / Next / Later format:**
```
## Product Roadmap

### Now (this quarter, committed)
- [Feature] — shipping [week]
- [Feature] — shipping [week]

### Next (next quarter, directionally committed)
- [Feature area]
- [Feature area]

### Later (on the radar, no commitment)
- [Big theme]
- [Big theme]
```

## Output

- `output/prd-[feature].md`
- `output/adr-[N]-[decision].md`
- `data/product-principles.md`
- `data/roadmap-[quarter].md`
