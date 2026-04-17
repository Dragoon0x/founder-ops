# Launch Retrospective — ShipWatch v2 (Example)

**Launch date:** October 14, 2025
**Retrospective date:** October 28, 2025
**Participants:** Engineering (4), Design (1), PM (1), Marketing (1), Sales (1), Support (1), Founder

---

## What we launched

ShipWatch v2: complete rebuild of our monitoring product. New architecture, new UI, new pricing model (moved from per-seat to usage-based).

## Scoreboard

| Goal | Target | Actual | Status |
|---|---|---|---|
| Day-1 signups | 300 | 412 | ✅ |
| Week-1 activation | 40% | 28% | ❌ |
| Week-4 paying conversion | 12% | 8% | ⚠️ |
| Support ticket volume | <2x baseline | 4x baseline | ❌ |
| Press coverage | 3 publications | 5 | ✅ |
| Existing customer NPS delta | +5 | -8 | ❌ |

Mixed. We got the top of the funnel. We broke the conversion.

## What went right

1. **Pre-launch waitlist.** 1,800 signups on the waitlist over 6 weeks before launch. Day-1 conversion from waitlist to signup was 23%.
2. **Press coordination.** We briefed 4 journalists under embargo, 2 weeks out. All 4 published on launch day.
3. **Community pre-seeding.** Our design partner program of 12 customers all posted publicly on launch day. Organic amplification was meaningful.
4. **Engineering shipped on time.** For the first time in 2 years, we hit our committed launch date.

## What went wrong

1. **Activation flow was broken for 40% of new users.** Specific bug: OAuth for Google Workspace failed silently for users with certain admin policies. We didn't test this combination. Fixed on day 3.
2. **Pricing confusion.** We moved to usage-based pricing but didn't build a good usage calculator. Prospects asked "how much will this cost me?" and we couldn't answer cleanly. Support ticket volume proved this.
3. **Existing customers felt abandoned.** We invested 9 months in v2 and shipped minimal v1 updates. Our top accounts felt we weren't listening. NPS tanked from 54 to 46 in 2 weeks.
4. **No clear migration path.** Existing customers didn't know whether to move to v2. We didn't give them a recommendation. Some moved, hit the bugs, and then felt double-burned.

## Root-cause analysis

### Why activation broke
- OAuth change was made 6 weeks before launch
- QA tested with "standard" Google Workspace, not admin-locked ones
- We didn't test with a variety of real customer environments because we prioritized speed

### Why pricing was unclear
- We shifted the pricing model 5 weeks before launch (should have been 10+)
- The calculator was scoped but descoped in final week
- No one owned "is the story about pricing clear to a new user"

### Why existing customers felt abandoned
- We had a "feature freeze" on v1 that lasted too long (5 months)
- No one was the DRI for "keep existing customers happy during the rebuild"
- Our weekly customer calls got reduced from weekly to monthly in Q2

## What we'd do differently

1. Full production environment testing with 10+ real customer configurations 2 weeks before launch
2. Pricing calculator is non-negotiable for pricing-model changes
3. Assign a "customer care during rebuild" DRI at the start of any big rebuild
4. Run a parallel maintenance track on v1, even during v2 rebuild (we should've shipped 3-4 small v1 improvements per month minimum)

## What we're doing right now

- [x] OAuth fix deployed (day 3)
- [x] Usage calculator shipped (day 8)
- [x] Migration guide published (day 10)
- [ ] 1:1 calls with all top 20 accounts by end of November
- [ ] Discount for any existing customer who had a bad day-1 experience (send by Nov 5)
- [ ] Week-8 re-survey of NPS to see if we've recovered

## Commitments going forward

1. No more 9-month-long rebuilds without quarterly ship milestones
2. Launch readiness reviews now include a "3 real customer environments tested" checkpoint
3. Any pricing change >15 min from current model requires a calculator ≥4 weeks before launch
