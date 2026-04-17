#!/usr/bin/env node
/**
 * OKR Progress Tracker
 * Reads OKR data from a JSON file and generates a progress report.
 *
 * Usage: node okr-progress.mjs [path-to-okrs.json]
 *
 * Expected JSON format:
 * {
 *   "quarter": "Q1 2026",
 *   "objectives": [
 *     {
 *       "title": "Win the mid-market",
 *       "owner": "CEO",
 *       "keyResults": [
 *         { "title": "Increase mid-market ARR to $700K", "baseline": 400000, "target": 700000, "current": 550000 }
 *       ]
 *     }
 *   ]
 * }
 */

import { readFileSync } from 'fs';

const file = process.argv[2];
if (!file) {
  console.log('Usage: node okr-progress.mjs <okrs.json>');
  console.log('\nGenerating sample report with demo data...\n');
}

const demo = {
  quarter: 'Q1 2026',
  objectives: [
    {
      title: 'Achieve product-market fit in mid-market',
      owner: 'CEO',
      keyResults: [
        { title: 'Increase mid-market ARR from $400K to $700K', baseline: 400000, target: 700000, current: 580000 },
        { title: 'Close 15 new mid-market accounts', baseline: 0, target: 15, current: 11 },
        { title: 'Reduce mid-market sales cycle from 45 to 30 days', baseline: 45, target: 30, current: 35 },
      ],
    },
    {
      title: 'Build a world-class engineering culture',
      owner: 'CTO',
      keyResults: [
        { title: 'Deploy frequency from weekly to daily', baseline: 1, target: 5, current: 3 },
        { title: 'Test coverage from 45% to 80%', baseline: 45, target: 80, current: 68 },
        { title: 'Engineering NPS from 35 to 55', baseline: 35, target: 55, current: 48 },
      ],
    },
  ],
};

const data = file ? JSON.parse(readFileSync(file, 'utf8')) : demo;

function score(kr) {
  const range = kr.target - kr.baseline;
  if (range === 0) return 1.0;
  const progress = (kr.current - kr.baseline) / range;
  return Math.max(0, Math.min(1, progress));
}

function bar(s, width = 20) {
  const filled = Math.round(s * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

function color(s) {
  if (s >= 0.7) return '\x1b[32m'; // green
  if (s >= 0.4) return '\x1b[33m'; // yellow
  return '\x1b[31m'; // red
}

const reset = '\x1b[0m';
const bold = '\x1b[1m';

console.log(`${bold}OKR Progress Report — ${data.quarter}${reset}`);
console.log('═'.repeat(60));

let allScores = [];

for (const obj of data.objectives) {
  console.log(`\n${bold}Objective: ${obj.title}${reset}`);
  console.log(`Owner: ${obj.owner}`);
  console.log('─'.repeat(50));

  for (const kr of obj.keyResults) {
    const s = score(kr);
    allScores.push(s);
    const c = color(s);
    console.log(`  ${c}${bar(s)} ${(s * 100).toFixed(0)}%${reset}  ${kr.title}`);
    console.log(`    Baseline: ${kr.baseline} → Target: ${kr.target} → Current: ${kr.current}`);
  }

  const objAvg = obj.keyResults.reduce((sum, kr) => sum + score(kr), 0) / obj.keyResults.length;
  console.log(`  ${bold}Objective score: ${(objAvg).toFixed(2)}${reset}`);
}

const overallAvg = allScores.reduce((a, b) => a + b, 0) / allScores.length;
console.log('\n' + '═'.repeat(60));
console.log(`${bold}Overall company OKR score: ${(overallAvg).toFixed(2)}${reset}`);

if (overallAvg >= 0.7) console.log('Assessment: On track. Consider if targets are ambitious enough.');
else if (overallAvg >= 0.4) console.log('Assessment: Making progress. Focus on lagging KRs.');
else console.log('Assessment: Behind. Immediate intervention needed on red KRs.');
