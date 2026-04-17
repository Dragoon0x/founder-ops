# Kano Model

## The Five Categories

Features create different emotional responses. Kano classifies them:

### 1. Basic (Must-Be)
**If present:** Unnoticed (expected)
**If missing:** Customer angry

Example: Car brakes. Nobody cheers that they work. But if they don't, you quit the product.

### 2. Performance (One-Dimensional)
**Linear relationship:** More is better.

Example: Faster page load, more storage, bigger screen.

### 3. Delight (Attractive/Exciter)
**If present:** Wow factor, creates evangelists
**If missing:** Not even noticed

Example: Surprise trial extension when activation rate is low.

### 4. Indifferent
**Response:** Customers don't care.
**Action:** KILL. Don't build.

Example: Settings nobody changes. Features nobody uses.

### 5. Reverse
**Response:** Actually makes customers unhappy.
**Action:** REMOVE or make optional.

Example: Assistant that pops up unasked. Auto-playing videos.

## How to Discover Which Category

For each feature, ask TWO questions:

**Functional question:** "If the product HAS [feature], how would you feel?"
**Dysfunctional question:** "If the product does NOT have [feature], how would you feel?"

Response options for both:
- "I like it"
- "It's expected"
- "I'm neutral"
- "I can live with it"
- "I dislike it"

### Categorization Matrix

| Functional →<br>Dysfunctional ↓ | I like it | Expected | Neutral | Can live with | Dislike |
|--|--|--|--|--|--|
| **I like it** | Q | R | R | R | R |
| **Expected** | A | I | I | I | Reverse |
| **Neutral** | A | I | I | I | Reverse |
| **Can live with** | A | I | I | I | Reverse |
| **Dislike** | P | M | M | M | Q |

Where:
- **P** = Performance (linear)
- **M** = Must-be (basic)
- **A** = Attractive (delight)
- **I** = Indifferent (kill)
- **R** = Reverse
- **Q** = Questionable (bad question, re-ask)

## Strategic Application

### For Each Category, Different Strategy

**Basic:** Must meet them, but don't invest beyond adequacy. Zero differentiation.

**Performance:** Invest here. This is where competitors race. Be clearly better.

**Delight:** Highest ROI for differentiation. But they commoditize over time — last year's delight is this year's basic.

**Indifferent:** Cut ruthlessly. Zero customer value.

**Reverse:** Make optional or remove.

## The Kano Evolution

Features migrate over time:
- Delights become Performance (competitors copy)
- Performance becomes Basic (expected)
- Basic becomes table stakes

**Implication:** You must keep shipping Delights to stay differentiated.

## Worked Example (Email Tool)

| Feature | Category | Why |
|---------|----------|-----|
| Can send email | Basic | Table stakes |
| Fast send speed | Performance | Linear — faster is better |
| Scheduled send | Performance | Value per capability |
| AI draft suggestion | Delight (2024) → Performance (2026) | Once wow, now expected |
| Snooze email | Delight | Gmail innovated, now spreading |
| Send later based on recipient timezone | Delight | Unexpected, useful |
| Read receipts | Reverse (many users) | Feels creepy, opt-in |
| 100 different emoji reactions | Indifferent | Nobody notices more than 5 |

## Anti-Patterns

| Pattern | Problem |
|---------|---------|
| All features treated as Performance | Over-investment on some, under on others |
| Ignoring Basic → becoming Basic | Fail in small ways that cause churn |
| Never shipping Delights | No differentiation over time |
| Shipping Indifferents | Wastes engineering |
| Keeping Reverses | Creates invisible friction |

## When to Use
- Scoping a product/release (what's really needed?)
- Competitive comparison (where should we play?)
- Cutting scope (what's Indifferent?)
- Deciding what to wow on (which Delights?)
