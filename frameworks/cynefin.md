# Cynefin Framework

## The Five Domains

A framework for matching decision-making approach to the type of situation.

### 1. Clear (formerly "Simple/Obvious")
**Cause and effect:** Obvious
**Approach:** Sense → Categorize → Respond
**Example:** Onboarding a new employee, processing a refund

Best practices apply. Standard playbooks work. Just execute.

### 2. Complicated
**Cause and effect:** Knowable but requires expertise
**Approach:** Sense → Analyze → Respond
**Example:** Designing a database schema, evaluating a vendor

Good practices apply. Experts can analyze and recommend. Solutions exist but require skill.

### 3. Complex
**Cause and effect:** Only knowable in retrospect
**Approach:** Probe → Sense → Respond
**Example:** Product-market fit, hiring, market entry

Emergent practice required. Run small experiments. Amplify what works. Dampen what doesn't.

### 4. Chaotic
**Cause and effect:** No relationship at the system level
**Approach:** Act → Sense → Respond
**Example:** Major outage, PR crisis, founder breakup

Novel practice required. Stop the bleeding first. Stabilize. Move toward complex.

### 5. Disorder (the center)
**Status:** Unclear which domain you're in
**Approach:** Break it down — what parts are clear, complicated, complex, chaotic?

This is the most dangerous. You don't know what you're dealing with.

## How to Diagnose

| Symptom | Domain |
|---------|--------|
| Repeatable, predictable, well-understood | Clear |
| Requires expert analysis but answer is knowable | Complicated |
| Multiple plausible answers, depends on context | Complex |
| Crisis, no time to analyze | Chaotic |
| Confusing, can't tell which | Disorder |

## Decision-Making Per Domain

### Clear
- Use checklists
- Don't overthink
- Train for execution
- Example: deploy code via CI/CD

### Complicated
- Hire / consult experts
- Analyze the data
- Apply known frameworks
- Example: choose a database technology

### Complex
- Run multiple small experiments simultaneously
- Don't bet everything on one approach
- Iterate based on signal
- Example: figuring out which pricing model works

### Chaotic
- Act decisively now (don't wait for perfect info)
- Establish order, then move to complex
- Document what you learn for next time
- Example: production database is down

### Disorder
- Break the situation into pieces
- Diagnose each piece
- Apply right approach per piece
- Example: "We're losing money and team is unhappy" — what's the cause?

## Common Founder Mistakes

| Mistake | Real Domain | Wrong Approach |
|---------|-------------|----------------|
| Hiring "best practices" early | Complex | Best practices don't exist yet |
| Treating product-market fit as analytical | Complex | Need experiments, not analysis |
| Treating crises as complicated | Chaotic | Need to act first, analyze later |
| Treating new market as clear | Complex/Complicated | Assumes patterns that don't exist |
| Over-analyzing in chaos | Chaotic | Wastes critical time |
| Acting in clear domain | Clear | Wastes time when answer is known |

## Application: Strategy

When making strategic decisions, ask:
1. What domain is this in?
2. What's the right approach for this domain?
3. Am I using the right tools?

If you're using analytical tools (spreadsheets, frameworks) on complex problems,
you'll feel productive but produce nothing useful.
If you're running experiments on clear problems, you're wasting time.

## Application: Team

Different team members are good at different domains:
- Operators: Clear and Complicated
- Designers/Researchers: Complex
- Crisis managers: Chaotic
- Strategists: Complex and Disorder

A startup is mostly Complex domain. Hire and structure accordingly.
