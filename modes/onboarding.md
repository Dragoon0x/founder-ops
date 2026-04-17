# Mode: Customer Onboarding

## Purpose

Design and run customer onboarding that gets users to first value FAST.
The single biggest predictor of retention is whether users hit "aha" in
the first session.

## The Onboarding Funnel

```
Sign up
  ↓
First login (60%+ should reach this within 24h)
  ↓
Activation (key action that proves value)
  ↓
Habit formation (3+ uses in first week)
  ↓
Expansion (using > one feature, inviting others)
  ↓
Retention (active in week 4+)
```

**The single most important metric:** Time from signup to first activation.

## Submodes

### 1. Define Activation

For YOUR product, what's the moment users realize "this is useful"?

| Product type | Activation moment |
|-------------|------------------|
| Project management tool | Created project + invited 1 teammate + completed 1 task |
| Email tool | Sent first email + saw open data |
| Analytics tool | Connected data source + saw first chart |
| Communication tool | Sent first message + got reply |
| File storage | Uploaded first file + shared link with someone |
| AI tool | Generated first useful output + saved/shared it |
| API/SDK | Made first successful API call from production code |

**Test:** Activation should correlate with retention 4 weeks out.
If users who hit activation churn at the same rate as users who don't,
your activation definition is wrong.

### 2. Map the Onboarding Journey

```
## Onboarding Journey — [Product]

### Step 1: Sign-up form
- Friction: [N fields]
- Drop-off rate: [X%]
- Goal: < 5 fields, < 30 seconds

### Step 2: Email verification
- Drop-off rate: [X%]
- Goal: Skip if possible (verify on first action)

### Step 3: First login
- Drop-off rate: [X%]
- Time from signup: [median]

### Step 4: First action prompt
- What we ask them to do: [specific]
- Drop-off rate: [X%]
- Goal: ONE clear action, not a tour

### Step 5: First value (activation)
- What value they see: [specific]
- Time from signup: [median]
- Goal: < 10 minutes from signup

### Step 6: Second session
- Drop-off rate: [X%]
- What brings them back: [specific reason]
- Goal: 60%+ return within 48 hours

### Step 7: Habit formation
- Definition: [3+ uses in first week]
- % of activated users: [X%]
- Goal: 50%+ of activated users
```

### 3. The Onboarding Email Sequence

**Day 0 — Welcome (within 5 min of signup):**
```
Subject: Welcome to [Product] — your next step

[Name],

You signed up for [Product]. Here's the fastest way to [outcome they want]:

1. [Specific first action with link]

That's it. This takes 2 minutes and you'll see [specific value].

Reply with any questions — I read every email.

[Founder name]
```

**Day 1 — Check-in (if not activated):**
```
Subject: Stuck? Here's the 2-minute shortcut

[Name],

You signed up yesterday but haven't [specific action] yet.

If you're stuck, here's a 90-second video showing exactly how:
[link]

Or reply with what's blocking you — I'll help.

[Founder]
```

**Day 3 — Different angle (if still not activated):**
```
Subject: Different question — what brought you here?

[Name],

Most people sign up for [Product] because of one specific problem.
What were you hoping it would solve?

If [Product] isn't right for that, I'll point you somewhere better.
If it IS right, I'll show you the fastest path.

Reply when you have 30 seconds.

[Founder]
```

**Day 7 — Last touch:**
```
Subject: Closing the loop

[Name],

You signed up for [Product] last week but didn't end up using it.
That's totally fine — most products aren't right for most people.

Quick question: was it timing, fit, or something else?

(Three letters in reply works: "T" for timing, "F" for fit,
"O" for other. Anything helps me understand what to fix.)

Thanks,
[Founder]
```

### 4. In-App Onboarding

**Principles:**
- ONE primary action prompted (not a tour of 7 things)
- Show, don't tell (interactive > tooltips)
- Skip-able (power users hate hand-holding)
- Empty states are onboarding (use them)
- Personalization based on signup intent

**Anti-patterns:**
- Modal that blocks the UI on first login
- Long product tour with arrows
- "Tell us about yourself" form before showing value
- Forcing tutorial completion

### 5. Onboarding Metrics Dashboard

```
## Onboarding Metrics — Week of [date]

### Funnel
| Step | Last week | This week | Trend |
|------|----------|----------|-------|
| Signups | | | |
| Verified | | | |
| First login | | | |
| First action | | | |
| Activation | | | |
| Week 1 retention | | | |

### Time-to-value
| Percentile | Time |
|-----------|------|
| 25th | |
| 50th (median) | |
| 75th | |
| 90th | |

### Activation rate by source
| Source | Activation rate |
|--------|----------------|
| Organic | |
| Paid | |
| Referral | |
| Outbound | |

### Top 3 drop-off points
1. [Step with biggest % drop]
2. [Next biggest]
3. [Next biggest]

### Action this week
[Specific change to test based on data]
```

## Onboarding Anti-Patterns

| Anti-pattern | Cost | Fix |
|--------------|------|-----|
| Long signup form | High drop-off | Reduce to 3-5 fields max |
| Email verification before value | Loses 30%+ | Verify on first action instead |
| Generic onboarding for all users | Low activation | Personalize by intent |
| No measurement | Can't improve | Track every step |
| Optimizing wrong metric | Hit activation, miss retention | Define activation by retention correlation |
| Founder doesn't see drop-offs | Can't empathize | Watch session recordings weekly |

## Output
- `output/onboarding-email-[N]-[date].md`
- `data/onboarding-metrics.md` (running dashboard)
- `reports/onboarding-experiment-[name].md`
- `reports/activation-cohort-analysis-[month].md`
