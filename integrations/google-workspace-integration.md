# Google Workspace integration

## Why this matters
Calendar is where founder time goes to die. Drive is where docs go to be lost.
Founder-ops uses Workspace signals to catch attention drift and document sprawl.

## Signals tracked

| Signal | Source | Healthy | Warning |
|---|---|---|---|
| Founder meeting hours / week | Calendar | 8-15h IC, 15-25h CEO | >30h or <5h (both bad) |
| Meeting fragmentation | Calendar | <8 meetings/day | >12/day (no deep work blocks) |
| Recurring meetings | Calendar | reviewed quarterly | grew unchecked |
| Doc creation rate | Drive | steady | spikes signal reorg/firefight |
| Docs with >50 collaborators | Drive | <5 | >20 (sprawl) |
| Docs not opened in 180d but linked from onboarding | Drive | 0 | >5 (stale onboarding) |
| Shared drives ownership clarity | Drive | every drive has owner | orphaned drives |

## What to wire

1. Google Cloud project + OAuth client (or service account with domain-wide
   delegation if you're a Workspace admin).
2. Scopes (read-only): `calendar.readonly`, `drive.metadata.readonly`.
3. Set `GOOGLE_CREDENTIALS_PATH` in `.env`.
4. Run `node scripts/gworkspace-pull.mjs` weekly.

## Calendar audit (quarterly ritual)

Founder-ops generates `output/calendar-audit-{quarter}.md` with:
- Time by category (auto-classified): 1:1s, all-hands, customer, investor,
  external, deep-work, no-meeting blocks
- Top 10 recurring meetings ranked by hours/quarter
- Recurring meetings with attendance <50% (kill candidates)
- Recurring meetings older than 6 months (review candidates)
- Time-of-day distribution (catches 8am or 7pm meeting creep)

The output is a worksheet, not a verdict. You decide what to cut. Most founders
who run this find 4-6 hours/week to recover.

## Doc hygiene

Weekly:
- Top 20 docs created this week (founder visibility)
- Docs with broken sharing (404 to expected viewers)
- Decision-log docs not in Notion (suggest migration)

Quarterly:
- Stale docs linked from onboarding (suggest archive or update)
- Shared drive ownership review

## What founder-ops will NOT do

- Cancel meetings on your behalf
- Delete docs
- Read doc content (metadata only by default)

If you want content analysis (e.g., "summarize all customer call notes from this
quarter"), set `integrations:gworkspace:read_content: true` and target specific
folders. Off by default.
