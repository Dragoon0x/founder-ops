# Mode: Retention

## Purpose

Retention is the most important metric early-stage companies under-invest in.
You can't fill a leaky bucket. This mode addresses churn diagnosis,
reactivation, and proactive retention.

## The Retention Hierarchy

```
1. Activation (did they get to value?)
2. Habit formation (did they use it 3+ times in first week?)
3. Engagement (are they using it weekly?)
4. Expansion (are they using more features over time?)
5. Advocacy (are they referring others?)
```

If you have a retention problem, work UP the stack to find where it breaks.

## Submodes

### 1. Churn Diagnosis

**Step 1: Segment your churn.**

| Segment | What to investigate |
|---------|-------------------|
| Churned in week 1 | Activation problem |
| Churned in month 1 | Habit formation problem |
| Churned in month 2-3 | Value gap (didn't see ongoing value) |
| Churned at renewal | Pricing or competitive problem |
| Churned after years | Strategic shift / acquisition / shutdown |

**Step 2: Talk to churned customers.**

For each churned customer (especially $-significant ones):
```
Subject: Quick question — 5 minutes for closure

[Name],

You stopped using [Product] [N weeks/months] ago. I'm not asking you
to come back — I'd just like to understand what happened so I can
fix it for the next person.

15-minute call this week? Or even just a 3-sentence email reply?

I'll send a $50 [Amazon / coffee / charity donation] in exchange for
your honesty.

[Founder]
```

**Questions to ask in exit interviews:**
1. What were you hoping [Product] would do for you?
2. What did it do well?
3. What did it not do that you needed?
4. What are you using instead now?
5. What would have to be true for you to come back?
6. Would you recommend [Product] to a friend with a similar problem? Why or why not?

### 2. Cohort Retention Analysis

For each acquisition month, track retention over time:

```
## Cohort Retention — [Product]

| Acquisition Month | Month 0 | Month 1 | Month 2 | Month 3 | Month 6 | Month 12 |
|-------------------|---------|---------|---------|---------|---------|----------|
| Jan 2026 | 100 | 78 | 65 | 58 | 51 | 47 |
| Feb 2026 | 100 | 82 | 70 | 62 | 55 | - |
| Mar 2026 | 100 | 85 | 72 | 65 | - | - |

### Trend analysis
- Month 1 retention: improving (78 → 85)
- Long-tail retention: TBD (need more data)
- Hypothesis: New onboarding flow shipped Feb is improving early retention
```

**The "smile curve":** healthy products show retention that flattens out
(curve "smiles") — net new users + returning churned users + slow tail.

**The "frown curve":** unhealthy products show retention that keeps declining
toward zero — no curve "smiles."

### 3. Predictive Churn Signals

Identify behaviors that predict churn 30-60 days before it happens:

| Signal | Lead time |
|--------|-----------|
| Login frequency drops 50%+ | 30 days |
| Stopped using key feature | 30-60 days |
| Support ticket about pricing | Imminent |
| Champion left their company | 60-90 days |
| Auto-renewal email opened multiple times | 14 days |
| Stopped inviting teammates | 60-90 days |
| Decreased usage during work hours | 30 days |

**Use these to trigger proactive outreach:**
```
Subject: Anything I can help with?

[Name],

I noticed your team's usage of [Product] dropped over the past few weeks.
That usually means one of three things:

1. You're getting what you need and we don't need to bug you
2. Something's not working
3. Your priorities shifted

Want to send me a "1," "2," or "3"? Whichever it is, I'll respond
helpfully and not pushily.

[Founder]
```

### 4. Reactivation Campaigns

For users who churned but haven't fully left (still in CRM, no formal cancel):

**90-day re-engagement:**
```
Subject: We made the thing you said was missing

[Name],

When you stopped using [Product] in [month], you mentioned [specific reason
they gave].

We've shipped that. Specifically:
- [Specific feature/change]
- [Specific feature/change]

If you want to take another look: [direct link with their account preserved]

If not, no problem — and thank you for the original feedback. It made
the product better.

[Founder]
```

**Use sparingly.** One re-engagement attempt, max two. After that, you're
spam.

### 5. Net Revenue Retention (NRR)

For SaaS B2B, the most important retention metric:

```
NRR = (Starting MRR + Expansion - Churn - Contraction) / Starting MRR

Targets:
- 100% = customers neither leaving nor expanding
- 110% = healthy
- 120%+ = best in class
- < 90% = critical problem
```

**Drivers of NRR:**
- Expansion within accounts (more seats, more features, higher tier)
- Successful upsell motions
- Low gross churn
- Low contraction

### 6. Building a Retention-First Culture

**Founder rituals:**
- Weekly: review last week's churned customers (read every cancellation reason)
- Monthly: cohort retention review (is the curve flattening?)
- Quarterly: customer interview deep-dive (talk to 10 customers — including churned)

**Team metrics:**
- Engineering: weekly active users / monthly active users (DAU/MAU or WAU/MAU)
- Customer success: at-risk accounts (proactively identified)
- Sales: net new + expansion + churn (not just new)
- Product: feature adoption + activation rate

### 7. The Retention Improvement Playbook

Pick ONE improvement per quarter. In priority order:

1. **Activation rate improvement** (biggest leverage, lowest cost)
2. **Onboarding experiment** (test specific changes)
3. **Habit formation triggers** (notifications, weekly digest, etc.)
4. **At-risk account intervention** (proactive outreach)
5. **Reactivation campaign** (last resort, low ROI)

Do NOT try to do all five simultaneously. Pick one, measure, iterate.

## Retention Anti-Patterns

| Anti-pattern | Cost | Fix |
|--------------|------|-----|
| Focusing on growth, ignoring churn | Leaky bucket | Track NRR alongside MRR |
| No segmentation in churn | Aggregate hides causes | Segment by cohort, plan, source |
| Not talking to churned users | Missing real reasons | Exit interviews + small incentive |
| Reacting to churn after it happens | Too late | Predictive signals + proactive outreach |
| Adding features as retention strategy | Usually doesn't work | Improve activation + onboarding first |
| Discounting to retain | Trains customers to threaten leaving | Solve the underlying issue instead |

## Output
- `data/retention-metrics.md` (cohort tables, NRR, churn breakdown)
- `reports/exit-interview-[customer]-[date].md`
- `reports/cohort-retention-[month].md`
- `output/at-risk-outreach-[customer]-[date].md`
