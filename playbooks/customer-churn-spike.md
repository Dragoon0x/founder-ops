# Playbook: Customer Churn Spike

## The Trigger
Gross churn jumped from [baseline] to 2x baseline over 30-60 days.
Or: 3+ "lighthouse" customers churned in a month.
Or: Net retention dropped below 100% after being above.

## Week 1: Diagnose

### Day 1-2: The obvious audit
- [ ] List every churned account in last 90 days
- [ ] For each: usage trajectory, size, tenure, reason given, who owned the account
- [ ] Look for patterns: cohort, ACV band, role of buyer, industry

### Day 3-4: Phone the churned
Not email. Call. 20-30 minutes each. Ask:
1. What was the #1 reason you left?
2. What would have kept you?
3. Where did you go? How is it?
4. What should we fix?

**Real signal:** The third question. Where they went tells you who's
beating you, what they're offering, what you'd need to match.

### Day 5: Pattern recognition

Churn usually has one dominant cause. Possibilities (ranked by frequency):

1. **Adoption never happened.** They bought, never onboarded, canceled
   at renewal. Fix: onboarding.
2. **Champion left.** Person who loved you left the company. Fix:
   multi-threading.
3. **Better alternative emerged.** Competitor shipped something you didn't.
   Fix: product.
4. **Pricing.** Your value/price ratio slipped. Fix: pricing or value.
5. **Macro / layoffs.** They cut the category of spend. Fix: nothing, wait.
6. **ICP mismatch.** They were never ideal customers. Fix: ICP discipline.

## Week 2: Stop the Bleed

### If adoption problem
- Audit onboarding — where do users drop?
- Reach out to ACTIVE customers in "danger zone" (low usage, 60-90 days in)
- Offer white-glove setup for anyone at risk
- Product: reduce time-to-first-value by 50%

### If champion-left problem
- Identify single-threaded accounts (one contact only)
- Proactive outreach to add 2nd/3rd contact
- Offer "new user" onboarding to champion's replacement

### If better-alternative problem
- Product sprint: ship the one thing you're losing on
- Talk track: shift positioning to what you DO better
- Pricing: if you're expensive for weaker product, close the gap

### If pricing problem
- NOT a blanket price cut
- Grandfather existing customers, adjust pricing for new
- Add ROI proof (case studies showing value)

### If ICP mismatch
- Audit who you're selling to
- Disqualify bad fits in sales process
- Might shrink top-of-funnel; that's correct

## Week 3-4: Systematize

### Early warning signals (build these into ops)

**Red flags at individual customer level:**
- [ ] Login frequency dropped 50%+ over 30 days
- [ ] Champion changed jobs (watch LinkedIn)
- [ ] Support tickets unanswered (by them or you)
- [ ] Unusual silence when quarterly check-in requested
- [ ] NPS dropped to detractor

**Red flags at cohort level:**
- Accounts closed in last 60 days by [month] vs [month] comparison
- Net retention rolling 90-day — trend, not point
- Expansion as % of base (is it happening?)

### Proactive intervention playbook

Week 1 of red flag: CSM reaches out, confirms health
Week 2: Executive sponsor from your side takes a call
Week 3: Custom content / training / roadmap conversation
Week 4: Discount offer (15-25%, time-limited) with commitment clause

## Long-term: Retention Infrastructure

1. **Usage-based health score.** Updated weekly. Everyone sees it.
2. **Quarterly Business Reviews.** 30-60 min with top-30 accounts.
3. **Success milestones.** Document what success looks like; measure.
4. **Expansion motion.** Customer success is incentivized on expansion, not just retention.

## The Meta-Lesson

Churn is a lagging indicator of a leading failure. The question is
never "how do we reduce churn" but "what did we fail to deliver."

Build product and sales motion that makes customers get value, and
churn takes care of itself.

## Metrics to Watch

| Metric | Healthy | Concerning | Crisis |
|--------|---------|------------|--------|
| Gross retention (SMB) | >85% | 75-85% | <75% |
| Gross retention (Mid-market) | >90% | 80-90% | <80% |
| Gross retention (Enterprise) | >95% | 90-95% | <90% |
| Net retention | >110% | 100-110% | <100% |
| Time-to-first-value | <7 days | 7-21 days | >21 days |
| NPS | >40 | 20-40 | <20 |

See `benchmarks/saas-b2b.md` for segment-specific details.

## Output
- `reports/churn-analysis-[date].md` — full diagnosis
- `output/save-playbook.md` — operational intervention guide
- `data/customer-health-dashboard.md` — ongoing tracker
- `data/at-risk-accounts.md` — who's in the danger zone

## Related
- `modes/customer-success.md` — CS methodology
- `modes/retention.md` — retention experiments
- `modes/discovery.md` — talk to churned customers properly
