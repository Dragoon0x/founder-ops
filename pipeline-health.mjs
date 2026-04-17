#!/usr/bin/env node
// Pipeline health check — count artifacts across modes, flag stale files

import fs from 'fs';
import path from 'path';

function countFiles(dir, pattern) {
  if (!fs.existsSync(dir)) return 0;
  return fs.readdirSync(dir).filter(f => f.includes(pattern)).length;
}

function daysSince(filepath) {
  const stat = fs.statSync(filepath);
  return Math.floor((Date.now() - stat.mtimeMs) / (1000 * 60 * 60 * 24));
}

function latestFile(dir, pattern) {
  if (!fs.existsSync(dir)) return null;
  const files = fs.readdirSync(dir)
    .filter(f => f.includes(pattern))
    .map(f => ({ name: f, path: path.join(dir, f), mtime: fs.statSync(path.join(dir, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  return files[0] || null;
}

const report = {
  investors: countFiles('output', 'investor-'),
  outreach: countFiles('output', 'outreach-'),
  interviews: countFiles('reports', 'interview'),
  candidates: countFiles('reports', 'candidate-'),
  competitors: countFiles('reports', 'compete-'),
  retrosWeek: countFiles('reports', 'retro-week'),
  retrosMonth: countFiles('reports', 'retro-month'),
  prds: countFiles('output', 'prd-'),
};

console.log('');
console.log('founder-ops pipeline health');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  Investor briefs:      ${report.investors}`);
console.log(`  Outreach drafts:      ${report.outreach}`);
console.log(`  Customer interviews:  ${report.interviews}`);
console.log(`  Candidate scorecards: ${report.candidates}`);
console.log(`  Competitor deep dives:${report.competitors}`);
console.log(`  Weekly retros:        ${report.retrosWeek}`);
console.log(`  Monthly retros:       ${report.retrosMonth}`);
console.log(`  PRDs:                 ${report.prds}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

// Staleness flags
const lastRetro = latestFile('reports', 'retro-week');
if (lastRetro) {
  const age = daysSince(lastRetro.path);
  if (age > 7) console.log(`  ⚠  Last weekly retro is ${age} days old — run /founder-ops retro`);
  else console.log(`  ✓  Last retro: ${age} days ago`);
} else {
  console.log(`  !  No weekly retros yet — run /founder-ops retro`);
}

const lastUpdate = latestFile('output', 'investor-update');
if (lastUpdate) {
  const age = daysSince(lastUpdate.path);
  if (age > 30) console.log(`  ⚠  Last investor update is ${age} days old — run /founder-ops update`);
  else console.log(`  ✓  Last investor update: ${age} days ago`);
} else {
  console.log(`  !  No investor updates yet — run /founder-ops update`);
}

const lastInterview = latestFile('reports', 'interview');
if (lastInterview) {
  const age = daysSince(lastInterview.path);
  if (age > 14) console.log(`  ⚠  Last customer interview is ${age} days old — schedule more`);
  else console.log(`  ✓  Last customer interview: ${age} days ago`);
} else {
  console.log(`  !  No customer interviews logged — run /founder-ops discovery`);
}
console.log('');
