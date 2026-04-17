#!/usr/bin/env node
// Flag churn-risk customers from a usage delta CSV.
// usage.csv: customer, mrr, usage_delta_30d_pct, contract_renewal_days, exec_sponsor_status, last_qbr_days_ago
// Flags anything fitting >=2 of: usage_delta_30d_pct < -25, contract_renewal_days < 90, exec_sponsor_status='gone', last_qbr_days_ago > 180.

import fs from 'node:fs';

const args = process.argv.slice(2);
const getArg = (f) => { const i = args.indexOf(f); return i === -1 ? null : args[i+1]; };
const input = getArg('--input');
const output = getArg('--output') || 'output/churn-risk.md';
if (!input) { console.error('--input required'); process.exit(1); }

const csv = fs.readFileSync(input, 'utf8').trim().split('\n').map(r => r.split(','));
const [h, ...data] = csv;
const headers = h.map(x => x.trim().toLowerCase());

const atRisk = [];
for (const r of data) {
  const c = Object.fromEntries(headers.map((k, i) => [k, (r[i] || '').trim()]));
  const signals = [];
  if (parseFloat(c.usage_delta_30d_pct) < -25) signals.push('usage dropped');
  if (parseFloat(c.contract_renewal_days) < 90) signals.push('renewal near');
  if ((c.exec_sponsor_status || '').toLowerCase() === 'gone') signals.push('sponsor gone');
  if (parseFloat(c.last_qbr_days_ago) > 180) signals.push('stale QBR');
  if (signals.length >= 2) atRisk.push({ ...c, signals });
}

atRisk.sort((a, b) => parseFloat(b.mrr || 0) - parseFloat(a.mrr || 0));

let md = `# Churn Risk — ${new Date().toISOString().slice(0, 10)}\n\n**At risk:** ${atRisk.length} customers, $${atRisk.reduce((s, x) => s + parseFloat(x.mrr || 0), 0).toFixed(0)} MRR\n\n`;
md += '| Customer | MRR | Signals | Owner |\n|---|---:|---|---|\n';
for (const r of atRisk) md += `| ${r.customer} | $${r.mrr} | ${r.signals.join(', ')} | ??? |\n`;
md += '\n## Actions\n- [ ] Assign owner per row above\n- [ ] Schedule save call within 7 days\n- [ ] Brief exec sponsor if MRR > $5K\n';

fs.writeFileSync(output, md);
console.log(`Flagged ${atRisk.length} accounts → ${output}`);
