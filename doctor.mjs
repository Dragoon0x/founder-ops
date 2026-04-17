#!/usr/bin/env node
// founder-ops doctor — validate setup

import fs from 'fs';
import path from 'path';

const checks = [];
const pass = (msg) => checks.push({ ok: true, msg });
const fail = (msg) => checks.push({ ok: false, msg });
const warn = (msg) => checks.push({ ok: null, msg });

// Check required config files
const configs = ['founder', 'company', 'product', 'investors'];
for (const c of configs) {
  const real = `config/${c}.yml`;
  const example = `config/${c}.example.yml`;
  if (fs.existsSync(real)) pass(`config/${c}.yml exists`);
  else if (fs.existsSync(example)) warn(`config/${c}.yml missing — copy from ${example} and fill in`);
  else fail(`config/${c}.example.yml missing — broken install`);
}

// Check modes
const modesDir = 'modes';
if (!fs.existsSync(modesDir)) {
  fail('modes/ directory missing');
} else {
  const modes = fs.readdirSync(modesDir).filter(f => f.endsWith('.md') && !f.startsWith('_'));
  if (modes.length >= 15) pass(`${modes.length} modes installed`);
  else warn(`Only ${modes.length} modes found (expected 15)`);
}

// Check CLAUDE.md
if (fs.existsSync('CLAUDE.md')) pass('CLAUDE.md exists');
else fail('CLAUDE.md missing — Claude Code will not know how to use this');

// Check skill entry
if (fs.existsSync('.claude/skills/founder-ops/SKILL.md')) pass('SKILL.md installed for Claude Code discovery');
else warn('.claude/skills/founder-ops/SKILL.md missing — run from within Claude Code to auto-install');

// Check output dirs
for (const d of ['output', 'reports', 'data']) {
  if (fs.existsSync(d)) pass(`${d}/ directory exists`);
  else fail(`${d}/ directory missing`);
}

// Check gitignore
if (fs.existsSync('.gitignore')) {
  const gi = fs.readFileSync('.gitignore', 'utf8');
  if (gi.includes('config/founder.yml')) pass('.gitignore protects config/founder.yml');
  else warn('.gitignore does not protect real config — your data could leak');
}

// Report
console.log('');
console.log('founder-ops doctor');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
let okCount = 0, warnCount = 0, failCount = 0;
for (const c of checks) {
  if (c.ok === true) { console.log(`  ✓  ${c.msg}`); okCount++; }
  else if (c.ok === false) { console.log(`  ✗  ${c.msg}`); failCount++; }
  else { console.log(`  !  ${c.msg}`); warnCount++; }
}
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  ${okCount} passed, ${warnCount} warnings, ${failCount} failed`);
console.log('');
if (failCount > 0) process.exit(1);
