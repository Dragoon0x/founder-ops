# RICE Framework

## Formula
**Score = (Reach × Impact × Confidence) / Effort**

## Definitions

### Reach
How many users will be affected per quarter (or other time period).
Use ABSOLUTE numbers, not percentages.

| Type | Example |
|------|---------|
| Users affected | 1,200 users will use this monthly |
| Customers helped | 30 enterprise customers |
| Visitors converted | 8,000 site visitors per quarter |

### Impact (per user reached)
How much does this affect each user?

| Score | Meaning | Example |
|-------|---------|---------|
| 3 | Massive | Solves their primary problem |
| 2 | High | Major improvement to current workflow |
| 1 | Medium | Notable improvement |
| 0.5 | Low | Minor improvement |
| 0.25 | Minimal | Barely noticeable |

### Confidence
How sure are you about Reach and Impact estimates?

| Score | Meaning | Evidence Required |
|-------|---------|-------------------|
| 100% | High confidence | Data + customer interviews + tested |
| 80% | Medium-high | Data OR strong customer signal |
| 50% | Medium | Reasonable hypothesis, no testing |
| 20% | Low | Speculative, untested |

### Effort
Total person-months for the work (not weeks).

| Score | Meaning |
|-------|---------|
| 0.25 | Days of work for one person |
| 0.5 | 1-2 weeks |
| 1 | 1 month for one person |
| 2 | 1 month for two people OR 2 months for one |
| 3 | Quarter of work for one person |
| 6 | Half of one engineer's year |
| 12 | A full engineer for a year |

## Worked Example

**Feature: Slack Integration**

- Reach: 1,800 customers asked for it (over 6 months) = 1,800
- Impact: 1.5 (major improvement to their workflow)
- Confidence: 95% (we've seen them use it elsewhere)
- Effort: 3 person-months

**Score = (1,800 × 1.5 × 0.95) / 3 = 855**

**Feature: AI Autosuggest**

- Reach: 2,000 active users = 2,000
- Impact: 1.5 (would help them work faster)
- Confidence: 40% (we haven't validated they'd use it)
- Effort: 10 person-months

**Score = (2,000 × 1.5 × 0.4) / 10 = 120**

**Verdict:** Slack integration scores 7x higher. Build first.

## When to Use
- Comparing 5+ features
- Decision needs justification
- Multiple stakeholders disagree

## When NOT to Use
- Strategic bets (RICE underweights low-confidence-high-impact moves)
- 2-3 obvious options (overkill)
- Time-sensitive decisions (analysis paralysis)

## Common Mistakes
- Inflating Reach (counting users who won't actually use it)
- Setting all Impact to 3 (everything looks important)
- Setting all Confidence to 100% (no humility)
- Underestimating Effort (always 2x what you think)
