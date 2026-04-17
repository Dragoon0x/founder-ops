# Contributing to Founder-Ops

PRs welcome. Here's how to contribute effectively.

## What to Contribute

**High-value contributions:**
- New mode for a founder workflow not yet covered
- Deeper methodology for an existing mode
- Stage-specific templates (e.g., Series A-specific variations)
- Industry-specific patterns (SaaS vs marketplace vs consumer)
- Localization (translate modes to other languages)
- Integration guides (how to use with Notion, Linear, etc)

**Low-value contributions (please skip):**
- Grammar/typo fixes (we'll catch these)
- Renaming for personal preference
- Generic advice without specific examples

## Adding a Mode

1. Create `modes/[mode-name].md`
2. Follow the structure of existing modes:
   - Purpose (why this mode exists)
   - Submodes (specific sub-workflows)
   - Output templates (concrete formats)
   - Anti-patterns (what not to do)
3. Add the mode to `CLAUDE.md` and `SKILL.md` indexes
4. Update `README.md`
5. Submit PR with:
   - Description of the mode
   - Why founders need it
   - Example use case

## Mode Quality Bar

Every mode must have:
- **Specificity**: Concrete templates, not generic advice
- **Actionability**: Reader can apply it in the next 24 hours
- **Evidence**: Grounded in real startup experience
- **Anti-patterns**: Explicit list of what NOT to do
- **Output format**: Specific structure for generated artifacts

## Rules

- No promotional content for commercial services
- No legal/financial advice (use disclaimers)
- No personal information about authors or contributors
- All modes must work with vanilla Claude Code (no external APIs required)
- MIT licensed contributions only
