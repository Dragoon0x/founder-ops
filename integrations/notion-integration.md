# Notion integration

## Why this matters
Notion is where docs go to die. Founder-ops uses Notion as the canonical home for
the decision log, OKRs, and the company handbook, and it watches for staleness.

## What to wire

1. Notion integration token (Settings -> Integrations -> New integration, internal).
2. Share specific databases with the integration: Decisions, OKRs, Handbook,
   Customer Calls, Postmortems.
3. Set `NOTION_TOKEN` in `.env`.
4. Run `node scripts/notion-pull.mjs` daily.

## Database schemas (create these)

### Decisions database
| Property | Type | Notes |
|---|---|---|
| Name | Title | One sentence |
| Owner | Person | |
| Stakes | Select | 1-5 |
| Reversibility | Select | one-way / two-way |
| Status | Select | proposed / decided / reverted |
| Decided date | Date | |
| Review date | Date | 60d default |
| Kill criteria | Text | |
| Linked docs | Files & media | |

### OKR database
| Property | Type | Notes |
|---|---|---|
| Objective | Title | |
| Quarter | Select | Q1-Q4 + year |
| Owner | Person | |
| Key result 1-5 | Number | with unit |
| Confidence | Select | red / yellow / green |
| Updated | Last edited time | |

## Staleness detection

Founder-ops runs `node staleness-check.mjs` weekly. It flags:
- OKRs with no confidence update in 14 days
- Decisions past review date with no review entry
- Handbook pages last edited >180 days that are linked from onboarding
- Postmortems with action items past due date

Output goes to `output/staleness-{date}.md` and into the weekly digest.

## What founder-ops will NOT do

- Edit Notion pages without `integrations:notion:write: true`
- Bulk-update properties (atomic edits only, with audit log)
- Move pages (move-detection breaks too many links)

## Stage-aware setup

At <10 people, just use the Decisions database. The rest is overhead. Add OKRs
when you have a real OKR practice (usually 15+ people). Add the Handbook when
onboarding takes >3 days of senior time per new hire.
