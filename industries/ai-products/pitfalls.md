# AI Products — Common Pitfalls

## Product pitfalls

### 1. Shipping without evals
You cannot upgrade models confidently. You cannot debug quality regressions. You are flying blind.

Minimum viable evals: 50 real user queries, scored by humans on 1-5 scale, run before every prompt/model change. Spreadsheet is fine at pre-seed.

### 2. Demo-driven development
Your demo uses the 10 queries that work. Real users submit the 10,000 queries that mostly do not. The gap between demo quality and production quality is where AI startups die.

Fix: every demo query must come from the eval set. If a prospect asks for a demo, use *their* data.

### 3. Over-promising autonomy
"Our agent handles this end-to-end" when it actually works 60% of the time and fails silently. Users lose trust on the first silent failure and never come back.

Fix: design for 100% user-in-the-loop first. Earn autonomy failure by failure.

### 4. Under-investing in latency
P50 under 3s and P99 under 10s are the minimum for any synchronous UX. Every extra second drops engagement measurably.

### 5. Ignoring cost until it matters
By the time COGS is killing you, you have 18 months of prompt sprawl and no abstraction layer. Refactoring under margin pressure is brutal.

Fix: track cost per task from week 1. Set a margin target, enforce it.

### 6. Wrapper without moat
If your product is "ChatGPT but for [use case]" and you have no data, distribution, or workflow advantage, a Fortune 500 IT team can replicate you in a weekend.

Fix: answer the three defensibility questions in overview.md before raising a Series A.

## Technical pitfalls

### 7. No model abstraction
Vendor change = multi-week rewrite. You are stuck on whatever provider you started with.

Fix: route all inference through a single module. Model name is a config variable.

### 8. Prompt sprawl
Prompts embedded in code across 40 files with minor variations. Nobody knows which works best.

Fix: prompts are versioned artifacts. Treat them like code: PR review, tests, changelog.

### 9. Silent model upgrades
Your provider upgrades the model under you and quality regresses. You find out from a support ticket.

Fix: pin versions. Run evals on new versions before switching. Subscribe to provider changelogs.

### 10. No guardrails
Model says something racist, legally dangerous, or brand-hostile and you are on the front page of HN.

Fix: layered defense: input filtering, output filtering, model-level policies, escalation paths, incident response playbook.

### 11. Context window abuse
Stuffing 100k tokens in every request because "more context is better". Latency and cost explode; quality often gets worse.

Fix: retrieval that actually retrieves. Measure whether extra context improves quality; most of the time it does not past a threshold.

### 12. No evals on retrieval
Assuming the RAG pipeline is fine. In practice, retrieval recall under 70% means even a perfect model gives wrong answers.

Fix: evaluate retrieval separately (recall, precision, MRR) from generation.

## Business pitfalls

### 13. Wrong pricing model
Per-seat for a product with 100x usage variance leaves huge money on the table or attracts users who abuse the tier. Pure usage scares enterprise procurement.

Fix: hybrid. Base seat + usage above threshold + outcome-based bonus for hero use cases.

### 14. Underpricing heroes
The top 5% of users extract 50x the value. If you charge them the same as median, you subsidize them out of existence.

### 15. Ignoring deployment mode
Enterprise buyers increasingly require: on-prem, VPC, or at minimum dedicated deployment. If you are 100% multi-tenant SaaS, you cannot sell to financial services, healthcare, or defense.

### 16. Betting against model progress
Building scaffolding the next model eliminates. Classic examples: most chain-of-thought tooling, most prompt-routing wrappers, most "long context" hacks.

Fix: ask "does this get better or worse with smarter models?" If worse, do not build it.

### 17. Ignoring compliance
SOC 2 Type 2, HIPAA, GDPR, SOC AI controls. Missing any one of these blocks entire market segments.

### 18. Treating data as exhaust
Every interaction is a data asset. If you are not capturing, labeling, and using it to improve the product, you are wasting your moat.

## Team pitfalls

### 19. ML team separate from product team
ML builds models nobody uses. Product builds features without using ML. Ship rate drops.

Fix: one team. Applied AI engineers, not ML researchers.

### 20. No one owns quality
Quality is everyone's job = nobody's job. Hallucinations slip, evals rot, quality drifts.

Fix: name a quality lead at 10+ headcount. Weekly eval review. Quality is a launch gate.
