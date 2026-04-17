# Prompt: Blog Post

## Output
`output/blog-[slug].md`

---

## Prompt Template

```
I'm writing a blog post for [COMPANY].

Topic: [SPECIFIC TOPIC — not "thoughts on X" but "How we X"]

What I want the reader to take away:
[ONE SPECIFIC INSIGHT, TAKEAWAY, OR TACTIC]

Audience:
[WHO — role, context, what they already know]

Length:
[SHORT (400-700 words, list-driven) / MEDIUM (900-1500 words, classic) / LONG (2000+, deep dive)]

Proof I have (if any):
- Data / screenshots
- Specific customer stories
- Metric improvements
- Real failures and what we learned

Run /founder-ops content blog-post and produce:

## OUTLINE
- Hook idea (3 variants)
- Main spine (5-7 beats)
- Core takeaway (one crisp sentence)

## DRAFT
[Length per spec]

Structure:
- Title (2-3 variants, each tested for specific promise)
- Lead (2-3 sentences — concrete scene or specific claim, NO "in today's fast-paced world")
- Setup (the problem or question)
- Body (with H2s that can be read standalone)
- Payoff (the takeaway)
- CTA (what to do next — reply, try, subscribe, share)

## VOICE RULES
- Contractions: yes
- "You" not "one" or "users"
- Active voice default
- No stacked adjectives
- No "furthermore" / "moreover" / "in conclusion"
- No AI tells (em-dashes clusters, triple-parallel phrases)
- Sentences vary 4-30 words
- Show code/data/specific numbers when making claims

## AFTER THE DRAFT
- 3 tweet-thread-sized excerpts pulled from the post
- 1 LinkedIn-formatted version (different shape, same ideas)
- Suggested 3 internal links to other posts (placeholder if none)
- SEO meta description (150-160 chars)

## ADVERSARIAL CHECK
- Best argument the post is wrong
- Counter-examples the reader might think of
- Where I'm weakest on evidence — flag for me to address

Save as output/blog-[SLUG].md.
```
