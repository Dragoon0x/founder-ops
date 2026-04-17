# founder-ops dashboard

Terminal UI to browse your entire founder pipeline: investors, customers,
hires, competitors, metrics, retros, board packs, and product artifacts —
all in one view.

## Install

Requires Go 1.22+.

```bash
cd dashboard
go mod tidy
go build -o founder-dashboard .
```

Optionally move to PATH:
```bash
mv founder-dashboard /usr/local/bin/
```

## Usage

```bash
./founder-dashboard --path ..
# or from project root:
./dashboard/founder-dashboard --path .
```

## Keys

| Key | Action |
|-----|--------|
| `tab` / `l` / `→` | Next section |
| `shift+tab` / `h` / `←` | Previous section |
| `1-9` | Jump to section N |
| `j` / `↓` | Down in list |
| `k` / `↑` | Up in list |
| `g` | Top of list |
| `G` | Bottom of list |
| `s` | Cycle sort order (Latest / Oldest / A-Z) |
| `r` | Refresh from disk |
| `q` / `ctrl+c` | Quit |

## Sections

1. **Overview** — Pipeline summary with counts across all categories
2. **Investors** — Output from `/founder-ops fundraise`, `/founder-ops update`
3. **Customers** — Interview synthesis, QBRs, health scores, save plays, churn postmortems
4. **Hires** — Candidate scorecards, JDs, performance reviews, skip-levels
5. **Competitors** — Deep dives from `/founder-ops compete`
6. **Metrics** — Dashboards, cohort analyses, funnel reports
7. **Retros** — Weekly, monthly, quarterly retrospectives
8. **Board** — Board packs and meeting notes
9. **Product** — PRDs, ADRs, roadmaps, product principles

## Aesthetic

Catppuccin Mocha palette. Dark mode only. Same family as career-ops,
consistent terminal aesthetic across Dragoon0x open-source projects.

## How It Works

The dashboard reads files from `output/`, `reports/`, and `data/` directories.
It matches filenames against patterns defined per section (see `main.go`).
File naming convention is defined in `../DATA_CONTRACT.md`.

No network calls. No telemetry. No database. Just reads files.

## Extending

To add a new section:
1. Add a `tab` constant in `main.go`
2. Add the name to `tabNames`
3. Add a case in `loadTab()` with dirs and patterns
4. Rebuild

## Troubleshooting

**"No items yet"** — You haven't run any founder-ops modes yet. Run
`/founder-ops discovery` to start, then refresh the dashboard with `r`.

**Files exist but don't show** — Check file naming against
`../DATA_CONTRACT.md`. Dashboard matches specific patterns.

**Lag on large pipelines** — Dashboard is fast for thousands of files. If
slow, something else is wrong. File an issue.
