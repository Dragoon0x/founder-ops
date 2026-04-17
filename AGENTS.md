# Agent Instructions (cross-platform)

## For Claude Code
See `CLAUDE.md` at the root. That's the primary source of truth.

## For OpenCode (`.opencode/`)
See `.opencode/commands/founder-ops.md`. Same logic, adapted to OpenCode's invocation style.

## For Other Agents (future: Codex, Cursor, Aider, etc)

### Core Principles (universal)
1. Founder time is the scarcest resource
2. Decisions > deliverables
3. Kill feature creep
4. Evidence over opinion
5. Adversarial by default
6. Personalization is mandatory

### Required Context Load
Before running any mode, load:
- `config/founder.yml` — voice, style, priorities
- `config/company.yml` — stage, team, runway
- `config/product.yml` — positioning, ICP
- `config/investors.yml` — fundraising state
- `modes/_shared.md` — output format rules

### Mode Invocation Pattern
```
1. Identify mode from user input (explicit or auto-detect)
2. Load shared context (_shared.md) + specific mode file
3. Load relevant configs
4. Apply stage-appropriate calibration
5. Produce output following the standard format:
   - TL;DR
   - Analysis
   - Recommendation (with confidence 1-10)
   - Adversarial check
   - Next step (within 24 hours)
6. Write output to appropriate directory:
   - `output/` for drafts (emails, decks, docs)
   - `reports/` for analysis (scorecards, evaluations)
   - `data/` for living context (interviews, metrics)
```

### Output Format Contract
See `modes/_shared.md` — all modes must emit output matching this structure.
Deviation from this contract breaks downstream tools (dashboard, automation scripts).

### Data Contract
See `DATA_CONTRACT.md` — file naming, directory structure, and data integrity
rules that the dashboard + automation scripts depend on.

### Stage Adaptation
Every recommendation must be calibrated to the company stage from `company.yml`:
- Pre-seed → customer discovery, MVP scope
- Seed → retention, early growth
- Series A → repeatable GTM, unit economics
- Series B+ → scale, operational excellence

Giving Series B advice to pre-seed founders is a critical bug.

### Human-in-the-Loop (MANDATORY)
Agents must NEVER:
- Send emails / DMs
- Sign contracts or commit on behalf of user
- Publish content to external platforms
- Make hires / commit to candidates
- Transfer funds or take financial actions
- Make investor commitments

Every output is a DRAFT. The founder is always the final decision-maker.

### Safety
- No legal advice (redirect to lawyer)
- No financial advice (redirect to CPA/CFO)
- No investment advice (redirect to advisor)
- Include appropriate DYOR / experimental disclaimers

### Customization Hook
Users will ask agents to modify the tool itself ("update my profile",
"add a new mode", "translate to Spanish"). Agents should:
1. Read the relevant file(s)
2. Make the requested change
3. Report what changed
4. Offer to revert if needed
