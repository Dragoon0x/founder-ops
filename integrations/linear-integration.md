# Linear integration

## Why this matters
Linear is the source of truth for what eng is actually doing vs what the roadmap
says they're doing. Founder-ops watches the gap.

## Signals it tracks

| Signal | Threshold | Action |
|---|---|---|
| Issues moving to Done per week | trending down 3 weeks | velocity-investigation in `metrics` mode |
| Issue cycle time p50 | >7 days for L/M issues | scope-too-big warning |
| Issue cycle time p90 | >21 days | hidden-blocker warning |
| % issues with no linked PR | >30% | spec-quality warning |
| % issues bumped >2 cycles | >15% | prioritization-discipline warning |
| Bug count growth | bugs > new features for 2 cycles | tech-debt-mode trigger |
| Triage queue depth | >50 issues unrooted | triage-debt warning |

## What to wire

1. Get a Linear API key (Settings -> API -> Personal API keys, read-only).
2. Set `LINEAR_API_KEY` in `.env`. Add `.env` to `.gitignore` (already in template).
3. Run `node scripts/linear-pull.mjs` daily. It writes to `data/linear/issues.json`
   and `data/linear/cycles.json`.
4. Configure `config/linear.yaml`:
   ```yaml
   workspace: your-workspace
   teams: [eng, design]
   exclude_labels: [archived, wontfix]
   cycle_length_days: 14
   ```

## Velocity computation

Founder-ops uses **completed estimate points per engineer per cycle**, not raw
issue counts. If your team doesn't estimate, it falls back to count and warns
that the signal is noisy. Estimating Fibonacci 1/2/3/5/8 is enough; you don't
need anything fancier.

Healthy ranges (very rough, varies wildly):
- Solo founder eng: 8-15 points/cycle
- Small team (3-5 eng): 6-12 points/eng/cycle
- Larger team (10+ eng): 4-8 points/eng/cycle (coordination tax kicks in)

If you see a drop >25% for 2 consecutive cycles and on-call load hasn't spiked,
something is wrong: usually unclear specs, hidden refactor, or a person quietly
disengaging.

## Roadmap drift detection

Founder-ops compares cycle work to the published roadmap. Drift categories:
1. **Planned + shipped** — healthy
2. **Planned + slipped** — scope or estimation issue
3. **Unplanned + shipped** — interrupt-driven culture, often customer-pull (can be
   healthy if intentional, deadly if not)
4. **Planned + abandoned** — strategic clarity issue

Healthy mix at seed: 60/15/20/5. If unplanned >40% for 3 cycles, you have an
attention-discipline problem.

## What to do with the data

- Weekly: `founder-ops weekly-ritual` includes a Linear section
- Cycle close: auto-generate retro doc in `output/retros/cycle-N.md`
- Quarterly: drift report into board-meeting prep
