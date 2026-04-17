# Option Grant Process

## The 8 steps to grant options correctly

1. **Get a current 409a valuation.** Required to set the strike price.
   Should be < 12 months old.
2. **Document the grant via a written board resolution.** Options
   must be approved by the board, not just by the founder.
3. **Issue within the authorized option pool.** If the pool is
   empty, you can't grant until the pool is refreshed.
4. **Strike price = FMV from 409a.** If you grant below FMV, the
   employee has a tax problem (Section 409A penalty: 20% + interest).
5. **Execute the written Notice of Stock Option Grant** with the
   employee. Signed by both sides.
6. **Deliver the Stock Option Agreement** (the full terms).
7. **Employee has 30 days to file an 83(b) election** if they intend
   to early-exercise. (Most don't early-exercise. Most don't need to file.)
8. **Track the grant in your cap table.** Carta, Pulley, and similar
   tools handle this automatically if used properly.

## The critical numbers

### Strike price
Equal to FMV from most recent 409a. Not lower.

### Exercise window
Standard: 90 days after termination.
Founder-friendly: extended exercise window of 7–10 years after
termination. Recommended for employee retention. Downside: ISOs
convert to NSOs after 90 days regardless.

### Vesting schedule
Standard: 4-year vest, 1-year cliff, monthly after.

Alternative: 4-year vest, 1-year cliff, monthly after with
"acceleration on change of control" (single or double trigger).

### ISO vs NSO
- **ISO (Incentive Stock Option)**: Tax-advantaged for employees, but
  only for full-time employees, with a $100K per-year vesting cap.
- **NSO (Non-Qualified Stock Option)**: Default for contractors,
  advisors, and over-the-cap grants. Less tax-advantaged but more
  flexible.

Most grants to full-time employees should be ISOs up to the $100K
cap, NSOs above.

### $100K ISO limit
Only the first $100K of ISO value (at grant) can vest in a calendar
year. Vesting above that becomes NSO.

Example: 40,000 ISOs at $5 strike = $200K total. With 1-year cliff,
25% vests in year 1 = $50K. Year 2: 25% vests = $50K. Plus year 1
overage if any. This stays under $100K per year so all ISO.

If you give a very large grant that would exceed $100K/year vesting:
the excess is NSO.

## Post-termination exercise window

### 90 days (standard)
If you leave, you have 90 days to exercise your vested options.

Problem: if strike price is high and you don't have cash, you might
forfeit grants worth $100K–1M+.

### Extended (7–10 years)
Some companies extend the exercise window to 10 years. This converts
ISOs to NSOs after 90 days regardless, but retains the options'
monetary value.

**For employees: extended windows are significantly better.**
**For companies: slightly harder cap table to manage but better
employee retention.**

Adopted by: Square, Pinterest, Palantir (historically), many
newer startups.

## Early exercise

If the option agreement allows it, an employee can exercise options
before they vest. The unvested shares are subject to repurchase by
the company at cost if the employee leaves.

Benefits:
- Starts the capital gains clock early (long-term rate after 1 year
  held).
- Locks in FMV at grant (if grant is at $0.50 and you exercise now,
  your basis is $0.50, regardless of how high the stock goes).

Drawbacks:
- Requires cash upfront.
- Must file 83(b) election within 30 days of exercise.
- Risk of losing the money if the company fails.

Early exercise is mostly only useful for:
- Founders (should always do it).
- Very early employees where the cost is < $5,000 total.
- Employees who strongly believe in the company.

## 83(b) election

**If early-exercising, you must file an 83(b) election within 30 days.**

The election says: tax me now at today's FMV, not later as shares
vest.

If you don't file, you pay ordinary income tax as each tranche vests,
at the then-current FMV. If the stock goes up 10x, you owe income tax
on 10x the exercise price. This is devastating if the stock is still
illiquid.

If you file 83(b), you pay ordinary income tax on the spread at
exercise (often $0 if strike = FMV). Future appreciation is capital
gains.

**Always file 83(b) when early-exercising. Always.**

Where to file: IRS Service Center where you file your taxes.
How: Certified mail with return receipt. Keep the receipt. Keep a
copy of the form. For the rest of your life.

## Post-grant tracking

Every grant should result in:
1. Board resolution filed.
2. Signed Notice of Grant.
3. Signed Stock Option Agreement.
4. Cap table updated (Carta/Pulley automates).
5. If early-exercised: 83(b) filed, shares issued, board resolution
   for share issuance, stock certificate issued, repurchase option
   in place.

## Common founder mistakes

1. **Granting without a 409a.** Strike is wrong, 409A penalty risk.
2. **Verbal grants.** Not enforceable, tax nightmare.
3. **Backdating grants.** Crime. Really.
4. **Not tracking the pool.** Over-granting beyond authorized pool.
5. **Ignoring the ISO $100K limit.** Mischaracterizing NSOs as ISOs.
6. **Not filing 83(b) for early-exercised shares.** See above.
7. **Letting terminated employees forfeit options via lost mail.**
   Inform clearly with a written notice of termination window.
8. **Inconsistent vesting schedules.** All employees get 4/1/monthly.
   Executives sometimes get acceleration. Founders get their own terms.

## Cost of doing it right
- 409a: $2–5K per year (required at least annually and after financings).
- Cap table software: $0–2K/month depending on plan (Carta, Pulley, LTSE).
- Lawyer review of option plan: $3–8K once.
- Lawyer review of individual grants: $0 if using software.

Total: ~$10K/year to have a clean option program. Cheapest insurance
against a catastrophic cap table mess.
