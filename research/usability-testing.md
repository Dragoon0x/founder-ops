# Usability testing

## Purpose
Watch real users fail. Usability tests catch 80% of UX issues with 5 users
(Nielsen). They do not measure desirability, retention, or product-market fit.

## When to use
- Before launching a new flow (signup, onboarding, checkout)
- After analytics shows a drop-off you can't explain
- When support tickets cluster around one screen
- Before any redesign that's bigger than a button move

## Format

| Type | Use when | Cost |
|---|---|---|
| Moderated remote | Need to dig on "why" | High (1hr/test * 5) |
| Unmoderated (Maze, UserTesting) | Volume, fast turnaround | Medium |
| Hallway tests with friends | Free, fast, biased | Low |
| Field studies (in their environment) | Behavior context matters | Very high |

## Recruiting
- Match real users. A test with internal teammates surfaces almost no real issues
  because they share your mental model.
- Pay them. $50-150 for 30-60 minutes is fair.
- Recruit through your CRM, intercom, or User Interviews.

## Test design

A usability test has 3-5 **tasks**, not questions. A task is something the user
tries to do without coaching. Example tasks:

- "Sign up for an account using your real email."
- "Find the export button for your last project."
- "Cancel your subscription, then change your mind and reactivate."

Tasks should be:
- Realistic (not "imagine you wanted to...")
- Outcome-focused (not "click the X button")
- Open-ended in path (let them find their own way)

## What to measure

- **Task completion rate** — did they get it done? Threshold: >90% for primary
  flows
- **Time to completion** — relative to expert baseline
- **Errors** — wrong clicks, dead ends
- **Subjective difficulty** (post-task SEQ — Single Ease Question, 1-7)
- **Verbatim moments of confusion** — these are the gold

## Severity classification

After the test, classify each issue:
- **Catastrophic** — blocks task completion (must fix)
- **Major** — slows task completion noticeably (should fix)
- **Minor** — small friction (nice to fix)
- **Cosmetic** — surface-level, no friction (defer)

Most early-stage products find 3-7 catastrophic issues in their first 5 tests.
That's where to spend the next sprint.

## What 5-user testing won't catch

- Long-term retention issues
- Issues that only appear after weeks of use
- Issues specific to a small persona (need separate per-persona test)
- Anything related to data scale (test with realistic data volumes)
