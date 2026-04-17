# Customization Guide

## Ask Claude to Customize It

Founder-ops is designed to be customized BY Claude, not manually. The
files Claude uses are the same files it edits. Just ask.

### Examples of customization prompts

```
"Change my communication style to more casual and playful in founder.yml"

"Update company.yml — we closed Series A at $15M post-money last month"

"Add a new mode for managing my advisor pipeline — modeled on the
investor mode but for advisors and board members"

"Make the discovery mode less strict — allow shorter interview syntheses
for 15-minute conversations"

"Translate the content mode to Portuguese"

"Add industry-specific guidance to the hire mode for hiring AI/ML engineers"

"Increase the scoring rigor in the prioritize mode — I want a weighted
scorecard, not just RICE"
```

Claude reads the relevant file, edits it, and reports back. Every change
is just text.

## Manual Customization

If you want to edit directly:

### Adding a new mode

1. Create `modes/your-mode.md` following the structure of existing modes:
   - Purpose
   - Submodes (specific sub-workflows)
   - Output templates
   - Anti-patterns
2. Add the mode to the index in `CLAUDE.md`
3. Add to the list in `.claude/skills/founder-ops/SKILL.md`
4. Commit

### Changing output format

Edit `modes/_shared.md` — the output format rules apply to every mode.

### Industry-specific variants

Create `modes/[mode]-[industry].md`:
- `modes/hire-fintech.md` — fintech-specific hiring patterns
- `modes/compete-developer-tools.md` — dev tools competitive patterns
- `modes/content-b2b-saas.md` — B2B SaaS content patterns

Then reference the variant in the primary mode or invoke directly.

## Config Files Deep Dive

### founder.yml

Controls how Claude talks TO you and AS you.

- `style.tone`: Affects email drafts, content, meeting prep
- `style.length`: Affects how verbose outputs are
- `risk.experiments`: Affects growth experiment design
- `priorities`: Top of mind — Claude weights these in recommendations

### company.yml

Controls stage-appropriate advice.

- `stage.stage`: pre-seed / seed / series-a / etc. Shifts the whole methodology.
- `team.size`: Affects hiring recommendations, meeting structures
- `financials.runway_months`: Urgency calibration

### product.yml

Controls positioning and competitive analysis.

- `icp`: Used in content, positioning, hire JDs
- `competitors`: Referenced in compete, positioning, content

### investors.yml

Running state of your fundraise.

- `current_investors`: Who to send monthly updates to
- `active_pipeline`: Who to research and follow up with
- `target_list`: Who to add to outreach campaigns
