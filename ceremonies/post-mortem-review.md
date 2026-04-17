# Ceremony: Blameless Post-Mortem

## Purpose
Learn from incidents, failures, or surprises. Improve systems, not punish people.

## When
Within 72 hours of any SEV-1/2 incident, project failure, or significant missed target.

## Attendees
- Incident commander / project lead
- All involved team members
- Engineering leadership
- Optionally: CEO, CTO, affected function leads

## Facilitation Guide (60 min)

### 1. Set the tone (5 min)
"This is a blameless post-mortem. We're here to understand what happened and improve our systems, not to assign blame. The premise: everyone involved did the best they could with the information they had at the time."

### 2. Timeline reconstruction (15 min)
Build the timeline collaboratively:
- When was the first signal?
- When was it detected?
- What actions were taken, in what order?
- When was it resolved?

Use a shared doc or whiteboard. Everyone contributes their perspective.

### 3. Root cause analysis (15 min)
Use the "5 Whys" method:
- Why did X happen? Because Y.
- Why did Y happen? Because Z.
- Keep going until you hit a systemic cause (process, tooling, or organizational).

Usually, the root cause is 3-5 levels deep. Surface-level causes ("the deploy was bad") are symptoms, not root causes.

### 4. Contributing factors (10 min)
What made this worse or harder to detect/resolve?
- Missing monitoring
- Documentation gaps
- Communication breakdown
- On-call coverage gaps
- External dependencies

### 5. Action items (15 min)
For each root cause and contributing factor:
- What specific change would prevent or reduce this?
- Who owns the action?
- When will it be complete?
- How will we verify it's effective?

Rules:
- Every action item has an owner and a deadline
- "Improve X" is not an action item. "Add monitoring for Y with a threshold of Z by [date]" is.
- Limit to 5-7 action items. More than that and nothing gets done.

## Document Template
Publish the post-mortem document to the whole company within 5 business days:
- Summary (2-3 sentences)
- Impact (who was affected, for how long)
- Timeline
- Root cause(s)
- Contributing factors
- Action items with owners and dates
- Lessons learned

## Anti-Patterns
- Blame: "If only [person] had done X" → Fix: Reframe as "our system didn't catch X"
- No follow-through: Great post-mortem, actions never completed → Fix: Review actions at the next team meeting
- Cherry-picking: Only analyzing incidents that were someone else's fault → Fix: Every SEV-1/2 gets a post-mortem, period
