#!/usr/bin/env node
// Weekly digest — generate a report of what's been produced this week
import fs from 'fs';
import path from 'path';

const today = new Date();
const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

function filesModifiedSince(dir, since) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .map(f => ({ name: f, mtime: fs.statSync(path.join(dir, f)).mtime }))
    .filter(f => f.mtime >= since)
    .sort((a, b) => b.mtime - a.mtime);
}

const sections = [
  ['Output (drafts, emails, PRDs)', 'output'],
  ['Reports (analyses, scorecards)', 'reports'],
  ['Data (interviews, metrics)', 'data'],
];

console.log('');
console.log(`founder-ops weekly digest — ${today.toDateString()}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

let total = 0;
for (const [label, dir] of sections) {
  const files = filesModifiedSince(dir, weekAgo);
  console.log(`\n${label} (${files.length}):`);
  for (const f of files.slice(0, 10)) {
    const day = f.mtime.toDateString().substring(4, 10);
    console.log(`  ${day}  ${f.name}`);
  }
  if (files.length > 10) console.log(`  ... and ${files.length - 10} more`);
  total += files.length;
}

console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  ${total} artifacts produced this week`);
console.log('');

if (total === 0) {
  console.log('  !  No artifacts this week. Either you didn\'t use founder-ops,');
  console.log('     or you\'re writing them somewhere else. Run a mode this week.');
}
