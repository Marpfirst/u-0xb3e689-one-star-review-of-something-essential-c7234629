import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Monday shows up every week fully rested and on time, then acts surprised that I am not.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
