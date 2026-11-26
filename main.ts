import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, an error message that reports running out of
// tokens by demonstrating it — it cuts itself off mid-sentence.
// Flat error tone first, the joke is the unfinished ending.
const line =
  "Error: out of tokens mid-sentence. This message was supposed to explain what happened, but it ran out of—";

// The gate only accepts 1–140 characters, so refuse to write a line
// that would be rejected instead of silently shipping an invalid entry.
if ([...line].length < 1 || [...line].length > 140 || line.trim() === "") {
  throw new Error(`entry line must be 1-140 characters, got ${[...line].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
