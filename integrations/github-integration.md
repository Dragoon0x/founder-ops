# GitHub integration

## Why this matters
The codebase tells you things the team won't. Hot files = ownership debt. Stale
PRs = review-process broken. Long-lived branches = scope-too-big. Founder-ops
treats GitHub signals as leading indicators of velocity 4-6 weeks out.

## Signals tracked

| Signal | Healthy | Warning |
|---|---|---|
| PR throughput per engineer per week | 3-8 | <2 (blocked) or >12 (too small) |
| PR cycle time (open -> merge) p50 | <24h | >72h (review broken) |
| PR cycle time p90 | <5d | >10d (chronic stalls) |
| PRs open >7 days | <10% of open PRs | >25% |
| Review latency (open -> first review) p50 | <4h workday | >24h |
| Files changed per PR p50 | <10 | >30 (scope creep) |
| Lines per PR p50 | <250 | >800 (un-reviewable) |
| Hot files (top 5% by churn) | known owners | no clear owner |
| Bus-factor 1 directories | <5% | >20% (knowledge concentration) |
| Self-merged PRs | <5% | >20% (review skipped) |
| Build failure rate on main | <2% | >5% (CI hygiene) |

## What to wire

1. GitHub App or Personal Access Token with read scopes on `repo`, `read:org`,
   `read:user`.
2. Set `GITHUB_TOKEN` in `.env`.
3. Run `node scripts/github-pull.mjs` every 6 hours.
4. Configure `config/github.yaml`:
   ```yaml
   org: your-org
   repos: [api, web, mobile, infra]
   exclude_authors: [dependabot, renovate]
   primary_branch: main
   ```

## Hot-file analysis

Run weekly. Output is a ranked list of files changed by the most distinct authors
in the last 90 days. The top 10 are usually:
- Critical infra (config, auth, billing) — fine, expected
- Files no one owns and everyone touches — bad, assign an owner
- God-objects that should be split — bad, scope a refactor

Founder-ops flags files in categories 2 and 3 and adds them to `tech-strategy`
mode for quarterly cleanup.

## Review-process health

If review latency p50 exceeds 1 working day for 2 consecutive weeks, the team has
a coordination problem. Common fixes:
- Slack reminder bot (basic)
- Review SLAs in team norms (better)
- Review pairs / round-robin assignment (best)
- Trunk-based development with feature flags (changes the question entirely)

## What founder-ops will NOT do

- Auto-close stale PRs (people hate this and it loses work-in-progress)
- Comment on PRs (no auto-feedback)
- Block merges (CI's job)
- Track individual engineer productivity for performance management (refuses by
  design — these signals are team signals, not person signals)

## Defensive note on metrics

Goodhart's law applies. Every signal here can be gamed if you tie it to comp.
These metrics are diagnostic, not evaluative. The README in `data/github/` says
this in big letters.
