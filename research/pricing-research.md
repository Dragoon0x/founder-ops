# Pricing research

## Purpose
Find a price that captures fair value, doesn't strangle adoption, and is
defensible against discount requests. Pricing research is one of the highest-ROI
research activities and the one founders skip most.

## Three methods, in order of cost and reliability

### 1. Reference pricing audit (free, fast)

Map every direct competitor's pricing pages to a comparison matrix:
- Plan tiers
- Per-unit vs per-seat vs per-feature pricing
- Annual discount %
- Anchor price (the cheapest plan you'd actually buy)
- Enterprise opacity (do they show prices?)

Output: a 1-page comparison. Tells you the implicit price band of the category.

### 2. Van Westendorp Price Sensitivity Meter (medium cost, surveys)

Survey 100+ prospects with 4 questions:
1. At what price would [product] be so expensive you wouldn't buy it?
2. At what price would [product] be expensive but you'd still buy it?
3. At what price would [product] feel like a bargain?
4. At what price would [product] feel so cheap you'd doubt the quality?

Plot the cumulative distributions. The intersections give you:
- **Optimal price point** (where "expensive" and "cheap" cross)
- **Range of acceptable prices** (between "too cheap" and "too expensive")

Run with 100+ prospects per segment. Below 100 the lines wobble.

### 3. Conjoint analysis (high cost, requires tooling)

Show prospects 8-12 packages with different feature/price combos. Ask which
they'd buy. Mathematically extract the implied value of each feature and price
point.

Conjoint is the gold standard. It's also overkill before you have $1M ARR.
Tools: Conjoint.ly, Sawtooth.

## Pricing models cheat sheet

| Model | Best for | Watch out for |
|---|---|---|
| Per-seat | Collaborative tools | Caps growth at team size |
| Per-usage (API calls, storage) | Infra, devtools | Customers can't predict bill |
| Per-feature (good/better/best) | Most SaaS | Tier discrimination is an art |
| Per-outcome (% of revenue, etc.) | High-leverage tools | Hard to enforce, scares finance |
| Flat | Simple value prop | Leaves money on the table |
| Hybrid (base + usage) | Platforms | Complexity hurts conversion |

## Anchoring tactics that work

- Show 3 plans, mid-tier as the "recommended" anchor
- Annual discount 15-25% (more = signals weak pricing power)
- Enterprise tier with no public price (signals customization)
- Strike-through "save X%" copy on annual

## Things to avoid

1. **Free forever for everything** — kills upgrade incentive
2. **More than 4 plans** — paradox of choice tanks conversion
3. **Pricing everything per-API-call** — customers hate unpredictable bills
4. **Vague pricing pages** — every "Contact us" is a trial drop-off
5. **Raising prices without telling existing customers first** — never. They
   find out anyway and trust evaporates

## When to raise prices

- New customer cohorts retain better than old (you've added value)
- Low-touch enterprise deals close in <30 days (under-priced)
- Your sales team rarely loses on price (under-priced)
- You discount more than 20% routinely (sticker price is wrong)
- It's been >18 months since the last raise

When you raise: existing customers grandfather for 12 months minimum, with 90 day
notice before the change applies to renewals.

## Sourced reading
- Madhavan Ramanujam, *Monetizing Innovation* — the practical playbook
- Kyle Poyar (OpenView) — annual SaaS pricing benchmarks
- Patrick Campbell (ProfitWell) — pricing teardowns
