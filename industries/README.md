# Industry Vertical Packs

founder-ops modes are built for general startups. But a B2B SaaS founder
has very different problems than a marketplace founder, who has very
different problems than a hardware founder.

Each industry pack adds:
- Industry overview (where the money is, who the buyers are, what wins)
- Key metrics specific to that industry (with benchmarks)
- Modified workflows (how the default modes change for this industry)
- Common pitfalls (industry-specific landmines)
- References (further reading, comp companies, key people)

## Available Packs

| Pack | When to Use |
|------|-------------|
| `b2b-saas/` | Selling subscription software to businesses |
| `marketplace/` | Two-sided platform (supply + demand) |
| `consumer-dtc/` | Direct-to-consumer products / brands |
| `developer-tools/` | Selling to engineers (devtools, infra, APIs) |
| `ai-ml-company/` | Building AI products or models |
| `agency-services/` | Productized services or consulting |
| `hardware/` | Physical products requiring manufacturing |
| `fintech/` | Financial products (banking, payments, lending) |
| `open-source/` | OSS-led commercial products (open core, COSS) |
| `vertical-saas/` | Software for a specific industry (legal, dental, etc.) |

## How to Use a Pack

```
/founder-ops industry b2b-saas overview
/founder-ops industry marketplace metrics
/founder-ops industry consumer-dtc pitfalls
```

Or load it as your default:

```
"Use the b2b-saas industry pack as my default context"
```

Claude will weight industry-specific guidance over the general modes.
