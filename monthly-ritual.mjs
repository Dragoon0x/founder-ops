#!/usr/bin/env node
// founder-ops monthly ritual — runs through the standard monthly flow

import fs from 'fs';
import path from 'path';

console.log('');
console.log('founder-ops · monthly ritual');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const today = new Date();
const monthOf = today.toISOString().slice(0, 7);
const checks = [];

const targets = [
  { path: `reports/retro-month-${monthOf}.md`, name: 'Monthly retro', mode: 'retro' },
  { path: `output/investor-update-${monthOf}.md`, name: 'Investor update', mode: 'update' },
  { path: `data/metrics-month-${monthOf}.md`, name: 'Monthly metrics dashboard', mode: 'metrics' },
  { path: `reports/customer-health-${monthOf}.md`, name: 'Customer health roll-up', mode: 'customer-success' },
  { path: `reports/saas-audit-${monthOf}.md`, name: 'SaaS cost audit', mode: 'operations' },
];

for (const t of targets) {
  if (fs.existsSync(t.path)) {
    checks.push({ ok: true, msg: `${t.name}: ${t.path}` });
  } else {
    checks.push({ ok: false, msg: `${t.name} NOT done → run /founder-ops ${t.mode}` });
  }
}

console.log('');
for (const c of checks) {
  if (c.ok === true) console.log(`  ✓  ${c.msg}`);
  else if (c.ok === false) console.log(`  ✗  ${c.msg}`);
}
console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('Monthly priority sequence:');
console.log('  1. /founder-ops metrics              — update dashboard');
console.log('  2. /founder-ops customer-success     — health roll-up');
console.log('  3. /founder-ops retro                — monthly reflection');
console.log('  4. /founder-ops update               — investor update (DUE)');
console.log('  5. /founder-ops operations           — SaaS audit');
console.log('');
