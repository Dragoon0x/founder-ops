#!/usr/bin/env node
/**
 * hire-pipeline.mjs
 * Reads data/hiring.yaml, prints pipeline by role, flags stale candidates and dropped ratios.
 * Usage: node scripts/hire-pipeline.mjs
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const STALE_DAYS = 7;

function parseYaml(text) {
  const out = { roles: [] };
  let role = null;
  let cand = null;
  for (const raw of text.split("\n")) {
    const line = raw.replace(/#.*$/, "");
    if (!line.trim()) continue;
    if (/^roles:/.test(line)) continue;
    let m;
    if ((m = line.match(/^  - title:\s*"?(.+?)"?$/))) { role = { title: m[1], candidates: [] }; out.roles.push(role); continue; }
    if ((m = line.match(/^    target_hires:\s*(\d+)/))) { if (role) role.target_hires = +m[1]; continue; }
    if ((m = line.match(/^    owner:\s*"?(.+?)"?$/))) { if (role) role.owner = m[1]; continue; }
    if (/^    candidates:/.test(line)) continue;
    if ((m = line.match(/^      - name:\s*"?(.+?)"?$/))) { cand = { name: m[1] }; role.candidates.push(cand); continue; }
    if ((m = line.match(/^        stage:\s*"?(.+?)"?$/))) { if (cand) cand.stage = m[1]; continue; }
    if ((m = line.match(/^        last_contact:\s*"?(.+?)"?$/))) { if (cand) cand.last_contact = m[1]; continue; }
    if ((m = line.match(/^        source:\s*"?(.+?)"?$/))) { if (cand) cand.source = m[1]; continue; }
  }
  return out;
}

const STAGES = ["sourced", "contacted", "screen", "technical", "onsite", "offer", "hired", "rejected", "withdrew"];

const file = path.join(ROOT, "data", "hiring.yaml");
if (!fs.existsSync(file)) {
  console.error(`No file at ${file}.`);
  process.exit(1);
}
const data = parseYaml(fs.readFileSync(file, "utf8"));
const now = new Date();

console.log("\nHiring pipeline\n");
for (const role of data.roles) {
  const counts = Object.fromEntries(STAGES.map(s => [s, 0]));
  let stale = [];
  for (const c of role.candidates) {
    counts[c.stage] = (counts[c.stage] || 0) + 1;
    const last = new Date(c.last_contact);
    const days = Math.floor((now - last) / 86400000);
    if (days > STALE_DAYS && !["hired", "rejected", "withdrew"].includes(c.stage)) {
      stale.push({ name: c.name, stage: c.stage, days });
    }
  }
  const active = STAGES.slice(0, 6).reduce((a, s) => a + (counts[s] || 0), 0);
  const hired = counts.hired || 0;
  console.log(`\x1b[1m${role.title}\x1b[0m  (owner: ${role.owner}, target: ${role.target_hires})`);
  console.log(`  Active: ${active}  Hired: ${hired}  Rejected: ${counts.rejected || 0}  Withdrew: ${counts.withdrew || 0}`);
  console.log(`  Funnel: sourced ${counts.sourced||0} → contacted ${counts.contacted||0} → screen ${counts.screen||0} → tech ${counts.technical||0} → onsite ${counts.onsite||0} → offer ${counts.offer||0}`);
  if (active > 0 && counts.onsite > 0) {
    const rate = (counts.onsite / (counts.sourced || 1) * 100).toFixed(0);
    console.log(`  Sourced→Onsite rate: ${rate}%  (target: 8-15% for senior, 15-25% for mid)`);
  }
  if (stale.length > 0) {
    console.log(`  \x1b[33mStale candidates (>${STALE_DAYS}d):\x1b[0m`);
    for (const s of stale) console.log(`    - ${s.name} (${s.stage}, ${s.days}d)`);
  }
  console.log();
}
