#!/usr/bin/env node
// Compute health scores for every customer from a usage CSV.
// Usage: node batch/batch-customer-health.mjs --input usage.csv --output health.csv
//
// usage.csv: customer, mrr, last_login_days_ago, weekly_active_users, seats_licensed, nps, tickets_last_30d

import fs from 'node:fs';

const args = process.argv.slice(2);
const getArg = (f) => { const i = args.indexOf(f); return i === -1 ? null : args[i+1]; };
const input = getArg('--input');
const output = getArg('--output') || 'output/customer-health.csv';

if (!input) { console.error('--input required'); process.exit(1); }

const csv = fs.readFileSync(input, 'utf8').trim().split('\n').map(r => r.split(','));
const [h, ...data] = csv;
const headers = h.map(x => x.trim().toLowerCase());

function score(c) {
  const login = parseFloat(c.last_login_days_ago || 999);
  const wau = parseFloat(c.weekly_active_users || 0);
  const seats = parseFloat(c.seats_licensed || 1);
  const utilization = Math.min(1, wau / seats);
  const nps = parseFloat(c.nps || 0);
  const tickets = parseFloat(c.tickets_last_30d || 0);

  let s = 50;
  if (login <= 3) s += 20;
  else if (login <= 7) s += 10;
  else if (login > 30) s -= 20;

  s += Math.round(utilization * 30);
  s += nps >= 9 ? 10 : nps >= 7 ? 5 : nps >= 0 ? 0 : -10;
  s -= Math.min(15, tickets * 2);

  return Math.max(0, Math.min(100, s));
}

const rows = data.map(r => Object.fromEntries(headers.map((k, i) => [k, (r[i] || '').trim()])));
const scored = rows.map(c => ({ ...c, health_score: score(c), tier: score(c) >= 75 ? 'green' : score(c) >= 50 ? 'yellow' : 'red' }));

const outHeaders = [...headers, 'health_score', 'tier'];
const lines = [outHeaders.join(','), ...scored.map(r => outHeaders.map(h => r[h] ?? '').join(','))];
fs.writeFileSync(output, lines.join('\n'));
console.log(`Scored ${scored.length} customers → ${output}`);
console.log(`Red: ${scored.filter(x => x.tier === 'red').length}  Yellow: ${scored.filter(x => x.tier === 'yellow').length}  Green: ${scored.filter(x => x.tier === 'green').length}`);
