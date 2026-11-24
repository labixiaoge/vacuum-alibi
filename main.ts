// The Vacuum's Alibi — make.fun bounty entry
// u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
// Writes one original one-line excuse (<= 200 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I did not miss the spot. The dust bunny and I signed a timeshare agreement: it keeps the corner, I keep the rest of the house. It signed first.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
console.log(LINE);
