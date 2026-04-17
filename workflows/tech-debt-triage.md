# Tech Debt Triage Workflow

## Trigger
Monthly, led by CTO/engineering lead.

## Debt Inventory

### Classification
Categorize each tech debt item:

| Type | Description | Example |
|------|------------|---------|
| **Code debt** | Shortcuts in implementation | Hardcoded values, copy-paste code, missing abstractions |
| **Architecture debt** | Structural limitations | Monolith needs splitting, wrong database choice, missing caching layer |
| **Test debt** | Insufficient test coverage | Critical paths untested, flaky tests, no integration tests |
| **Dependency debt** | Outdated libraries/frameworks | 3 major versions behind, deprecated APIs, security patches missing |
| **Infrastructure debt** | Manual or fragile ops | No CI/CD, manual deployments, missing monitoring |
| **Documentation debt** | Missing or outdated docs | No API docs, stale architecture diagrams, tribal knowledge |

### Scoring
For each item, score:
- **Impact** (1-5): How much does this slow us down or create risk?
- **Effort** (1-5): How much work to fix? (1 = afternoon, 5 = multi-sprint)
- **Risk** (1-5): What's the probability this causes an incident?
- **Growth blocker** (Y/N): Does this prevent us from scaling to 10x users/traffic?

Priority = (Impact + Risk + Growth-blocker-bonus) / Effort
Growth-blocker-bonus = 3 if yes, 0 if no.

### Budget allocation
Reserve 15-20% of engineering capacity for tech debt every sprint.
Not negotiable. Not "we'll get to it when things slow down." Things never slow down.

### Triage decisions
| Priority Score | Action |
|---------------|--------|
| > 3.0 | Schedule this sprint or next |
| 2.0 - 3.0 | Schedule this quarter |
| 1.0 - 2.0 | Backlog, review next quarter |
| < 1.0 | Accept or close |

## Tech Debt Tracking
Maintain a living document (Notion, Linear, or spreadsheet):
- Item description
- Classification
- Scores
- Owner (even if not yet scheduled)
- Status: identified / scheduled / in-progress / resolved
- Date identified (items older than 6 months without progress need escalation)
