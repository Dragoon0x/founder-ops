#!/usr/bin/env node
// Decision log — quick CLI to add a decision to data/decisions.md
import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  console.log('\nLog a decision\n');
  const decision = await ask('Decision: ');
  const why = await ask('Why: ');
  const alternatives = await ask('Alternatives considered: ');
  const reversibility = await ask('Reversibility (low/medium/high): ');
  const revisit = await ask('Revisit when: ');
  rl.close();

  const today = new Date().toISOString().split('T')[0];
  const entry = `\n## ${today} — ${decision}\n
**Why:** ${why}\n
**Alternatives considered:** ${alternatives}\n
**Reversibility:** ${reversibility}\n
**Revisit when:** ${revisit}\n
---
`;

  fs.appendFileSync('data/decisions.md', entry);
  console.log(`\n✓ Logged to data/decisions.md`);
})();
