# Mode: Data Stack & Analytics

## Purpose

Build a data infrastructure that gives you signal, not noise. Avoid
building a data team before you need one. Make data-driven decisions
without becoming a data company.

## Submodes

### 1. Data Stack by Stage

| Stage | Stack | What You Can Answer |
|-------|-------|--------------------|
| Pre-seed | App database + Mixpanel/Posthog | "Are people using the product?" |
| Seed | + Stripe data, Excel exports | "What's our MRR? Churn?" |
| Series A | + dbt + Snowflake/BigQuery + Looker/Hex | "What drives retention by segment?" |
| Series B+ | + ML platform, customer data platform, real-time | "What predicts expansion vs churn?" |

**Don't skip stages.** Building Series A stack pre-seed wastes engineering on infrastructure
nobody queries.

### 2. The 5 Questions Every Founder Should Be Able to Answer

If you can't answer these in < 5 minutes from your data:

1. **What's our MRR/ARR right now?** (down to the dollar, this week)
2. **What's our gross logo churn last 30 days?** (count of logos, not %)
3. **What's our net dollar retention by cohort?** (monthly cohort)
4. **What's our CAC by channel last 90 days?** (with payback period)
5. **Who are our top 10 accounts by ARR + 10 most at-risk?**

If any takes longer → that's your data priority.

### 3. Event Tracking Schema

Define events BEFORE you implement them. Schema:

```
event_name: snake_case_verb_noun (e.g., user_signed_up, project_created)

properties:
  user_id: string (unique)
  account_id: string (org/team grouping)
  timestamp: ISO 8601
  source: string (web/api/mobile)
  
  # Event-specific properties (typed, documented)
  [property_name]: [type] # description
```

**Event taxonomy:**
- Activation events (account_created, first_action_taken)
- Engagement events (feature_used, search_performed)
- Conversion events (subscription_started, payment_made)
- Retention events (returning_user, daily_active)
- Risk events (login_failed, refund_requested)

### 4. Cohort Analysis (the most important view)

| Cohort (signup month) | Month 1 | Month 2 | Month 3 | Month 6 | Month 12 |
|----------------------|---------|---------|---------|---------|----------|
| Jan 2026 | 100% | 84% | 76% | 68% | 62% |
| Feb 2026 | 100% | 86% | 78% | 70% | — |
| Mar 2026 | 100% | 88% | 80% | — | — |

Things to watch:
- **Trend:** Are newer cohorts retaining BETTER than older?
- **Plateau:** When does retention stabilize? (good = high plateau)
- **Magic moment:** When does retention drop most? (worst = month 1)

### 5. Funnel Analysis

```
Visitors          100,000  (100%)
  → Signups         8,000  (8.0% — industry avg 5-10%)
    → Activated     4,800  (60% — target 70%+)
      → Trial → Paid  720  (15% — target 20-25%)
        → Retained 12mo   504  (70% — target 80%+)
```

Identify the biggest drop and fix that. Don't optimize 60→61% conversion
when there's a 15→25% opportunity downstream.

### 6. Metrics Dashboard

One page. Updated daily/weekly. Shared in #metrics or via email.

**Required:**
- ARR / MRR (current + delta)
- New customers (week-over-week)
- Churn (count + dollar)
- Pipeline ($ generated, $ closed)
- Burn (monthly + cumulative)
- Runway (months remaining)
- North Star (whatever yours is — DAU, NRR, etc)

**Optional (by stage):**
- LTV / CAC
- Activation rate by cohort
- NPS (rolling 90 days)
- Top 10 customers (by ARR)
- Top 5 churn risks
- Hiring pipeline

### 7. Data Quality

Bad data = wrong decisions. Audit quarterly:

- [ ] Do our totals reconcile across systems? (Stripe MRR = Salesforce ARR / 12?)
- [ ] Are we double-counting anywhere? (e.g., free trials counted as customers)
- [ ] Are we missing events? (compare app analytics to server logs)
- [ ] Have we changed event definitions without versioning? (breaks historical comparisons)
- [ ] Do we have a single source of truth for each metric?

### 8. When to Hire a Data Person

**Symptoms you need data hire:**
- Founders spending > 5 hrs/week on dashboards
- Different teams report different numbers for same metric
- "Wait, what does NRR mean here?" happens monthly
- Investors ask for analyses you can't produce in a day
- Dashboards take longer than 1 day to update

**Hire order:**
1. Analytics engineer (set up dbt + warehouse + dashboards) — Series A
2. Data analyst (own metrics, ad-hoc analysis) — late Series A
3. Data scientist (predictions, ML) — Series B+
4. Head of Data (manages above) — Series B+

## Anti-Patterns

| Pattern | Problem | Fix |
|---------|---------|-----|
| Building data warehouse pre-PMF | Premature, wastes engineering | Use product analytics tool |
| 50-metric dashboards | Nobody looks | < 10 metrics, focus |
| Different numbers across teams | Loses trust in data | Single source of truth |
| Ignoring data quality | Wrong decisions | Quarterly audit |
| Vanity metrics on the dashboard | Distracts from real signals | Cut anything not actionable |

## Output

- `data/metrics-dashboard.md` (running)
- `reports/cohort-analysis-[date].md`
- `reports/funnel-analysis-[date].md`
- `reports/data-quality-audit-[quarter].md`
