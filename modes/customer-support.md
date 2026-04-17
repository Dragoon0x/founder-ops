# Mode: Customer Support

## Purpose

Build a support function that ships value, not just resolves tickets.
Use support as the highest-fidelity product feedback channel. Don't burn
out the team.

## Submodes

### 1. Support Channels by Stage

| Stage | Channels | SLA |
|-------|----------|-----|
| Pre-seed | Email only (founder responds) | 4 hours |
| Seed | + Help docs, in-app chat | 4 hours |
| Series A | + Status page, dedicated CSM for top accounts | 2 hours |
| Series B+ | + Phone (enterprise), 24/7 (if global) | 1 hour critical, 4 hour normal |

**Founders should personally respond to support tickets until ~$1M ARR.**
Best product feedback you'll ever get.

### 2. Tiered Support

| Tier | Customer ARR | Response | Channels | Coverage |
|------|--------------|----------|----------|----------|
| Self-serve | < $1K | < 24 hr | Help docs, async chat | Business hours |
| Standard | $1K-25K | < 4 hr | Email, in-app chat | Extended business hours |
| Premium | $25K-100K | < 2 hr | + Slack, phone | Business hours, dedicated CSM |
| Enterprise | > $100K | < 1 hr | + 24/7 phone, dedicated AE+CSM | 24/7 |

### 3. Ticket Categorization

```
## Ticket — [#] — [Customer]

### Category (pick ONE primary)
- Bug (something broken)
- Feature request (something missing)
- How-to (user education)
- Onboarding (new user struggle)
- Billing (payment / subscription)
- Account (access / permissions)
- Integration (3rd party connection)
- Performance (slow / crashing)
- Data (loss / corruption)
- Security (vulnerability)

### Severity
- Critical: Customer can't use product, data at risk
- High: Major functionality broken, workaround painful
- Medium: Minor functionality broken, workaround easy
- Low: Cosmetic, edge case, nice to fix

### Resolution path
- Self-serve: documented in help center
- Tier 1: standard issue, support agent resolves
- Tier 2: needs engineering investigation
- Tier 3: needs eng + product, may require code fix
```

### 4. Response Templates

**Acknowledgment (within SLA):**
```
Hi [Name],

Thanks for reaching out. I'm [Agent name] and I'll be helping you with this.

I'm investigating the issue with [specific summary of their problem].

I'll have an update within [time] — even if I don't have a full answer by then,
I'll let you know what I've found.

Best,
[Agent]
```

**Bug acknowledgment:**
```
Hi [Name],

You've found a real bug — thank you for the detailed report. I've reproduced
the issue and our engineering team has it.

Workaround for now: [if any]

We're targeting a fix in [release window]. I'll update you when it ships.

Sincerely,
[Agent]
```

**Feature request response:**
```
Hi [Name],

Thanks for the suggestion — this is a good one and we hear you.

A few questions to help us prioritize:
- What workflow does this affect for you?
- How often do you need this (daily, weekly, monthly)?
- What are you doing today as a workaround?

Adding this to our backlog. We can't promise a timeline, but I want to
make sure I understand the actual need before we design a solution.

Best,
[Agent]
```

**Bad news (you can't fix it):**
```
Hi [Name],

I want to be straight with you: this isn't something we'll be able to address
[timeline / at all].

Here's why: [honest reason]

Here's what you can do instead: [workaround / alternative]

I know this isn't the answer you wanted. I'm happy to discuss further if it'd help.

Sincerely,
[Agent]
```

### 5. Knowledge Base / Help Docs

**The 80/20 of help content:**
- Top 20 questions = 80% of tickets
- Document those 20 first
- Update monthly based on new ticket patterns

**Doc structure:**
```
## [Title — searchable phrasing of the question]

### Quick answer
[1-2 sentences for skimmers]

### Step-by-step
1. 
2. 
3. 

### Common issues
- [Problem]: [Solution]
- [Problem]: [Solution]

### Related
- [Link to related doc]
```

### 6. Support → Product Feedback Loop

Weekly: triage support tickets and feed to product:

```
## Support Pulse — Week of [date]

### Top 5 ticket themes
1. [Theme] — N tickets
2. [Theme] — N tickets

### Bug reports
[Engineering needs to know]

### Feature requests (by frequency)
[Product needs to know]

### Customer sentiment
[General direction — improving / declining]

### Save plays needed
[Customers showing churn signals]

### Documentation gaps
[Recurring questions = missing docs]
```

### 7. Burnout Prevention for Support Team

Support agents burn out faster than any role. Prevent it:

- Max 30 tickets/day per agent
- Quarterly: tickets per agent leveling off, not growing
- Mandatory time off after escalated emotional tickets
- Weekly team retro (vent, learn, celebrate)
- Career path beyond support (CSM, product, ops)
- Pay competitively (not "entry level")

### 8. Customer Sentiment Tracking

End every resolved ticket with:
> Did we solve your problem? 👍 / 👎

Monthly aggregate:
- CSAT (% positive responses) — target 90%+
- Negative responses → manual review (every one)
- Trend over time

### 9. Public Support Excellence

Public support (Twitter, Reddit, communities) gets seen:
- Fast (< 1 hour during business hours)
- Public if appropriate (others learn)
- Personal (not boilerplate)
- Outcome-focused ("here's what we'll do")

One viral support thread can drive 100+ signups OR 100+ negative impressions.

## Anti-Patterns

| Pattern | Problem | Fix |
|---------|---------|-----|
| "Tier 1 escalates everything" | Untrained, slow, customer suffers | Invest in agent training |
| Boilerplate responses to obvious bots | Customer feels unheard | Human-tone everything |
| Ignoring social mentions | Negative spreads, positive missed | Monitor + engage |
| Support metrics: ticket count only | Encourages ticket volume | CSAT, resolution time, churn |
| No escalation path from support to product | Same bugs reported forever | Weekly support → product sync |
| No documentation of resolutions | Same problem solved 100x | Wiki-fy resolutions |
| Outsourcing too early | Quality drop, brand damage | In-house until $5M+ ARR |

## Output

- `reports/support-pulse-[week].md`
- `data/support-themes.md`
- `output/help-doc-[topic].md`
