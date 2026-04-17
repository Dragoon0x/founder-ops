# Batch Operations

Scripts for running repeated operations across many records — customers, candidates, investors, metrics.

Each file is a runnable Node.js script. Scripts read CSV input, transform with stateless logic, write output or call Claude for enrichment.

## Files
- `batch-customer-outreach.mjs` — Personalize cold emails from a CSV of leads
- `batch-investor-research.mjs` — Run research brief on each investor in a list
- `batch-candidate-screen.mjs` — Score resumes against a role rubric
- `batch-customer-health.mjs` — Compute health scores for every customer
- `batch-metric-refresh.mjs` — Pull latest numbers and rewrite metric snapshots
- `batch-churn-risk.mjs` — Flag churn-risk accounts based on usage deltas

## Usage pattern
Every script follows this shape:
```
node batch/<script>.mjs --input <csv> --output <dir> [--dry-run]
```

`--dry-run` always works and prints first row's expected output without writing. Good first step.
