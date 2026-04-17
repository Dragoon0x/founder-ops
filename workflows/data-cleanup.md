# Data Cleanup Workflow

## Trigger
Monthly, or before any major reporting period.

## Checklist

### CRM data (30 min)
- [ ] Duplicate contacts merged (search for same email, different entries)
- [ ] Dead leads archived (no activity > 90 days, closed-lost confirmed)
- [ ] Deal stages accurate (no deals stuck in "negotiation" for 6 months)
- [ ] Contact info current (bounce rate on last email campaign < 2%)
- [ ] Account ownership correct (no orphaned accounts)
- [ ] Tags/labels consistent (no "enterprise", "Enterprise", "ent" for the same thing)

### Financial data (30 min)
- [ ] All invoices matched to payments
- [ ] Subscription data synced between billing system and CRM
- [ ] MRR calculation verified (no double-counting, no missed cancellations)
- [ ] Expense categorization accurate
- [ ] Vendor list current (no payments to defunct vendors)

### Product data (30 min)
- [ ] User accounts: deactivated users cleaned up
- [ ] Feature flags: stale flags removed (shipped > 3 months ago, 100% rollout)
- [ ] Test data: purged from production (no test@example.com accounts)
- [ ] Integrations: unused API keys revoked
- [ ] Logs: old logs archived or deleted per retention policy

### Analytics data (30 min)
- [ ] Event tracking: no duplicate events, naming convention consistent
- [ ] Dashboards: all dashboards load correctly, data sources connected
- [ ] Segments: user segments defined correctly, no overlap
- [ ] Goals/funnels: conversion tracking verified end-to-end
- [ ] Alerts: thresholds still relevant (not triggering on outdated baselines)

## Quarterly Deep Clean
In addition to the monthly checklist:
- Full audit of data access permissions
- Review data retention policies (are we keeping data longer than needed?)
- GDPR/privacy compliance check (deletion requests processed, consent records current)
- Backup verification (restore test on a non-production environment)
