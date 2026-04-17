# Survey design

## Purpose
Surveys are good for: measuring known things at scale. Surveys are bad for:
discovering unknown things. Founder-ops uses surveys sparingly.

## When surveys work

- NPS / CSAT tracking over time (trend matters more than absolute)
- Pricing research at scale (Van Westendorp, conjoint)
- Feature usage prioritization once features exist
- Demographic / firmographic baseline

## When surveys don't work

- Problem discovery (use interviews)
- "Would you use X" hypotheticals (validation theater)
- Low-incidence audiences (response bias dominates)
- Anything requiring nuance (free text gets unread)

## Design principles

1. **Length under 5 minutes.** Response rate halves every minute past that.
2. **No more than 8 questions** for inline (in-product) surveys.
3. **Single-screen** when possible. Multi-page kills completion by 30%.
4. **Required fields = email + 1 critical**. Everything else optional.
5. **Mobile-first** — 60%+ of responses come from mobile.
6. **Pilot with 10 people** before sending to 1000. Most surveys have a broken
   question that pilot catches.

## Question types

| Type | Use when | Avoid when |
|---|---|---|
| Single-select multiple choice | Categorical answer with known options | Options aren't exhaustive |
| Multi-select | Multiple things can apply | You need a single answer |
| Likert (1-5 / 1-7) | Measuring attitude over time | Mid-point becomes default ("3") |
| Open text | Need verbatim signal, will read every one | Sample > 100 (you won't) |
| NPS (0-10) | Tracking sentiment over time | One-shot satisfaction (use CSAT) |
| Ranking | Forced trade-off | More than 5 items (cognitive overload) |

## NPS (use cautiously)

- Industry benchmark range: -10 to +30 for SaaS, +20 to +50 for consumer
- Watch the trend, not the absolute number
- Always ask "What's the one thing we could do to improve your score?" — the
  free text is the only useful part
- Segment by tenure, plan, persona — overall NPS hides everything

## Anti-patterns

1. **Double-barreled questions** — "How fast and accurate is the product?"
2. **Leading wording** — "How great was your experience?"
3. **Loaded scales** — "Excellent / Good / OK / Bad / Awful" (asymmetric)
4. **Lottery incentives** — quality drops sharply
5. **Asking "why" after Likert** — most people don't know

## Response-rate baselines

- Customer email survey: 5-15%
- Trial-user email survey: 2-8%
- In-product micro-survey: 15-40%
- Cold survey (no relationship): 0.5-2%

If you're outside these bands, something is wrong (or extraordinary).

## Tools

- Tally / Typeform — best UX
- Sprig / Refiner — in-product targeting
- Google Forms — fine for quick & internal
- Qualtrics — overkill at early stage
