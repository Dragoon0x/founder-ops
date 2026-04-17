# Design Review Workflow

## Trigger
Weekly, or per-feature before engineering begins.

## Meeting Structure (1 hr)

### Pre-read (sent 24 hrs before)
Designer shares:
- Problem statement (1-2 sentences: who has this problem and why it matters)
- Proposed solution (mockups/prototypes)
- Key decisions needed from the group
- Alternatives considered (what was rejected and why)

### Review format (60 min)

**Round 1: Understand (15 min)**
Designer presents. Attendees listen. No feedback yet.
Only clarifying questions: "What happens when..." / "How does this work for..."

**Round 2: Critique (25 min)**
Structured feedback using "I like / I wish / What if":
- **I like**: What's working well in this design
- **I wish**: What could be improved (stated as wishes, not commands)
- **What if**: Alternative approaches to consider

Rules:
- Critique the design, not the designer
- "I don't like it" is not useful feedback. "I wish the hierarchy were clearer because users might miss the CTA" is.
- Engineer feedback is about feasibility, not aesthetics
- PM feedback is about user impact, not personal preference

**Round 3: Decisions (15 min)**
- List the open questions that came up
- For each: decide now (if possible) or assign owner + deadline
- Determine: ready for engineering, needs another round, or needs user testing

**Wrap-up (5 min)**
- Designer summarizes what they heard
- Next steps with dates

## Design Review Quality Signals
| Signal | Healthy | Unhealthy |
|--------|---------|-----------|
| Feedback specificity | "The contrast ratio on that CTA might not meet WCAG AA" | "Make it pop more" |
| Decision velocity | Most decisions made in review | Decisions deferred to Slack threads |
| Cross-functional input | Eng raises feasibility, PM raises user impact | Only designers speak |
| Iterations | 1-2 rounds for most features | > 3 rounds (scope creep or unclear requirements) |
