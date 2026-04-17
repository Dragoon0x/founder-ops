# Prompt: Investor Research Brief

## Output
`reports/investor-[partner-name].md`

---

## Prompt Template

```
Research brief on [PARTNER NAME] at [FUND].

Their stated focus (from bio / website): [PASTE OR DESCRIBE]

Run /founder-ops fundraise research on this partner. Produce:

## INVESTMENT THESIS
Their stated thesis, interpreted. What they back, what they don't.

## RECENT INVESTMENTS (last 12-18 months)
- 3-5 most recent relevant investments
- Stage, size, category, co-investors
- What pattern emerges

## OUR FIT SCORE (0-10)
With explicit reasoning:
- Why the score is X
- Why it's not higher
- Why it's not lower

## WHAT WORKS IN OUR FAVOR
- Specific portfolio adjacencies
- Their writing that aligns
- Recent moves that suggest interest in our category

## WHAT WORKS AGAINST US
- Portfolio conflicts (real ones)
- Passes they've made in our category
- Stage / geography / thesis misalignments

## PARTNER TO TARGET
- Who specifically at the fund
- Why them vs. other partners
- Partner tenure + track record

## WARM INTRO PATHS
Rank from strongest to weakest:
1. [NAME] — [RELATIONSHIP] — [WHY STRONG]
2. [...]

## IF COLD: CUSTOMIZED OUTREACH ANGLE
- Which Version of cold-outreach-to-investor.md prompt to use
- Specific hook (their recent post, their investment, their thesis)

## QUESTIONS THEY WILL ASK (top 7)
Based on their writing + portfolio pattern, ranked by likelihood:
1. [QUESTION] — [WHY THEY'LL ASK]
...

For each, prepare:
- My best 1-paragraph answer
- Data/proof I'd reference

## RED FLAGS (reasons to deprioritize)
- [IF STALE PORTFOLIO] — they haven't invested in our category in 18 months
- [IF RECENT PASS] — they passed on [COMPETITOR] 6 months ago
- [IF EXITING] — partner tenure suggests they're moving on

## RECOMMENDATION
- Top priority / second priority / skip
- Timing (reach out now / after X milestone)
- Confidence (1-10)

## WHAT WOULD CHANGE MY MIND
- Signals to watch that would re-rank them

Save as reports/investor-[PARTNER].md.
```
