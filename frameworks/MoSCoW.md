# MoSCoW Framework

## The Four Buckets

| Bucket | Meaning | Should Be |
|--------|---------|-----------|
| **M**ust Have | Product doesn't ship without this | 50-60% of work |
| **S**hould Have | Important but not critical | 20-30% of work |
| **C**ould Have | Nice if time permits | 10-20% of work |
| **W**on't Have | Explicitly out of scope | Everything else |

## The Critical Rule

**Effort allocated to Must+Should should be ≤ 80% of available capacity.**
Leaves room for discovery and unexpected work. If Must alone is > 80%, you've
committed to a death march.

## Categorization Questions

### Must Have
- "If we don't ship this, do we cancel the launch?"
- "Is this a hard contractual commitment?"
- "Does the product fail to work without this?"
- "Does this unblock other critical work?"

If answers are mostly "no" → not a Must.

### Should Have
- "Would customers notice if this were missing?"
- "Would this cause churn if not delivered?"
- "Would this significantly impact adoption?"

### Could Have
- "Would this delight a subset of users?"
- "Is this a reasonable enhancement if we have time?"
- "Could this wait for V2 without consequence?"

### Won't Have
- "Is this out of scope for THIS release?"
- "Does this belong in a later version?"
- "Is this a 'nice idea' but not actually needed?"

**Key:** Won't-Have items are documented and deferred, not forgotten.

## Worked Example (Product Launch)

Proposed scope for V1 of a new feature:

| Item | Category | Reasoning |
|------|----------|-----------|
| Core functionality | Must | Product doesn't work without it |
| Data export | Must | Customer explicitly required |
| API endpoints | Must | Integration partner needs them |
| Admin dashboard | Should | Important but support can work without |
| Advanced filtering | Should | Power users will ask, basic users won't |
| Dark mode | Could | Requested by some, not blocking |
| Mobile responsive | Could | Most usage is desktop |
| Tutorial videos | Should | Drives activation |
| AI summarization | Won't | Interesting idea but requires R&D — V2 |
| Integrations (Slack, Teams) | Won't | Each is weeks of work — V2 |
| Mobile app | Won't | Requires mobile team — V2+ |

## Anti-Patterns

| Anti-Pattern | Problem | Fix |
|-------------|---------|-----|
| Everything is Must | No prioritization | Force 60% cap on Musts |
| No Won't list | Scope creep | Document 10+ Won'ts explicitly |
| Changing categories mid-sprint | Undermines commitment | Change requires formal meeting |
| Must Haves added late | Breaks release | Triage new asks against capacity |
| No capacity estimation | Musts exceed capacity | Effort-estimate every Must |

## When to Use

- Release scoping (V1, V2 planning)
- Sprint planning (smaller scale)
- Stakeholder negotiations (what gets cut if time runs out)
- Vendor RFP scoring
- Trade-off conversations

## When Not to Use

- Comparing alternative approaches (use RICE/ICE instead)
- Ordering within a bucket (MoSCoW doesn't sequence)
- Long-term strategy (too tactical)
