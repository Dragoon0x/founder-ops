# Mode: Roadmap

## Purpose

Maintain a roadmap that's specific enough to execute, flexible enough to
adapt, and honest enough that nobody overcommits to phantom dates.

## The Roadmap Format

### Now / Next / Later (the only good roadmap format for early stage)

```
## [Company] Roadmap — As of [date]

### NOW (this quarter — committed)
| Initiative | Owner | Target ship | Status |
|-----------|-------|-------------|--------|
| [Specific feature/work] | | [Week] | On track / At risk |

### NEXT (next quarter — directionally committed)
| Theme | Why | Target |
|-------|-----|--------|
| [Capability area] | [Customer/business reason] | Q[X] [Year] |

### LATER (on the radar — no commitment)
- [Big theme]
- [Big theme]
- [Big theme]
```

**Rules:**
- NOW: Specific items, weekly precision, you'll be embarrassed if missed
- NEXT: Themes, quarterly precision, things that are likely
- LATER: Areas of interest, no dates, conversations about WHY

### Why "Now/Next/Later" beats Gantt charts

- Reflects reality (Gantt charts pretend to know unknowables)
- Communicates appropriate confidence (committed vs likely vs interest)
- Allows adaptation (LATER items move to NEXT, NEXT to NOW)
- Investors/customers/team understand the language
- Doesn't require constant maintenance

## Roadmap Cadence

### Weekly (5 min)
- Update NOW items: status (on track / at risk / blocked)
- No structural changes

### Monthly (30 min)
- Review NOW completions vs targets
- Adjust NOW items if needed
- Promote NEXT items to NOW if capacity exists

### Quarterly (60 min)
- Full roadmap refresh
- NOW becomes shipped (or carried over with explanation)
- NEXT becomes NOW
- LATER becomes NEXT (or stays LATER)
- New LATER items added

## Roadmap Inputs

The roadmap should be informed by:

1. **Customer signal** (top 10 requested things from interviews + tickets)
2. **Strategic bets** (from `strategy` mode — what bets are we making)
3. **Technical debt** (what's slowing us down or breaking)
4. **Competitive pressure** (what we're falling behind on)
5. **Team energy** (what would the team be excited to ship)

**Weight roughly:**
- 40% customer signal
- 30% strategic bets
- 20% technical debt
- 10% competitive / opportunistic

If your roadmap is 80%+ customer requests: you're a feature factory, not a product company.
If your roadmap is 80%+ strategic bets: you're building what you think customers want.

## Communicating Roadmap

### Internally (team)
- Full transparency
- Weekly Slack update on NOW items
- Quarterly all-hands review

### Externally (customers)
**Public roadmap:** Show LATER themes only. Never show NOW dates publicly.
- Why: customers will hold you to dates
- What to share: areas of investment, themes, philosophical direction

**Private (key customers):** Share NEXT themes when relevant
- "Yes, [feature theme] is in our NEXT quarter — want to be a beta customer?"
- Build co-design relationships with top customers

### To investors
- NOW items in monthly updates
- NEXT themes in board decks
- LATER directional in fundraising conversations

## Roadmap Anti-Patterns

| Anti-pattern | Cost | Fix |
|--------------|------|-----|
| Specific dates 6+ months out | Always wrong, eroded trust | Now/Next/Later |
| Roadmap = JIRA backlog | No prioritization | Curated, themed |
| Promised features that slip | Trust erosion | Under-promise on dates |
| No customer signal in roadmap | Building wrong things | 40% rule from customer input |
| Roadmap that never changes | Lost agility | Quarterly refresh ritual |
| Public roadmap with dates | Customers hold you to them | Themes only publicly |
| One person owns all of roadmap | Bus factor + bottleneck | Domain owners contribute |

## When to Say NO to Roadmap Requests

For every customer/investor request to "add this to the roadmap":

```
"Thanks for raising this. Here's how I think about it:

Your suggestion: [restate]
Where it fits today: [LATER / not on roadmap]
What it would displace if we moved it up: [specific NOW item]
The trade-off: [why we're not making the trade today]

What would change my answer:
- If 3+ other customers requested this independently
- If [specific market signal]
- If [specific data point]

I'll let you know if any of those happen."
```

This is harder than saying yes. It's also more respectful — vague yeses
are worse than honest nos.

## Output
- `data/roadmap.md` (the living Now/Next/Later doc)
- `output/roadmap-public-[date].md` (sanitized version for public)
- `reports/roadmap-review-[quarter].md`
