#!/usr/bin/env node
// Refresh metric snapshot files from a source CSV.
// Usage: node batch/batch-metric-refresh.mjs --input metrics.csv --output output/metrics/
// metrics.csv: metric_name, current_value, target, period, notes

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const getArg = (f) => { const i = args.indexOf(f); return i === -1 ? null : args[i+1]; };
const input = getArg('--input');
const out = getArg('--output') || 'output/metrics';

if (!input) { console.error('--input required'); process.exit(1); }

const rows = fs.readFileSync(input, 'utf8').trim().split('\n').map(r => r.split(','));
const [h, ...data] = rows;
const headers = h.map(x => x.trim().toLowerCase());

fs.mkdirSync(out, { recursive: true });
const stamp = new Date().toISOString().slice(0, 10);

for (const r of data) {
  const m = Object.fromEntries(headers.map((k, i) => [k, (r[i] || '').trim()]));
  const pct = m.target ? Math.round((parseFloat(m.current_value) / parseFloat(m.target)) * 100) : null;
  const body = `# ${m.metric_name}

**As of:** ${stamp}
**Current:** ${m.current_value}
**Target:** ${m.target} (${pct != null ? pct + '%' : 'n/a'})
**Period:** ${m.period}

## Notes
${m.notes || '_(none)_'}
`;
  const fname = `${stamp}__${m.metric_name.replace(/[^a-z0-9]/gi, '_')}.md`;
  fs.writeFileSync(path.join(out, fname), body);
}
console.log(`Wrote ${data.length} metric snapshots.`);
