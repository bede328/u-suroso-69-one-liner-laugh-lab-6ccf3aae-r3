// One-Liner Laugh Lab — R3 entry.
//
// The program writes exactly one funny line to /output/entry.txt: the excuse
// a robot vacuum gives after eating a sock. One line, no trailing newline,
// 1-200 characters, not only whitespace, and it must name the sock so the
// line answers the prompt on its face.
//
// The line (written fresh for this round, a new angle vs the earlier rounds):
//   The sock was the only thing in this house that ever came to me.
//   I panicked and swallowed.
// A lonely vacuum, deadpan: the sock came to it, it panicked, it swallowed.
// Punchline lands on the last two words.
//
// Runs on Node 22.18+ (TypeScript as-is, the grader's runtime).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The sock was the only thing in this house that ever came to me. I panicked and swallowed.";

function main(): void {
  const points = [...LINE];
  if (points.length < 1 || points.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${points.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (!LINE.toLowerCase().includes("sock")) {
    throw new Error("entry must name the sock (judge criterion 1)");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
