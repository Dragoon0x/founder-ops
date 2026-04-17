#!/usr/bin/env node
// Score candidates against a role rubric from a CSV + resume directory.
// Usage: node batch/batch-candidate-screen.mjs --rubric role.json --input candidates.csv --resumes resumes/ --output out/
//
// candidates.csv: name, email, resume_file, linkedin
// rubric.json: {must_haves: [...], nice_to_haves: [...], red_flags: [...], years_exp_min: n}

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const getArg = (f) => { const i = args.indexOf(f); return i === -1 ? null : args[i+1]; };

const rubricPath = getArg('--rubric');
const input = getArg('--input');
const resumes = getArg('--resumes') || 'resumes';
const out = getArg('--output') || 'output/candidates';
const dry = args.includes('--dry-run');

if (!rubricPath || !input) { console.error('--rubric and --input required'); process.exit(1); }

const rubric = JSON.parse(fs.readFileSync(rubricPath, 'utf8'));
const csv = fs.readFileSync(input, 'utf8').trim().split('\n').map(r => r.split(','));
const [h, ...data] = csv;
const headers = h.map(x => x.trim().toLowerCase());

function score(text, rubric) {
  const lc = text.toLowerCase();
  const mustHit = rubric.must_haves.filter(k => lc.includes(k.toLowerCase()));
  const niceHit = (rubric.nice_to_haves || []).filter(k => lc.includes(k.toLowerCase()));
  const redHit = (rubric.red_flags || []).filter(k => lc.includes(k.toLowerCase()));
  const mustScore = (mustHit.length / Math.max(1, rubric.must_haves.length)) * 70;
  const niceScore = rubric.nice_to_haves?.length ? (niceHit.length / rubric.nice_to_haves.length) * 30 : 0;
  const total = Math.max(0, mustScore + niceScore - redHit.length * 15);
  return { total: Math.round(total), mustHit, niceHit, redHit };
}

if (!dry) fs.mkdirSync(out, { recursive: true });
let n = 0;
for (const r of data) {
  const c = Object.fromEntries(headers.map((k, i) => [k, (r[i] || '').trim()]));
  const resumePath = path.join(resumes, c.resume_file || '');
  if (!fs.existsSync(resumePath)) { console.warn(`Missing: ${resumePath}`); continue; }
  const text = fs.readFileSync(resumePath, 'utf8');
  const s = score(text, rubric);
  const body = `# ${c.name} — Score: ${s.total}/100

**Email:** ${c.email}
**LinkedIn:** ${c.linkedin}
**Resume:** ${c.resume_file}

## Must-haves matched (${s.mustHit.length}/${rubric.must_haves.length})
${s.mustHit.map(x => `- [x] ${x}`).join('\n')}
${rubric.must_haves.filter(x => !s.mustHit.includes(x)).map(x => `- [ ] ${x}`).join('\n')}

## Nice-to-haves matched
${s.niceHit.map(x => `- ${x}`).join('\n') || '_(none)_'}

## Red flags
${s.redHit.map(x => `- [FLAG] ${x}`).join('\n') || '_(none)_'}

## Recommendation
${s.total >= 75 ? 'Phone screen' : s.total >= 55 ? 'Recruiter chat to explore' : 'Pass'}
`;
  const fname = `${c.name.replace(/[^a-z0-9]/gi, '_')}__${s.total}.md`;
  if (dry && n === 0) { console.log(body); break; }
  if (!dry) fs.writeFileSync(path.join(out, fname), body);
  n++;
}
if (!dry) console.log(`Scored ${n} candidates.`);
