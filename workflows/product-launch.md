# Product Launch Workflow

## Trigger
Product or major feature ready for GA release.

## Launch Tiers

| Tier | Definition | Prep Time | Team Involved |
|------|-----------|-----------|---------------|
| T1 - Flagship | New product or major platform shift | 6-8 weeks | All functions |
| T2 - Major feature | Significant new capability | 3-4 weeks | Product, Marketing, Sales, Support |
| T3 - Minor feature | Enhancement or iteration | 1-2 weeks | Product, Marketing |
| T4 - Bug fix / polish | Quality improvement | 0 prep | Product only |

## T1/T2 Launch Timeline

### T-6 weeks: Launch brief
One document that aligns everyone:
- **What** are we launching? (Feature description, 2 paragraphs max)
- **Who** is it for? (Target segment, specific persona)
- **Why** does it matter? (Customer problem solved, with evidence)
- **How** will we measure success? (3 metrics with targets for 30/60/90 days)
- **What's the narrative?** (One sentence a journalist could quote)

### T-4 weeks: Content & collateral
- Blog post draft (1,500-2,000 words, not a feature list but a problem/solution story)
- Product demo video (2-3 min, shows the actual workflow, not a slideshow)
- Sales one-pager (front: value prop, back: competitive differentiation)
- Help docs / knowledge base articles
- Email sequences: existing customers (announcement), prospects (nurture)
- Social media copy: 5-7 posts across platforms, staggered over launch week

### T-2 weeks: Internal enablement
- Sales team briefing: demo the feature, handle objections, pricing implications
- Support team briefing: known limitations, common questions, escalation path
- CS team briefing: which existing customers should hear about this first?

### T-1 week: Pre-launch checks
- [ ] Feature stable in production for > 5 days with no SEV-1/2 incidents
- [ ] Load tested at 2x expected launch traffic
- [ ] All docs reviewed and published
- [ ] Email sequences loaded and tested
- [ ] Social media posts scheduled
- [ ] Press embargo lifted (if applicable)
- [ ] Analytics tracking verified (events firing correctly)
- [ ] Rollback plan documented

### T-0: Launch day
**Morning:**
- Ship the feature flag to 100% (if gradual rollout, start at 25%)
- Publish blog post
- Send customer email
- Post on social media (stagger: Twitter → LinkedIn → other)
- Notify Product Hunt (if applicable)

**Throughout the day:**
- Monitor: error rates, support volume, social mentions, signup/activation rates
- War room: product + eng + support in dedicated channel
- Respond to every social mention within 1 hr

**End of day:**
- Debrief: what went well, what didn't, any surprises
- Send internal update to all-hands channel

### T+1 week: Early results
- Pull launch metrics vs targets
- Collect qualitative feedback (support tickets, social comments, direct outreach)
- Identify quick fixes / fast follows
- Write launch retrospective

### T+30 days: Impact assessment
- Full metrics review: adoption, activation, retention, revenue impact
- Customer interviews (5-10) focused on the launched feature
- Decision: iterate, expand, or move on

## Common Launch Failures
1. **Feature works, narrative doesn't**: Nobody understands why they should care. Fix: customer-first storytelling, not feature-first.
2. **Launch day is quiet**: No distribution plan. Fix: build audience before you need it.
3. **Support overwhelmed**: No enablement. Fix: support team gets 2 weeks heads-up minimum.
4. **Metrics not tracked**: No instrumentation. Fix: analytics is a launch blocker, not a nice-to-have.
