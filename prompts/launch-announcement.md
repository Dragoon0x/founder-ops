# Prompt: Launch Announcement

## Output
Multiple files in `output/launch-[date]/`

---

## Prompt Template

```
I'm launching [PRODUCT / FEATURE] on [DATE].

Context:
- What's launching: [1 sentence]
- Why this matters now: [trigger / insight / problem being solved]
- Target audience: [WHO — specific]
- Launch channels: [which of: Twitter, LinkedIn, HN, Product Hunt, newsletter, email, press]
- Supporting assets: [demo video? blog post? docs?]
- Company stage (affects tone): [seed / growth / established]

Run /founder-ops content launch and produce:

## 1. Twitter/X thread (10-12 tweets)
- Hook (tweet 1): one striking outcome, no adjectives
- Problem setup (tweets 2-3)
- Solution intro (tweet 4)
- 3-4 specific capabilities (tweets 5-8) with links to demos/screenshots (noted as [DEMO])
- Customer proof (tweet 9-10)
- CTA (final tweet)
- All tweets under 280 chars, no hashtag spam

## 2. LinkedIn post (1 post, 200-300 words)
- Different angle than Twitter (more narrative, for professional feed)
- Opens with observation about the problem in the industry
- Builds to the launch announcement in the middle
- Ends with specific ask (feedback, intros, usage)

## 3. Hacker News post
- Title (under 80 chars, descriptive not promotional; format: "Show HN: [Product] — [specific what it does]")
- First comment from founder with: story + self-hosted option / pricing / tech stack if relevant
- Anticipated top 5 critical questions + pre-drafted replies

## 4. Product Hunt post
- Tagline (60 chars)
- Description (260 chars)
- First comment from maker (100-150 words)

## 5. Newsletter announcement (if applicable)
- Subject line (40 chars)
- 400 words, lead with what they can do with it today
- Clear CTA

## 6. Email to existing users / waitlist
- Subject line
- 150-200 words
- Specific action

## 7. Customer email (to active paying customers — softer)
- How this affects them specifically
- Any migration needed
- Office hours for questions

## 8. Press / journalist outreach template
- 3-sentence pitch
- Angle options based on journalist's beat

## 9. Internal launch announcement (to team)
- What's shipping
- How they can help amplify
- Who owns what on launch day

## 10. Launch day runbook (hour-by-hour)
- Hour 0: HN + PH + Twitter thread
- Hour 1-3: Monitor + reply to comments (specific people tagged for each)
- Hour 4-6: Secondary amplification (LinkedIn, newsletter)
- Hour 7+: Communities (specific Slacks/Discords listed)
- End of day: Metrics check + team debrief

VOICE:
- Match the founder's writing voice in [PROJECT]
- No marketing-speak
- Specific beats vague always

Save all artifacts in output/launch-[DATE]/
```
