# Sample Pricing Experiment — Mid-Market Tier Price Test

**Experimenter:** Head of Growth
**Experiment ID:** PRI-2026-03
**Status:** RUNNING (day 18 of 60)
**Start date:** 2026-03-21
**Target end:** 2026-05-20

---

## Hypothesis

Our mid-market tier is priced $299/mo/seat. Win rate is 44% in this segment, and we lose almost no deals on price (customer research says only 8% mention price as a factor). We believe we are under-priced for the value delivered and can move to $399/mo/seat without material impact on conversion.

**Null hypothesis:** Conversion rate at $399 = conversion rate at $299, within statistical noise.

**Directional hypothesis:** Conversion will drop 2-6% (from ~44% to 38-42%) while revenue per win increases 33%, for net revenue lift of 20-30%.

**Kill condition (we stop early and revert):** Conversion rate drops more than 10 percentage points (absolute) for 2 consecutive weeks with n>40.

---

## Design

### Groups
- **Control:** First half of each week (Mon-Wed), new SQLs see $299 pricing
- **Treatment:** Second half (Thu-Sun), new SQLs see $399 pricing
- Rotate weekly to avoid day-of-week bias

### Sample size target
- Need n=200 per arm to detect a 7% conversion change at 90% power
- Current SQL velocity: 18/week mid-market → ~6 weeks to reach n=200 per arm

### Measurement
- Primary metric: Won deals / SQLs (weekly cohort)
- Secondary metrics:
  - Win rate vs. named competitors
  - Days from SQL to win
  - Average contract value
  - Discount rate (% and frequency)
  - Deal-desk escalation rate

### What we changed
- Pricing page
- Sales collateral
- CRM opportunity default value
- AE scripts (new objection handling for "why did your price go up?")

### What we did NOT change
- Product
- Onboarding
- Customer success touchpoints
- Contract terms

---

## Running results (week 2 of 6)

| Metric | Control ($299) | Treatment ($399) | Delta |
|--------|----------------|------------------|-------|
| SQLs | 38 | 41 | - |
| Closed-won | 17 | 16 | - |
| Win rate | 44.7% | 39.0% | -5.7pp |
| Avg. days SQL→won | 22 | 25 | +3d |
| ACV (won deals) | $3,588 | $4,500 | +25.4% |
| Revenue per SQL | $1,605 | $1,756 | +9.4% |

**Current read:** Directionally matching our hypothesis. Conversion down ~6 points, revenue per SQL up ~9%. Sample too small for confidence yet.

---

## Observations from AEs

- New objection: "We just approved budget for $299 last quarter, procurement is saying this is too different."
- Discounting: treatment group has 3 deals closed at $349 via deal-desk approval
- Enterprise buyers do not blink at new price; mid-market 50-100 employee segment is the sensitive band

---

## Decision gates

- **Week 4 check-in:** If conversion drop >10pp, kill experiment immediately, revert pricing, postmortem.
- **Week 6 end:** Full analysis. Decision: roll out $399 / revert to $299 / test intermediate price ($349).

---

## Follow-on experiments (if this rolls out)

- Test annual prepay discount at new price point
- Test usage-based add-on for the high-usage segment
- Revisit small-business tier pricing in Q3

---

## What we'll write when this ends

- One page of results + recommendation
- 30-minute review with CEO, CRO (hypothetical), Head of Product
- Decision logged in decision-log.md
- If revert: postmortem on why assumption was wrong

---

**Updated:** 2026-04-08
**Next update:** 2026-04-15 (week 4 check-in)
