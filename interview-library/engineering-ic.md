# Interview Questions: Engineering IC (Senior/Staff)

## Overall loop structure
1. Recruiter screen (20 min): basic fit
2. Hiring manager screen (45 min): scope and trajectory
3. Technical screen (60 min): coding exercise or system design
4. Onsite (4–5 hours):
   - 2 coding sessions
   - 1 system design
   - 1 behavioral / leadership
   - 1 hiring manager deep dive
5. Reference check (3 references)
6. Decision and offer

## Questions by category

### Technical depth (pick 3–4)
1. "Walk me through a production system you've designed. What were the
   constraints and tradeoffs?"
2. "Describe a bug that was hard to debug. How did you approach it?"
3. "Tell me about a technical decision you made that turned out to be
   wrong. What did you learn?"
4. "What's a technology you've adopted in the last year? Why?"
5. "What's a technology you've chosen NOT to adopt recently? Why?"
6. "How do you decide when to refactor vs ship and move on?"
7. "Describe your approach to testing. What do you test, what don't you?"

**What good answers sound like:**
- Specific systems, specific numbers (QPS, latency, throughput).
- Explicit tradeoffs ("we chose X over Y because Z").
- Acknowledges mistakes without deflecting.
- Opinions backed by experience, not just trends.

**Red flags:**
- Vague descriptions ("we built a microservices system that scaled").
- No tradeoffs mentioned (everything was "great").
- Blames team or tools for failures.
- Can't name a technology they've rejected.

### Collaboration and leadership (pick 3)
1. "Describe a time you disagreed with a teammate on a technical
   decision. How did you handle it?"
2. "Tell me about a time you mentored someone. What did you learn?"
3. "Walk me through the last code review you did. What did you look for?"
4. "Describe a situation where you had to push back on a PM or
   designer. How did it go?"
5. "What's the hardest feedback you've given someone? What happened?"
6. "What's the hardest feedback you've received? What did you do with it?"

**What good answers sound like:**
- Disagreements resolved through data or experiment, not authority.
- Specific, not generic.
- Shows growth mindset — they changed behavior based on feedback.
- Takes responsibility for their part in conflicts.

**Red flags:**
- "I was right, they eventually saw it."
- No specific disagreements come to mind.
- Feedback received was "nothing significant."
- Avoids pushing back because "it's not my call."

### Ownership and ambiguity (pick 3)
1. "Tell me about a time you took on a project that wasn't explicitly
   yours."
2. "Describe a situation where requirements changed mid-project. How
   did you handle it?"
3. "What's a technical decision you made with incomplete information?
   How did you decide?"
4. "Describe a time you pushed for a change in how the team worked."
5. "Tell me about a project you killed. Why?"

**What good answers sound like:**
- Proactive behavior without being asked.
- Comfortable with incomplete information.
- Has killed their own projects (rare and good).
- Changed team process, not just complained about it.

**Red flags:**
- Only worked on clearly-defined projects.
- Waited for more information rather than making calls.
- Process complaints without proposing solutions.

### Engineering culture and values (pick 2)
1. "What do you need from a team to do your best work?"
2. "Describe the best engineering culture you've been part of. What
   made it work?"
3. "What's a debate you have with yourself about how software should
   be built?"
4. "How do you feel about working hours? Oncall? Deadlines?"

**What good answers sound like:**
- Specific and not generic ("psychological safety" is generic).
- Acknowledges tradeoffs in engineering culture.
- Has actual opinions, not just "whatever works."
- Honest about what they need.

**Red flags:**
- Says "everywhere is the same."
- Won't discuss oncall or deadlines.
- Past culture "was perfect" with no specifics.

### Stage-appropriate questions

For startup seed/Series A roles:
- "What are you expecting in terms of ambiguity, pace, and scope?"
- "How do you feel about doing work outside your role description?"
- "What's your risk tolerance for company outcomes?"
- "Why a startup over a big company?"

For Series B+ roles:
- "What's your experience with scaling teams from 10 to 50?"
- "How do you think about tech debt when the company is growing fast?"
- "What broke last time you were at a company this size?"

## Coding exercise (60 min)
Prefer one of:
1. **Practical problem**: a code kata related to their day-to-day work.
   E.g., "Implement a rate limiter given this interface."
2. **Code review**: "Here's a 200-line PR. Walk me through what you'd
   push back on."
3. **Debug exercise**: "This test is failing. Figure out why."

Avoid:
- LeetCode hard puzzles (unrepresentative of daily work).
- "Build a full app in an hour" (too much ceremony).
- Trick questions.

## System design (60 min)
For senior: design a specific system at reasonable scale (e.g.,
"design a rate limiter at 10K QPS").
For staff: design a system with explicit tradeoffs, product decisions,
and organizational considerations.

What good looks like:
- Asks clarifying questions.
- States assumptions explicitly.
- Identifies tradeoffs as they go.
- Doesn't just draw boxes; explains what they do.
- Comfortable with "I don't know, here's how I'd find out."

## Red flags across the loop

### Do not hire signals:
- Blames former colleagues for everything
- Can't name a single bug they caused
- Answers vaguely to every specific question
- No opinions on tradeoffs
- Talks only in generalities
- Reference issues (check carefully)

### Hire signals:
- Specific stories with numbers
- Has opinions with reasons
- Takes responsibility for failures
- Names things they don't know
- Asks good questions about the company
- Has read about your company before the interview

## Reference check script
Ask references:
1. "How do you know candidate X?"
2. "What was their biggest contribution?"
3. "What's something they struggled with?"
4. "Would you hire them again at a more senior level?"
5. "Is there anything I should be aware of that I probably haven't
   asked?"

The last question is the gold one. It often uncovers what's off-the-
record but important.

## Decision framework

After the loop, ask:
1. Would I want this person to join my project tomorrow?
2. Will they be better in 12 months than they are today?
3. Is their growth trajectory matching our company's needs?
4. Do they raise the bar or meet it?

"Raise the bar" is the only correct answer to #4. If they meet but
don't raise, pass.

## Time investment
- Recruiter: 2 hours per candidate
- HM screen: 1 hour
- Technical screen: 2 hours (their time + your time)
- Onsite: 6 hours across team
- Debrief: 1 hour
- References: 3 hours
- Offer and negotiation: 2–5 hours

Total per hire: 15–25 hours of team time.
