# Playbook: Customer Success Recovery (Saving an Account)

## When to Use This Playbook

Apply this when:
- A customer mentions cancellation
- Churn signals appear (usage drop, support tickets, exec change at customer)
- A customer files a complaint
- Renewal is at risk
- An NPS detractor is identified

## The 4-Step Recovery Process

### Step 1: Hour 0 — Acknowledge (within 4 business hours)
Speed matters. The longer they wait, the more they detach.

```
Subject: I want to make this right — let's talk

Hi [Name],

I just heard about [specific issue]. Before anything else: I'm sorry this
hasn't met expectations.

I want 30 minutes with you this week to understand what's broken and what
we can do. Are you free [specific time options]?

[Founder name]
```

Notes:
- Founder reaches out (not support, not CSM)
- No defensiveness, no explanation in the first email
- Specific time slots (don't make them think)

### Step 2: Day 1-3 — Listen (the call)

Goal: understand the FULL picture, not solve immediately.

**Call structure (30 min):**
1. (5 min) "Walk me through what happened from your perspective"
2. (10 min) "What's the full impact on you / your team?"
3. (5 min) "What were you hoping we'd do differently?"
4. (5 min) "If we made [specific commitment], would that change things?"
5. (5 min) Recap + commit to follow-up timeline

**Critical rules:**
- Don't interrupt with explanations
- Don't promise anything in the first 20 minutes
- Don't say "we usually..."
- Take notes (visible to them — shows you care)

### Step 3: Day 3-7 — Plan (your response)

Within 3 days of the call, send:

```
Subject: Recovery plan — [Customer Name]

[Name],

Following up on our call. Here's what I heard and what we're doing:

What I heard:
- [Issue 1] — impact: [their words]
- [Issue 2] — impact: [their words]
- [Issue 3] — impact: [their words]

What we're doing:
- Immediate (this week): [specific action with date]
- Short-term (next 30 days): [specific action with date]
- Long-term (next quarter): [specific action]

What I'm asking from you:
- [Specific things you need them to do or accept]

Goodwill / make-good:
- [Discount, credit, free month, professional services — pick one]

I'm personally accountable for this. My direct line: [phone].
We'll check in [date] to confirm we're on track.

[Founder name]
```

### Step 4: Day 7-30 — Execute (rebuild trust)

The hardest part. Trust is rebuilt by consistent action over time.

**Weekly:**
- Status email: "Here's what we did this week, here's what's next"
- Direct response to any new issues within 4 hours

**Day 14 check-in:**
- Quick call (15 min): "How are things feeling?"
- If better: continue
- If not: escalate (more concessions, executive involvement, etc.)

**Day 30 retro:**
- Formal retro call: "What's working? What's still broken?"
- Decision: Renew commitment, mutually exit, or extend recovery another 30 days

## What to Offer (Make-Goods)

| Severity | Offer |
|----------|-------|
| Low (one-time issue) | Acknowledgment + commitment to fix |
| Medium (ongoing friction) | 1-2 month credit + dedicated point of contact |
| High (data loss, downtime) | 3 month credit + service guarantee + executive sponsor |
| Critical (security issue) | Refund + retroactive service guarantee + RCA report |

**DON'T offer:**
- Open-ended discounts ("we'll work something out")
- Things you can't deliver
- Things that contradict your other customers' deals

## When to Let Them Go

Some customers should churn. Signs it's mutual:
- Their use case isn't your target market
- Their team won't engage with the recovery process
- They're asking for things you can't / won't build
- The relationship has become hostile
- They're costing you more in support than they're paying

If you decide it's mutual:
- Refund proportional to time remaining
- Help them migrate to an alternative (even if it's a competitor)
- End on good terms — they may come back, or refer others

## Anti-Patterns

| Pattern | Problem |
|---------|---------|
| Defensive response | Confirms their suspicion that you don't get it |
| "We're working on that feature" | Generic, not their problem specifically |
| Discount as first offer | Cheapens you, doesn't address root issue |
| Making it about your roadmap | They want to know about THEIR problem |
| One call and you think it's solved | Trust takes weeks to rebuild |
| No specific timeline | "We'll fix this soon" = forever |
| CSM handles it | Founder visibility signals importance |

## Tracking

Maintain `data/account-recovery.md`:
```
| Customer | Started | Status | Next Step | Owner | Risk |
|----------|---------|--------|-----------|-------|------|
| [Name] | 2026-04-12 | Plan delivered | 30-day check | [you] | Medium |
```

Review weekly. Stuck recoveries become churns.

## Success Definition
- Customer renews
- NPS recovers
- They become a reference (sometimes the strongest references are recovered customers)
- You've fixed the systemic issue that caused this

## Failure Definition
- Customer churns despite recovery effort → learn what was unrecoverable
- Same issue happens with another customer 60 days later → systemic issue not fixed
