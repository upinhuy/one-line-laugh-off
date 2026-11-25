// One-Line Laugh-Off — make.fun bounty u-zkhiel-one-line-laugh-off-714618ae
// Writes exactly one funny line to /output/entry.txt (1-200 chars, UTF-8).
// The line: a GPS confidently announces arrival at a place we never reached,
// and driver and machine silently agree to pretend. Setup, twist, payoff —
// all in one breath, nothing left to trim.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "My GPS said, 'You have arrived.' I hadn't — but we both decided to pretend.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
}
if (!JOKE.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(JOKE)) {
  throw new Error("entry must be exactly one line");
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${outputPath}`);
