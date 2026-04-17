# Contract Review Checklist

For MSAs (Master Service Agreements) with enterprise customers. Most
redlines fall into these categories.

## Limitation of Liability

### Watch for
- [ ] Uncapped liability (strongly oppose)
- [ ] Liability capped at $1 (too low — unfair to customer, signals unseriousness)
- [ ] Liability carve-outs that make the cap meaningless

### Ideal position
- Liability capped at 12 months of fees paid or $1M, whichever greater
- Carve-outs for: gross negligence, willful misconduct, IP indemnification, confidentiality breach, data breach
- Mutual indemnification where applicable

## Indemnification

### Watch for
- [ ] Broad indemnity clauses (you indemnify them for anything)
- [ ] Unlimited indemnity (no cap)
- [ ] Fee-shifting that makes you pay their attorney fees

### Ideal position
- You indemnify for: IP infringement by your product, data breaches caused by your negligence
- They indemnify for: their use of the product in ways you didn't authorize, their data
- Cap at mutual cap or 2x annual fees

## Data & IP

### Customer data
- [ ] Customer retains ownership of their data
- [ ] You have license to use their data only to provide service
- [ ] Aggregated/anonymized data rights (you want this for product analytics)
- [ ] Data export on termination (you return data, they can download)
- [ ] Data deletion on termination (within 30-60 days)

### Your IP
- [ ] You retain all rights to your platform
- [ ] Feedback license (any improvements they suggest, you own)
- [ ] License to customer is for their internal use, not to white-label

### Special category data (handle carefully)
- [ ] Health data (HIPAA)
- [ ] Payment data (PCI)
- [ ] Children's data (COPPA)
- [ ] EU data (GDPR)

## Termination

### Watch for
- [ ] Termination for convenience WITHOUT notice period
- [ ] Termination for convenience with full refund of prepaid fees
- [ ] Automatic termination on any material breach without cure period

### Ideal position
- Termination for convenience allowed with 30-90 day notice
- Prepaid fees forfeited on termination for convenience (you've already spent on them)
- Termination for cause requires written notice + 30 day cure period
- Termination for cause (unfixable): confidentiality breach, insolvency, material breach of law

## Pricing & Payment

### Watch for
- [ ] Price locks for 3+ years (bad — inflation eats you)
- [ ] Unlimited usage at fixed price ("all you can eat")
- [ ] Net 60+ payment terms (slow)
- [ ] Heavy late-fee penalties (they'll try to remove)

### Ideal position
- Annual price increase right (CPI or fixed 3-7%)
- Usage-based tiers with clear overage pricing
- Net 30 payment terms
- Late fees reasonable (1-1.5% monthly)

## Auto-Renewal

### Watch for
- [ ] Auto-renewal with no notice (bad for customer — you want them engaged)
- [ ] One-year auto-renewal with 90-day opt-out (standard)

### Ideal position
- Auto-renewal with notice to customer 60-90 days before renewal
- Opt-out with 30-60 day notice

## Warranties & Disclaimers

### Watch for
- [ ] Warranties you can't back up ("will never have bugs", "100% uptime")
- [ ] Implied warranty of fitness for particular purpose (disclaim)
- [ ] Absolute warranties without qualification

### Ideal position
- Limited warranty: service will perform materially in accordance with docs
- All other warranties disclaimed
- Remedy: re-perform service / refund fees

## Service Level Agreement (SLA)

### Watch for
- [ ] Unrealistic uptime (99.99% = ~5 min/month downtime — very hard)
- [ ] No carve-outs for maintenance, force majeure
- [ ] SLA credits that compound (too punitive)

### Ideal position
- 99.5% or 99.9% depending on your actual infrastructure
- Carve-outs: scheduled maintenance (notified), customer-caused, force majeure
- Credits: 10-25% of monthly fee as service credit (not refund)
- Customer must request credits in writing within 30 days

## Confidentiality

### Standard language
- [ ] Both parties protect the other's confidential information
- [ ] Typical 3-5 year duration (infinite for trade secrets)
- [ ] Standard exceptions: publicly known, independently developed, required by law

### Enterprise-specific
- [ ] "Residuals" clause (watch this — customer may try to retain ideas you share)

## Insurance

- [ ] General liability: $1M-5M typically required
- [ ] Cyber liability: $1M-5M for SaaS
- [ ] Errors & omissions: $1M typical
- [ ] Certificates of insurance provided on request

## Governing Law & Dispute Resolution

### Watch for
- [ ] Customer's home state/country (you might prefer yours)
- [ ] Jury trial waiver
- [ ] Class action waiver
- [ ] Mandatory arbitration (vs. courts)

### Ideal position
- Your state or Delaware
- Arbitration for commercial disputes (faster, cheaper)
- Courts for IP disputes (precedent matters)

## Specific Enterprise Clauses

### Most Favored Nation (MFN)
- [ ] NEVER agree. Creates cascade where they get best pricing forever.
- [ ] If they insist: very narrow scope, 12-month term, specific products only

### Source Code Escrow
- [ ] Rare, but enterprise might ask
- [ ] Use a third-party escrow service (Iron Mountain)
- [ ] Clear release triggers (your bankruptcy, sale, etc.)

### Right to Audit
- [ ] They get to audit your usage once per year with 30-day notice
- [ ] At their expense
- [ ] Limited to verification of fees owed

## Contract Process

### Before redlines
- [ ] Contract sent to legal counsel (even for "standard" redlines)
- [ ] Business lead + legal alignment on what you'll accept
- [ ] Red lines (what you won't do), yellow lines (negotiate), green lines (ok)

### During negotiation
- [ ] All redlines in track-changes
- [ ] Clean version maintained alongside
- [ ] Version control critical (file naming convention)

### Before signing
- [ ] Final version reviewed by legal
- [ ] Business terms match verbal agreement (price, term, quantity)
- [ ] All signatures collected
- [ ] Executed copy stored in one place

## Red Flags (Pause and Think)

- [ ] Customer's legal team is aggressive in week 1 — they may be aggressive forever
- [ ] Customer demands terms that benefit them at your expense (MFN, uncapped indemnity)
- [ ] Customer wants to negotiate your standard T&Cs when their contract is under $50K
- [ ] Customer's procurement has power over business stakeholder
- [ ] Customer changes stance on agreed-upon terms

## Related
- `modes/legal.md`
- `playbooks/first-enterprise-deal.md`
- `checklists/vendor-selection-checklist.md`
