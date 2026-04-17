#!/usr/bin/env node
// Customer cohort — group customers by acquisition month from data/customers.md
import fs from 'fs';

if (!fs.existsSync('data/customers.md')) {
  console.log('No customer data yet. Create data/customers.md');
  console.log('Format:\n| # | Name | Company | Closed | Status | MRR |');
  process.exit(0);
}

const content = fs.readFileSync('data/customers.md', 'utf8');
const lines = content.split('\n').filter(l => l.startsWith('|') && !l.includes('---') && !l.includes('Name |'));

const cohorts = {};
let totalMRR = 0;
let active = 0;
let churned = 0;

for (const line of lines) {
  const cells = line.split('|').map(c => c.trim());
  const dateMatch = cells.join(' ').match(/(\d{4})-(\d{2})/);
  const status = (cells[5] || '').toLowerCase();
  const mrrMatch = cells.join(' ').match(/\$?([\d,]+)/g);

  if (dateMatch) {
    const cohort = `${dateMatch[1]}-${dateMatch[2]}`;
    if (!cohorts[cohort]) cohorts[cohort] = { count: 0, active: 0, mrr: 0 };
    cohorts[cohort].count++;
    if (status.includes('active')) {
      cohorts[cohort].active++;
      active++;
    } else if (status.includes('churn')) {
      churned++;
    }
  }
}

console.log('\nfounder-ops customer cohort\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('  Month     Acquired  Active  Retention');
console.log('  ─────     ────────  ──────  ─────────');
for (const month of Object.keys(cohorts).sort()) {
  const c = cohorts[month];
  const ret = c.count > 0 ? ((c.active / c.count) * 100).toFixed(0) : '0';
  console.log(`  ${month}    ${c.count.toString().padStart(8)}  ${c.active.toString().padStart(6)}  ${ret}%`);
}
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  Total active: ${active} | Churned: ${churned}`);
console.log('');
