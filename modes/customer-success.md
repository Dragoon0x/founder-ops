# Mode: Customer Success

## Purpose

Keep customers alive past the honeymoon. Detect churn signals before they
churn. Turn customers into evangelists. NOT support tickets — strategic
account management.

## Submodes

### 1. Onboarding Score

For every new customer, track time-to-value:

| Stage | Target Time | Indicator |
|-------|------------|-----------|
| Signup → First action | < 5 min | Account created and opened |
| First action → First value | < 24 hrs | Completed core action successfully |
| First value → Habit | < 7 days | Returns 3+ times in week 1 |
| Habit → Expansion | < 30 days | Invites teammate or upgrades |

If any stage exceeds target by 2x, customer is at risk.

### 2. Health Score Calculation

Score each customer 0-100:

| Signal | Weight | Score |
|--------|--------|-------|
| Login frequency (last 14 days) | 25% | 0-25 |
| Feature adoption (% of core features used) | 20% | 0-20 |
| Team adoption (% of seats active) | 15% | 0-15 |
| Support ticket volume (inverted) | 10% | 0-10 |
| Engagement with email/in-app messaging | 10% | 0-10 |
| Payment health (on time, no failures) | 10% | 0-10 |
| Recent product feedback (positive sentiment) | 10% | 0-10 |

| Score | Status | Action |
|-------|--------|--------|
| 80-100 | Healthy | Quarterly check-in, expansion conversation |
| 60-79 | Watch | Monthly proactive outreach, identify usage gap |
| 40-59 | Risk | Weekly intervention, exec sponsor call |
| 0-39 | Critical | Save play: feature walkthrough, comp gesture, dedicated AE |

### 3. Churn Detection (the 14-day window)

Customers churn 14-30 days BEFORE they cancel. Watch for:

- Login frequency drops > 50% week-over-week
- Power user goes silent (was daily, now weekly)
- Admin user changes (new owner = new evaluation)
- Negative survey response (NPS < 6)
- Support ticket about "alternatives"
- Reduction in seats / teams
- Failed payment + no auto-retry success

When any 2 fire → trigger save play.

### 4. Save Play

```
## Save Play — [Customer]

### Risk signals (what fired)
- 

### Account context
- ARR: $
- Tenure: months
- Primary use case:
- Champion: [name + role]
- Last positive interaction:

### Save options (escalating)
1. Email: "we miss you" with new feature tease
2. Loom: personalized walkthrough of unused capability
3. Call: 15-min "how can we help" with founder/CEO if > $20K ARR
4. Concession: discount, extended trial, free month
5. Last resort: "what would have to be true to keep you"

### Predicted outcome
- Save probability: %
- If saved, ARR retained: $
- If lost, time to find replacement customer: weeks

### Decision
[Which play, by when, owner]
```

### 5. QBR (Quarterly Business Review)

For accounts > $25K ARR, run QBRs every 90 days:

```
## QBR — [Customer] — [Quarter]

### Their objectives (review)
- Q1 goal: 
- Q1 actual:
- Q1 status: ✓ / partial / missed

### Usage / Adoption
- Active users: [N] of [M] seats
- Top features used: 
- Underused features (opportunity):
- New use cases discovered:

### Value delivered (in their language)
- [Concrete outcome they achieved]
- [Time/money saved with our metric]
- [Capabilities unlocked]

### What's next quarter
- Their priorities:
- How we can support:
- Potential expansion:

### Risk / Concerns
- 

### Action items
- [Theirs]
- [Ours]
```

### 6. Expansion Playbook

Look for expansion signals:
- Team grew (new seats)
- New use case emerged (different team using it)
- Hit usage limit on current plan
- Asked about features only on higher tier
- Mentioned a related problem we could solve

Conversation framework:
1. Acknowledge the success they're having
2. Confirm the new context (more team, more usage, new project)
3. Tie expansion to a specific outcome they care about
4. Make the upgrade feel inevitable, not pushy

## Anti-Patterns

| Pattern | Problem | Fix |
|---------|---------|-----|
| Wait for churn, then react | Already lost | Track health score weekly |
| Same playbook for $500 ARR vs $50K ARR | Wastes time on small, neglects big | Tier-based engagement |
| "How are you?" check-ins | Feels like sales | Lead with value, not questions |
| Treating CSM as support escalation | Reactive, not strategic | CSM owns growth, not tickets |
| Ignoring power users | They become competitors' references | Power user advisory program |

## Output

- `reports/health-score-[customer]-[date].md`
- `output/save-play-[customer].md`
- `reports/qbr-[customer]-[quarter].md`
- `data/customer-health.md` (running roll-up)
