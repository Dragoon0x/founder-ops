# Prompt: Cold Outreach to Customer

## Output
`output/outreach-[prospect].md`

---

## Prompt Template

```
I need to reach out to [PROSPECT NAME] at [COMPANY]. They are [ROLE].

Why I think they have the pain:
- [SIGNAL 1 — e.g., "posted on LinkedIn about X problem 2 weeks ago"]
- [SIGNAL 2]
- [SIGNAL 3]

What my product does (in one line, plain English):
[YOUR 1-LINE VALUE PROP]

Proof I have (choose 1-2):
- [CUSTOMER WIN — e.g., "Company X reduced Y by 40%"]
- [METRIC — e.g., "47 teams now using this in production"]
- [ARTIFACT — e.g., "Built for exactly the workflow they described"]

Run /founder-ops content outreach and draft 3 versions of a cold email:

## Version A: Observation + Resource
Opens with specific observation about their work/post.
Offers something useful (not a pitch) — a doc, a teardown, a comparison.
CTA: reply for the resource.

## Version B: Specific Pain + Social Proof  
Opens by naming the pain they likely have.
One-sentence product description.
Social proof.
CTA: 15-minute call.

## Version C: Question-First
Opens with a specific question about their approach to the problem.
Context on why I'm asking (I built something in this space).
CTA: reply with thoughts.

RULES:
- Subject line under 40 characters
- Total length under 120 words
- No corporate voice ("leveraging", "synergy", "value proposition")
- Name them, name their specific work
- Single CTA per email (no "also check out our..." tacks)
- Specific day/time in CTA, not "anytime this week"

After the 3 versions, tell me which one to send based on:
- Their role (execs get B, builders get C, writers get A)
- Channel (LinkedIn vs email vs Twitter DM)
- Time of day to send

Save as output/outreach-[PROSPECT].md.
```
