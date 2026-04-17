# Founder-Ops

> *I spent years trying to run a startup with spreadsheets, docs, and Notion. So I engineered the system I wish I had.*
> 
> *VCs use AI to evaluate founders. **I gave founders AI to run their company.***
>
> *Now it's open source.*

[![Claude Code](https://img.shields.io/badge/Claude_Code-000?style=flat&logo=anthropic&logoColor=white)](https://claude.com/product/claude-code)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Experimental-orange.svg)](DISCLAIMER.md)

---

**660+ files · 300K+ words · 50 modes · 40 playbooks · 24 workflows · 14 metrics · 12 anti-patterns · 1 system that runs your startup**

## What Is This

Founder-ops turns Claude Code into a full startup operating system. Instead of
juggling spreadsheets, Notion pages, and Slack DMs to run your company, you get
an AI-powered command center that:

* **Runs customer discovery** — interview prep, question generation, synthesis, pattern detection
* **Prioritizes ruthlessly** — RICE/ICE/MoSCoW scoring with "kill list" generation
* **Handles fundraising** — investor research, pitch deck review, personalized outreach
* **Designs growth experiments** — channel evaluation, A/B test planning, CAC/LTV analysis
* **Scores hires** — JD writing, candidate evaluation, interview kits, reference checks
* **Models finances** — runway scenarios, pricing experiments, unit economics
* **Tracks competitors** — deep dives, market mapping, positioning frameworks
* **Writes content** — blog posts, tweet threads, landing pages, newsletters (in your voice)
* **Drafts investor updates** — monthly updates, board decks, stakeholder comms
* **Reviews contracts** — flags issues and tells you when to call a lawyer
* **Preps meetings** — agendas, follow-ups, calendar hygiene
* **Builds community** — Discord/Slack patterns, user research synthesis
* **Writes PRDs** — feature specs, ADRs, roadmaps, kill criteria
* **Defines positioning** — ICP, messaging, value prop testing
* **Runs retros** — weekly/monthly/quarterly reflection that actually changes behavior

> **Important: This is NOT a replacement for judgment.** Founder-ops is a force multiplier —
> it helps you think clearer and act faster. Every output is a draft for YOU to edit.
> The AI doesn't run your company. You do. It just makes you faster.

Built by someone who used it to run their own startup. Every mode comes from
real problems I had in real meetings with real investors, customers, and hires.

## Features

| Feature | Description |
| --- | --- |
| **15 Specialist Modes** | Each covers a critical founder workflow end-to-end |
| **Context-Aware** | Reads your founder profile, company stage, and priorities |
| **Adversarial Analysis** | Every recommendation stress-tested against failure modes |
| **Stage-Appropriate** | Advice shifts based on pre-seed vs Series A vs Series B+ |
| **Confidence Scoring** | Every output includes 1-10 confidence with reasoning |
| **Human-in-the-Loop** | Drafts outputs, you decide and edit. Never sends emails autonomously. |
| **Zero Dependencies** | Pure Markdown skills. No npm install. Works with Claude Code out of the box. |
| **Forkable** | Designed to be customized by Claude itself. "Update my ICP" and it edits config. |

## Quick Start

```bash
# 1. Clone
git clone https://github.com/Dragoon0x/founder-ops.git ~/.claude/skills/founder-ops
cd ~/.claude/skills/founder-ops

# 2. Configure
cp config/founder.example.yml config/founder.yml
cp config/company.example.yml config/company.yml
cp config/product.example.yml config/product.yml
cp config/investors.example.yml config/investors.yml

# 3. Edit each config with your details

# 4. Open Claude Code in your project
claude

# 5. Personalize further
# "Update my founder profile: I'm CTO, technical background, prefer direct tone"
# "Update company context: we raised seed in March at $8M post"
# "Add these 5 target investors to my pipeline"
```

> **The system is designed to be customized by Claude itself.** Modes, configs,
> priorities — just ask Claude to change them. It reads the same files it uses,
> so it knows exactly what to edit.

## Usage

Founder-ops is a single slash command with multiple modes:

```
/founder-ops                  → Show all available modes
/founder-ops {paste content}  → Auto-detect mode from content
/founder-ops discovery        → Customer discovery
/founder-ops prioritize       → Feature prioritization
/founder-ops fundraise        → Investor research / outreach
/founder-ops growth           → Growth experiments
/founder-ops hire             → Hiring workflows
/founder-ops finance          → Runway / pricing / unit economics
/founder-ops compete          → Competitive intelligence
/founder-ops content          → Content writing (in your voice)
/founder-ops update           → Investor / board updates
/founder-ops legal            → Contract review flags
/founder-ops calendar         → Meeting prep / follow-ups
/founder-ops community        → Community engagement
/founder-ops product          → PRDs / user stories / ADRs
/founder-ops positioning      → ICP / messaging / value prop
/founder-ops retro            → Weekly / monthly / quarterly retros
```

## How It Works

```
You paste a question, URL, or task
        │
        ▼
┌──────────────────┐
│  Mode Detection  │  Auto-classifies: discovery/fundraise/growth/hire/...
└────────┬─────────┘
         │
┌────────▼─────────┐
│  Context Load    │  Reads founder.yml, company.yml, product.yml
└────────┬─────────┘
         │
┌────────▼─────────┐
│  Mode Execution  │  Runs mode-specific methodology
└────────┬─────────┘
         │
┌────────▼─────────┐
│ Adversarial Check│  Stress-tests recommendation
└────────┬─────────┘
         │
    ┌────┼────┐
    ▼    ▼    ▼
 Output  Report  Data update
  .md     .md     .yml/.md
```

## Project Structure

```
founder-ops/                     # 660+ files · 300K+ words
├── modes/              (50)     # Specialist AI modes for every founder function
├── playbooks/          (41)     # Step-by-step runbooks for specific situations
├── workflows/          (24)     # Recurring operational workflows with cadence
├── prompts/            (41)     # Copy-paste prompt templates for Claude
├── checklists/         (23)     # Preflight checklists for critical events
├── frameworks/         (13)     # Decision frameworks (RICE, ICE, OKR, JTBD...)
├── benchmarks/         (11)     # Stage-specific SaaS/marketplace/consumer benchmarks
├── verticals/           (9)     # Industry-specific guidance
├── industries/         (26)     # Deep industry playbooks (B2B SaaS, consumer, fintech...)
├── metrics/            (14)     # Deep metric definitions with formulas & alerts
├── metrics-deep-dive/  (22)     # Extended metric analysis
├── models/              (7)     # Financial & business model templates
├── financial-models/   (19)     # Detailed financial modeling guides
├── diagnostics/         (7)     # Health checks for sales, product, eng, culture, GTM
├── anti-patterns/      (13)     # Common founder mistakes with detection & recovery
├── signals/             (9)     # Early warning signals (PMF, burnout, cash crisis...)
├── scenarios/           (7)     # Scenario planning for high-impact events
├── decisions/           (9)     # Decision record templates for high-stakes choices
├── decision-trees/     (13)     # Structured decision trees
├── negotiations/        (6)     # Tactical negotiation playbooks
├── negotiation-scripts/(14)     # Scripted negotiation guides
├── ceremonies/          (7)     # Meeting facilitation guides (1:1s, retros, demos...)
├── heuristics/         (24)     # Rules of thumb for fast decisions
├── red-flags/          (24)     # Warning signs across functions
├── toolkits/            (4)     # Comprehensive functional toolkits
├── templates/          (28)     # Output templates (board decks, OKRs, battlecards...)
├── examples/           (17)     # Sample outputs with real data
├── scripts/            (15)     # Node.js automation (burn watch, OKR tracker, churn...)
├── library/             (8)     # Reference data (comp bands, investor questions...)
├── research/            (9)     # Customer research methodology
├── guides/             (26)     # Long-form founder guides
├── integrations/       (13)     # Tool integration guides
├── legal-templates/     (6)     # Legal document templates
├── interview-library/   (4)     # Interview question banks
├── case-studies/        (9)     # Anonymized startup case studies
├── reports/            (17)     # Report generation templates
├── references/          (6)     # Quick reference docs (glossaries, benchmarks)
├── dashboard/           (3)     # Go TUI dashboard (Catppuccin Mocha theme)
├── batch/               (7)     # Batch processing templates
├── config/              (4)     # Example YAML configurations
├── docs/                (6)     # Setup and customization guides
├── locales/            (11)     # Multi-language READMEs
├── data/                (5)     # Running data templates
└── [meta files]                 # AGENTS.md, SECURITY.md, CITATION.cff, etc.
```

## Philosophy

1. **Founder time is the scarcest resource.** Every output saves hours, not minutes.
2. **Decisions > deliverables.** The goal is to help you DECIDE, not produce more work.
3. **Kill feature creep.** When in doubt, cut scope. Ship the smallest useful version.
4. **Evidence over opinion.** Never recommend based on vibes. Cite data, research, or prior examples.
5. **Adversarial by default.** Every idea is stress-tested before being supported.
6. **Personalization is mandatory.** Reads your context before every task.

## Who This Is For

- **Solo founders** running a pre-seed or seed-stage startup
- **Technical founders** who need help with business/GTM/fundraising
- **Non-technical founders** who need help with product/engineering decisions
- **Founder CEOs** of 2-20 person teams who wear 10 hats
- **Operators** in 0-to-1 roles (first PM, first head of growth)

## Who This Is NOT For

- Series B+ companies with dedicated ops teams (use specialized tools)
- Enterprise sales teams (use Salesforce/Gong/etc)
- HR departments (use Greenhouse/Lever)
- Agencies serving clients (too generic)

## Disclaimer

This is an experimental open-source project. Not legal, financial, tax, or
investment advice. Every output is a draft — you are responsible for final
decisions. See [DISCLAIMER.md](DISCLAIMER.md) for full terms.

## License

MIT — see [LICENSE](LICENSE).

---

**By [Dragoon0x](https://github.com/Dragoon0x). Free, open source, zero dependencies.**
