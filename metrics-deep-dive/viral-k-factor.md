# Viral K-Factor

A metric from epidemiology, applied to user growth. Useful for social and collaborative products.

## Formula

K = i × c

Where:
- i = invitations sent per user
- c = conversion rate of invitations to new users

K > 1 = viral growth (each user brings more than one new user).
K = 1 = replacement.
K < 1 = sub-viral.

## Example

Each user sends 5 invitations. 20% convert. K = 5 × 0.2 = 1.0.

## Viral cycle time

The other dimension: how fast does each cycle complete?

User A signs up → invites User B → User B signs up → User B invites User C → ...

If each cycle takes 7 days with K = 1.2:
- Week 1: 100 users
- Week 2: 120 users
- Week 4: 172 users
- Week 12: 892 users
- Week 26: 7,600 users

If cycle time is 30 days with K = 1.2:
- Month 1: 100 users
- Month 2: 120 users
- Month 12: 892 users

Same K, very different growth. Cycle time matters as much as K.

## True virality is rare

Actual sustained K > 1 is rare. Most products with "viral" reputation have K of 0.3-0.8 and rely on other growth loops.

- Facebook early: K ~1.5 (driven by photos tagging non-users)
- Dropbox early: K ~0.5 (referral program bonus)
- Slack: K ~0.4 (but very high retention + seat expansion)

## Drivers of K

1. **Natural multi-player products:** Slack, Zoom, Figma — people need others to get value.
2. **Explicit invitation incentives:** credits, free features for inviter + invitee.
3. **Content that pulls in non-users:** tagging, sharing, collaboration artifacts.
4. **Open loops:** features that require signup to interact (documents that require login to view).

## Measurement

Cohort of new users. Track:
- Invitations sent (in first N days)
- Invitations accepted (converted to new users in next N days)

K = avg invitations sent × avg acceptance rate.

Track by acquisition source. Organic users often have higher K than paid.

## Pitfalls

- Measuring K at single point in time (it should be cohort-based)
- Not accounting for non-invite-driven growth (SEO, ads) in "viral" claims
- Conflating referrals (paid virality) with organic virality
- Gaming K by incentivizing mass invite (spam, low-quality)

## K-factor is not a strategy

K > 1 is extraordinarily hard. Don't design product around hitting K > 1. Design for retention and value. Virality, if it emerges, is a bonus.

Most successful products rely on:
- Organic distribution (SEO, word of mouth)
- Paid acquisition with healthy payback
- Content/community loops
- Seat expansion (B2B)

Virality is one tool among many. Not the whole strategy.
