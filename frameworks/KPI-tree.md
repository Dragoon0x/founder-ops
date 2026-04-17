# KPI Tree

## The Concept

Decompose your North Star metric into a tree of input metrics. Each input
is something a team can directly influence. Track the tree, not just the
North Star.

## Generic Tree (SaaS)

```
North Star: ARR (Annual Recurring Revenue)
│
├── New ARR
│   ├── Pipeline generated ($)
│   │   ├── Website visitors
│   │   │   ├── SEO traffic
│   │   │   ├── Paid traffic
│   │   │   └── Referral traffic
│   │   ├── Visitor → Signup conversion %
│   │   ├── Signup → Trial conversion %
│   │   └── Trial → Demo conversion %
│   └── Close rate (demo → paid)
│       ├── Sales velocity (days to close)
│       ├── Average deal size
│       └── Win rate
│
├── Expansion ARR
│   ├── Upsell rate (% of customers)
│   ├── Upsell size ($ per expansion)
│   └── Cross-sell rate
│
└── Retention ARR (negative of Churn)
    ├── Gross logo retention
    │   ├── 30-day activation rate
    │   ├── Feature adoption depth
    │   ├── Time to value
    │   └── Support ticket volume per customer
    └── Net dollar retention
        ├── Contraction rate
        └── Expansion rate
```

## How to Build Yours

### Step 1: Define the North Star
ONE metric that if everyone optimized for, the company succeeds.

Examples:
- SaaS: ARR
- Marketplace: GMV
- Consumer social: Weekly Active Users
- Developer tools: Weekly Builds Triggered
- Content: Time Spent

### Step 2: Decompose Level 1
How does the North Star break down mathematically or logically?

ARR = New ARR + Expansion ARR - Churn ARR

### Step 3: Decompose Level 2
How does each Level 1 metric break down?

New ARR = Pipeline × Close Rate × Average Deal Size

### Step 4: Continue Until Actionable
Each leaf node should be something a team owns and can directly influence.

### Step 5: Assign Ownership
Every branch has an owner. Every leaf has a team.

## Worked Tree Example (B2B SaaS, $2M ARR)

```
ARR: $2,000,000 (↑ 40% YoY target)
│
├── New ARR: $1,200,000 (owner: VP Marketing + VP Sales)
│   ├── Pipeline: $4,800,000 (owner: VP Marketing)
│   │   ├── MQLs/mo: 400 (↑ from 280)
│   │   ├── SQL conversion: 30% (↑ from 25%)
│   │   └── Opportunity size: $40K avg
│   └── Close rate: 25% (owner: VP Sales)
│       ├── Stage 1→2 conv: 70%
│       ├── Stage 2→3 conv: 60%
│       ├── Stage 3→4 conv: 50%
│       └── Final close: 40%
│
├── Expansion ARR: $500,000 (owner: CS Lead)
│   ├── Upsell rate: 20% of customer base
│   ├── Upsell ARR: $15K avg
│   └── Expansion cadence: Quarterly reviews for top 30% ARR
│
└── Churn ARR: $300,000 (owner: CS Lead + Product)
    ├── Gross logo churn: 3%/month target
    │   ├── 30-day activation: 75% (↑ from 60%)
    │   ├── 90-day retention: 85%
    │   └── Support resolution time: <4h
    └── Downgrade: $100K/year
```

## Using the Tree

### Strategic Focus
Look at the tree. Find the branch with:
- Biggest gap between current and target
- Highest leverage (1% improvement = biggest $ impact)

That's your focus. Everything else is secondary.

### Team Alignment
Every team should:
- Know which branch they own
- Know what their metrics roll up to
- See the full tree monthly

Teams disconnected from the tree feel busy but invisible.

### Decision Framework
"Should we build X?" → "Which node in the tree does this move?"
If no clear node, reconsider.

## Anti-Patterns

| Pattern | Problem |
|---------|---------|
| 50+ metrics dashboard | Nobody reads, no focus |
| North Star nobody believes in | Drifting into vanity metrics |
| Branches without owners | Nothing improves |
| Tree never updated | Reality drifted from tree |
| Every team tracks own metrics, not tree | Optimizing locally, losing globally |

## Update Cadence

- **Weekly:** Leaf metrics (activation rate, pipeline generation, etc.)
- **Monthly:** Branch metrics (MQLs, close rate, etc.)
- **Quarterly:** Tree structure review (are branches still right?)
- **Annually:** North Star review (still the right one?)
