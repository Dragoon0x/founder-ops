#!/usr/bin/env node
// Generate research briefs for a list of investors.
// Usage: node batch/batch-investor-research.mjs --input investors.csv --output out/
//
// CSV: name, firm, fund_size, stage, thesis_url, portfolio_url, linkedin

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const getArg = (f) => { const i = args.indexOf(f); return i === -1 ? null : args[i+1]; };
const input = getArg('--input');
const outDir = getArg('--output') || 'output/investors';
const dry = args.includes('--dry-run');

if (!input) { console.error('--input required'); process.exit(1); }

const rows = fs.readFileSync(input, 'utf8').trim().split('\n').map(r => r.split(','));
const [h, ...data] = rows;
const headers = h.map(x => x.trim().toLowerCase());

function brief(inv) {
  return `# Investor Brief: ${inv.name} (${inv.firm})

## Snapshot
- **Firm:** ${inv.firm}
- **Fund size:** ${inv.fund_size || 'unknown'}
- **Stage focus:** ${inv.stage || 'unknown'}
- **LinkedIn:** ${inv.linkedin || 'unknown'}

## Research to do (before meeting)
- [ ] Read last 10 blog posts / tweets. Capture 3 strong opinions.
- [ ] Review 5 recent investments. Note pattern.
- [ ] Find a portfolio founder mutual connection. Ask about working style, cadence, helpfulness post-investment.
- [ ] Identify 1 genuinely unique thing they've said about our space.

## Questions to prepare answers for
- Why this problem? Why now? Why us?
- Biggest risk? (They'll ask. Have a real answer, not a dodge.)
- How much are you raising and why that number?
- Who else are you talking to?
- What have you learned in the last 90 days that changed your strategy?

## Our ask (if investing makes sense)
- Check size: $ ___
- Lead / follow: ___
- Value-add expected: intros to ___ and ___; operational help on ___

## Red flags to watch
- Fund on fund N, already 60%+ deployed → urgency is theirs, not yours
- Multiple portfolio companies in your exact space → conflict risk
- Founder references came with caveats like "he means well" → don't ignore

## Notes after meeting
_(fill in)_
`;
}

if (!dry) fs.mkdirSync(outDir, { recursive: true });
let n = 0;
for (const r of data) {
  const inv = Object.fromEntries(headers.map((k, i) => [k, (r[i] || '').trim()]));
  const fname = `${inv.name.replace(/[^a-z0-9]/gi, '_')}__${inv.firm.replace(/[^a-z0-9]/gi, '_')}.md`;
  const content = brief(inv);
  if (dry && n === 0) { console.log(content); break; }
  if (!dry) fs.writeFileSync(path.join(outDir, fname), content);
  n++;
}
if (!dry) console.log(`Wrote ${n} briefs to ${outDir}`);
