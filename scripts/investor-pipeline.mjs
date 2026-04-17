#!/usr/bin/env node
// Investor pipeline — visualize stage funnel from data/investor-pipeline.md
import fs from 'fs';

if (!fs.existsSync('data/investor-pipeline.md')) {
  console.log('No investor pipeline yet. Create data/investor-pipeline.md');
  console.log('Format:\n| Investor | Partner | Stage | Last Touch | Next Step |');
  process.exit(0);
}

const content = fs.readFileSync('data/investor-pipeline.md', 'utf8');
const stages = {
  cold: [],
  warm_intro: [],
  meeting_1: [],
  meeting_2: [],
  partner_meeting: [],
  ic_meeting: [],
  term_sheet: [],
  closed: [],
  passed: [],
};

const lines = content.split('\n').filter(l => l.startsWith('|') && !l.includes('---') && !l.includes('Investor |'));
for (const line of lines) {
  const cells = line.split('|').map(c => c.trim());
  const stage = cells[3] || '';
  const key = stage.toLowerCase().replace(/[\s-]/g, '_');
  if (stages[key]) stages[key].push(cells[1] || 'unknown');
}

console.log('\nfounder-ops investor pipeline\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
const stageOrder = ['cold', 'warm_intro', 'meeting_1', 'meeting_2', 'partner_meeting', 'ic_meeting', 'term_sheet', 'closed', 'passed'];
for (const stage of stageOrder) {
  const list = stages[stage];
  const bar = '█'.repeat(Math.min(list.length, 30));
  console.log(`  ${stage.padEnd(18)} ${list.length.toString().padStart(3)} ${bar}`);
}
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const total = Object.values(stages).reduce((s, l) => s + l.length, 0);
const active = total - stages.closed.length - stages.passed.length;
const conv = total > 0 ? ((stages.term_sheet.length + stages.closed.length) / total * 100).toFixed(1) : '0';
console.log(`\n  Total: ${total} | Active: ${active} | Conv to TS+: ${conv}%`);
console.log('');
