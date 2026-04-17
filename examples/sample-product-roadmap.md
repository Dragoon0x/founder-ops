# Sample Product Roadmap — Helio, H1 2026

**Author:** Head of Product
**Published:** 2026-04-01
**Audience:** Team + board; customer version lives separately
**Format:** Now / Next / Later (no committed dates beyond Now)

---

## Frame

### Our bets for H1 2026

1. **Prove the data moat.** Customer-specific models that outperform base models by 15%+
2. **Expand the wedge.** From call capture → call capture + quote generation
3. **Operational excellence.** Latency, cost, reliability at scale

### Non-bets (deliberate nos)

- **Full CRM replacement.** Stay wedge; integrate with existing CRMs
- **Full enterprise (5000+ employees).** Wrong stage; revisit in 2027
- **International.** EU data-residency stops us; revisit Q4
- **Mobile-first rebuild.** Mobile is good-enough; desktop refinements higher value

---

## NOW (currently building, shipping Q2)

### Helio Learn GA (May 15)
Customer-specific models that learn from a customer's own historical call data.

- **Why:** Our moat depends on proprietary data loops. Evidence in internal evals showed +15% quality lift.
- **Success:** 5 paying customers on Helio Learn by June 30; opt-in rate of new enterprise contracts 60%+
- **Risk:** Legal clause for data use in training; still working through customer legal reviews

### Voice pipeline v2 (Apr 30)
Rebuild of our audio processing pipeline for lower latency (target P50: 1.2s → 0.8s) and lower cost (inference spend down 30%).

- **Why:** Latency is our top user complaint at scale; inference cost is squeezing gross margin
- **Success:** P50 under 0.8s measured weekly; inference cost per active user under $4/mo
- **Risk:** Quality regression; cannot ship unless evals pass

### Quote generation alpha (June 15)
Structured output of quotes and proposals from call context. First step toward expanding wedge.

- **Why:** Users ask for "the next step after the call." Quote is the obvious expansion.
- **Success:** 20 alpha customers using weekly; qualitative positive signal
- **Risk:** Could fragment focus; firm kill if adoption under 10 customers in first 4 weeks

---

## NEXT (plan to start in Q3, subject to learning from Now)

### Multi-language support (EU priming)
Portuguese, German, French support to test EU demand without solving data residency yet.

### Quote generation beta
Formal beta, pricing validation. Expand from individual user feature to team workflow.

### Integration expansion
Top 5 requested integrations: HubSpot, Salesforce, Dynamics, Outreach, Gong. Two per quarter.

### Manager dashboards v1
Reports for sales managers to see team productivity, coaching opportunities. Explicit user research first.

### SOC 2 Type 2 certification
Not a feature; a gate for enterprise deals above $100k ACV.

---

## LATER (2027 candidates, not committed)

- Full-fledged AI sales manager (coaching during calls)
- Marketplace for sales-tuned models
- Native CRM (replacing integrated CRM) for a focused segment
- Procurement-grade features (SSO, SCIM, audit logs)
- Enterprise on-prem / VPC deployment
- International expansion with EU data residency
- Industry-specific variants (construction sales, medical device sales)

---

## What we are explicitly NOT doing

| Ask | Why we're saying no |
|-----|---------------------|
| "Can you build a CRM?" | Wedge, not platform. Our moat is the workflow, not the database. |
| "Custom BI reporting" | Export to their BI; we are not Tableau. |
| "White-label for [partner]" | Slows product velocity; no clear business model at our scale. |
| "Telephony integration" | Too expensive to build well; integrate with Twilio-like partners instead. |

---

## Roadmap principles

- **Wedge before platform.** We win a niche completely before we broaden.
- **No multi-quarter bets we cannot kill in 4 weeks.** Every big project has a kill condition.
- **Customer evidence over internal excitement.** Asks from fewer than 3 paying customers become Later, not Now.
- **Quality is a gate not a feature.** Latency, accuracy, and reliability have objective bars we do not ship below.

---

## Update cadence

- **Monthly:** Status update on Now items (on track / at risk / slipped)
- **Quarterly:** Full roadmap rewrite; Next becomes Now or rolls to Later
- **Ad-hoc:** Kill or elevate items based on material new data

---

**Next update:** 2026-05-01
