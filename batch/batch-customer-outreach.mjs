#!/usr/bin/env node
// Personalize cold outreach emails from a CSV of leads.
// Usage: node batch/batch-customer-outreach.mjs --input leads.csv --output out/ [--dry-run]
//
// CSV expected columns: email, name, company, role, signal, notes
// Output: one .md file per lead with subject + body.

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const getArg = (flag) => { const i = args.indexOf(flag); return i === -1 ? null : args[i+1]; };
const dryRun = args.includes('--dry-run');

const input = getArg('--input');
const outputDir = getArg('--output') || 'output/outreach';

if (!input || !fs.existsSync(input)) {
  console.error('Input CSV required. Usage: --input leads.csv --output out/');
  process.exit(1);
}

const csv = fs.readFileSync(input, 'utf8').split('\n').filter(Boolean);
const [header, ...rows] = csv.map(r => r.split(',').map(c => c.trim()));
const headers = header.map(h => h.toLowerCase());

const esc = (s) => (s || '').replace(/[<>]/g, '');

function draft(lead) {
  const { name, company, role, signal, notes } = lead;
  const first = (name || '').split(' ')[0] || 'there';
  const subject = signal
    ? `${esc(first)} — quick thought on ${esc(signal)}`
    : `quick question about ${esc(company)}`;

  const body = `Hi ${esc(first)},

Saw ${esc(signal || company + "'s recent work")}. Was impressed by the approach.

I'm building something adjacent — we help ${esc(role || 'teams')} do [X] ${esc(notes ? 'relevant to ' + notes : '')} 3x faster. Three teams similar to yours (can share names if useful) are using it.

Worth a 15-min call to see if it's a fit? Happy to send a 2-min loom if async is better.

Best,
[YOUR NAME]

PS: If not you, is there someone on your team who'd be the right person to chat?`;

  return { subject, body };
}

if (!dryRun) fs.mkdirSync(outputDir, { recursive: true });

let count = 0;
for (const row of rows) {
  const lead = Object.fromEntries(headers.map((h, i) => [h, row[i] || '']));
  const { subject, body } = draft(lead);
  const filename = `${(lead.email || 'unknown').replace(/[^a-z0-9]/gi, '_')}.md`;
  const content = `# ${lead.name} — ${lead.company}

**To:** ${lead.email}
**Role:** ${lead.role}
**Signal:** ${lead.signal}

## Subject
${subject}

## Body
${body}
`;
  if (dryRun && count === 0) {
    console.log('--- DRY RUN: first output ---');
    console.log(content);
    break;
  }
  if (!dryRun) fs.writeFileSync(path.join(outputDir, filename), content);
  count++;
}

if (!dryRun) console.log(`Wrote ${count} drafts to ${outputDir}`);
