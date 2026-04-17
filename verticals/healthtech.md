# Healthtech — Operating Manual

## If you're new to healthtech

Healthcare is slow, regulated, and dominated by a few buyers (payers,
providers, employers). Sales cycles are 9-18 months. Reimbursement
decisions add years. Plan accordingly.

## Stage Operating Priorities

### Pre-launch
- Determine who pays: patient (cash), employer (B2B2C), payer (insurance), provider (B2B)
- Each path has different compliance, sales, and economics
- HIPAA-compliant infrastructure from day 1 (no Slack free tier with PHI)
- Privacy + Security review with healthcare-specific lawyer

### MVP
- Pilot customer (1-3) with clear success metrics
- Outcomes data collection plan
- IRB approval if running clinical evidence study
- HIPAA Business Associate Agreements (BAA) with all vendors

### Early growth
- HITRUST certification consideration (enterprise health requires it)
- Clinical evidence (peer-reviewed, real-world)
- Reimbursement strategy if applicable
- Sales team with healthcare experience (not generic SaaS sales)

### Scale
- Specialized sales (provider, payer, employer)
- Clinical operations team
- Regulatory affairs function
- Customer success with clinical training

## Mode Overrides for Healthtech

### `legal-deeper`
Healthtech-specific:
- HIPAA Privacy and Security Rules
- HITECH (breach notification)
- 42 CFR Part 2 (substance use)
- State privacy laws (CA, WA, others have stronger)
- FDA: software as medical device (SaMD) classification
- AKS (Anti-Kickback Statute) and Stark Law
- Telemedicine state-by-state requirements

### `security`
Bar is much higher in healthcare:
- HIPAA Security Rule (specific safeguards required)
- HITRUST CSF (de facto enterprise health standard)
- BAA required with every vendor that touches PHI
- Breach response process (60-day notification, fines per record)

### `discovery`
Healthcare buyers are different:
- Clinical workflow constraints (you can't ignore them)
- Multiple stakeholders (clinical, IT, finance, compliance, procurement)
- Clinical champions are critical (find them, support them)
- Evidence-based: anecdotes don't sell, data does

### `metrics`
Healthtech-specific outcome metrics:
- Clinical outcomes (HbA1c, blood pressure, depression scores)
- Process outcomes (adherence, attendance, completion)
- Operational outcomes (cost reduction, time saved)
- Patient experience (NPS, CAHPS scores)
- Provider experience (burden, time)

### `partnerships`
Healthcare requires deep partnerships:
- EHR integration (Epic, Cerner, Athena, etc.)
- HIE participation
- Sponsoring institutions (academic, IDN)
- Clinical advisory board
- Payer pilot agreements

## Reimbursement Strategy (if relevant)

Three paths from worst to best:
1. **Cash pay** — fastest, lowest market, hardest unit economics
2. **Self-insured employers** — moderate path, 2-3 year sales cycle
3. **Reimbursement** — longest path (3-5 years), largest TAM

Reimbursement decision tree:
- CPT code: existing or need new?
- If new: AMA RUC process is 18-36 months
- Coverage decision: each payer separately, 6-24 months each
- Payment rate: negotiated, usually below your cash price

## Healthtech Anti-Patterns

| Pattern | Why It Fails |
|---------|-------------|
| Selling to "providers" generically | Different verticals (PCP, specialist, hospital) |
| Underestimating sales cycle | 18-month cycles surprise SaaS-trained founders |
| Ignoring regulatory until later | FDA action, HIPAA fines |
| No clinical advisor | Product misses workflow reality |
| Cash-pay only without strategy | Limits TAM permanently |
| Generic HR-friendly UX | Clinicians need different UX (efficiency over delight) |
| Ignoring EHR integration | Won't be adopted in clinical settings |

## Reference Benchmarks

See `benchmarks/healthtech.md` for sales cycles, ACVs, churn, and
implementation timelines by sub-vertical.
