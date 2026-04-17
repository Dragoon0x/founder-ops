# Exit Waterfall

At acquisition, the money flows in a specific order. Model it before you sign the term sheet.

## Standard waterfall order

1. Secured debt (venture debt, loans)
2. Unsecured debt (vendors, tax)
3. Preferred stock liquidation preferences (by seniority, usually most recent first)
4. Participating preferred additional take (if applicable)
5. Common stock (founders, employees, converted preferred)

## Seniority

Preferred stock typically gets paid in reverse order of investment (last money in, first money out). Series C gets paid before Series B before Series A before seed.

Exception: **pari passu** — all preferred paid equally. Fight for this if you're an early investor; avoid it if you're late.

## Worked example

Cap table:
- $5M Series Seed (1x non-participating, junior)
- $15M Series A (1x non-participating, senior to seed)
- $35M Series B (1x participating, senior to A)
- Common: founders + employees

Exit: $150M

**Step 1: Venture debt paid.** Assume none. Start at $150M.

**Step 2: Series B preferences ($35M participating).**
- Gets $35M off the top.
- Participating = also gets pro rata of remainder.
- Series B owns ~25% of fully diluted.
- $150M - $35M = $115M remaining.
- B's participating share: 25% × $115M = $28.75M.
- B total: $63.75M.

**Step 3: Remaining $86.25M.** Series A preferences ($15M non-participating).
- A chooses: $15M preference OR convert to common.
- A owns ~20% of fully diluted. Common would get: 20% × $86.25M = $17.25M.
- A converts (since $17.25M > $15M). A gets $17.25M.

**Step 4: Series Seed ($5M non-participating).**
- Seed owns ~10%. Common would get 10% × $86.25M = $8.625M.
- Seed converts. Seed gets $8.625M.

**Step 5: Common.** ~45% of fully diluted.
- 45% × $86.25M = $38.8M.
- Split between founders (say 30% of common) and employees (70%): founders $11.6M, employees $27.2M.

**Recap:**
- Series B: $63.75M (invested $35M, 1.8x)
- Series A: $17.25M (invested $15M, 1.15x)
- Series Seed: $8.625M (invested $5M, 1.72x)
- Founders: ~$11.6M
- Employees: ~$27.2M

Participating preferred at Series B took $28.75M that would otherwise have gone to common. That's the real cost of participating.

## Variations that matter

- **Multiple preferences:** 2x or 3x preferences stack additional cash before common. On $150M exit with $35M at 2x participating, Series B takes $70M off the top.
- **Capped participation:** participating preferred caps at 2-3x. After cap, investor must choose between preference or convert. Fight for 2-3x caps if you must accept participating.
- **Converted waterfalls:** if exit is huge, all preferred convert to common (no preference taken), because convert gives more. This is the founder-friendly case.

## The breakpoint analysis

For each class of stock, find the exit value at which they convert from preference to common. Below breakpoint = take preference. Above = convert.

Your cap table tool (Carta, Pulley) can run this. Do it before signing term sheets so you understand how your stake changes across exit scenarios.

## Key takeaway

At low exits, preferences eat common. At high exits, everyone's happy. Model the exit scenarios ($50M, $100M, $250M, $500M) before you sign. Know what founders/employees get in each.
