# Vendor Failure Playbook

When a critical vendor goes down, goes bankrupt, gets acquired, or loses your data, you have hours to protect the company. This is common enough that you should have a plan before it happens.

## Failure modes

### Acute outage
- AWS region down
- Stripe can't process
- Twilio can't send
- Recovery: minutes to hours

### Data loss or breach
- Vendor had breach affecting your data
- Vendor lost your data (rare but happens)
- Recovery: days to weeks

### Service shutdown
- Vendor sunsets product
- Vendor goes bankrupt
- Vendor gets acquired, new owner shuts down
- Recovery: 30 days to 6 months

### Pricing or terms change
- Vendor triples pricing at renewal
- Vendor changes terms unfavorably
- Vendor refuses to renew
- Recovery: weeks to months

### Performance degradation
- Latency spikes
- Quality declines
- Support quality falls off
- Recovery: ongoing management

## Pre-crisis: vendor risk inventory

Every 6 months, rate your vendors on:

1. **Criticality**: can you operate without them for 24 hours? 7 days? 30 days?
2. **Substitutability**: how long to migrate?
3. **Data custody**: do they hold your PII, financials, IP?
4. **Financial health**: public co? profitable? recent funding?
5. **Lock-in**: contract term, data export format, integration depth

High-criticality, low-substitutability, poor-financial-health vendors are your top risk.

## Contract provisions you should have

- **Data portability clause**: export format, timeline, cost on termination
- **SLA with credits**: uptime, latency, support response
- **Breach notification**: hours not days
- **Right to audit**: security posture annually
- **Termination for convenience**: 30–90 day notice
- **Price protection**: cap on renewal increases
- **Key person**: customer success / technical contact named
- **Force majeure**: narrow definition
- **Escrow (for on-prem / critical)**: source code escrow agreement
- **Assignment restrictions**: consent required on their acquisition

## Acute outage response

Hour 0:
1. Confirm it's the vendor, not you (status page, Twitter, support)
2. Activate runbook if you have one
3. Notify status page
4. Fail over to backup if available
5. Queue work if possible; don't drop it silently

Hour 1:
- Customer notification if external-facing
- Internal stand-up with engineering on recovery
- Track revenue impact
- Contact vendor's executive escalation

Hour 4:
- Written status update to customers every 60 minutes
- Rolling internal updates to team
- If no ETA from vendor, consider emergency migration plan
- Legal review of SLA credits

Post-outage:
- RCA (root cause analysis) from vendor within 10 business days
- Internal post-mortem within 5 business days
- Customer post-mortem within 10 business days
- SLA credit claim filed
- Vendor risk rating updated

## Vendor bankruptcy response

Signals:
- Missed payroll reported
- Mass layoffs
- Key exec departures
- Raise failed
- Press coverage of distress

Response:
1. Data export immediately (don't wait for bankruptcy filing)
2. Migration plan drafted
3. Alternative vendor shortlist
4. Legal: review contract for automatic termination triggers
5. Finance: open payables stop, negotiate direct relationships with sub-vendors if applicable
6. Customer communication: only if vendor is visible brand

## Vendor acquisition response

Signals:
- Press release
- Executive change
- Product roadmap shifts
- Account manager changes

Response:
1. Call account manager within 48 hours
2. Ask for: pricing protection, product continuity commitment, executive sponsor
3. Get commitments in writing
4. Start evaluating alternatives regardless of commitments
5. Use renewal as leverage point

## Price shock response

- Don't accept first quote
- Get competitive bids to establish market
- Escalate to vendor's VP Sales / CCO
- Bundle or unbundle for optimization
- Commit to longer term for better price (only if commitment is reversible)
- If migration cost less than price delta, migrate

## Migration playbook (when you have to)

Phases:

1. **Selection** (2–4 weeks): requirements, RFP, shortlist, demos, references, negotiation
2. **Contracting** (2–4 weeks): legal review, security review, DPA, pricing
3. **Migration setup** (2–8 weeks): data model mapping, integration rebuild, test plan
4. **Parallel run** (2–4 weeks): both systems live, validation
5. **Cutover** (1 week): decisive switch, legacy decommission

Total: 12–28 weeks for major infrastructure vendors.

## Communication

Internal:
- Affected teams get early notification
- Go/no-go decision gates documented
- Weekly stand-up during active migration

Customer:
- Most migrations: no customer notification needed
- User-facing changes: 60-day notice
- SLA-impacting changes: 30-day notice minimum

## Legal considerations

- Read the actual contract before escalating
- Lawyer involvement for termination for cause (high bar)
- Document every vendor breach in writing
- Mediation or arbitration before litigation
- Loss to company must be demonstrable

---

*Your vendors are your dependencies. Treat them like production systems: monitor, redundancy, runbooks.*
