# Data Contract

File naming, directory structure, and data integrity rules that
founder-ops automation (dashboard, scripts, rituals) depend on.

## Directory Structure

```
founder-ops/
├── config/              # Your context (gitignored when real)
│   ├── founder.yml
│   ├── company.yml
│   ├── product.yml
│   └── investors.yml
├── modes/               # Mode specifications (don't modify filenames)
├── playbooks/           # Multi-mode workflows
├── frameworks/          # Scoring frameworks
├── templates/           # Reusable templates
├── examples/            # Sample outputs (reference)
├── docs/                # Setup, philosophy, architecture
├── data/                # Living context (running artifacts)
├── output/              # Generated drafts (artifacts to share)
├── reports/             # Analysis reports (internal)
└── dashboard/           # Go TUI
```

## File Naming Convention

All generated files follow: `[type]-[subject]-[date].md`

### output/
| Pattern | Example | Mode |
|---------|---------|------|
| `investor-update-YYYY-MM.md` | `investor-update-2026-04.md` | update |
| `investor-research-{fund}.md` | `investor-research-catalyst.md` | fundraise |
| `outreach-{fund}.md` | `outreach-catalyst.md` | fundraise |
| `jd-{role}-YYYY-MM-DD.md` | `jd-senior-eng-2026-04-15.md` | hire |
| `prd-{feature}.md` | `prd-slack-integration.md` | product |
| `board-pack-YYYY-MM-DD.md` | `board-pack-2026-04-15.md` | board |
| `save-play-{customer}.md` | `save-play-acme-corp.md` | customer-success |
| `weekly-update-YYYY-MM-DD.md` | `weekly-update-2026-04-15.md` | internal-comms |
| `price-change-comm.md` | — | pricing-deeper |
| `security-whitepaper.md` | — | security |

### reports/
| Pattern | Example | Mode |
|---------|---------|------|
| `retro-week-YYYY-MM-DD.md` | `retro-week-2026-04-15.md` | retro |
| `retro-month-YYYY-MM.md` | `retro-month-2026-04.md` | retro |
| `retro-quarter-Q#-YYYY.md` | `retro-quarter-Q2-2026.md` | retro |
| `interview-{customer}-YYYY-MM-DD.md` | `interview-acme-2026-04-08.md` | discovery |
| `candidate-scorecard-{name}.md` | `candidate-scorecard-alex-chen.md` | hire |
| `compete-{competitor}.md` | `compete-pagerduty.md` | compete |
| `qbr-{customer}-Q#.md` | `qbr-acme-Q2.md` | customer-success |
| `health-score-{customer}-YYYY-MM.md` | — | customer-success |
| `perf-review-{person}-YYYY-H#.md` | — | team-culture |
| `skip-level-{person}-YYYY-MM.md` | — | team-culture |
| `enps-YYYY-Q#.md` | — | team-culture |
| `churn-postmortem-{customer}.md` | — | retention |
| `incident-postmortem-YYYY-MM-DD.md` | — | security |
| `access-review-YYYY-Q#.md` | — | security |
| `saas-audit-YYYY-Q#.md` | — | operations |
| `cohort-analysis-YYYY-MM.md` | — | data-stack |
| `funnel-analysis-YYYY-MM.md` | — | data-stack |
| `support-pulse-YYYY-Www.md` | — | customer-support |
| `community-pulse-YYYY-Www.md` | — | community |

### data/
Living artifacts that persist and are updated over time (not timestamped).

| File | Purpose |
|------|---------|
| `customers.md` | Customer roster (active, churned, pipeline) |
| `metrics.md` | Rolling metrics dashboard |
| `metrics-dashboard.md` | Alternative name — either works |
| `investors-pipeline.md` | Active investor conversations |
| `hires.md` | Hiring pipeline |
| `competitors.md` | Competitor tracker |
| `customer-health.md` | Roll-up of all customer health scores |
| `support-themes.md` | Recurring support patterns |
| `product-principles.md` | Product decision principles |
| `roadmap-Q#-YYYY.md` | Quarterly roadmap |
| `team-health.md` | Team metrics roll-up |
| `board.md` | Board decisions, action items |
| `processes.md` | Documented processes |
| `vendor-costs.md` | Vendor / SaaS costs |
| `marketing-metrics.md` | Marketing KPIs |
| `security-controls.md` | Security control inventory |

## Data Integrity Rules

### Config files
- Required keys MUST be present (see individual schemas below)
- Enum values are strict (e.g., `stage` must be one of: pre-seed, seed, series-a, series-b, later)
- Numbers must be positive where appropriate
- Dates in ISO 8601 format (YYYY-MM-DD)

### Generated files
- Must start with H1 heading matching content
- Must include a TL;DR section
- Must include confidence score 1-10 for recommendations
- Must include adversarial check for recommendations
- Must include "Next step" section

## Config Schemas

### founder.yml (required keys)
```yaml
name: str              # required
role: str              # required
email: str             # required
style:
  tone: str            # direct|friendly|formal|casual
  formality: str       # formal|professional|casual
  length: str          # brief|concise|detailed
  emoji_use: str       # none|minimal|moderate|frequent
risk:
  experiments: str     # conservative|moderate|aggressive
  spending: str        # conservative|moderate|aggressive
  hiring: str          # conservative|moderate|aggressive
priorities:            # list of strings
  - str
```

### company.yml (required keys)
```yaml
company:
  name: str            # required
  stage:
    stage: str         # pre-seed|seed|series-a|series-b|later
  team:
    size: int
  financials:
    mrr: number
    runway_months: int
  business:
    model: str         # saas_b2b|saas_b2c|marketplace|api|services
```

### product.yml (required keys)
```yaml
product:
  name: str            # required
  tagline: str
positioning:
  target_customer: str
  key_differentiator: str
icp:
  firmographic: { ... }
  behavioral: { ... }
```

### investors.yml (structure)
```yaml
current_investors: list
active_pipeline: list
target_list: list
updates:
  frequency: str       # monthly|quarterly
```

## Breaking Changes

If this contract changes, automation scripts break. Rules:
- Minor additions (new optional fields) — no version bump
- New required fields — major version bump + migration guide
- Renamed fields — major version bump + migration script
- Removed fields — major version bump + deprecation notice

Current contract version: **2.0.0**
