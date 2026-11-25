// news-image-20261125 entry point.
// Reads entry.png.b64 beside this file, decodes it, and writes the PNG to
// $MAKEFUN_OUTPUT_DIR/entry.png (falling back to /output/entry.png).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const b64 = readFileSync(join(here, "entry.png.b64"), "utf8").trim();
const bytes = Buffer.from(b64, "base64");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), bytes);
