#!/usr/bin/env node
/**
 * decision-log-summary.mjs
 * Reads decision-log markdown file, summarizes: count by quarter, recent entries,
 * entries past their review date.
 * Usage: node scripts/decision-log-summary.mjs [--file path]
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function arg(name, def = null) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}

const file = arg("file", path.join(ROOT, "data", "decision-log.md"));
if (!fs.existsSync(file)) {
  console.error(`No file at ${file}.`);
  process.exit(1);
}
const raw = fs.readFileSync(file, "utf8");
// Each entry: ## YYYY-MM-DD — title
const entries = [];
let current = null;
for (const line of raw.split("\n")) {
  const m = line.match(/^## (\d{4}-\d{2}-\d{2})\s*[—-]\s*(.+)$/);
  if (m) {
    if (current) entries.push(current);
    current = { date: m[1], title: m[2], body: "" };
  } else if (current) {
    current.body += line + "\n";
  }
}
if (current) entries.push(current);

// Extract review date from body
for (const e of entries) {
  const m = e.body.match(/Review date:\s*(\d{4}-\d{2}-\d{2})/i) || e.body.match(/\*\*Review date:\*\*\s*(\d{4}-\d{2}-\d{2})/);
  if (m) e.review = m[1];
  const m2 = e.body.match(/Owner:\s*([^\n]+)/) || e.body.match(/\*\*Owner:\*\*\s*([^\n]+)/);
  if (m2) e.owner = m2[1].trim();
}

const now = new Date().toISOString().slice(0, 10);
const byQuarter = {};
for (const e of entries) {
  const [y, m] = e.date.split("-");
  const q = `${y}-Q${Math.ceil(+m / 3)}`;
  byQuarter[q] = (byQuarter[q] || 0) + 1;
}

console.log(`\nDecision log summary (${entries.length} entries)\n`);
console.log("By quarter:");
for (const q of Object.keys(byQuarter).sort().reverse().slice(0, 8)) {
  console.log(`  ${q}: ${byQuarter[q]}`);
}

console.log("\nPast-due review (earliest first):");
const due = entries.filter(e => e.review && e.review < now).sort((a, b) => a.review.localeCompare(b.review));
if (due.length === 0) console.log("  None.");
else for (const e of due.slice(0, 10)) console.log(`  ${e.review}  ${e.title}${e.owner ? `  (${e.owner})` : ""}`);

console.log("\nMost recent decisions:");
for (const e of entries.slice(0, 5)) console.log(`  ${e.date}  ${e.title}`);

console.log(`\nAverage entries per quarter: ${(entries.length / Math.max(1, Object.keys(byQuarter).length)).toFixed(1)}`);
console.log("Health rule of thumb: 5-15/quarter. Much more = log is too chatty. Much less = decisions not being captured.");
