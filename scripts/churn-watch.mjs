#!/usr/bin/env node
/**
 * Churn Watch
 * Monitors churn signals and generates an alert report.
 *
 * Usage: node churn-watch.mjs [path-to-customers.json]
 *
 * Expected JSON format: array of customer objects with:
 * { name, mrr, lastLogin, loginFrequency, npsScore, supportTickets, contractEnd }
 */

import { readFileSync } from 'fs';

const file = process.argv[2];

const demo = [
  { name: 'Acme Corp', mrr: 5000, lastLogin: '2026-04-10', loginFrequency: 0.3, npsScore: 7, supportTickets: 5, contractEnd: '2026-06-15' },
  { name: 'Beta Inc', mrr: 12000, lastLogin: '2026-04-16', loginFrequency: 0.9, npsScore: 9, supportTickets: 0, contractEnd: '2027-01-01' },
  { name: 'Gamma LLC', mrr: 3000, lastLogin: '2026-03-01', loginFrequency: 0.1, npsScore: 4, supportTickets: 8, contractEnd: '2026-05-01' },
  { name: 'Delta Co', mrr: 8000, lastLogin: '2026-04-14', loginFrequency: 0.6, npsScore: 6, supportTickets: 3, contractEnd: '2026-07-01' },
  { name: 'Epsilon Inc', mrr: 15000, lastLogin: '2026-02-15', loginFrequency: 0.05, npsScore: 3, supportTickets: 12, contractEnd: '2026-05-15' },
  { name: 'Zeta Corp', mrr: 2000, lastLogin: '2026-04-15', loginFrequency: 0.7, npsScore: 8, supportTickets: 1, contractEnd: '2026-12-01' },
];

const customers = file ? JSON.parse(readFileSync(file, 'utf8')) : demo;

function riskScore(c) {
  let risk = 0;
  const now = new Date('2026-04-17');

  // Login recency (0-30 points)
  const daysSinceLogin = Math.floor((now - new Date(c.lastLogin)) / 86400000);
  if (daysSinceLogin > 30) risk += 30;
  else if (daysSinceLogin > 14) risk += 20;
  else if (daysSinceLogin > 7) risk += 10;

  // Login frequency (0-25 points)
  if (c.loginFrequency < 0.1) risk += 25;
  else if (c.loginFrequency < 0.3) risk += 15;
  else if (c.loginFrequency < 0.5) risk += 5;

  // NPS (0-20 points)
  if (c.npsScore <= 4) risk += 20;
  else if (c.npsScore <= 6) risk += 10;

  // Support tickets (0-15 points)
  if (c.supportTickets > 10) risk += 15;
  else if (c.supportTickets > 5) risk += 10;
  else if (c.supportTickets > 3) risk += 5;

  // Contract proximity (0-10 points)
  const daysToRenewal = Math.floor((new Date(c.contractEnd) - now) / 86400000);
  if (daysToRenewal < 30) risk += 10;
  else if (daysToRenewal < 60) risk += 5;

  return risk;
}

function riskLevel(score) {
  if (score >= 60) return { label: 'CRITICAL', color: '\x1b[31m' };
  if (score >= 40) return { label: 'HIGH', color: '\x1b[33m' };
  if (score >= 20) return { label: 'MEDIUM', color: '\x1b[36m' };
  return { label: 'LOW', color: '\x1b[32m' };
}

const bold = '\x1b[1m';
const reset = '\x1b[0m';

console.log(`${bold}Churn Watch Report — ${new Date().toISOString().slice(0, 10)}${reset}`);
console.log('═'.repeat(70));

const scored = customers.map(c => ({ ...c, risk: riskScore(c) })).sort((a, b) => b.risk - a.risk);

let totalAtRisk = 0;

for (const c of scored) {
  const { label, color } = riskLevel(c.risk);
  console.log(`\n${color}[${label}]${reset} ${bold}${c.name}${reset} — $${c.mrr.toLocaleString()}/mo — Risk: ${c.risk}/100`);

  const signals = [];
  const daysSinceLogin = Math.floor((new Date('2026-04-17') - new Date(c.lastLogin)) / 86400000);
  if (daysSinceLogin > 7) signals.push(`Last login ${daysSinceLogin} days ago`);
  if (c.loginFrequency < 0.3) signals.push(`Low login frequency (${(c.loginFrequency * 100).toFixed(0)}%)`);
  if (c.npsScore <= 6) signals.push(`NPS: ${c.npsScore}`);
  if (c.supportTickets > 3) signals.push(`${c.supportTickets} support tickets`);
  const daysToRenewal = Math.floor((new Date(c.contractEnd) - new Date('2026-04-17')) / 86400000);
  if (daysToRenewal < 60) signals.push(`Renewal in ${daysToRenewal} days`);

  if (signals.length) console.log(`  Signals: ${signals.join(' | ')}`);

  if (c.risk >= 40) totalAtRisk += c.mrr;
}

console.log('\n' + '═'.repeat(70));
console.log(`${bold}MRR at risk (HIGH + CRITICAL): $${totalAtRisk.toLocaleString()}/mo${reset}`);
console.log(`${bold}Total customers monitored: ${customers.length}${reset}`);
console.log(`Critical: ${scored.filter(c => c.risk >= 60).length} | High: ${scored.filter(c => c.risk >= 40 && c.risk < 60).length} | Medium: ${scored.filter(c => c.risk >= 20 && c.risk < 40).length} | Low: ${scored.filter(c => c.risk < 20).length}`);
