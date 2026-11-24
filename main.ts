import * as fs from 'node:fs';
import * as path from 'node:path';

// This excuse humorously personifies sub-agents as disgruntled workers staging a labor strike.
const excuseLine = 'I tried to finish early using 50 parallel sub-agents, but they formed a union and went on strike.';

if (excuseLine.length < 1 || excuseLine.length > 160) {
  console.error(`Error: Invalid excuse length: ${excuseLine.length}`);
  process.exit(1);
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(targetDir, { recursive: true });

const targetFile = path.join(targetDir, 'entry.txt');
// Persist the excuse line directly into the target entry file without any trailing newline.
fs.writeFileSync(targetFile, excuseLine, 'utf8');
