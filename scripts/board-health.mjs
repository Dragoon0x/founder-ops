#!/usr/bin/env node
/**
 * board-health.mjs
 * Scans for board-meeting artifacts in reports/, flags cadence issues, missing artifacts.
 * Expected: reports/board-meeting-<YYYY-MM-DD>.md
 * Usage: node scripts/board-health.mjs
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const dir = path.join(ROOT, "reports");
if (!fs.existsSync(dir)) {
  console.log("No reports/ directory.");
  process.exit(0);
}

const files = fs.readdirSync(dir).filter(f => /^board-meeting-\d{4}-\d{2}-\d{2}\.md$/.test(f));
const meetings = files.map(f => {
  const date = f.replace(/^board-meeting-/, "").replace(/\.md$/, "");
  const p = path.join(dir, f);
  const content = fs.readFileSync(p, "utf8");
  return { date, file: f, size: content.length, content };
}).sort((a, b) => a.date.localeCompare(b.date));

console.log(`\nBoard meetings tracked: ${meetings.length}\n`);
if (meetings.length === 0) {
  console.log("No board meeting files. Expected pattern: reports/board-meeting-YYYY-MM-DD.md");
  process.exit(0);
}

// Cadence analysis
console.log("Meetings by date:");
for (const m of meetings) console.log(`  ${m.date}  ${m.file}  (${m.size.toLocaleString()} chars)`);

// Expected quarterly: within 60 days of each other
if (meetings.length >= 2) {
  console.log("\nCadence:");
  for (let i = 1; i < meetings.length; i++) {
    const prev = new Date(meetings[i - 1].date);
    const cur = new Date(meetings[i].date);
    const days = Math.round((cur - prev) / 86400000);
    let status = "OK";
    if (days > 120) status = "⚠ Long gap (>120d)";
    else if (days < 60) status = "Close cadence";
    console.log(`  ${meetings[i - 1].date} → ${meetings[i].date}: ${days}d  ${status}`);
  }
}

// Last meeting recency
const last = meetings[meetings.length - 1];
const now = new Date();
const daysSince = Math.round((now - new Date(last.date)) / 86400000);
console.log(`\nDays since last meeting: ${daysSince}`);
if (daysSince > 120) console.log("⚠ Quarterly cadence slipping. Schedule next meeting.");

// Content checks
console.log("\nArtifact quality checks on recent meetings:");
const recent = meetings.slice(-3);
const REQUIRED = ["Headline", "KPI", "Cash", "Risk", "Ask"];
for (const m of recent) {
  const missing = REQUIRED.filter(k => !new RegExp(k, "i").test(m.content));
  if (missing.length > 0) console.log(`  ${m.date}: missing sections: ${missing.join(", ")}`);
  else console.log(`  ${m.date}: all expected sections present`);
}
