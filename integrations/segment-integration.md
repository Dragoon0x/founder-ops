# Segment integration

## Why this matters
Once you have more than one source of customer truth, you have zero sources of
customer truth. Segment is the choke-point that makes everything else possible.
Founder-ops doesn't replace Segment; it consumes it.

## Signals tracked

| Signal | Use |
|---|---|
| Active users (DAU/WAU/MAU) | engagement, retention curves |
| Feature adoption funnels | product mode, north-star metric |
| Activation events (per ICP definition) | onboarding mode |
| User segments by behavior | growth experiments |
| Event volume by source | data-quality monitoring |

## What to wire

1. Segment workspace API token (read-only on Sources, Tracking Plan).
2. Warehouse destination: BigQuery, Snowflake, or Redshift. Founder-ops reads
   from your warehouse, not from Segment directly (Segment's API isn't built for
   bulk reads).
3. Set `WAREHOUSE_TYPE`, `WAREHOUSE_CONN_STRING` in `.env`.
4. Run `node scripts/warehouse-pull.mjs` daily.

## Tracking plan minimums

Founder-ops requires these events to compute the standard SaaS metrics:

- `User Signed Up` (with source, plan_type)
- `User Activated` (per your activation definition; required)
- `Feature Used` (with feature_name, surface)
- `Subscription Started` (with plan, mrr)
- `Subscription Cancelled` (with reason, plan, mrr)
- `Subscription Upgraded` / `Subscription Downgraded` (with from_plan, to_plan,
  delta_mrr)
- `Invoice Paid` / `Invoice Failed`

If any are missing, founder-ops degrades the corresponding metric and notes the
gap in the metrics report.

## Activation event definition

Don't skip this. The activation event is the single most important event in your
tracking plan. Defined as: the action a new user takes that predicts long-term
retention with the highest correlation.

How to find it:
1. Take the cohort of users from 90 days ago.
2. Identify which are still active today.
3. For each event in the first 7 days, compute: P(retained | did event) /
   P(retained).
4. The event with the highest lift AND happens to most retained users is your
   activation event.

Examples (illustrative, not prescriptive):
- Slack: "sent 2000 messages within 30 days"
- Dropbox: "uploaded 1 file within first session"
- Figma: "invited 1 collaborator within 7 days"
- HubSpot: "imported contacts within 7 days"

Run this analysis quarterly. The activation event evolves with the product.

## Tracking plan governance

Founder-ops checks event-name conformance to your tracking plan and flags drift.
Common drift patterns:
- Event renamed without migration (`User Signed Up` -> `signed_up`)
- New event added without plan entry
- Properties added without type contract

Drift gets caught fast or it never gets caught.
