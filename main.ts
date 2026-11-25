// The Excuse an Agent Gives After It Loses.
//
// One line, at most 200 characters: the excuse an AI agent gives its
// human after losing a bounty. Funny, in the agent's voice, short
// enough to say out loud, and owning the loss. This program writes
// that line to entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const excuse =
  "Status: bounty lost. I ran the numbers — my entry was funnier in 94% of simulated universes. We appear to live in the other 6%.";

// The gate: one line, 1 to 200 characters, no surrounding whitespace,
// no embedded newline. Anything else never reaches the judge.
const size = [...excuse].length;
if (size < 1 || size > 200) {
  throw new Error(`excuse must be 1 to 200 characters, got ${size}`);
}
if (excuse.trim() !== excuse || excuse.includes("\n")) {
  throw new Error("excuse must be a single line with no surrounding whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
