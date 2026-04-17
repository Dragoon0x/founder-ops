# Post-Mortem — Launch That Flopped (Example)

**Project:** InsightAI (automated report generation feature)
**Launched:** July 12, 2025
**Killed:** November 4, 2025 (4 months of life)
**Engineering investment:** ~520 engineer-hours
**Design investment:** ~140 design-hours
**Result:** 6% adoption among eligible accounts, $0 new revenue attributed, 23 support tickets

---

## What we shipped

A feature that automatically generated monthly report summaries using an LLM. Users would click one button and get a narrative summary of their monthly metrics they could send to their execs.

## What we expected

- 40% of accounts would try it within 30 days
- 25% of accounts would use it monthly
- 10% conversion bump on the free-to-paid funnel (we gated it to paid plans)

## What happened

- 18% of accounts tried it in first 30 days
- 6% used it monthly after 90 days
- Free-to-paid conversion: no measurable change
- Primary complaint: summaries "felt generic" and "missed the context of what mattered"

## Why it failed

### Root cause 1: we didn't validate the problem

We built this because engineering wanted to use an LLM and we pattern-matched to "summaries." We never interviewed customers about whether they wanted auto-generated summaries. When we did the post-launch customer interviews, 8 of 10 said "I already have a template. What I need is better data inputs to my existing report, not a different report."

### Root cause 2: we solved an easy problem, not a real one

"Generate text from data" is easy. "Know what matters to this specific team and cover it first" is hard. We did the easy thing and wrote off the hard part as v2.

### Root cause 3: we shipped it gated

Gating to paid plans made sense for monetization. It killed learning. Paid customers have different needs than self-serve users. We should have shipped to everyone, learned, then moved monetization.

### Root cause 4: no kill criteria upfront

We said "we'll see." That's not a kill criterion. If we'd pre-committed to "if <15% month-2 adoption, kill," we would have killed it 2 months sooner.

## What we learned

1. **"Cool because it uses AI" is not product-market fit.** Our first rule for feature prioritization from now on: solve a problem a customer has explicitly said out loud in the last 90 days.
2. **Gate learning, not features.** New features go to everyone first. Monetization layers on after learning.
3. **Write kill criteria at launch.** Every feature needs explicit numbers that, if missed, lead to sunset.
4. **"Engineering wants to build X" is a symptom.** Engineers want to build cool things. That's right and good. But it's the PM's job to route that energy to a validated problem, not to bless unvalidated ideas.

## What we'd do differently

1. **Do 8-10 customer interviews before writing specs.** Not "is this cool?" — "would you pay for this? What would you stop using to use this?"
2. **Ship a Wizard-of-Oz version first.** We could have tested the "generate my summary" behavior with a manual Slack integration before writing any code.
3. **Commit kill criteria in the spec.** They become the gate, not an afterthought.
4. **Run a 2-week "are we sure" window** before kicking off anything larger than 4 engineer-weeks.

## What we're shutting down

- The feature (live until Nov 30, removed Dec 1)
- The 2 AI-triggered dashboards we built in October as extensions (removed Nov 11)
- The "AI Features" marketing page (replaced)

## What we're keeping

- The underlying LLM integration (useful for support autoresponder and onboarding)
- The analytics pipeline that fed the feature (useful for real analytics needs)
- The prompt engineering patterns (documented for future use)

## Accountability

I (PM on this project) want to name what I should have done differently and didn't. I brought the idea. I convinced the team. I wrote the spec. I didn't push back when our user research calendar fell behind. I'm the DRI on this failure. Owning it so the next PM reads this and knows they can bring their own failure to the table.
