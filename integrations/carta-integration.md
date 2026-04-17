# Carta integration

## Why this matters
The cap table tells the truth about who actually owns the company and what every
financing decision will cost. Founder-ops uses Carta to model dilution scenarios
before you sign anything.

## Signals tracked

| Signal | Cadence |
|---|---|
| Fully diluted ownership by stakeholder | weekly |
| Option pool % available vs allocated | weekly |
| Vesting cliffs in next 90 days | weekly |
| Outstanding SAFEs / convertible notes | weekly |
| Conversion math at next round (multiple price scenarios) | on-demand |

## What to wire

1. Carta data export (Settings -> Account -> Data exports). Run quarterly minimum.
2. Save export ZIPs to `data/carta/exports/`.
3. Run `node scripts/carta-parse.mjs` to extract cap table to JSON.

(Carta API access requires enterprise plan. Quarterly export is fine for early
stage.)

## Dilution scenarios it models

For any proposed round (input: amount + valuation + option pool top-up):
- Pre-money / post-money cap table
- Founder dilution (separately for each founder)
- Employee pool dilution
- SAFE conversion (with MFN, valuation cap, discount math)
- Investor returns at 1x / 3x / 10x exit

Output: `output/dilution-{scenario-name}.md` with a comparison table.

## Common cap table mistakes founder-ops protects against

1. **Forgetting MFN clauses** — if any earlier SAFE has MFN, every later cap can
   force a re-price.
2. **Underestimating pool top-up** — investors will ask for 10-15% post-round.
   Model this on YOUR side, not theirs.
3. **Stacking discounts** — discount + cap rarely both apply, but the worse for
   you of the two does.
4. **Pre-money vs post-money pool** — pre-money pool comes from founders'
   pockets. Post-money pool comes from investors' pockets. Negotiate.
5. **Missing the most-favored-nation re-price** — if you raise with a SAFE at
   $10M cap and later lower the cap, MFN holders get the lower cap.
6. **Ignoring vesting cliffs in fundraise timing** — closing a round 2 weeks
   before a co-founder's cliff vests is a red flag for new investors.

## Stakeholder math hygiene

Run this monthly:
- Founder ownership combined: should track planned dilution path
- Employee pool: should be ~10-15% at seed, refresh to 10-15% at each round
- Investor ownership: should match cap table exports exactly (catches data drift)

## Defensive notes

This is not legal advice. Cap table mechanics are deeply state- and
jurisdiction-specific. Founder-ops models math. A securities lawyer reviews the
docs.
