# Mode: Sales (Deep)

## Purpose

The full sales operating system: qualification frameworks, deal stages,
forecasting accuracy, sales process documentation. Stop "winging" sales
calls and "feeling good about" the pipeline.

## Qualification Frameworks (pick ONE)

### BANT (simple, fast — best for self-serve / inbound)
- **Budget:** Do they have it allocated?
- **Authority:** Are they the decision maker?
- **Need:** Is the pain quantified?
- **Timeline:** When do they need to solve it?

**Score 0-3 each. Pursue if 8+ total. Disqualify if any single is 0.**

### MEDDIC (enterprise — best for $50K+ deals)
- **Metrics:** Specific quantified impact (e.g., save $200K/year)
- **Economic Buyer:** Identified, met, agreed
- **Decision Criteria:** Documented, written
- **Decision Process:** Mapped (steps, owners, timeline)
- **Identify Pain:** Quantified, urgent, owned
- **Champion:** Internal advocate selling on your behalf

**Each criterion is binary (yes/no). All 6 = qualified opportunity.**

### MEDDPICC (MEDDIC + Paper Process + Competition)
Same as MEDDIC plus:
- **Paper Process:** Procurement, legal, security review steps mapped
- **Competition:** Known competitors, your differentiation per criterion

## Sales Stage Definitions (don't skip this)

```
1. NEW LEAD          → Source assigned, basic firmographic match
2. ATTEMPTED         → 1+ outreach attempts, no response yet
3. ENGAGED           → Replied, agreed to call
4. DISCOVERY         → Discovery call held, fit confirmed
5. EVALUATION        → Demo + technical evaluation in progress
6. PROPOSAL          → Pricing presented, terms discussed
7. NEGOTIATION       → Procurement / legal / security review
8. CLOSED-WON        → Signed, kicked off
9. CLOSED-LOST       → Did not close (with reason code)
10. CLOSED-NULL      → Disqualified (no fit)
```

**Each stage has EXIT criteria — clear definition of "moved to next stage."**
Without exit criteria, every deal is "almost closed."

## Stage Conversion Benchmarks (B2B SaaS)

| Stage | → Next Stage % | Time in Stage |
|-------|---------------|---------------|
| New Lead → Attempted | 100% (within 24hr) | < 24 hours |
| Attempted → Engaged | 15-30% | 1-7 days |
| Engaged → Discovery | 60-80% | 1-2 weeks |
| Discovery → Evaluation | 50-70% | 1-3 weeks |
| Evaluation → Proposal | 60-80% | 2-4 weeks |
| Proposal → Negotiation | 70-85% | 1-3 weeks |
| Negotiation → Closed-Won | 60-80% | 1-4 weeks |

**Overall lead → close: 1-3% (inbound) / 0.5-1.5% (outbound)**

## The Discovery Call (most important call)

**Structure (30-45 min):**

```
0-2 min   — Rapport, agenda, time check
2-5 min   — Their context (let them talk)
5-25 min  — DEEP DISCOVERY (your main job)
25-35 min — Light demo / vision (15 min max)
35-40 min — Mutual fit assessment
40-45 min — Next steps with explicit dates
```

**Discovery questions (in this order):**

**The pain (10 min):**
- "What prompted you to look into [category]?"
- "Walk me through how you do [task] today"
- "What happens when [pain situation]?"
- "How is this affecting your [team/revenue/customers]?"
- "What's the cost of not solving this in the next 6 months?"

**The buying process (5 min):**
- "Who else needs to weigh in on this decision?"
- "What does your evaluation process typically look like?"
- "Have you bought tools like this before? How did that go?"
- "What would the ideal timeline look like?"
- "What's the budget range you're working with?"

**The decision criteria (5 min):**
- "If we worked together, what would success look like in 6 months?"
- "What would make this an obvious yes for you?"
- "What would make you walk away?"
- "What other options are you evaluating?"

**Mutual fit close (3 min):**
- "Based on what we've discussed, here's where I think we could help: [recap]"
- "Here's where I'm not sure we're a fit: [honest concerns]"
- "Does it make sense to take a next step? Here are the options: [demo / technical eval / proposal]"

## Pipeline Forecasting

**Three-method triangulation:**

### Method 1: Stage-weighted
```
Forecast = Σ (deal value × stage probability)

Stage probabilities (calibrate from historical data):
- Discovery: 10%
- Evaluation: 25%
- Proposal: 50%
- Negotiation: 75%
```

### Method 2: Commit / Best Case / Pipeline
- **Commit:** Deals AE will bet their job on — 95%+ confidence
- **Best Case:** Deals likely to close, some risk — 60-80%
- **Pipeline:** Everything qualified but uncertain — 25-50%

### Method 3: Historical conversion
```
Forecast = Stage volume × historical conversion rate × avg deal size
```

**The forecast that matters: Commit.** If commit number routinely misses,
the AE doesn't know their deals. Coach or replace.

## Deal Reviews (weekly, 1 hour)

For each deal in evaluation+ stage:

```
## [Account] — [Deal $X] — [Stage] — [Close Date]

### Champion: [Name + role]
### Economic Buyer: [Name + relationship status]
### Pain (quantified): $[X annual cost / Y hours/week]
### Compelling event: [Why now, not Q4]
### Competition: [Vendors] vs [our differentiation]
### Paper process: [Steps mapped: Y/N]
### Risks (top 3): 
1. 
2. 
3. 
### Next step: [Specific action by specific date]
### Coach asks: [What does AE need from me?]
```

## Sales Anti-Patterns

| Anti-Pattern | Why It Fails | Fix |
|--------------|--------------|-----|
| Demo first, qualify later | Wastes everyone's time | Discovery before demo, always |
| "Spray and pray" outbound | <1% reply rate | <100 highly personalized > 1000 generic |
| Premature pricing | Conditions you to discount | Pricing only after value is clear |
| Single-threading deals | Champion leaves, deal dies | Map 3+ stakeholders by Eval stage |
| Happy ears | Inflated forecasts | Forecast on commits, not hopes |
| Following up forever | Drains energy | Disqualify if no movement in 30 days |
| "Just checking in" emails | Adds zero value | Always lead with new info or insight |

## Output

- `output/sales-playbook-[version].md`
- `output/discovery-call-template.md`
- `reports/pipeline-review-[week].md`
- `reports/win-loss-[deal-name].md`
