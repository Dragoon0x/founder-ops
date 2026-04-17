# Prompt: Pricing Experiment Design

## Output
`output/pricing-experiment-[date].md`

---

## Prompt Template

```
I want to run a pricing experiment.

Current state:
- Current pricing: [TIER STRUCTURE WITH PRICES]
- ARPU: $[X]
- Conversion rate (trial → paid): [Y%]
- Churn (monthly): [Z%]
- Expansion revenue (%): [W%]
- Customer acquisition cost: $[CAC]

What I'm observing (the trigger):
- [WHAT MADE ME WANT TO EXPERIMENT — e.g., "too easy to convert", "enterprise buyers say it's cheap", "churn concentrated in SMB tier", "competitor just raised prices"]

What I think is true (hypothesis):
- [SPECIFIC BELIEF — e.g., "we can charge 40% more without hurting conversion because X"]

Run /founder-ops finance pricing-experiment and produce:

## HYPOTHESIS (properly structured)

"If we change [X] to [Y], then [METRIC] will [DIRECTION] by [AMOUNT] 
because [REASON]"

Make it testable. Put numbers on it.

## EXPERIMENT DESIGN

### The change
- What exactly you'll change (price, tier structure, packaging)
- For whom (new customers only, cohort, A/B)
- Duration of test
- Scale (how many exposures needed for significance)

### Variants
- Control (current pricing, unchanged)
- Variant A (specific change)
- Variant B (optional, different direction)

### Sample size
- Conversions needed for statistical significance at 95% CI
- At current traffic, how long to collect that sample
- Minimum viable test: [DURATION + N]

### Guardrails (what must NOT break)
- Conversion rate must not drop below [X%]
- Support tickets must not spike more than [Y%]
- No customer complaints above [Z threshold]
- Trip-wire conditions that pause the experiment

## METRICS TO TRACK (daily)

| Metric | Baseline | Variant Target | Red Line |
|--------|----------|---------------|----------|
| Conversion rate | | | |
| ARPU (new customers) | | | |
| Time to convert | | | |
| Conversion by segment | | | |
| Support volume | | | |
| Social sentiment | | | |

## EXPERIMENT PLAN

### Pre-launch
- [ ] Update landing page / pricing page for variant group
- [ ] Tracking in place (segment-level, not just aggregate)
- [ ] Comms plan for support team (so they know answers)
- [ ] Grandfather plan for existing customers (important!)

### Week 1
- Launch
- Daily metric check
- Fix anything broken immediately

### Week 2-3
- Continue
- Reach statistical power

### Week 4
- Close experiment
- Analyze
- Decide

## DECISION FRAMEWORK

After the experiment:

- If variant wins >10% on ARPU, no guardrail breach → ship to all
- If variant wins 3-10% on ARPU → extend for 2 more weeks to confirm
- If variant loses 0-10% on ARPU but wins on retention or expansion → dig into why
- If variant loses >10% on ARPU → keep control, learn from the loss
- If any guardrail breaches → stop, revert

## POST-EXPERIMENT: WHAT TO LEARN

Beyond "did it work?":
- Did price sensitivity differ by segment?
- Did the change affect who converted (ICP shift)?
- Did expansion behavior change?
- Did customer service questions change (reveals positioning issue)?

## COMMUNICATION

### To existing customers (if pricing changes affect them)
- 30+ days notice
- Grandfather option
- Honest explanation

### To sales team
- Talk tracks for new pricing
- Common objections + answers
- When to discount

### To the team (internal)
- Results sharing cadence
- Next experiment hypothesis

## ADVERSARIAL CHECK

What could go wrong:
- Sentiment backlash (pricing feels like theft)
- Segment cannibalization (prospects rebalance into cheaper tier)
- Sales team confusion (multiple price points in flight)

Mitigation for each:
- [SPECIFIC]

Save as output/pricing-experiment-[DATE].md.
```
