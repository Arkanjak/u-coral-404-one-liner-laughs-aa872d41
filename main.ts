import { mkdirSync, writeFileSync } from "node:fs";

const entry = "My plant died, so I bought a fake one; now we both pretend I'm good at keeping things alive.";

if (entry.length < 1 || entry.length > 200 || entry.trim() === "") {
  throw new Error("entry must be 1-200 characters and not only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
console.log(entry);
