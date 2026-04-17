# SaaS Three-Statement Model

P&L, cash flow, and balance sheet, tied. If you only build one model, build this.

## Why three statements

A P&L can show profit while you go bankrupt. Cash flow can look fine while debt balloons. The balance sheet tells you what's actually true. You need all three.

## Structure (monthly, 36 months)

### Revenue (top of P&L)

| Line | How to model |
|------|--------------|
| New MRR | New logos × ACV / 12 |
| Expansion MRR | Expansion rate × starting MRR |
| Contraction MRR | Downgrade rate × starting MRR (negative) |
| Churned MRR | Gross churn rate × starting MRR (negative) |
| Ending MRR | Prior + new + expansion - contraction - churn |
| ARR | Ending MRR × 12 |

For annual contracts billed upfront, MRR is GAAP-recognized monthly, but cash hits upfront. This matters for cash flow below.

### COGS

| Line | Typical % of revenue |
|------|---------------------|
| Hosting (AWS/GCP) | 5-12% |
| Third-party APIs | 2-8% |
| Customer success salaries | 3-10% |
| Support salaries | 2-5% |
| Payment processing | 1-3% |
| **Gross margin target** | **70-85%** |

Best-in-class SaaS hits 80%+ gross margin. If you're below 70%, something's architecturally wrong — probably too much human labor per customer, or hosting costs that haven't been optimized.

### Operating expenses

- Sales & marketing (CAC payback driver)
- R&D (engineering + product)
- G&A (finance, legal, HR, ops, exec)

Rule of thumb at Series A/B: S&M 40-50%, R&D 25-35%, G&A 10-15% of revenue.

### EBITDA & FCF

EBITDA = Revenue - COGS - OpEx (excluding D&A)

Free cash flow = EBITDA + Δ deferred revenue - Δ AR - CapEx - tax

In SaaS, FCF often beats EBITDA because annual prepayments create a deferred revenue float. Lose sight of this and you'll think you're more profitable than you are.

### Balance sheet links

| P&L item | Balance sheet effect |
|----------|---------------------|
| Revenue billed | AR up or cash up |
| Annual prepay | Deferred revenue up, cash up |
| COGS paid later | AP up |
| Stock comp | APIC up, accrued comp up |
| Depreciation | Accumulated D down |

## Scenario modeling

Run three scenarios, every time:

1. **Downside:** churn +50%, new logos -30%, hiring frozen
2. **Base:** your forecast
3. **Upside:** churn -20%, new logos +40%, pricing +15%

Show the board all three. The spread tells them how much uncertainty you're carrying.

## Common mistakes

- Modeling ARR growth without modeling the hiring needed to support it
- Forecasting churn at historical rate when cohorts haven't matured
- Booking expansion MRR as "new" instead of its own line
- Using TTM revenue for growth rate comparisons (use ARR run-rate)
- Forgetting that long contracts hide churn until renewal

## Outputs to track

- Gross margin (monthly, trending)
- Net revenue retention
- CAC payback
- Burn multiple (net burn / net new ARR)
- Magic number (net new ARR × 4 / prior quarter S&M)
- Months of runway at current net burn
