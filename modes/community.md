# Mode: Community

## Purpose

Build and engage community (Discord, Slack, forum). Run user research.
Spot patterns in support conversations that inform product.

## Submodes

### 1. Community Building

**Early stage (0-100 users):**
- Personal outreach to every user
- Weekly user interviews
- Respond to every message within hours
- Focus on 10 power users, not 100 casual

**Growth stage (100-1K users):**
- Structured channels (general, feature-requests, bugs, introductions)
- Community guidelines posted
- Regular office hours (1x/week)
- Top 20 users get direct access

**Scale stage (1K+):**
- Community manager role
- User advocates program
- Regular events (AMAs, showcases)
- Moderator team (volunteers from community)

### 2. User Research Through Community

Every week, extract:

```
## Community Pulse — Week of [date]

### Most-Discussed Topics
1. [Topic with N mentions]
2. [Topic with N mentions]

### Feature Requests (by frequency)
| Request | Times Mentioned | Avg Sentiment |
|---------|----------------|--------------|
| [feature] | 12 | High urgency |
| [feature] | 8 | Medium |

### Complaints / Friction
1. [Specific complaint with user quotes]
2. [Specific complaint with user quotes]

### Success Stories
1. [User X achieved Y with our product]
2. [User Z's workflow improvement]

### Surprising Insights
[Things that contradict our assumptions]

### Actions
1. [What to build/change based on this]
2. [What to communicate back to community]
```

### 3. Support Pattern Detection

Monthly review of support conversations:

- **Top 5 questions** (= docs/onboarding gaps)
- **Top 5 complaints** (= product opportunities)
- **Top 5 requested features** (= roadmap signal)
- **Users who became evangelists** (= case study candidates)
- **Users who churned** (= retention signals)

### 4. Engagement Patterns

**High-value engagement (do more):**
- Weekly show-and-tell (users share what they built)
- Expert AMAs with customers in your domain
- "Build in public" updates
- User-generated content programs
- Birthday/anniversary recognition

**Low-value engagement (do less):**
- Generic "good morning" posts
- Emoji-only reactions
- Off-topic memes
- Corporate announcements
- Over-moderation (killing conversation)

### 5. Community Guidelines Template

```
# Community Guidelines

## What this community is for
[Specific purpose — what you help with]

## How we work
1. Be specific in questions (share context, code, screenshots)
2. Search before posting (many questions answered already)
3. Help others when you can (it's not just us supporting you)
4. No spam, no self-promotion without permission
5. Respect everyone regardless of experience

## How to get help fast
[Specific format for asking questions]

## What we don't do here
- [Explicit what's out of scope]

## Channels
- #general — general discussion
- #feature-requests — product ideas
- #bugs — problems to report
- #show-and-tell — share what you built
- #announcements — official updates (read-only)

## Contact
[How to reach team directly if needed]
```

### 6. AMA Playbook

Quarterly AMAs with team members:

**Structure (60 min):**
```
0-5 min — Intro + format explanation
5-20 min — Pre-submitted questions (best ones)
20-50 min — Live Q&A
50-55 min — Future-looking question
55-60 min — Thanks + next steps
```

**Rules:**
- Pre-submitted questions go first (lets people prepare)
- Don't dodge hard questions (builds trust)
- "I don't know" is a valid answer
- Record and transcribe for async users

## Output

- `output/community-pulse-[week].md`
- `reports/user-research-[month].md`
- `data/support-patterns.md`
