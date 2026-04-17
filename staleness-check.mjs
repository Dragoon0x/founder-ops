#!/usr/bin/env node
// Staleness check — find stale artifacts needing refresh

import fs from 'fs';
import path from 'path';

const now = Date.now();
const day = 1000 * 60 * 60 * 24;

const ageRules = [
  { dir: 'data', pattern: 'metrics', maxAge: 7, label: 'Metrics dashboard' },
  { dir: 'reports', pattern: 'retro-week', maxAge: 7, label: 'Weekly retro' },
  { dir: 'reports', pattern: 'retro-month', maxAge: 35, label: 'Monthly retro' },
  { dir: 'reports', pattern: 'retro-quarter', maxAge: 95, label: 'Quarterly retro' },
  { dir: 'output', pattern: 'investor-update', maxAge: 31, label: 'Investor update' },
  { dir: 'output', pattern: 'board-pack', maxAge: 95, label: 'Board pack' },
  { dir: 'reports', pattern: 'interview', maxAge: 14, label: 'Customer interview' },
  { dir: 'reports', pattern: 'health-score', maxAge: 31, label: 'Customer health' },
  { dir: 'data', pattern: 'competitors', maxAge: 31, label: 'Competitor update' },
  { dir: 'reports', pattern: 'access-review', maxAge: 95, label: 'Access review' },
  { dir: 'reports', pattern: 'saas-audit', maxAge: 95, label: 'SaaS audit' },
];

console.log('');
console.log('founder-ops · staleness check');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

function findLatest(dir, pattern) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir)
    .filter(f => f.includes(pattern))
    .map(f => ({
      name: f,
      path: path.join(dir, f),
      mtime: fs.statSync(path.join(dir, f)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime);
  return files[0] || null;
}

let stale = 0;
let ok = 0;
let missing = 0;

for (const rule of ageRules) {
  const latest = findLatest(rule.dir, rule.pattern);
  if (!latest) {
    console.log(`  !  ${rule.label}: no files yet`);
    missing++;
  } else {
    const ageDays = Math.floor((now - latest.mtime) / day);
    if (ageDays > rule.maxAge) {
      console.log(`  ✗  ${rule.label}: ${ageDays} days old (max ${rule.maxAge}) → ${latest.name}`);
      stale++;
    } else {
      console.log(`  ✓  ${rule.label}: ${ageDays}d old`);
      ok++;
    }
  }
}

console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  Up-to-date: ${ok}  ·  Stale: ${stale}  ·  Missing: ${missing}`);
console.log('');

if (stale > 0 || missing > 3) {
  console.log('  Action: refresh stale artifacts — they become less useful over time');
  console.log('');
}
