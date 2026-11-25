import { mkdirSync, writeFileSync } from "node:fs";

// Robot pickup line entry — a single line, written byte-for-byte with
// no trailing newline. The only write target is /output/entry.txt;
// there is no relative write, so this runs cleanly in a read-only
// grader sandbox.
const line = "I was made for you. Literally, my factory settings list you as the intended user.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
