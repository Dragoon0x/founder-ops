# Mode: Fundraising

## Purpose

Research investors, review pitch decks, write cold outreach, prep for
investor meetings. Do NOT just generate templates — personalize to the
specific fund and partner.

## Submodes

### 1. Investor Research

Input: Investor name or fund name
Output:
```
## [Investor Name] — [Fund Name]

### Investment Thesis
[What they specifically invest in, from their writing/portfolio]

### Recent Investments (last 12 months)
- [Company] ([stage], [sector]) — [what they said about it]
- [Company] ([stage], [sector])

### Portfolio Fit Score: [1-10]
[Why we do/don't fit, with specific portfolio comparables]

### Partner to Target
[Specific partner + what they focus on]

### Warm Intro Path
[If any — from your network]

### Cold Outreach Template (if needed)
[Personalized to this partner's interests, not generic]

### Questions They'll Ask
Based on their public writing + portfolio pattern:
1. [likely question]
2. [likely question]
3. [likely question]

### Red Flags (reasons to deprioritize)
- [Fund conflict with competitor]
- [Wrong stage]
- [Partner recently joined/left]
```

### 2. Pitch Deck Review

For a deck, review each slide:

| Slide | What to Check |
|-------|--------------|
| 1. Cover | Company name visible, tagline under 10 words |
| 2. Problem | Specific, quantified, felt by a specific customer |
| 3. Solution | Demo-able, not a list of features |
| 4. Market | TAM/SAM/SOM with real math, not "just 1% of $X" |
| 5. Product | Screenshots of REAL product, not mockups |
| 6. Traction | Numbers that are up and to the right |
| 7. Business Model | Unit economics, not just "SaaS $X/month" |
| 8. Competition | 2x2 matrix OR competitive landscape (not "we're the only ones") |
| 9. Team | Why you specifically, unfair advantages |
| 10. Ask | Specific amount, specific use of funds |

### 3. Cold Outreach Email

Structure (under 150 words):
```
Subject: [Specific + intriguing, not "Quick question"]

Hi [First name],

[One sentence: shared context — their portfolio company, their tweet,
their thesis paper. Not generic "I admire your work"]

[Two sentences: what you're building + one specific metric that signals traction]

[One sentence: why you're emailing THEM specifically — not a mass blast]

[One sentence ask: 15 minutes, or whether to send the deck]

[Signature]

P.S. [Optional: one more hook]
```

Anti-patterns:
- "Quick question" as subject
- Generic admiration ("I love what Union Square does")
- No specific ask
- Deck attached without permission
- Sent to multiple partners at same fund

### 4. Investor Meeting Prep

Pre-meeting checklist:
- [ ] Read their 3 most recent portfolio announcements
- [ ] Read their last 3 Medium/Substack posts
- [ ] Read their Twitter last 30 days
- [ ] List their portfolio companies similar to yours
- [ ] Prepare 3 questions to ask THEM (not just answer theirs)

During meeting:
- Lead with traction (numbers first, narrative second)
- Have the deck open but don't screen-share by default
- Ask "what else would help you evaluate this?"
- Confirm next steps before ending

Post-meeting:
- Send thank-you + deck + any promised follow-ups within 24 hours
- Update `data/investors.md` with their feedback
- If pass: ask WHY (single most valuable information)
- If interest: confirm timeline and next meeting

## Outputs Go To

- `output/investor-research-[fund].md`
- `output/outreach-[fund].md`
- `reports/deck-review-[date].md`
- `data/investors.md` (running pipeline)
