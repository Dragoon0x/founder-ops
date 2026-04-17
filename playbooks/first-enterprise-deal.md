# Playbook: First Enterprise Deal

## Define "Enterprise"
For this playbook: a single contract >$50K ACV, 2+ decision-makers, 6+
month sales cycle.

## The Asymmetric Risk
The first enterprise deal is worth 10x a small deal. BUT:
- It takes 6-12 months. Opportunity cost real.
- It changes your product roadmap (they'll ask for things)
- It changes your company profile (you'll look "enterprise-y")
- It can kill your SMB business if you chase whales and forget minnows

**Decide first:** is this the kind of company we want to be?

## Sourcing: Where First Enterprise Deals Come From

- **Inbound from existing SMB users** — someone at a F500 used your free
  tier, now wants to buy an enterprise license. (Most common.)
- **Warm intro from investor** — portfolio company is a logo you want
- **Founder-led outreach to specific named accounts** — you DM'd the CTO
- **A community connection** — you met them at a conference or Slack
- **Acquired content** — your writing or tool brought them in

NOT from: cold outreach by a junior SDR, generic ads, inbound SEO. Those
come later.

## The 6-Month Sales Cycle

### Month 1: Discovery
- [ ] First call: 30 min, mostly listening
- [ ] Map the buying group: Champion, Economic Buyer, Technical Evaluator, User, Blockers
- [ ] Get a second call with 2+ of them
- [ ] Confirm: they have budget, they have pain, they have a timeline

**Kill signal:** "We're just exploring, no timeline." → Not real yet. Park.

### Month 2: Technical eval
- [ ] POC or trial setup (pilot scope, success criteria, timeline)
- [ ] Security questionnaire (expect a 100-question SOC2 doc)
- [ ] Integration calls with their eng team
- [ ] Pricing conversation (rough numbers, not formal quote)

**Kill signal:** They won't put anything on paper about success criteria. → Vague = won't close.

### Month 3-4: Economic eval
- [ ] Formal pricing proposal
- [ ] ROI analysis (their savings vs your cost)
- [ ] CFO/procurement conversation
- [ ] Legal: mutual NDA, MSA exchange, redlines begin

**Kill signal:** Procurement adds 10+ redlines → prep for 2-3 month legal process

### Month 5: Negotiation
- [ ] Pricing push (they'll ask for 30-50% off)
- [ ] Term negotiation (length, net terms, auto-renew)
- [ ] Success metrics (what makes this a "good customer" for them)
- [ ] Security review final

### Month 6: Close
- [ ] Signed MSA
- [ ] First invoice
- [ ] Kickoff call
- [ ] Dedicated success plan (see `templates/customer-success-plan-template.md`)

## The Multi-Threading Rule

Never rely on one contact. Enterprise deals die when your champion leaves
or changes roles. By month 3, you must have relationships with:
- Champion (primary driver on their side)
- Economic buyer (signs the check)
- Technical buyer (reviews integration)
- User (who will actually use it)
- Procurement/Legal contact

If your deal only has one person — it will die.

## The MEDDPICC Framework (use it)

See `frameworks/MEDDPICC.md`. For every enterprise deal, you should be
able to answer:
- **M**etrics — what specifically will they measure?
- **E**conomic buyer — who signs the check? Met them?
- **D**ecision criteria — what factors drive their decision?
- **D**ecision process — what are the steps to close?
- **P**ain — what's the quantified pain?
- **P**aper process — procurement, legal, security
- **I**dentify pain (confirmed)
- **C**hampion — who's selling for you internally?
- **C**ompetition — who else are they evaluating?

Blank answers = you don't have a deal. You have a hope.

## Pricing First Enterprise

Three anchors:
1. **Price-to-value:** 10-20% of the quantified ROI they'll see in year 1
2. **Price-to-comparable:** What would X competitor charge? (Use their list price as anchor)
3. **Price-to-market:** Standard range for your category

For first deal, you'll likely need to discount 20-30% off list to get it
over the line. **Do not drop more than 50%** without getting something
in return (longer term, case study, reference call rights).

## The Deal-Breaker Terms

Most founders cave on these. Don't:
- **Uncapped indemnity:** Push for cap at 2x annual fee
- **Most Favored Nation (MFN):** Never agree. Creates cascade.
- **Unlimited use rights:** Always meter usage
- **Perpetual license without maintenance:** You'll support them forever with no revenue
- **Prepaid multi-year with heavy discount + early termination rights:** Worst of both worlds

Things founders CAN concede:
- 30% off list for first deal
- Net 60 instead of Net 30
- 2-week refund window if trial doesn't deliver
- Custom SLA (uptime 99.9% vs 99.5% you'd prefer)

## Post-Close: The Real Work

First 90 days post-signature determines if this is a reference customer
or a horror story:
- Weekly check-in with champion
- Monthly business review with broader group
- Dedicated Slack channel
- You personally stay involved

Goal: by day 90, they've gotten the outcome. By day 180, they're
expanding. By day 365, they're your reference.

## Output
- `output/meddpicc-[account].md` — deal review doc
- `output/proposal-[account].md` — your formal proposal
- `output/msa-redlines-[account].md` — key redline decisions
- `data/enterprise-pipeline.md` — all deals in flight

## Anti-Patterns
- Single-threaded deals (one contact = dead deal)
- Heavy customization before contract signed
- Accepting vague success criteria
- Discounting without getting something in return
- Assuming SMB motion scales to enterprise

## Related
- `frameworks/MEDDPICC.md` — the framework in detail
- `library/term-sheet-clauses.md` — wait, that's investors; for deals see msa
- `modes/sales-deeper.md` — enterprise sales methodology
