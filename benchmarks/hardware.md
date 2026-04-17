# Hardware Benchmarks

Hardware (consumer electronics, robotics, IoT) operates at fundamentally
different physics than software.

## Margin Structure

| Tier | Gross Margin |
|------|-------------|
| Commodity hardware | 5-15% |
| Branded consumer hardware (Sonos, GoPro) | 25-45% |
| Premium hardware (Apple) | 35-55% |
| Hardware + subscription bundle (Peloton) | 30-45% device, 70-80% subscription |
| Robotics (mid-volume) | 30-50% |
| Specialized industrial | 50-70% |

## BOM (Bill of Materials) Reality

For a $200 retail consumer device:
- BOM: $40-80 (20-40% of retail)
- Manufacturing labor: $5-15
- Tooling amortization: $5-15
- Logistics: $10-20
- Channel margin (retail): $40-60 (20-30%)
- Returns/warranty reserve: $10-25
- Marketing per unit: $15-50
- Cost of capital (inventory): $2-10
- Net contribution: -$10 to +$40

**Most consumer hardware loses money for 1-3 years.** Volume scaling helps, but BOM
costs only fall 20-40% over the lifecycle.

## Lead Times

| Stage | Time |
|-------|------|
| Prototype → DFM (design for manufacturing) | 2-4 months |
| DFM → first production run | 3-6 months |
| Component lead time (chips, displays) | 3-12 months |
| Tooling fabrication | 2-4 months |
| Certification (FCC, CE, etc.) | 1-3 months |
| First container shipping | 4-6 weeks |
| Total from final prototype to customers: 9-18 months |

## Inventory Math

Working capital trapped in inventory:
- 60-90 days of inventory on hand
- 30-60 days of in-transit inventory
- 30-60 days A/R from retail channel
- = 120-210 days of revenue tied up

For $10M revenue business: ~$3-6M trapped in working capital.

## Volumes & Pricing

| Annual Volume | Manufacturer Type |
|---------------|-------------------|
| <1K units | Maker / small contract manufacturer (CM) |
| 1K-10K | Small CM, manual assembly |
| 10K-100K | Mid-tier CM, semi-automated |
| 100K-1M | Tier 1 CM (Foxconn, Pegatron) |
| 1M+ | Multi-CM strategy required |

## Crowdfunding Reality

Successful Kickstarter campaigns:
- 30-40% never deliver
- 50% deliver 6+ months late
- 10% deliver close to schedule
- 5% deliver as promised on schedule

If using crowdfunding for product validation:
- Min viable to launch: $50K raised
- Healthy to launch: $250K-$1M
- Only ~20% of crowdfunded products become real businesses

## Returns & Warranty

| Product Type | Return Rate | Warranty Cost |
|--------------|-------------|---------------|
| Consumer electronics (general) | 8-15% | 3-7% of revenue |
| Premium consumer | 5-12% | 3-5% of revenue |
| Wearables | 10-20% (form factor issues) | 5-10% |
| Smart home | 10-15% | 4-8% |
| Robotics (consumer) | 15-25% | 8-15% |
| Apparel/wearable accessories | 20-40% (size/fit) | 5-10% |

Build returns and warranty into pricing OR you'll bleed cash.

## Distribution Margin Stacking

Suggested retail $200 → distributor cost flow:
- Retail price: $200
- Retail margin (40%): retailer pays $120
- Distributor margin (15-20%): you sell at $96-100
- Your COGS: $60
- Your gross margin: 38-40%

DTC eliminates 2 levels but requires marketing to fill the gap.

## Hardware-as-a-Service (Recurring)

| Bundle Model | Notes |
|--------------|-------|
| Subscription unlock features (Peloton, Tesla) | Adds 70%+ margin software revenue |
| Consumables (HP printer ink, Keurig) | Razor-and-blade |
| Service contracts (Apple Care) | 8-15% attach rate, 80%+ margin |
| Pure HaaS (no upfront) | Higher CAC payback (24-36mo), but recurring |

## Common Hardware Failure Modes

1. **Underestimating tooling costs** ($50K-$500K, depending on complexity)
2. **Underestimating returns** (15% returns on a 30% margin product = breakeven)
3. **Underestimating inventory cash** (kills more hardware startups than anything)
4. **Quality issues at scale** (factory yield drops, batch rejects)
5. **Over-customization** (every variant is a new SKU is a new tooling)
6. **Channel conflict** (DTC vs retail pricing wars)
7. **Component obsolescence** (your chip is EOL, redesign required)

## Decision Framework

Ask before any hardware company:
1. What's the BOM at 100K units? At 1K? Can we get to 30%+ margin?
2. What's our minimum viable order quantity from CM?
3. How much working capital do we need at $10M revenue?
4. What's the right channel: DTC, retail, or distributor?
5. Can we add a software/subscription layer for recurring revenue?
6. What's the regulatory path (FCC, UL, CE, FDA, EPA)?
