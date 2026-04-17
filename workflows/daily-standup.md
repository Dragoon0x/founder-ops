# Daily Standup Workflow

## Trigger
Every working day, 9:00 AM local time.

## Pre-conditions
- Async standup posted in #standup channel by 8:45 AM
- Each team member answers: Done / Doing / Blocked

## Steps

### 1. Review async updates (3 min)
Scan all standup posts. Flag any blockers that need sync discussion.
If zero blockers and no cross-team dependencies, cancel the sync meeting and post "All clear, async today."

### 2. Blockers round (5 min)
Each blocked person gets 90 seconds max:
- State the blocker in one sentence
- Name the person or resource needed
- Propose a resolution path

Do NOT let this become a debugging session. If resolution needs > 2 min, schedule a breakout.

### 3. Coordination round (5 min)
Only for items where two or more people are touching the same surface area today.
Questions to ask:
- "Are we stepping on each other?"
- "Does the order matter?"
- "Who owns the merge?"

### 4. Energy check (2 min)
Quick pulse: "1-5, how's your energy today?"
If average drops below 3 for two consecutive days, trigger the founder-wellbeing mode.

## Exit Criteria
- All blockers have an owner and a next step
- No unresolved coordination conflicts
- Meeting ends at or before 15 minutes

## Anti-patterns
- **Status theater**: People reciting task lists nobody listens to. Fix: async-only standups for 1 week.
- **Problem-solving in standup**: Debugging live. Fix: strict 90-second rule + breakout scheduling.
- **Skipping when busy**: The busiest days need standups most. Fix: async fallback, never skip entirely.

## Metrics
- Meeting duration: target < 15 min, alert if > 20 min for 3 consecutive days
- Blocker resolution time: target < 4 hrs, alert if > 24 hrs
- Attendance: target > 90%, alert if < 80%
