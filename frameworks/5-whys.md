# 5 Whys (Root Cause Analysis)

## The Method

Start with a problem. Ask "why?" 5 times. Each answer becomes the next question.
The root cause is usually 4-5 levels deep.

## Worked Example: "We lost the deal"

**Problem:** We lost the deal with MidCo.

**Why 1:** We lost the deal.
**Because:** They chose Competitor X.

**Why 2:** They chose Competitor X.
**Because:** They felt Competitor X had better enterprise features.

**Why 3:** They felt Competitor X had better enterprise features.
**Because:** Our demo didn't effectively show our enterprise capabilities.

**Why 4:** Our demo didn't show our enterprise capabilities.
**Because:** The AE didn't know which enterprise features to highlight.

**Why 5:** The AE didn't know which enterprise features to highlight.
**Because:** We don't have an enterprise demo playbook or training.

**ROOT CAUSE:** No enterprise demo playbook/training.

**Fix:** Build enterprise demo playbook (not "train the AE better" or "build more features").

## Variations

### Fork at Each Level
Sometimes "why" has multiple answers. Track each fork:

```
Why did we miss the deadline?
├── Because eng was slower than expected
│   └── Because we underestimated the data migration
│       └── Because we didn't scope it properly
│           └── Because we didn't have a similar project to reference
└── Because design was delayed
    └── Because design team is understaffed
        └── Because we haven't prioritized hiring
            └── Because hiring is behind revenue plan
```

Now there are two root causes to fix:
1. No scope reference process (build it)
2. Design team understaffed (fix hiring)

### The "How" Check

After identifying root cause, test:
- "How will fixing this prevent the problem recurring?"
- If unclear, you haven't reached true root cause. Dig deeper.

## Common Mistakes

### Stopping at Symptoms
"We lost the deal" → "Because they chose competitor" → STOP.
This is a symptom. Why did they choose the competitor?

### Blame (not systems)
"Because Sarah didn't close the deal" → STOP.
Root cause should point to process/system, not individual.

### Fake Whys (already-known answers)
If the first "why" feels obvious, you're probably rushing to a predetermined conclusion.

### Too-Deep Whys
Stop when you hit "because that's how the world works." Going deeper is philosophy, not action.

## When to Use

- Post-mortems (after incidents, lost deals, churn events)
- Process failures
- Recurring problems
- Quality issues

## When Not to Use

- Creative decisions ("why this design?" isn't useful)
- Market questions (too many variables)
- Multi-person disputes (need different framework)
