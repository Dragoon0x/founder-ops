# Example: Feature Prioritization

*This is an example of what /founder-ops prioritize produces.*

## Prioritization — Q2 Roadmap

### Input
Founder provided 11 features. Goal: ship 3, defer 2, kill 6.

### Scored (RICE)
| Feature | Reach | Impact | Confidence | Effort | Score |
|---------|-------|--------|------------|--------|-------|
| Real-time collaboration | 2400 | 2.0 | 0.9 | 8 | 540 |
| Slack integration | 1800 | 1.5 | 0.95 | 3 | 855 |
| SSO (SAML) | 600 | 2.5 | 1.0 | 4 | 375 |
| Mobile app (iOS) | 3000 | 1.0 | 0.6 | 12 | 150 |
| API v2 | 1200 | 1.5 | 0.8 | 6 | 240 |
| AI autosuggest | 2000 | 1.5 | 0.4 | 10 | 120 |
| Export to CSV | 800 | 0.5 | 1.0 | 1 | 400 |
| Dark mode | 3000 | 0.25 | 1.0 | 2 | 375 |
| Advanced search | 1500 | 1.0 | 0.8 | 4 | 300 |
| Role-based access | 600 | 2.0 | 0.9 | 5 | 216 |
| Webhooks | 400 | 1.5 | 0.85 | 3 | 170 |

### Top Priority (ship this quarter)
| Feature | Score | Reason |
|---------|-------|--------|
| Slack integration | 855 | Highest ROI; 85% of enterprise leads ask for it; 3-week build |
| Real-time collab | 540 | Retention lever; competitors have it; requested by top 20 accounts |
| Export to CSV | 400 | 1-week build; unlocks 40+ stuck deals in pipeline |

**Total effort:** 12 person-weeks. Fits Q2 capacity.

### Second Priority (next quarter — evaluate then)
| Feature | Score | When |
|---------|-------|------|
| SSO (SAML) | 375 | After 3 more enterprise deals request it |
| Dark mode | 375 | If engineering capacity; low risk |

### Kill List (cut these)
| Feature | Score | Why Kill |
|---------|-------|----------|
| Mobile app (iOS) | 150 | Low confidence (0.6), 12-week effort. Desktop traffic is 94% of usage. Revisit in 6 months. |
| API v2 | 240 | API v1 has 12 active customers. Not broken, don't fix. |
| AI autosuggest | 120 | Low confidence (0.4) — we haven't validated the use case. Ship manual version first. |
| Advanced search | 300 | Current search handles 89% of queries (from logs). Improving won't move retention. |
| Webhooks | 170 | Only 4 customers asked. Cut unless SF deal requires. |
| Role-based access | 216 | 2 enterprise deals need this, but smaller than SSO. Bundle with SSO next quarter. |

### Adversarial Check

**What if Slack integration is wrong?**
- Risk: We build it, but enterprise deals still need SSO first
- Mitigation: Scope it small (1-way notifications first), measure adoption
- Kill criteria: <30% adoption after 4 weeks → stop investing

**What would a skeptical PM cut?**
- Real-time collab (8 weeks is too much). Could we ship cursors-only in 3 weeks?
- Alternative: Ship cursors-only, validate, then expand

### Recommendation
Ship Slack integration + Export + cursor-only collab (pivot from full collab).
Reassesses full collab after measuring cursor usage.

**Confidence:** 8/10
**What would change my mind:** If 5+ enterprise leads in pipeline explicitly require full collab (not cursors), re-prioritize.
