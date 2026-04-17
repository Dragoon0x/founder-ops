# Prompt: Monthly Investor Update

## Output
`output/investor-update-[month-year].md`

---

## Prompt Template

```
Time for this month's investor update. Period: [MONTH YEAR].

Data I have:
- MRR start: $[X]  → end: $[Y]
- New customers: [N new, N churned]
- Cash: $[X] → $[Y]
- Burn: $[X] net
- Runway at current burn: [N months]
- Team: [X → Y people]

What happened this month (brain dump, I'll fact-check):
[PASTE ALL NOTES — wins, fails, metrics, team changes, product ships, customer news]

Asks I have (for investors to help with):
- [INTROS TO WHO]
- [FEEDBACK ON WHAT]
- [HIRING FOR WHICH ROLES]

Run /founder-ops update monthly and produce:

## EMAIL-FORMATTED UPDATE

Subject: [Company] — [Month Year] Update

### TL;DR (2-3 bullets)
- [BIGGEST THING]
- [SECOND]
- [THIRD OR THE BIG ASK]

### The Month in Numbers
| Metric | Last Month | This Month | Change |
|--------|-----------|-----------|--------|
| MRR | | | |
| New customers | | | |
| Churn | | | |
| Net retention | | | |
| Cash | | | |
| Runway | | | |

### Highlights
- [SHIP, WIN, MILESTONE]
- [CUSTOMER STORY]
- [TEAM]

### Lowlights  
- [BE HONEST — what didn't work]
- [WHY]
- [WHAT YOU'RE DOING ABOUT IT]

### What I'm Obsessing About
1-2 paragraphs on the ONE question keeping you up at night and your thinking on it.

### Team
- Who joined / left
- Who we're hiring for

### Asks (specific)
1. Intros to: [SPECIFIC NAMES OR PROFILES]
2. Feedback on: [SPECIFIC ARTIFACT OR DECISION]  
3. Hiring: [ROLE + LINK TO JD]

### Looking Ahead — [NEXT MONTH] Priorities
1. [SPECIFIC]
2. [SPECIFIC]
3. [SPECIFIC]

### Thank you
One line.

---

## TONE CHECK
- Confident, not arrogant
- Honest about struggles, specific about responses
- Numbers where available
- No "we hope to..." — state what's happening

## ADVERSARIAL CHECK
Before sending, what would a skeptical investor notice?
- Flag 2-3 things they might push on
- Have the answers ready

Save as output/investor-update-[MONTH-YEAR].md.
```
