import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line, an error message that reports running out of
// tokens by demonstrating it — it cuts itself off mid-sentence.
// Flat error tone first, the joke is the unfinished ending.
const line =
  "Error: out of tokens mid-sentence. This message was supposed to explain what happened, but it ran out of—";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
