# Prompt: Pitch Deck Review (Adversarial)

## Output
`reports/deck-review-[version].md`

---

## Prompt Template

```
I have a pitch deck for fundraising. I need brutal feedback before I send it 
to investors.

Context:
- Raising: $[X] at $[Y] cap/pre
- Round type: [PRE-SEED / SEED / A / BRIDGE]
- Target investors: [TYPE/NAMES]
- Stage metrics: [key numbers]

Deck content (slide by slide, paste each slide as 1-2 sentences of content):
---
Slide 1 (Cover): [CONTENT]
Slide 2 (Problem): [CONTENT]
Slide 3 (Solution): [CONTENT]
Slide 4 (Market): [CONTENT]
Slide 5 (Product): [CONTENT]
Slide 6 (Traction): [CONTENT]
Slide 7 (Business Model): [CONTENT]
Slide 8 (Competition): [CONTENT]
Slide 9 (Team): [CONTENT]
Slide 10 (Ask): [CONTENT]
---

Run /founder-ops fundraise deck-review and produce:

## OVERALL RATING
- Score 1-10
- One sentence: will this get meetings?

## SLIDE-BY-SLIDE CRITIQUE
For each slide:
- What works
- What doesn't (be specific)
- Concrete rewrite if weak

## STORY ARC
- Does it flow? 
- Where does a reader check out?
- What's the emotional peak?
- What's missing between slides?

## THE 5 QUESTIONS YOU CAN'T ANSWER
Top 5 questions a partner will ask that this deck doesn't pre-answer:
1. [QUESTION] — [HOW TO ADDRESS]
...

## TRACTION SLIDE AUDIT
- Is the curve believable?
- Are the metrics the right ones (vs. vanity)?
- Is the timeframe honest (not cherrypicked)?
- What would a skeptical GP do with these numbers?

## COMPETITIVE SLIDE AUDIT
- Does the 2x2 have meaningful axes?
- Is there an obvious competitor you're avoiding?
- Is your "we're different" claim defensible?

## MARKET SLIDE AUDIT
- TAM / SAM / SOM math: real or hand-wavy?
- Is "we'll capture X%" the giveaway phrase?
- Bottom-up + top-down = do they roughly agree?

## TEAM SLIDE AUDIT
- Does each person's bio link to the specific unfair advantage?
- Are there obvious gaps (no sales person pitching GTM-heavy story)?

## ASK SLIDE AUDIT
- Is the amount reasonable for the stage?
- Are milestones concrete?
- Does it imply a clear Series A story?

## CUT LIST
- Which slides are dead weight?
- What slide(s) should be added?

## THE ONE CHANGE
If you could make only ONE change to get this deck meeting-ready, what is it?

Save as reports/deck-review-[VERSION].md.
```
