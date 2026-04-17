# Mode: Experiments

## Purpose

Run experiments that produce signal, not noise. Most "A/B tests" early-stage
companies run are statistically meaningless. This mode enforces rigor.

## The Experiment Framework

### Step 1: Hypothesis (must be falsifiable)

```
"If we [change X], then [metric Y] will [direction] by [amount]
because [mechanism]."
```

If you can't write this in one sentence, you don't have a hypothesis.

### Step 2: Calculate Required Sample Size

For comparing two conversion rates, you need rough sample size for
statistical significance:

| Baseline rate | Detectable lift | Sample needed (per variant) |
|--------------|-----------------|---------------------------|
| 1% | +50% (1% → 1.5%) | ~12,000 |
| 5% | +50% (5% → 7.5%) | ~2,400 |
| 10% | +50% (10% → 15%) | ~1,200 |
| 20% | +50% (20% → 30%) | ~500 |
| 50% | +20% (50% → 60%) | ~750 |

**Practical implication:**
- If you have <100 users in each arm, you cannot detect anything
- Most early-stage A/B tests are noise
- Better: ship the better-thought-through version, observe directionally

### Step 3: Pre-Define Success/Kill Criteria

Before running:
```
## Experiment: [Name]

### Hypothesis
"If [change], then [metric] will [direction] by [amount]"

### Variants
A (control): [current]
B (treatment): [change]

### Success criteria
- Primary metric: [X] increases by ≥[Y%]
- Required confidence: 90%+ (early stage), 95%+ (high-stakes)
- Minimum sample size: [N] per variant

### Kill criteria
- If primary metric drops by ≥[X%], stop and revert
- If [secondary metric] drops by ≥[Y%], stop (guardrail)

### Duration
- Minimum: [N days] (cover weekly cyclicality)
- Maximum: [M days] (don't drag on)

### Decision rule
- If significant + positive: ship variant B
- If significant + negative: ship variant A (revert)
- If not significant: ship the simpler version
```

### Step 4: Run It Cleanly

**Rules:**
- Only ONE variable changes per experiment
- Same time period (no sequential = confounded)
- Random assignment (not "every other user")
- Don't peek and stop early when it looks good (noise)

### Step 5: Decide Within 48 Hours of Conclusion

```
## Experiment Result: [Name]

### Outcome
- Variant A: [N users], [conversion rate]
- Variant B: [N users], [conversion rate]
- Statistical significance: [p-value or CI]

### Decision
- [ ] Ship variant B (treatment won)
- [ ] Keep variant A (control won)
- [ ] Inconclusive — ship simpler version

### What we learned
[The actual insight, beyond the metric movement]

### What we'd do differently
[Methodology improvements for next time]
```

## Experiment Categories

### 1. Conversion Rate Experiments
**When:** Optimizing landing pages, signup flows, paywalls
**What works:**
- Test ONE element at a time (CTA, headline, social proof, pricing)
- Test BIG changes (10%+ visual difference) — small changes need huge samples
- Test for 1-2 weeks minimum

**What doesn't work:**
- Button color tests (insignificant)
- Multivariate tests with small samples
- Stopping early because it "looks like" it's winning

### 2. Pricing Experiments
**When:** Validating willingness to pay, optimizing tiers
**What works:**
- Different prices to different cohorts (signups in week X get price Y)
- Anchor pricing tests (showing higher price first)
- Annual vs monthly preference tests

**What doesn't work:**
- Price changes for existing customers (causes churn, breaks trust)
- Showing different prices to different visitors on the same page (illegal in some jurisdictions)

### 3. Channel Experiments
**When:** Validating new acquisition channels
**What works:**
- Time-boxed budget ($X for Y weeks)
- Pre-defined success threshold (CAC < $Z)
- Compare to baseline channels (not absolute numbers)

**What doesn't work:**
- "Let's try Google Ads" without a kill threshold
- Channel experiments that take > 12 weeks to show signal

### 4. Product Experiments
**When:** Validating new features
**What works:**
- Feature flags (some users see new feature, others don't)
- Cohort analysis (week N adopters vs week M)
- Activation funnel comparison

**What doesn't work:**
- "Beta" with no adoption tracking
- Asking users "do you like it?" instead of measuring usage

## Experiment Anti-Patterns

| Anti-pattern | Problem | Fix |
|--------------|---------|-----|
| No hypothesis | Random change | Force the "If X, then Y, because Z" format |
| Multiple changes at once | Can't isolate cause | One variable per experiment |
| Stopping early when winning | Noise stopping | Pre-commit to duration |
| No kill criteria | Bad experiments run forever | Define before starting |
| Statistical illiteracy | False conclusions | Use online sample size calculators |
| Optimizing wrong metric | Hit the metric, miss the goal | Tie to North Star |
| Not documenting losses | Repeating mistakes | Failed experiments = most valuable data |

## Output
- `output/experiment-brief-[name].md` (before)
- `reports/experiment-result-[name].md` (after)
- `data/experiments.md` (running log of all experiments + outcomes)
