# Mode: Metrics

## Purpose

Define, instrument, and review the right metrics. Most founders track too
many vanity metrics and miss the few that actually predict success.

## The North Star Framework

Every company needs ONE North Star Metric (NSM):
- Reflects core value delivered to customer
- Predicts long-term business success
- Can be moved by what your team does daily

**NSM examples by business type:**

| Business | Good NSM | Bad NSM (vanity) |
|----------|----------|------------------|
| SaaS B2B | Weekly active accounts | Total signups |
| SaaS B2C | Weekly active users | Total users |
| Marketplace | Successful matches per week | GMV |
| Content/Media | Hours of valuable content consumed | Page views |
| Productivity tool | Tasks completed / week / user | Logins |
| Communication tool | Messages sent in active workspaces | Total messages |
| Developer tool | Production deployments / week | API calls |

## Submodes

### 1. Metric Definition

For every metric, define:
```
## Metric: [Name]

### Definition
[Exact calculation, including edge cases]

### Why it matters
[What decision does this enable]

### Source of truth
[Where the data lives]

### Refresh cadence
[How often it's updated]

### Owner
[Person responsible for the number]

### Target
[Specific numeric target with date]

### Healthy direction
[Up / down / steady]

### Acceptable variance
[+/-X% considered noise vs signal]
```

### 2. The Metric Hierarchy

```
NORTH STAR METRIC (1)
        │
   ┌────┼────┐
   ▼    ▼    ▼
INPUT METRICS (3-5)
[Things we control that drive NSM]
        │
   ┌────┼────┐
   ▼    ▼    ▼
OPERATIONAL METRICS (5-10)
[Daily/weekly tactical]
```

**Example for SaaS B2B:**
- NSM: Weekly active accounts
- Inputs: New activations, retention, expansion, depth-of-use
- Operational: Trial-to-paid conversion, CAC, time-to-value, support tickets

### 3. Metrics Dashboard Layout

**Single page, top to bottom:**
```
## [Company] Metrics — [Week of date]

### North Star
[Big number] — [trend arrow] [% change vs last period]

### Revenue
| | This week | Last week | Trend | Target |
|--|----------|----------|-------|--------|
| MRR | | | | |
| New MRR | | | | |
| Churned MRR | | | | |
| Expansion MRR | | | | |
| Net New MRR | | | | |

### Customer
| | Current | Last week | Trend | Target |
|--|---------|----------|-------|--------|
| Total accounts | | | | |
| New activations | | | | |
| Churned accounts | | | | |
| Net new accounts | | | | |

### Product
| | This week | Last week | Trend | Target |
|--|----------|----------|-------|--------|
| WAU | | | | |
| WAU/MAU | | | | |
| Activation rate | | | | |
| Time to first value | | | | |

### Pipeline
| | Current | Trend |
|--|---------|-------|
| MQLs | | |
| SQLs | | |
| Demos | | |
| Active deals | | |
| Closed-won | | |

### Burn
| | This month | Trend | Runway |
|--|-----------|-------|--------|
| Gross burn | | | |
| Net burn | | | |
| Cash position | | | |
```

### 4. Cohort Analysis

The single most under-used analysis at early stage:

```
## Cohort: [Activation month]

### Retention curve
| Month | Retained accounts | % retained |
|-------|-------------------|-----------|
| 0 | 100 | 100% |
| 1 | 78 | 78% |
| 2 | 65 | 65% |
| 3 | 58 | 58% |
| 6 | 51 | 51% |
| 12 | 47 | 47% |

### Revenue per cohort over time
[Line chart showing each cohort's expansion or contraction]

### What changed
- [Cohort X had higher retention because...]
- [Cohort Y had lower retention because...]

### Action
- [Specific change based on what's driving variance]
```

### 5. Metric Anti-Patterns

| Anti-pattern | Problem | Fix |
|--------------|---------|-----|
| Vanity metrics in dashboard | Distracts from real signal | Remove anything that only goes up |
| Different numbers in different places | Loss of trust | Single source of truth |
| Reporting at wrong cadence | Slow learning OR analysis paralysis | Daily for ops, weekly for biz, monthly for board |
| No segmentation | Aggregate hides reality | Always look by cohort, segment, channel |
| Tracking without targets | Random walk | Every metric needs a target with date |
| Lagging indicators only | React too late | Pair leading + lagging |

### 6. Metric Review Cadence

**Daily (for active campaigns):**
- New signups
- Pipeline movement
- Critical bugs / outages

**Weekly (for the team):**
- North star
- New / churned / expansion
- Activation rate
- Pipeline health

**Monthly (for investors):**
- All weekly metrics + trends
- Cohort retention
- Unit economics
- Burn / runway

**Quarterly (for the board):**
- All monthly + strategic deep dives
- Segmentation analysis
- Plan vs actual
- Forward forecast

## Output

- `data/metrics.md` (running dashboard, updated weekly)
- `reports/cohort-analysis-[month].md`
- `reports/metric-deep-dive-[topic]-[date].md`
