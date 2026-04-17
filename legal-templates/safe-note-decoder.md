# SAFE Note Decoder

## What a SAFE is
Simple Agreement for Future Equity. It's a contract that converts into
equity at a later priced round. Created by YC in 2013.

Not a loan. No interest. No maturity date. No debt.

## The four versions (YC, 2018 and later)
1. **Valuation cap, no discount**
2. **Discount, no valuation cap**
3. **Valuation cap AND discount** (investor takes the better of two)
4. **MFN (most favored nation) only** — no cap, no discount, but if you sell a better SAFE later, this investor gets the same terms

## The main terms, decoded

### Post-money valuation cap
The ceiling price at which the SAFE converts to equity.

Example:
- SAFE amount: $500K
- Valuation cap: $10M post-money
- Next round price: $15M post-money

You would convert at $10M cap (better for investor than $15M), meaning
the investor gets 5% of the company ($500K / $10M) before the new round.

### Discount rate
The % off the next round's price.

Example:
- SAFE amount: $500K
- Discount: 20%
- Next round price per share: $1.00
- SAFE converts at: $0.80 per share

### Pre-money vs Post-money SAFE
**Post-money is standard since 2018.** It's simpler math.

Difference:
- Pre-money SAFE dilutes all pre-existing shareholders when it converts.
- Post-money SAFE ONLY dilutes the founders (and earlier investors who
  accepted). The SAFE investor's ownership is known at signing.

If you're signing SAFEs, use post-money. If an investor insists on
pre-money, they're trying to get extra dilution protection at your expense.

### MFN (most favored nation)
If you issue a new SAFE on better terms before the next priced round,
existing MFN SAFE investors can upgrade to those terms.

Example:
- You sign a $5M cap SAFE with MFN.
- 3 months later, you sign a $3M cap SAFE with a different investor.
- MFN investor can upgrade to the $3M cap.

Protection for early investors. Mostly reasonable.

### Pro-rata rights
The investor can participate in future rounds proportionally to maintain
ownership.

In a standard YC SAFE: pro-rata rights are granted via a side letter,
not the SAFE itself. Some investors push for pro-rata in the SAFE
document — watch for this.

## The math of SAFE ownership

At conversion, the SAFE investor's ownership is:
```
SAFE ownership % = SAFE amount / min(valuation cap, next round post-money)
```

If you stack multiple SAFEs, their dilution compounds:
- $500K at $5M cap = 10%
- Another $500K at $10M cap = 5%
- Total SAFE dilution at conversion: ~15%

Then the priced round takes another 20–25%. You can end up 35–45%
diluted from SAFEs alone before any Series A.

## Common founder mistakes

1. **Signing too many SAFEs without modeling dilution.** "It's just a
   SAFE" often means "I'll figure out the cap table later." Later is
   scary.
2. **Using pre-money SAFEs.** Unknown dilution.
3. **Dropping the valuation cap to close fast.** "Uncapped SAFEs" favor
   the founder ONLY if the next round is very high. If growth slows,
   uncapped can still convert badly.
4. **Not tracking pro-rata side letters.** At Series A, you'll be
   surprised by who's entitled to participate.
5. **Letting an investor rewrite YC SAFE language.** The standard YC
   SAFE is lawyer-tested. Most "modifications" help the investor.
6. **Forgetting 1099/investor reporting.** SAFE investors need K-1s or
   similar at tax time.

## What's fair in 2025-2026

| Stage | Typical SAFE cap | Discount | Notes |
|-------|------------------|----------|-------|
| Friends and family | $3–8M post | 0–20% | Small checks, high trust |
| Pre-seed | $8–15M post | 20% or cap | Angels and small funds |
| Seed SAFE bridge | $15–25M post | Cap only | Bridging to Series A |

If a valuation cap feels wildly off either direction, you're
mispricing. Ask 3 other founders what they raised at.

## Red flags in a SAFE
- **Interest rate** (then it's a convertible note, not a SAFE)
- **Maturity date** (then it's a convertible note)
- **Personal guarantees** (never)
- **Liquidation preferences** (these come at priced rounds)
- **Board seats** (SAFEs shouldn't grant board seats)
- **Veto rights** (SAFEs shouldn't grant veto rights)
- **Conversion preferences inconsistent with standard** (read carefully)

If you see any of these, you're not looking at a SAFE. You're looking
at a convertible note or a side deal.

## When to use SAFE vs priced round

| Use SAFE when | Use priced round when |
|---------------|----------------------|
| Raising < $2M total | Raising > $2M |
| No lead investor | Have a lead investor |
| Speed matters more than price | Valuation is strategic |
| Pre-seed or early seed | Seed+ or later |

Above $3M raised on SAFEs, consider doing a priced seed round. The
cap table complexity isn't worth the marginal speed.

## Time to read one: 30 minutes
## Time to sign one: depends on review, usually 1–3 days
## Time to regret one: 6 months at Series A when you see the cap table

Use the YC standard forms at ycombinator.com/documents.
