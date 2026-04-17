#!/usr/bin/env node
/**
 * quarterly-review.mjs
 * Aggregates data from multiple sources into a quarterly review markdown.
 * Reads: data/metrics-history.csv, data/okrs.yaml, data/decision-log.md, data/hiring.yaml.
 * Writes: reports/quarterly-review-<QUARTER>.md
 * Usage: node scripts/quarterly-review.mjs --quarter 2026-Q1
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

function currentQuarter() {
  const d = new Date();
  const q = Math.floor(d.getMonth() / 3) + 1;
  return `${d.getFullYear()}-Q${q}`;
}

const quarter = arg("quarter", currentQuarter());
const [y, qs] = quarter.split("-Q");
const qn = Number(qs);
const startMonth = (qn - 1) * 3;
const startDate = new Date(Number(y), startMonth, 1);
const endDate = new Date(Number(y), startMonth + 3, 0);

// Metrics history
const mFile = path.join(ROOT, "data", "metrics-history.csv");
let metricsBlock = "_Metrics history not found._\n";
if (fs.existsSync(mFile)) {
  const raw = fs.readFileSync(mFile, "utf8").trim();
  const [hdr, ...lines] = raw.split("\n");
  const cols = hdr.split(",");
  const inRange = lines.map(l => l.split(",")).filter(r => {
    const d = new Date(r[0]);
    return d >= startDate && d <= endDate;
  });
  if (inRange.length > 0) {
    const first = inRange[0];
    const last = inRange[inRange.length - 1];
    metricsBlock = `### Key metrics (${quarter})\n\n| Metric | Start | End | Δ |\n|--------|-------|-----|---|\n`;
    for (let i = 1; i < cols.length; i++) {
      const s = Number(first[i]);
      const e = Number(last[i]);
      const delta = !isNaN(s) && !isNaN(e) ? `${s === 0 ? "n/a" : `${((e - s) / s * 100).toFixed(0)}%`}` : "-";
      metricsBlock += `| ${cols[i]} | ${first[i]} | ${last[i]} | ${delta} |\n`;
    }
  }
}

// Decisions in quarter
let decisionsBlock = "";
const dFile = path.join(ROOT, "data", "decision-log.md");
if (fs.existsSync(dFile)) {
  const raw = fs.readFileSync(dFile, "utf8");
  const matches = [...raw.matchAll(/^## (\d{4}-\d{2}-\d{2})\s*[—-]\s*(.+)$/gm)];
  const inQuarter = matches.filter(m => {
    const d = new Date(m[1]);
    return d >= startDate && d <= endDate;
  });
  decisionsBlock = "### Key decisions\n\n";
  if (inQuarter.length === 0) decisionsBlock += "_No decisions logged this quarter._\n";
  else for (const m of inQuarter) decisionsBlock += `- **${m[1]}** — ${m[2]}\n`;
}

const output = `# Quarterly Review — ${quarter}

_Auto-generated on ${new Date().toISOString().slice(0, 10)}._

## Summary

Write here after reviewing the auto-assembled data below. Aim for 3-5 sentences answering:

1. Did we hit our plan?
2. What's the one thing that most surprised us?
3. What is the single most important thing to change for next quarter?

## Headline numbers

${metricsBlock}

${decisionsBlock}

## OKR retrospective

Pull from data/okrs.yaml and evaluate:
- Which objectives hit?
- Which didn't?
- Were the KRs well-chosen?

## Hiring

Pull from data/hiring.yaml:
- Hires closed
- Open reqs rolling forward
- Attrition

## What we learned

Free form — 3-5 bullets.

## What we'll change

Free form — 2-4 bullets. These become inputs to next quarter's OKR planning.

## Top 3 risks going into next quarter

1.
2.
3.
`;

const outDir = path.join(ROOT, "reports");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, `quarterly-review-${quarter}.md`);
fs.writeFileSync(outFile, output);
console.log(`Wrote ${path.relative(ROOT, outFile)}`);
