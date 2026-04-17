# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 2.x | ✓ |
| 1.x | ⚠ Critical fixes only |
| < 1.0 | ✗ |

## Reporting a Vulnerability

**Please do NOT open a public issue for security vulnerabilities.**

Instead, email the maintainer directly (see GitHub profile for contact).

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if you have one)

We aim to respond within 72 hours.

## What Constitutes a Security Issue

For founder-ops (which is primarily prompts + markdown + a small Go TUI):

### Yes, security issue
- Prompt injection vulnerabilities that could mislead users
- Malicious code in automation scripts
- Dashboard TUI code execution issues
- Templates that leak sensitive data
- Default configurations that expose PII

### No, not a security issue
- Generic mode content (by design, open source)
- Claude/LLM limitations (report to Anthropic)
- User misconfiguration (we'll improve docs)

## Privacy

**Your config files (`founder.yml`, `company.yml`, `product.yml`, `investors.yml`)
contain sensitive information.**

The `.gitignore` file is set up to prevent them from being committed. Verify this
before pushing:
```bash
git check-ignore config/founder.yml
# Should output: config/founder.yml
```

## Dependencies

This project has minimal dependencies:
- Node.js (for automation scripts) — stdlib only
- Go (for dashboard) — two Bubble Tea libraries
- Claude Code (for runtime)

We audit dependencies quarterly.
