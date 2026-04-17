# Integrations

Founder-ops is data-shape-aware, not API-coupled. You point it at the right exports
and it does the work. These guides cover the 12 integrations that actually move the
needle for early-stage founders. Everything is read-only by default. Founder-ops
will never write to a vendor system without an explicit `integrations:write`
config flag.

## Tier 1 — wire these first

- [Slack](slack-integration.md) — async signal, decision log inbox
- [Linear](linear-integration.md) — engineering velocity, scope drift
- [Stripe](stripe-integration.md) — MRR, churn, expansion, gross margin
- [HubSpot](hubspot-integration.md) — pipeline, conversion, ICP fit scoring
- [GitHub](github-integration.md) — PR throughput, review latency, hot files

## Tier 2 — add at seed-to-Series-A

- [Notion](notion-integration.md) — docs, decision log, OKR home
- [Mercury](mercury-integration.md) — runway, burn, AP/AR
- [Carta](carta-integration.md) — cap table, options pool, dilution math
- [Google Workspace](google-workspace-integration.md) — calendar audit, doc sprawl

## Tier 3 — add when scale demands it

- [Segment](segment-integration.md) — single source of customer truth
- [Pilot](pilot-integration.md) — financial close, GAAP statements
- [Product Hunt](product-hunt-integration.md) — launch day mechanics

## Data contract

Every integration writes to `data/{vendor}/` as flat JSON or CSV. Founder-ops modes
read these via the schemas in `DATA_CONTRACT.md`. If a field is missing, the mode
degrades gracefully: it tells you what's missing and what decision quality drops as
a result.
