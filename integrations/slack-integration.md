# Slack integration

## Why this matters
Slack is where 70-90% of decisions get made at early-stage companies and 0% of them
get logged. Founder-ops uses Slack as a decision-log inbox, async-signal aggregator,
and on-call notifier.

## Wire these signals (read-only)

| Signal | Channel pattern | What founder-ops does |
|---|---|---|
| Decisions tagged `:decision:` | any | Pulls into `decisions` mode for weekly review |
| `#alerts-*` channel volume | alerts-* | Crisis-mode trigger if >3x baseline |
| `#customer-*` channel sentiment | customer-* | Customer-success mode escalation |
| `#general` post frequency by founder | general | Founder-wellbeing signal (silence = burnout signal) |
| DM volume sent by founder after 9pm local | all DMs | Founder-wellbeing signal |

## What to wire

1. Create a Slack app, install at workspace level. Scopes needed (read-only):
   `channels:history`, `channels:read`, `groups:history`, `reactions:read`,
   `users:read`, `team:read`.
2. Create channels `#decisions`, `#wins`, `#losses`, `#oncall-handoff`.
3. Add the bot to those channels plus all `#customer-*` and `#alerts-*`.
4. Export bot token to `data/slack/token.txt` (chmod 600). Never commit.
5. Run `node scripts/slack-pull.mjs` daily via cron at 23:55 local time.

## Decision-log convention

Anyone, anywhere in the company, can log a decision by reacting to a message with
`:decision:`. Founder-ops pulls these nightly and asks the author to fill out the
template within 48 hours. After 48 hours, the message is escalated to the CEO.

Template (auto-DM'd):
```
Decision: [one sentence]
Owner: [you]
Stakes (1-5): []
Reversibility (one-way / two-way): []
Considered alternatives: []
Why this one: []
Kill criteria: [if X happens by Y date, we revisit]
Review date: [60 days from now]
```

## What founder-ops will NOT do

- Write messages to Slack unless `integrations:slack:write: true` is set in config
- Read DMs not involving the founder (privacy by default)
- Store message content longer than 30 days (only metadata persists)

## Stage-aware setup

| Stage | Channels to wire | Why |
|---|---|---|
| 0-5 people | #decisions, #general | Founder is the decision log |
| 5-15 | + #customer-*, #wins, #losses | Decision authority distributing |
| 15-30 | + #alerts-*, #oncall-handoff | On-call rotation forming |
| 30+ | + per-team channels via pattern match | Scale requires sampling |

## Failure modes
- People stop using `:decision:` after 2 weeks. Remediation: weekly recap in Friday
  all-hands shows decisions logged + decisions found in retrospect that should
  have been logged. Shame works; better than nothing.
- Channel sprawl makes pulls slow. Remediation: archive aggressively, target
  <60 active channels at <30 people.
