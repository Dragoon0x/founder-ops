# Fintech — Industry Overview

Last updated: 2026-Q1

## What makes fintech hard

Fintech is a compliance business that happens to have software. Most founders treat it as a software business that happens to have compliance. This inversion is why most fintechs die.

Three multipliers make fintech different:

1. **Regulation.** Every product feature touches a regulator. Mistakes are federal.
2. **Money movement.** Bugs cost money, literally. Not reputation, not users, dollars.
3. **Trust.** A single security or fraud incident permanently prices users out.

## Sub-verticals

| Sub-vertical | Typical business model | Key risk |
|--------------|------------------------|----------|
| Neobanks | Interchange + net interest margin | Rate compression, CAC |
| Lending | Net interest margin - loss rate | Credit losses, funding costs |
| Payments | % of TPV + fixed fee | Fraud, chargebacks, scheme fees |
| Wealth/Crypto | AUM fees or spread | Market cycles, regulatory |
| B2B fintech (accounting, expenses, AP) | SaaS + float + interchange | Stickiness, bank partnerships |
| Insurtech | Premium % - loss ratio | Underwriting, cat events |
| Infrastructure (Plaid-like) | Per-API-call or seat | Concentration risk |

## Key numbers (benchmarks 2026-Q1)

- Consumer fintech CAC: $60-250; payback target under 18 months
- B2B fintech CAC: $2k-20k; payback target under 24 months
- Interchange, debit: 0.5-1.2% depending on regulation
- Interchange, credit: 1.5-3.0%
- Stripe-like payments processor take rate: 2.6-2.9% + $0.30, net margin 0.4-0.8%
- Typical fraud rate tolerances: payments 0.1% of TPV, lending 2-4% of originations
- Breakeven CAC:LTV for consumer fintech: 3:1 minimum, 5:1 healthy
- Average time-to-revenue from formation: 18-36 months (longer than SaaS due to charter/partnerships)

## The compliance stack (what every fintech needs)

1. **Entity + licensing.** Depending on product: money transmitter licenses (state-by-state), broker-dealer, lending licenses, or bank sponsorship
2. **BSA/AML program.** Know-your-customer, transaction monitoring, suspicious activity reporting, designated BSA officer
3. **Consumer protection compliance.** Reg E (electronic funds), Reg Z (lending), Reg B (ECOA), UDAAP
4. **Data and security.** SOC 2 Type 2 (table stakes), PCI-DSS if card data, state privacy laws
5. **Bank partnership.** Unless chartered, you need a sponsor bank (Column, Lead Bank, Cross River, Evolve were common in 2024-2025 cycle, landscape shifted post-Synapse)

Cost ballpark: $300k-800k/year for pre-Series A fintech before lawyers and external counsel.

## Business model levers

Fintech revenue usually comes from:
- **Interchange** (debit/credit swipe fees)
- **Net interest margin** (earn yield on float, pay less on deposits)
- **Fees** (monthly, transaction, interchange, late, overdraft)
- **Spread** (buy/sell price gap, FX, interest rates)
- **SaaS / seat** (B2B fintech)
- **Asset-based** (% of AUM, % of loan book)

Most successful fintechs stack 2-3. Pure single-lever fintechs struggle to reach profitability.

## What good looks like at each stage

**Pre-seed/Seed.** Wedge into one painful problem, one user segment. Compliance program sketched, not built. Bank partnership LOI.

**Series A.** Live product, real transactions, CAC under target, unit economics modeled with loss curves. Full BSA/AML program. Licensed or with clear path.

**Series B+.** Multi-product, expansion revenue from existing users, NIM or take-rate improving. Compliance is a competitive advantage not a cost center.

## Common moats

- **Regulatory.** Charters and licenses other entrants cannot easily get
- **Data.** Loss histories, risk models, underwriting
- **Distribution.** Embedded in payroll, accounting, or point-of-sale
- **Trust.** Brand + time in market (users do not switch banks casually)
- **Network effects.** Two-sided payments, merchant networks

## See also

- industries/fintech/metrics.md
- industries/fintech/pitfalls.md
- benchmarks/fintech.md
- verticals/fintech.md
