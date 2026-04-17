#!/usr/bin/env node
// Investor pipeline analyzer — parse investors.yml and surface actions

import fs from 'fs';

const path = 'config/investors.yml';
if (!fs.existsSync(path)) {
  console.log('No investors.yml found. Copy from investors.example.yml and fill in.');
  process.exit(0);
}

const content = fs.readFileSync(path, 'utf8');

console.log('');
console.log('founder-ops · investor pipeline');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// Simple YAML parsing for counts (not full YAML to avoid dependency)
const count = (section) => (content.match(new RegExp(`^\\s*- name:`, 'gm')) || []).length;

const sections = [
  { key: 'current_investors', label: 'Current investors' },
  { key: 'active_pipeline', label: 'Active pipeline' },
  { key: 'target_list', label: 'Target list' },
];

for (const s of sections) {
  const re = new RegExp(`${s.key}:([\\s\\S]*?)(?=^[a-z_]+:|$)`, 'm');
  const m = content.match(re);
  if (!m) {
    console.log(`  ${s.label}: (section missing)`);
    continue;
  }
  const sub = m[1];
  const n = (sub.match(/-\s*name:/g) || []).length;
  console.log(`  ${s.label}: ${n}`);
}

// Last investor update
const outputFiles = fs.existsSync('output') ? fs.readdirSync('output') : [];
const updateFiles = outputFiles.filter(f => f.includes('investor-update')).sort();
if (updateFiles.length > 0) {
  const latest = updateFiles[updateFiles.length - 1];
  const stat = fs.statSync(`output/${latest}`);
  const ageDays = Math.floor((Date.now() - stat.mtimeMs) / (1000 * 60 * 60 * 24));
  console.log(`  Last investor update: ${ageDays} days ago (${latest})`);
  if (ageDays > 35) {
    console.log(`  ⚠  OVERDUE → run /founder-ops update immediately`);
  }
} else {
  console.log(`  Last investor update: never`);
}

console.log('');
console.log('Suggested actions:');
console.log('  /founder-ops fundraise — research next investor on target list');
console.log('  /founder-ops update    — send monthly update');
console.log('');
