# Customer interviews

## Purpose
Discover problems, not validate solutions. The single most common founder error
is treating an interview as a sales call dressed in question marks.

## When to use
- Pre-product: figuring out which problem to solve
- Post-product, pre-PMF: understanding why people don't / barely use it
- Post-PMF: planning the next jobs to add (expansion path)

## When NOT to use
- "Will you buy this?" type validation (the answer is always polite yes)
- Roadmap voting (use revealed preference, not stated preference)
- Replacing analytics (interviews tell you why, not what)

## Sample size
- 5 interviews surfaces ~80% of major themes (Nielsen)
- 12-15 saturates for a single segment
- Run separate sets per segment; never average across personas

## Recruiting
- Existing customers: pick three groups — power users, lapsed, never-activated
- Prospects: from waitlist, cold outreach, or paid recruiting (Respondent.io,
  User Interviews — $80-200/hr)
- Avoid friends-of-friends. They will lie to spare your feelings.

## Structure (60-min interview)

| Time | Section | Goal |
|---|---|---|
| 0-5 | Rapport + permission to record | Set the dynamic |
| 5-10 | Their context: role, day, current tools | Anchor in reality |
| 10-30 | The most recent time they did [the job] | Specific story, not theory |
| 30-45 | What was hard, what they tried, what they wish | Friction map |
| 45-55 | Show artifact (only if you have one) | Reaction, not approval |
| 55-60 | Snowball: who else should I talk to? | Pipeline |

## Questions that work

- "Walk me through the last time you [did the job]."
- "What were you doing right before you decided to look for a tool?"
- "Show me on your screen — what does that workflow look like?"
- "What happened when you tried [thing they mentioned]?"
- "If I waved a wand and removed [tool/process], what would break first?"

## Questions that don't

- "Would you use this?" — meaningless
- "How much would you pay?" — anchored, not real
- "What features do you want?" — solution space, not problem space
- "Do you like [your competitor]?" — invites politeness

## Synthesis (within 24 hours of interview)

Use the [synthesis prompt](../prompts/customer-interview-synthesis.md). The
crucial step: extract verbatim quotes for each theme. Quotes are the unit of
evidence; paraphrasing destroys signal.

## Failure modes

1. **Selling, not learning** — your prosody changes. Record yourself, listen back.
2. **Leading questions** — "Don't you think X is a problem?" Re-ask in neutral form.
3. **Ignoring negative signal** — when they say "interesting" they mean "no."
4. **Sample contamination** — interviewing only people excited enough to schedule.
5. **Skipping synthesis** — without write-up, interviews evaporate.

## Storage
Notes go to `data/research/interviews/{date}-{name}.md` with the standard
template at `templates/customer-interview-template.md`.
