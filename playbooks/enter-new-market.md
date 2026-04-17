# Playbook: Enter New Market

## Scope
"New market" = new geography (international) OR new vertical (healthcare if you're generic SaaS) OR new customer segment (enterprise if you're SMB).

## Is It Time? (Pre-decision)

Don't enter new markets until:
- [ ] Current market growing at < 20% MoM (running out of room)
- [ ] PMF evident in current market (churn < 3%, NRR > 110%)
- [ ] Clear demand signal from new market (unprompted inbound, 10+ times)
- [ ] $500K+ ARR (at minimum — ideally $2M+)
- [ ] 10+ months runway (you'll need the time)

If 3+ unchecked, don't enter new market yet. Focus on current.

## Phase 1: Validate (Month 1)

### Step 1: Confirm the Demand
Run `/founder-ops discovery` for the new market
- Interview 10-20 potential customers in the new market
- Don't pitch — learn
- Confirm the pain exists and is similar enough
- Identify differences from current market

### Step 2: Size the Opportunity
Run `/founder-ops strategy` (TAM analysis)
- TAM in new market
- Realistic SAM given your capabilities
- First-year revenue potential
- Compare to: doubling down on current market

**Test:** If the new market isn't at least 3x your current market opportunity (remaining), don't go.

### Step 3: Assess Defensibility
Run `/founder-ops compete`
- Who already serves this market?
- What's your realistic differentiation?
- How long until they notice you and respond?

## Phase 2: Adapt (Month 2-3)

### Step 4: Positioning
Run `/founder-ops positioning` for the new market
- New ICP definition
- New messaging (same company, different customer)
- What stays the same, what must change
- Case study needs

### Step 5: Product Adjustments
Run `/founder-ops product`
- What product changes are required? (not "nice to have")
- Which changes block entry vs can come later?
- Effort estimate for minimum viable adaptation
- Which existing features become irrelevant?

### Step 6: Pricing
Run `/founder-ops pricing-deeper`
- Does pricing model work in new market?
- Willingness to pay research (it's different!)
- Tier adjustments needed
- Procurement/billing differences

### Step 7: Go-to-Market Plan
Run `/founder-ops growth` + `/founder-ops marketing`
- Which channels work for this market (likely different)
- Content strategy (localized, vertical-specific)
- Sales motion adjustments
- Partner strategy (often critical in new markets)

## Phase 3: Beachhead (Month 3-6)

### Step 8: Wedge Customer
Identify the "beachhead" — first 3-5 customers that:
- Are true believers
- Will give reference calls
- Will tolerate imperfection for 6 months
- Serve as ideal case studies

Over-index time on making THESE customers wildly successful.

### Step 9: Minimum Viable Entry
Don't hire big team yet. Minimum viable entry:

| Need | Minimum Viable |
|------|----------------|
| Sales | One experienced AE in the market (hire or promote) |
| Support | Existing team with timezone plan |
| Legal | Existing counsel + one new-market specialist |
| Marketing | One content person (can be fractional) |
| Product | Product manager (can be existing PM for now) |

### Step 10: Early Metrics
Watch ruthlessly for first 90 days:
- First deal closed
- Deal cycle length (should trend down)
- CAC by channel (should be reasonable vs LTV)
- Activation rate (are they getting value?)
- Word-of-mouth (any unprompted referrals?)

## Phase 4: Scale or Kill (Month 6-12)

### Step 11: Honest Assessment at Month 6
Run `/founder-ops strategy` + `/founder-ops retro`

Questions:
- Did we hit the 6-month targets we set?
- Is unit economics comparable to core market?
- Is the team we're building repeatable?
- Are we still committed for 12 more months?

### Step 12A: If Working — Double Down
- Hire aggressive
- Invest in marketing/PR in new market
- Localize more (if international)
- Build market-specific team

### Step 12B: If Not Working — Pull Out
- Decide fast (don't drag on)
- Honor commitments to customers (refunds or runway)
- Document what you learned
- Redirect to core market

Most failed market entries don't pull out fast enough. This is a sunk cost trap.

## International-Specific Considerations

**Legal entity:**
- US/Canada: Can serve from US for most cases
- UK/EU: Entity often needed for larger deals (VAT, procurement)
- APAC: Entity usually required for enterprise
- LatAm: Varies by country, research each

**Payment:**
- Stripe handles most currencies
- Local payment methods matter (iDEAL in NL, Boleto in BR)
- Consider annual vs monthly (cash flow implications)

**Localization:**
- Full localization: expensive, slow, only for large markets
- Partial localization: marketing only, product in English
- Hybrid: core markets fully, others in English

**Support:**
- Business hours coverage in their timezone
- Language coverage (critical in some markets)
- Cultural adaptation of support tone

## Vertical-Specific Considerations

**Healthcare:** HIPAA, BAA, stricter security, longer sales cycles
**Finance:** SOC 2 Type II required, often ISO 27001, complex compliance
**Government:** FedRAMP if federal, state-specific certifications, slow procurement
**Education:** FERPA, different academic calendar, lower price points

## Output Artifacts
- `reports/market-entry-research-[market].md`
- `output/market-entry-plan-[market].md`
- `output/market-specific-positioning.md`
- `reports/market-entry-retro-[quarter].md`

## Decision Tree

```
Current market growing > 20% MoM?
  YES → Don't enter new market. Accelerate here.
  NO → Continue...

Clear demand signal from new market?
  NO → Wait for signal. Don't force it.
  YES → Continue...

Can you commit 12 months of focus and $500K+?
  NO → Build up first.
  YES → Begin validation phase.

Validation positive after Month 1?
  NO → Kill or pause. Don't drag on.
  YES → Full market entry.
```
