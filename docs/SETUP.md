# Setup Guide

Complete setup in under 5 minutes.

## 1. Install

```bash
git clone https://github.com/Dragoon0x/founder-ops.git ~/.claude/skills/founder-ops
cd ~/.claude/skills/founder-ops
```

If you prefer project-local install:

```bash
cd your-startup
mkdir -p .claude/skills
git clone https://github.com/Dragoon0x/founder-ops.git .claude/skills/founder-ops
```

## 2. Configure

```bash
cd founder-ops  # or .claude/skills/founder-ops
cp config/founder.example.yml config/founder.yml
cp config/company.example.yml config/company.yml
cp config/product.example.yml config/product.yml
cp config/investors.example.yml config/investors.yml
```

Open each `.yml` file and fill in your details. These are **never committed**
(protected by `.gitignore`). They live on your machine only.

### What goes in each config

| File | What |
|------|------|
| `founder.yml` | You. Your name, role, tone, risk tolerance, priorities, expertise |
| `company.yml` | Company stage, funding, team size, MRR, runway, business model |
| `product.yml` | Product name, positioning, ICP, competitors, key metrics |
| `investors.yml` | Current investors, active pipeline, target list |

## 3. Verify

```bash
node doctor.mjs
```

You should see green checks for configs, modes, CLAUDE.md, and output dirs.

## 4. First Use

Open Claude Code in the project root:

```bash
claude
```

Then run:

```
/founder-ops
```

You'll see all 15 modes listed. Try:

```
/founder-ops retro
```

to run a weekly retrospective.

## 5. Customize (recommended)

Founder-ops is designed to be customized BY Claude. Just ask:

```
"Update my founder profile — I'm non-technical, prefer concise outputs"
"Change my company stage to Series A and update the priorities"
"Add these 5 target investors to my pipeline"
"Translate the modes to Spanish"
```

Claude will read the config files and update them directly.

## 6. Dashboard (optional)

If you want a TUI to browse your pipeline:

```bash
cd dashboard
go mod tidy
go build -o founder-dashboard .
./founder-dashboard --path ..
```

Requires Go 1.22+.
