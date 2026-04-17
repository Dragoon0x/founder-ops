# Sample OKR Document — Q2 2026

**Company:** Helio (hypothetical AI-native CRM for field sales)
**Stage:** Seed, 11 people, $1.8M ARR, 18 months runway
**Planning window:** Q2 2026 (Apr 1 - Jun 30)
**Owners note:** Written in the first person voice of a CEO for realism

---

## Annual context (for framing)

Company north star: **$5M ARR by end of 2026** (currently pacing $2.2M by end of Q1).

Three company bets for 2026 set in January:
1. Win the field-sales wedge before horizontal CRMs add AI parity
2. Build a moat via proprietary call data and company-specific models
3. Get to default-alive unit economics (CAC payback <14 months)

---

## Q2 OKRs (company level)

### Objective 1: Prove repeatable mid-market acquisition

Until Q1, growth was founder-led. Q2 is about hiring, onboarding, and validating a repeatable AE motion.

**KR1.1:** New ARR from non-founder-sourced deals: $250k (up from $85k in Q1)
**KR1.2:** Inbound → SQL conversion rate: 28% (up from 19%)
**KR1.3:** Ramp time for new AE (Sarah, hired Mar 12) to first closed deal: under 45 days

**Bets to achieve:**
- Formalize AE playbook (running doc, weekly coaching)
- Launch two outbound sequences that each generate 15+ SQLs
- Instrument pipeline with clear stage definitions and forecast rigor

**Risks:**
- One AE is a small sample
- Our ICP is still fuzzy (we have closed both 50-person and 2000-person companies)

---

### Objective 2: Ship the data moat

We talk about data as a moat but have not built the pipeline. This quarter we prove it.

**KR2.1:** Call transcripts processed through Helio's pipeline: 50,000
**KR2.2:** Customer-specific model performance lift (vs. base model) on internal eval: +15%
**KR2.3:** 5 customers opt-in to custom model training (contract update)

**Bets to achieve:**
- Hire ML engineer #2 (role posted Feb 14, 3 finalists)
- Ship "Helio Learn" feature that packages custom training as product
- Rewrite legal data-use clause; get signed by 5 customers

**Risks:**
- Legal clause rewrite could be multi-week
- Custom model performance might not clear +15% bar

---

### Objective 3: Unit economics in the green

**KR3.1:** CAC payback on new cohorts: under 14 months (currently 21)
**KR3.2:** Gross margin: above 68% (currently 61%, weighed by inference cost)
**KR3.3:** Logo retention on cohorts older than 6 months: above 92%

**Bets to achieve:**
- Migrate 60% of inference from Opus-tier to Sonnet-tier model (internal evals pass)
- Implement semantic cache for repeated queries (estimated 25% inference reduction)
- Run one pricing experiment on new logos (current test: $499 → $599 for mid-market tier)

**Risks:**
- Pricing change may slow top-of-funnel
- Model migration may degrade quality in edge cases

---

## Team-level objectives (summary)

| Team | Objective | Headline KR |
|------|-----------|-------------|
| Engineering | Make Helio faster and cheaper | P50 latency <1.2s; inference cost/active user <$4/mo |
| GTM | Build the mid-market motion | $250k non-founder ARR; 18 SQLs/week by end-Q |
| Product | Ship the data moat visibly | Helio Learn GA; 5 custom-model customers |
| Operations | Financial discipline | Monthly close by day 5; renewal rate 100% this Q |

---

## Not OKRs (deliberately)

Things we decided NOT to focus on in Q2, with reasoning:

- **International expansion.** Temptation based on inbound from UK/DE. Deferred until Q4.
- **New vertical (insurance).** Interesting signal but would fragment the team.
- **Raising Series A.** Runway supports waiting for stronger metrics.
- **Hiring a Head of Marketing.** Current founder-led content works; hire in Q3 when we have AE playbook proven.

---

## Scoring rubric

Each KR scored 0.0-1.0 at end of quarter:
- 1.0 = hit or exceeded target
- 0.7 = acceptable, just missed
- 0.5 = real miss, action needed
- Below 0.3 = reassess whether this was the right KR

Target average: 0.6-0.7 (if we hit 1.0 everything, we aimed too low).

---

## Weekly rhythm

- **Monday 9am.** Company all-hands. Each team reports KR status (green/yellow/red + one-liner).
- **Wednesday 4pm.** Founder + team leads. Deep dive on 1-2 yellow/red KRs.
- **Friday EOD.** Founder writes async update to board + team.

---

## Mid-quarter check-in (scheduled May 15)

Three hours blocked. Each team lead presents:
- KR status
- Top obstacle
- Ask for help

If any KR is trending to sub-0.3, we decide explicitly: rescue, rescope, or abandon.

---

**Document owner:** Founder/CEO
**Last updated:** 2026-04-01
**Next review:** 2026-05-15
