# Decision: Build vs Buy

## Context
You need capability X. Should you build it or buy a vendor solution?

## Decision Framework

### Build when:
- The capability is core to your value proposition
- You need deep customization that vendors can't support
- The vendor cost exceeds eng cost within 18 months
- Data sensitivity requires in-house control
- The problem space is well-understood by your team

### Buy when:
- The capability is commodity (auth, payments, email, monitoring)
- Time-to-value matters more than long-term flexibility
- You lack domain expertise to build it well
- Maintenance burden would distract from core product
- The vendor has solved edge cases you haven't thought of

### Hybrid pattern
Build the integration layer, buy the service. This gives you vendor portability without building the entire stack.

## Decision Matrix

| Factor | Weight | Build Score (1-5) | Buy Score (1-5) | Build Weighted | Buy Weighted |
|--------|--------|-------------------|-----------------|----------------|--------------|
| Core to value prop | 30% | | | | |
| Time to value | 25% | | | | |
| Total cost (2yr) | 20% | | | | |
| Maintenance burden | 15% | | | | |
| Data control | 10% | | | | |
| **Total** | 100% | | | | |

## Common Mistakes
1. Building auth/payments/email from scratch (always buy these)
2. Buying your core product logic (always build this)
3. Not accounting for maintenance cost when choosing to build
4. Not accounting for vendor lock-in when choosing to buy
5. Building to "learn" when you need to ship (learning is a luxury early-stage)

## Review
Revisit this decision at:
- 6 months: Is the chosen approach working?
- 12 months: Has the cost equation changed?
- Any time the vendor raises prices > 20% or the build team changes significantly
