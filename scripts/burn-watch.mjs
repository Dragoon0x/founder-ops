#!/usr/bin/env node
// Burn watch — read company.yml, flag if runway < threshold
import fs from 'fs';

const THRESHOLD_MONTHS = 12;

if (!fs.existsSync('config/company.yml')) {
  console.error('config/company.yml not found. Copy from company.example.yml and fill in.');
  process.exit(1);
}

const content = fs.readFileSync('config/company.yml', 'utf8');
const get = (key) => {
  const match = content.match(new RegExp(`${key}:\\s*([\\d.]+)`));
  return match ? parseFloat(match[1]) : null;
};

const mrr = get('mrr');
const burn = get('burn_monthly');
const runway = get('runway_months');

console.log('');
console.log('founder-ops burn watch');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  MRR:              $${(mrr || 0).toLocaleString()}`);
console.log(`  Monthly burn:     $${(burn || 0).toLocaleString()}`);
console.log(`  Net burn:         $${((burn || 0) - (mrr || 0)).toLocaleString()}`);
console.log(`  Runway:           ${runway} months`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (runway === null) {
  console.log(`  !  runway_months not set in company.yml`);
} else if (runway < 6) {
  console.log(`  ✗  CRITICAL: ${runway} months is danger zone. Cut burn or close round NOW.`);
} else if (runway < THRESHOLD_MONTHS) {
  console.log(`  ⚠  WARNING: ${runway} months runway. Start fundraise prep or extend runway.`);
} else {
  console.log(`  ✓  Healthy: ${runway} months runway`);
}
console.log('');
