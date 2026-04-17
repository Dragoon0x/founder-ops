# Mode: Tech Strategy

## Purpose

Make architecture, build-vs-buy, and tech debt decisions that don't haunt
you in 3 years. Stop being reactive. Stop over-engineering. Stop being
pulled into infinite refactors.

## Build vs Buy Decision Matrix

For every component, score:

| Question | Score | Reasoning |
|----------|-------|-----------|
| Is this our core competitive advantage? | 1-5 | If 5, build. If 1, buy. |
| Will we need it within 4 weeks? | 1-5 | If 5, buy. If 1, can build. |
| Are mature solutions available? | 1-5 | If 5, buy. If 1, must build. |
| Can we afford the OpEx? ($/month) | 1-5 | If 5, buy. If 1, build. |
| Will we need deep customization? | 1-5 | If 5, build. If 1, buy. |
| Total cost of ownership comparison | 1-5 | Lower is better |

**Rule of thumb at <$10M ARR: BUY everything that isn't a moat.**

Examples:
- Auth → BUY (Auth0, Clerk, Supabase) — not your moat
- Payments → BUY (Stripe) — not your moat (unless you're Stripe)
- Email → BUY (Postmark, Resend) — not your moat
- Analytics → BUY (Posthog, Mixpanel) — not your moat
- Your domain-specific algorithm → BUILD — this is your moat

## Architecture Decision Records (ADR)

For every reversibility-low decision, document:

```
## ADR-[N] — [Decision Title]

### Status
[Proposed / Accepted / Deprecated / Superseded by ADR-X]

### Date
[YYYY-MM-DD]

### Context
[The situation that requires a decision. Be honest about constraints.]

### Decision
[The decision in one paragraph.]

### Alternatives Considered

**Option A: [Name]**
- Pros: [list]
- Cons: [list]
- Estimated cost: $[X]
- Time to implement: [Y weeks]

**Option B: [Name]**
- Pros: [list]
- Cons: [list]
- Estimated cost: $[X]
- Time to implement: [Y weeks]

**Option C: [Name]**
[same structure]

### Decision Rationale
[Why we chose this option. Reference scoring above.]

### Consequences
- Positive: [what we gain]
- Negative: [what we give up]
- Reversibility: [hours / days / weeks / months / never]

### Revisit Trigger
[Specific condition that would cause us to re-evaluate]
Example: "If we exceed 10K req/sec or onboard a customer requiring SOC 2"
```

## Tech Debt Inventory & Priority

Maintain a living inventory:

```
## Tech Debt Inventory

| Item | Type | Impact | Cost to Fix | Priority |
|------|------|--------|-------------|----------|
| Unbounded query in /api/users | Performance | High (50% of incidents) | 2 days | P0 |
| Mixed auth systems (legacy + new) | Security | Medium | 2 weeks | P1 |
| Tests not running on PRs | Process | Medium | 4 hours | P0 |
| Over-engineered abstraction in billing | Velocity | Low (1 PR/month touches) | 3 weeks | P3 |
```

**Types:**
- **Velocity debt:** Slows down feature development
- **Security debt:** Exposes vulnerabilities
- **Performance debt:** Degrades user experience
- **Reliability debt:** Causes incidents
- **Process debt:** Manual work that should be automated

**Priority:**
- **P0:** Fix this quarter (blocks revenue / causes incidents / security)
- **P1:** Fix next quarter (slows down growth)
- **P2:** Fix when convenient (annoyance, not blocker)
- **P3:** Document and live with it (low impact)

**Rule:** Allocate 15-25% of engineering time to tech debt. Less and it
compounds. More and you stop shipping features.

## Scaling Phases — When to Re-Architect

| Phase | Scale | Architecture | Common Pivot |
|-------|-------|--------------|--------------|
| MVP | 0-100 users | Monolith, single DB | None — keep shipping |
| Early traction | 100-10K users | Monolith + caching layer | Add Redis, CDN |
| Growth | 10K-100K users | Modular monolith, read replicas | DB read replicas, queue system |
| Scale | 100K-1M users | Service-oriented (selective microservices) | Extract hot services |
| Enterprise | 1M+ users | Multi-region, microservices | Geographic distribution |

**Rule:** Don't pre-optimize. Build for the next 2 phases, not all 5.

## The "Boring Tech" Principle

For every technology choice, ask:
- How many companies use this in production at our scale?
- How long has it existed?
- Is there a community / ecosystem?
- Can we hire people who know it?
- What's the failure mode? (And do we understand it?)

**Innovation tokens:**
You get 3 "innovative tech" picks. Spend them on what differentiates you,
not on infrastructure. Use boring tech for the rest.

Examples:
- Building an AI product? Spend tokens on the AI stack. Use Postgres + Rails.
- Building a real-time collaboration tool? Spend tokens on CRDTs/sync. Use AWS standard infra.

## Vendor Lock-In Awareness

Score each vendor:

| Question | Score | Reasoning |
|----------|-------|-----------|
| Can we export our data in a usable format? | Y/N | |
| How long would migration take? | Days/Weeks/Months | |
| Are there 2+ alternative providers? | Y/N | |
| Are we on their open-source standard? | Y/N | |
| What's the cost trajectory next 3 years? | $/yr | |

**Acceptable lock-in:** Stripe (industry standard), AWS (massive ecosystem)
**Concerning lock-in:** Proprietary database, single-vendor AI APIs without alternatives

## Output

- `output/adr-[N]-[topic].md`
- `data/tech-debt-inventory.md`
- `reports/architecture-review-[quarter].md`
- `output/build-vs-buy-[component].md`
