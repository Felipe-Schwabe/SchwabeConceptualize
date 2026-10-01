import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const svg = await readFile(fileURLToPath(new URL("../public/og-image.svg", import.meta.url)));

await sharp(svg)
  .resize(1200, 630)
  .jpeg({ quality: 92, chromaSubsampling: "4:4:4" })
  .toFile(fileURLToPath(new URL("../public/og-image.jpg", import.meta.url)));

console.log("Generated public/og-image.jpg");
