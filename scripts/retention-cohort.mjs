#!/usr/bin/env node
/**
 * retention-cohort.mjs
 * Reads data/customers.csv, prints monthly cohort retention table.
 * CSV format: customer_id,signup_month,churn_month
 * Usage: node scripts/retention-cohort.mjs
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const file = path.join(ROOT, "data", "customers.csv");
if (!fs.existsSync(file)) {
  console.error(`No file at ${file}. Expected CSV with columns: customer_id,signup_month,churn_month`);
  process.exit(1);
}
const raw = fs.readFileSync(file, "utf8").trim();
const [header, ...lines] = raw.split("\n");
const cols = header.split(",").map(s => s.trim());
const idx = {
  id: cols.indexOf("customer_id"),
  signup: cols.indexOf("signup_month"),
  churn: cols.indexOf("churn_month"),
};

const rows = lines.map(l => l.split(",").map(s => s.trim())).filter(r => r.length >= 2);

// Cohort = signup_month; M = months since signup
function monthDiff(a, b) {
  if (!a || !b) return null;
  const [ya, ma] = a.split("-").map(Number);
  const [yb, mb] = b.split("-").map(Number);
  return (yb - ya) * 12 + (mb - ma);
}

// Active at M = customer churn_month is either empty OR monthDiff(signup, churn) > M
const cohorts = {};
for (const r of rows) {
  const sig = r[idx.signup];
  if (!sig) continue;
  if (!cohorts[sig]) cohorts[sig] = [];
  cohorts[sig].push({ id: r[idx.id], churn: r[idx.churn] || null });
}

const cohortKeys = Object.keys(cohorts).sort();
if (cohortKeys.length === 0) {
  console.log("No cohort data.");
  process.exit(0);
}

// Compute today's "current" month as the latest cohort + 12 for width
const maxM = 12;

console.log("\nCohort retention (% still active each month after signup)\n");
const header2 = ["Cohort", "Size", ...Array.from({ length: maxM + 1 }, (_, i) => `M${i}`)];
console.log(header2.map(h => h.padStart(7)).join(" "));
for (const c of cohortKeys) {
  const size = cohorts[c].length;
  const row = [c, String(size)];
  for (let m = 0; m <= maxM; m++) {
    let active = 0;
    for (const cust of cohorts[c]) {
      if (!cust.churn) { active++; continue; }
      const d = monthDiff(c, cust.churn);
      if (d === null || d > m) active++;
    }
    const pct = size > 0 ? (active / size * 100).toFixed(0) + "%" : "-";
    row.push(pct);
  }
  console.log(row.map(v => v.padStart(7)).join(" "));
}

console.log("\nHealth heuristics:");
console.log("  B2B SaaS: M6 retention > 85% = strong; 70-85% = ok; < 70% = dig into reasons.");
console.log("  Consumer: M1 retention > 40%, M6 > 25% = strong.");
console.log("  Any business: look at the slope of retention past M1. Flattening = PMF signal.");
