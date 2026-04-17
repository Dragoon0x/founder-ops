#!/usr/bin/env node
// Follow-up cadence checker — flag investors / customers / candidates due for follow-up
import fs from 'fs';
import path from 'path';

const today = new Date();
const daysSince = (date) => Math.floor((today - new Date(date)) / (1000 * 60 * 60 * 24));

// Cadence rules (days)
const cadence = {
  investor_active: 14,
  investor_warm: 30,
  investor_cold: 60,
  customer_check_in: 30,
  candidate_active: 5,
  candidate_held: 14,
};

function checkFile(filepath, type, threshold) {
  if (!fs.existsSync(filepath)) return [];
  const content = fs.readFileSync(filepath, 'utf8');
  const flagged = [];
  const lines = content.split('\n').filter(l => l.startsWith('|') && !l.includes('---'));
  for (const line of lines) {
    const cells = line.split('|').map(c => c.trim());
    const dateMatch = cells.join(' ').match(/\d{4}-\d{2}-\d{2}/);
    if (dateMatch) {
      const days = daysSince(dateMatch[0]);
      if (days > threshold) {
        flagged.push({ type, line, days });
      }
    }
  }
  return flagged;
}

console.log('');
console.log('founder-ops follow-up cadence');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const all = [
  ...checkFile('data/investors-active.md', 'Active investor', cadence.investor_active),
  ...checkFile('data/investors-warm.md', 'Warm investor', cadence.investor_warm),
  ...checkFile('data/customers.md', 'Customer', cadence.customer_check_in),
  ...checkFile('data/candidates.md', 'Candidate', cadence.candidate_active),
];

if (all.length === 0) {
  console.log('  ✓ All follow-ups current');
} else {
  console.log(`  ⚠  ${all.length} follow-ups overdue:\n`);
  for (const f of all.sort((a, b) => b.days - a.days)) {
    console.log(`  [${f.type}] ${f.days} days: ${f.line.substring(0, 80)}`);
  }
}
console.log('');
