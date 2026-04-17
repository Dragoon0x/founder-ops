# Mode: Prioritization

## Purpose

Ruthlessly prioritize a feature/project list. Kill the bottom 60%.
Ship the top 20%. The middle 20% goes in the "maybe later" file.

## Prioritization Frameworks

### RICE (most general)
- **Reach**: How many users affected (absolute number per quarter)
- **Impact**: 0.25 (minimal) → 3 (massive) per user
- **Confidence**: 50% (guessing) → 100% (proven)
- **Effort**: Person-months

**Score = (Reach × Impact × Confidence) / Effort**

### ICE (faster, simpler)
- **Impact**: 1-10
- **Confidence**: 1-10
- **Ease**: 1-10 (higher = easier)

**Score = Impact × Confidence × Ease**

### MoSCoW (binary buckets)
- **Must have**: Without this, it doesn't ship
- **Should have**: Important but not critical for v1
- **Could have**: Nice to have, cut first under pressure
- **Won't have**: Explicitly out of scope

### Kano (emotional response)
- **Basic**: Must exist or customers reject (table stakes)
- **Performance**: Linear — more is better
- **Delight**: Unexpected, creates evangelists
- **Indifferent**: Nobody cares — CUT

## Usage

### Input Format
Paste a list of features/projects. Founder-ops will:
1. Ask clarifying questions (reach, effort, confidence)
2. Score each with the chosen framework
3. Sort and recommend
4. Identify the "cut 60%" candidates explicitly

### Output Format
```
## Prioritization — [Project Name]

### Top Priority (ship now)
| Feature | Score | Reason |
|---------|-------|--------|
| [name] | 420 | [why this wins] |
| [name] | 380 | [why this wins] |

### Second Priority (next quarter)
| Feature | Score | When |
|---------|-------|------|
| [name] | 240 | After [dependency] |

### Kill List (bottom 60%)
| Feature | Score | Why Kill |
|---------|-------|----------|
| [name] | 15 | Low reach, high effort |
| [name] | 25 | Already solved by [competitor] |

### Adversarial Check
- What if [top priority] is wrong?
- What would a skeptical PM cut from the ship list?
- What's the smallest version we could ship instead?

### Recommendation
Ship [top 2]. Evaluate [next 3] after [milestone].
Confidence: [1-10]
```

## Prioritization Anti-Patterns

| Pattern | Why It Fails | Fix |
|---------|-------------|-----|
| Everything is P0 | No prioritization | Force rank 1-N, no ties |
| HIPPO (highest-paid person's opinion) | Not data-driven | Score with framework, then discuss |
| Features without customer signal | Speculation | Tie each to specific customer feedback |
| Reactive (competitor did X) | Following, not leading | Add "why does our customer need this?" test |
| Effort-based only ("easy wins") | Trivial features pile up | Weight impact more than ease |

## The Kill Conversation

The most valuable part of prioritization: deciding what NOT to build.
For every kill:
1. State what we're cutting
2. State what the trade is (time/resources freed up)
3. State the condition under which we'd reconsider

Example: "Cutting the export feature. Saves 3 weeks.
Reconsider if 5+ customers explicitly request it in interviews."
