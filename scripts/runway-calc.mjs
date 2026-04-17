#!/usr/bin/env node
/**
 * Runway Calculator
 * Models runway under different scenarios.
 *
 * Usage: node runway-calc.mjs [cash] [monthly-burn] [monthly-revenue]
 * Defaults to demo values if no args provided.
 */

const cash = parseFloat(process.argv[2]) || 2400000;
const burn = parseFloat(process.argv[3]) || 120000;
const revenue = parseFloat(process.argv[4]) || 45000;

const bold = '\x1b[1m';
const reset = '\x1b[0m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';

console.log(`${bold}Runway Calculator${reset}`);
console.log('═'.repeat(50));
console.log(`Cash balance:    $${cash.toLocaleString()}`);
console.log(`Monthly burn:    $${burn.toLocaleString()}`);
console.log(`Monthly revenue: $${revenue.toLocaleString()}`);
console.log(`Net burn:        $${(burn - revenue).toLocaleString()}/mo`);
console.log('');

function scenario(label, cashAmt, burnAmt, revenueAmt, revenueGrowth) {
  let c = cashAmt;
  let r = revenueAmt;
  let months = 0;

  while (c > 0 && months < 60) {
    c = c - burnAmt + r;
    r = r * (1 + revenueGrowth);
    months++;
    if (c <= 0) break;
  }

  const col = months > 18 ? green : months > 9 ? yellow : red;
  console.log(`${col}${label.padEnd(30)} ${months} months${reset}`);
  return months;
}

console.log(`${bold}Scenarios:${reset}`);
console.log('─'.repeat(50));
scenario('No revenue growth',        cash, burn, revenue, 0);
scenario('5% MoM revenue growth',    cash, burn, revenue, 0.05);
scenario('10% MoM revenue growth',   cash, burn, revenue, 0.10);
scenario('15% MoM revenue growth',   cash, burn, revenue, 0.15);
scenario('20% burn reduction',       cash, burn * 0.8, revenue, 0.05);
scenario('40% burn reduction',       cash, burn * 0.6, revenue, 0.05);
scenario('Revenue doubles + 20% cut', cash, burn * 0.8, revenue * 2, 0.05);

console.log('\n' + '─'.repeat(50));
console.log(`${bold}Key thresholds:${reset}`);
console.log(`${green}  > 18 months: Comfortable${reset}`);
console.log(`${yellow}  9-18 months: Start planning${reset}`);
console.log(`${red}  < 9 months:  Take action NOW${reset}`);
