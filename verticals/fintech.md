# Fintech — Operating Manual

## If you're new to fintech

You're entering one of the most heavily regulated industries. Compliance
isn't a cost center — it's the moat. Underestimate it and you'll get
shut down. Over-engineer it and you'll move too slow.

## Stage Operating Priorities

### Pre-launch (preparing to take real money)
- Hire compliance counsel BEFORE building (not after)
- Sponsor bank or BaaS partner (Synapse-style failure shows risk — vet carefully)
- KYC/AML vendor (Persona, Alloy, Sumsub)
- Fraud monitoring vendor (Sift, Sardine)
- Privacy policy + ToS reviewed by fintech-specific lawyer

### MVP (taking real money)
- Limit user count and geographic scope
- Manual review of all transactions over threshold
- Daily reconciliation between systems
- Capital reserves (some products require capital adequacy)

### Early growth
- State licensing strategy (MTL = Money Transmitter License)
- Compliance officer hire
- Internal audit function
- BSA/AML program documented

### Scale
- Federal charter consideration vs state-by-state
- Fraud team
- Legal team
- Treasury and finance ops

## Mode Overrides for Fintech

### `legal-deeper`
Fintech-specific legal needs:
- Consumer Financial Protection Bureau (CFPB) compliance
- State regulator coordination (varies — California vs Wyoming)
- BSA/AML program (Bank Secrecy Act, Anti-Money Laundering)
- KYC requirements (Customer Identification Program)
- OFAC sanctions screening
- Reg Z (truth in lending), Reg E (electronic transfers), Reg D (deposits)
- For lending: state usury laws, fair lending laws
- For payments: PCI-DSS compliance

### `security`
Fintech-specific security:
- SOC 2 Type II minimum
- PCI-DSS for card data
- Penetration testing 1-2x/year
- Bug bounty program
- Insider threat monitoring

### `growth`
Fintech acquisition is harder than SaaS:
- Trust signals matter enormously (FDIC insurance, partner banks)
- Retention is the hard part (consumer fintech especially)
- Cross-sell is where margins live
- Avoid "growth at all costs" — fraud spikes follow

### `metrics`
Fintech-specific metrics:
- Funded account % (of signups)
- Primary account % (paycheck deposits)
- Transaction volume per user
- Net interest margin (lending)
- Fraud rate (basis points of volume)
- Charge-off rate (lending)
- Loss ratio (insurance)

### `partnerships`
Sponsor bank or BaaS partner is critical infrastructure:
- BaaS providers: Treasury Prime, Unit, Synctera, Increase
- Direct sponsor banks: Lead Bank, Cross River, Coastal, FNBO
- Vetting criteria: financial stability, regulatory standing, scalability, pricing
- Lock-in is real — switching is 6-12 months

## Fintech Anti-Patterns

| Pattern | Why It Fails |
|---------|-------------|
| Launching without legal review | Regulatory action, refunds |
| "Move fast and break things" with money | Customer money, trust gone |
| Choosing wrong sponsor bank | Switching costs 6-12 months |
| Underinvesting in fraud | Catastrophic losses |
| Not reserving for chargebacks/disputes | Cash flow surprises |
| Geographic expansion before licensing | Cease and desist orders |
| Marketing as a "bank" without being one | False advertising |

## Reference Benchmarks

See `benchmarks/fintech.md` for unit economics by fintech sub-vertical
(neobanking, lending, payments, insurance, crypto).
