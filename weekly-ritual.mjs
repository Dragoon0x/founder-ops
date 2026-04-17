#!/usr/bin/env node
// founder-ops weekly ritual — runs through the standard weekly flow

import fs from 'fs';
import path from 'path';

console.log('');
console.log('founder-ops · weekly ritual');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const today = new Date();
const weekOf = today.toISOString().slice(0, 10);
const checks = [];

// Has weekly retro been written?
const retroPath = `reports/retro-week-${weekOf}.md`;
if (fs.existsSync(retroPath)) {
  checks.push({ ok: true, msg: `Weekly retro: ${retroPath}` });
} else {
  checks.push({ ok: false, msg: `Weekly retro NOT written → run /founder-ops retro` });
}

// Has weekly metrics been updated?
const metricsPattern = `data/metrics-week-${weekOf}.md`;
if (fs.existsSync(metricsPattern)) {
  checks.push({ ok: true, msg: `Weekly metrics updated: ${metricsPattern}` });
} else {
  checks.push({ ok: false, msg: `Weekly metrics NOT updated → run /founder-ops metrics` });
}

// Has weekly update been sent?
const updatePath = `output/weekly-update-${weekOf}.md`;
if (fs.existsSync(updatePath)) {
  checks.push({ ok: true, msg: `Team weekly update drafted: ${updatePath}` });
} else {
  checks.push({ ok: null, msg: `Team weekly update not yet drafted → run /founder-ops internal-comms` });
}

// Customer interviews this week?
const reportsDir = 'reports';
let interviewCount = 0;
if (fs.existsSync(reportsDir)) {
  const files = fs.readdirSync(reportsDir);
  for (const f of files) {
    if (f.includes('interview')) {
      const stat = fs.statSync(path.join(reportsDir, f));
      const ageHours = (Date.now() - stat.mtimeMs) / (1000 * 60 * 60);
      if (ageHours < 168) interviewCount++; // 7 days
    }
  }
}
if (interviewCount >= 2) {
  checks.push({ ok: true, msg: `Customer interviews this week: ${interviewCount}` });
} else if (interviewCount > 0) {
  checks.push({ ok: null, msg: `Only ${interviewCount} customer interview this week — target 2-5` });
} else {
  checks.push({ ok: false, msg: `Zero customer interviews this week → run /founder-ops discovery` });
}

// Print
console.log('');
for (const c of checks) {
  if (c.ok === true) console.log(`  ✓  ${c.msg}`);
  else if (c.ok === false) console.log(`  ✗  ${c.msg}`);
  else console.log(`  !  ${c.msg}`);
}
console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('Suggested order:');
console.log('  1. /founder-ops metrics    — update dashboard');
console.log('  2. /founder-ops retro      — weekly reflection');
console.log('  3. /founder-ops internal-comms — team update');
console.log('');
