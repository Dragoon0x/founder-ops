# Pre-Launch Checklist

Use this for any product or feature launch that'll see 100+ new users.

---

## T-14 Days

### Product readiness
- [ ] Core flow works on Chrome, Safari, Firefox (latest 2 versions)
- [ ] Core flow works on mobile (iOS 16+, Android 12+)
- [ ] Error states exist for every critical path (not just happy path)
- [ ] Loading states exist (not blank screens)
- [ ] "About to break" signals caught (timeouts, missing data, offline)
- [ ] Onboarding flow tested by 3+ people who've never used the product
- [ ] Password reset works end-to-end
- [ ] Email delivery from transactional account tested (not going to spam)

### Infrastructure
- [ ] Auto-scaling tested (load-test to 10x expected peak)
- [ ] Database backups verified (restore from backup successfully)
- [ ] Monitoring + alerts configured (not just dashboards)
- [ ] On-call rotation for launch day
- [ ] Rollback plan documented (one-command revert)

### Content assets
- [ ] Landing page final (hero, features, proof, CTA)
- [ ] Demo video (90-120 sec, captions, no hold music)
- [ ] 3-5 screenshots optimized (WebP, <200KB each)
- [ ] Social images (Twitter card, OG image, LinkedIn preview)
- [ ] Product Hunt assets prepped

### Content drafts
- [ ] Twitter thread (10-12 tweets)
- [ ] LinkedIn post
- [ ] HN post draft + first-comment draft
- [ ] Blog post (if applicable)
- [ ] Newsletter draft
- [ ] Internal team announcement

### Legal / ops
- [ ] Terms of Service published
- [ ] Privacy Policy published
- [ ] Cookie consent (if applicable)
- [ ] Pricing page published (even if free tier only)
- [ ] Refund policy (if paid)

---

## T-7 Days

### Amplification network
- [ ] 15-20 people confirmed to share on launch day
- [ ] 3 testimonials pre-approved (written permission)
- [ ] 2-3 customer stories ready to publish
- [ ] Press list finalized (10-15 journalists + angle for each)

### Dry run
- [ ] Full purchase / signup flow tested end-to-end (real card for paid)
- [ ] Team walk-through of launch day runbook
- [ ] Support team briefed (expected questions, answers, escalation)
- [ ] All team members know their launch-day role

### PR outreach (if doing PR)
- [ ] Embargoed emails sent to top 5 journalists
- [ ] Demo calls scheduled with interested press
- [ ] Press kit published (private link)

---

## T-3 Days

### Metrics + tracking
- [ ] Analytics events firing (test yourself — don't assume)
- [ ] Funnel from landing → signup → activation → subscribe → retention tracked
- [ ] Dashboard for launch-day monitoring ready
- [ ] Competitive monitoring (do they ship something to compete?)

### Last checks
- [ ] Backup plan if HN ranks low (PH still, Twitter still, newsletter)
- [ ] Founder availability for launch day blocked (no meetings, no calls)
- [ ] Team lunch plans cancelled (launch day = ship day)
- [ ] Time zone coverage (if international audience)

---

## T-1 Day (day before)

- [ ] Final sanity check: all links in all content actually work
- [ ] Social accounts scheduled (or ready to post live)
- [ ] Product Hunt submission prepped (Ship product to queue)
- [ ] HN post drafted but not submitted
- [ ] Amplification network: reminder message
- [ ] Sleep 8 hours

---

## Launch Day

### Pre-launch (5:30 AM PT)
- [ ] Team synced in Slack
- [ ] Site up + fast check (page speed, 200 responses)
- [ ] Tracking confirmed working

### Launch (6:00 AM PT)
- [ ] Post to Hacker News (Show HN format, direct link)
- [ ] Submit to Product Hunt (published; let ship time fire)
- [ ] Tweet thread goes live
- [ ] LinkedIn post goes live

### Hour 1-3
- [ ] Reply to every HN comment (thoughtful, fast)
- [ ] Reply to every PH comment
- [ ] Reply to every Twitter reply (genuine)
- [ ] Monitor error logs (if ANYTHING breaks, fix fast)

### Hour 4-6
- [ ] Newsletter goes out
- [ ] Email to existing users / waitlist
- [ ] Customer email (to paying customers)
- [ ] Community posts (Slacks, Discords where you're a member)

### Hour 7+
- [ ] Retweet / amplify supporter content
- [ ] Personal thank-you DMs to top amplifiers
- [ ] Press follow-ups for interested journalists

### End of day
- [ ] Team debrief (30 min)
- [ ] Metrics snapshot saved
- [ ] Issues identified for next-day fixes
- [ ] Celebrate (seriously — this matters)

---

## T+1 to T+7

- [ ] Thank-you email to every amplifier
- [ ] Case study draft from launch-day signups
- [ ] Follow-ups with interested journalists
- [ ] Top 3 issues from launch-day traffic → fixed
- [ ] Second-wave content (lessons tweet, stats post)
- [ ] Outbound to top 20 signups who match ICP

---

## Kill-Switches (pause launch if)

- Site down >30 minutes during launch day → halt amplification, fix, restart
- Critical bug affecting core flow → halt new signups, fix, rollback
- Data loss or security issue → stop everything, work through incident-response-checklist
- Wildly negative sentiment in first hour → assess before further amplification

## Related
- `playbooks/launch-product.md`
- `prompts/launch-announcement.md`
- `checklists/pr-launch-checklist.md`
- `checklists/product-hunt-launch-checklist.md`
