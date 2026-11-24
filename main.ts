// Two Lines to Your Past Self — entry program (v2).
//
// The entry is a two-line warning sent back to one specific past self:
// line one names a single concrete moment, line two traces what that
// moment changed. This program's only job is to write those two lines,
// exactly as written below, to <output dir>/entry.txt.
//
// Run:  MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The warning itself. Keep these two strings untouched: the judge reads
// exactly what they hold, line one the moment, line two the consequence.
const WARNING_LINES = [
  "When Dani asks you to the rooftop on Friday, 12 October 2018, don't say you're busy — go, and tell her the truth you've rehearsed all week.",
  "That one honest night turned a crush into the marriage that carried you through your father's illness and every hard year after.",
] as const;

function buildEntry(lines: readonly string[]): string {
  // One sentence per line, joined by a single newline, trailing newline
  // included so the file ends cleanly.
  return lines.join("\n") + "\n";
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const destination = join(outputDir, "entry.txt");
  writeFileSync(destination, buildEntry(WARNING_LINES), "utf8");
}

main();
