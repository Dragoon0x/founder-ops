#!/usr/bin/env node
// Metrics snapshot — append today's metrics from company.yml to data/metrics-history.csv
import fs from 'fs';

if (!fs.existsSync('config/company.yml')) {
  console.error('config/company.yml not found.');
  process.exit(1);
}

const content = fs.readFileSync('config/company.yml', 'utf8');
const get = (key) => {
  const match = content.match(new RegExp(`${key}:\\s*([\\d.]+)`));
  return match ? parseFloat(match[1]) : '';
};

const today = new Date().toISOString().split('T')[0];
const row = [
  today,
  get('mrr'),
  get('arr'),
  get('burn_monthly'),
  get('runway_months'),
  get('customer_count'),
  get('churn_monthly'),
  get('net_retention'),
  get('cac'),
  get('ltv'),
].join(',');

const csv = 'data/metrics-history.csv';
if (!fs.existsSync(csv)) {
  fs.writeFileSync(csv, 'date,mrr,arr,burn_monthly,runway_months,customer_count,churn_monthly,net_retention,cac,ltv\n');
}
fs.appendFileSync(csv, row + '\n');

console.log(`Snapshot recorded: ${today}`);
console.log(`  MRR: $${get('mrr')}, Customers: ${get('customer_count')}, Runway: ${get('runway_months')}mo`);
