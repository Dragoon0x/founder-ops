# Architecture

## Design Philosophy

Founder-ops is built on three principles:

1. **Markdown-first.** No runtime, no dependencies, no magic. Every mode is
   a markdown file Claude reads. Every output is a markdown file you read.

2. **Context-aware.** Before running any mode, Claude reads your configs
   (`founder.yml`, `company.yml`, etc). Output is personalized to your
   stage, priorities, voice.

3. **Human-in-the-loop.** Every output is a draft. Founder-ops NEVER sends
   emails, signs contracts, or makes hires autonomously. You review and decide.

## Component Map

```
┌─────────────────────────────────────────────────────────────┐
│                        Claude Code                           │
│                   (user types /founder-ops X)                │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│            .claude/skills/founder-ops/SKILL.md               │
│              (discovery + quick reference)                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                       CLAUDE.md                              │
│              (agent instructions + mode routing)             │
└────────────────────┬────────────────────────────────────────┘
                     │
         ┌───────────┼────────────┐
         ▼           ▼            ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │ configs │ │  modes  │ │  data   │
    │ *.yml   │ │  *.md   │ │  *.md   │
    └─────────┘ └─────────┘ └─────────┘
         │           │            │
         └───────────┼────────────┘
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    modes/_shared.md                          │
│           (context loading + output format rules)            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│              modes/[specific-mode].md                        │
│                  (mode methodology)                          │
└────────────────────┬────────────────────────────────────────┘
                     │
         ┌───────────┼────────────┐
         ▼           ▼            ▼
    ┌─────────┐ ┌─────────┐ ┌─────────┐
    │ output/ │ │reports/ │ │ data/   │
    │ drafts  │ │analysis │ │context  │
    └─────────┘ └─────────┘ └─────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    Go TUI Dashboard                          │
│                (optional — browse everything)                │
└─────────────────────────────────────────────────────────────┘
```

## File Responsibilities

| File | Responsibility |
|------|---------------|
| `SKILL.md` | Claude Code discovery. Quick reference for what this skill does. |
| `CLAUDE.md` | Agent instructions. Principles. Mode routing. |
| `modes/_shared.md` | Context loading + output format. Loaded by every mode. |
| `modes/[mode].md` | Mode-specific methodology, submodes, templates, anti-patterns. |
| `config/*.yml` | Founder's living context. Read by every mode. Never committed. |
| `data/*.md` | Living context that persists (interview notes, metrics). |
| `output/*.md` | Generated drafts (emails, decks, PRDs). |
| `reports/*.md` | Analysis reports (scorecards, retros, evaluations). |

## Why This Architecture Wins

**vs generic "AI assistant" approaches:**
- Every task runs with context. Generic AI doesn't know your stage, voice, priorities.
- Every mode has explicit methodology. No "write me a pitch deck" producing random output.

**vs rigid SaaS tools:**
- Customizable. You can edit the methodology for your specific situation.
- Forkable. Your context and output live on your disk, not a vendor's database.

**vs career-ops pattern for candidates:**
- Opposite side of the market. Career-ops helps you find a job.
  Founder-ops helps you BUILD a company (and will eventually hire people using career-ops).
- Founders have 15 distinct workflows vs candidates' ~14.
  Covers fundraising, product, legal, positioning, community — things candidates don't need.

## Extension Points

- **Add modes**: Create `modes/new-mode.md`, add to CLAUDE.md index
- **Add industry-specific variants**: `modes/hire-biotech.md`
- **Add language variants**: Translate modes, add locale switch
- **Add integrations**: Scripts in root (like `doctor.mjs`, `pipeline-health.mjs`)
- **Add dashboard widgets**: Edit `dashboard/main.go` to add new tabs
