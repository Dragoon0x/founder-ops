# HubSpot integration

## Why this matters
The funnel is where founders self-deceive. HubSpot is the receipts. Founder-ops
uses it to compute conversion by stage, ICP fit, sales-cycle length, and where
deals actually die.

## Signals tracked

| Signal | Healthy range (B2B SaaS) | Warning if |
|---|---|---|
| Lead -> MQL | 20-40% | <15% (lead quality issue) |
| MQL -> SQL | 30-50% | <20% (qualification issue) |
| SQL -> opportunity | 40-60% | <30% (discovery issue) |
| Opportunity -> closed-won | 15-30% SMB / 20-35% mid | <10% (qualification or product) |
| Sales cycle p50 | 14-30d SMB / 60-120d mid | >2x previous quarter |
| Avg deal size | trending up | down 20%+ |
| Win rate by source | known and tracked | unknown |
| Pipeline coverage | 3-4x next 90 days | <2x |
| Time-to-first-touch | <5min | >1hr (lose 80% of leads) |

## What to wire

1. HubSpot private app with read scopes on: Contacts, Companies, Deals, Engagements
   (calls/emails/meetings), Pipelines, Owners, Properties.
2. Set `HUBSPOT_API_KEY` in `.env`.
3. Run `node scripts/hubspot-pull.mjs` every 6 hours.
4. Configure `config/hubspot.yaml`:
   ```yaml
   pipeline_id: default
   stages:
     - id: qualified
       sla_days: 7
     - id: discovery
       sla_days: 14
     - id: proposal
       sla_days: 14
     - id: negotiation
       sla_days: 21
   icp_score_property: icp_fit_score
   ```

## ICP fit scoring (5-axis)

If you don't have ICP scoring set up, founder-ops uses these 5 axes (1-5 each,
total /25):
1. Company size in target band
2. Industry in target list
3. Tech stack overlap
4. Buyer role match (decision-maker reachable)
5. Trigger event present (funding, hiring, switching)

Deals scoring <15/25 are flagged. They tend to take 2-3x longer and close at half
the rate. They're not banned but the cost is made visible.

## Sales-cycle root-cause map

When sales-cycle p50 spikes, founder-ops auto-runs this diagnostic:

| Where time was added | Likely root cause |
|---|---|
| Discovery -> Demo | Bad qualification, demoing wrong personas |
| Demo -> Proposal | No clear next step from demo, weak champion |
| Proposal -> Negotiation | Procurement / legal pulled in late |
| Negotiation -> Close | Pricing surprise, missing security review |
| Close -> Signed | Contract redlining, signature workflow |

Each maps to a specific playbook fix in `playbooks/sales-cycle-fixes.md`.

## Closed-lost reasons (mandatory taxonomy)

Free-text closed-lost reasons are useless. Founder-ops requires you to map every
loss to one of:
- Lost to competitor (which one + why)
- Lost to internal build (vs. buy)
- Lost to no-decision (most common, often hidden as "timing")
- Lost on price (rarely the real reason)
- Lost on capability gap (which one)
- Lost on champion-left
- Disqualified post-discovery (record this honestly)

Quarterly review of the loss mix tells you whether to fix product, positioning,
sales process, or pricing.
