# Prompt: Reference Check Script

## Output
`output/reference-check-[candidate].md`

---

## Prompt Template

```
I need to do reference checks for [CANDIDATE NAME] applying for [ROLE].

Candidate background:
- Role: [TITLE]
- Past company: [COMPANY]
- Tenure: [DATES]
- Key claims to verify: [WHAT THEY SAID IN INTERVIEW]

References provided:
- [NAME] — [RELATIONSHIP] — [CONTACT]
- ...

Backchannel references I'm seeking:
- [WHO] — [HOW I'D FIND THEM]

Run /founder-ops hire reference-check and produce:

## FORWARD REFERENCE SCRIPT (their references)

### Opening (30 seconds)
"Thanks for taking the time. I'm [YOUR NAME], [ROLE] at [COMPANY]. 
I'm considering [CANDIDATE] for [ROLE]. This call will take about 20 
minutes. Everything you say is confidential."

### Context Questions (warm-up, 2 min)
- How did you work together?
- Over what period?
- What was their role when you worked together?

### Performance Questions (core, 10 min)

High-signal questions (not "was she good?"):
- "What's the single hardest problem you saw them solve?"
- "Tell me about a time they were wrong. How did they handle it?"
- "Who was the best person they worked with on your team? Who was the worst fit?"
- "If you could rehire them, would you? Why / why not?"
- "What would they need from a manager to do their best work?"
- "What are they NOT great at?" (The pause here is revealing)
- "Tell me about a specific time they exceeded expectations"
- "Tell me about a specific time they fell short"

### Leadership / Scale Questions (if applicable, 5 min)
- "How many people did they manage? Who was their strongest hire?"
- "How did they handle firing someone?"
- "How did their direct reports feel about them?"
- "Did they build a bench, or was the team dependent on them?"

### Closing Questions (2 min)
- "What's the #1 thing I should know about working with them?"
- "What's the #1 thing they'll need coaching on?"
- "Would you invest in their company?"

## BACKCHANNEL REFERENCE SCRIPT (finding unbiased data)

Opening:
"I'm considering [CANDIDATE] for a role. They didn't list you as a 
reference, but I understand you worked together. I'd value your honest 
read. This is totally confidential and it won't get back to them."

Same core questions, but listen especially for:
- Hesitation before answering
- Specific vs. generic praise (generic = yellow flag)
- What they DON'T say
- "I'd recommend them for X but not Y"

## RED FLAGS TO LISTEN FOR

Strong negative signals:
- "They were... fine."
- "I'd be happy to discuss them in more detail — maybe a follow-up call?"
- Long pause on "would you rehire?"
- Praise that's all about work ethic, none about output
- "They improved a lot" (code for "they were bad for a while")

Strong positive signals:
- Specific memorable examples without prompting
- "Best [X] I ever worked with"
- Willingness to connect me with more references
- "When can they start?"

## REFERENCE SYNTHESIS FRAMEWORK

After all reference calls, synthesize:
- What was consistent across references?
- What was different? (Especially between forward + backchannel)
- Anyone go out of their way to flag something?
- Anyone seem to be reciting a script?

## DECISION RULE

- All references unambiguously positive + specific → hire signal
- Mixed references with specific positives + manageable concerns → dig into concerns
- Mixed references where forward is glowing and backchannel is not → RED FLAG, slow down
- Anyone declines to give a reference they were listed as → KILL SIGNAL

Save as output/reference-check-[CANDIDATE].md.
```
