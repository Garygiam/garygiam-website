import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import pngToIco from "png-to-ico";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "src/assets/founder-favicon.svg");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");

const icon16 = path.join(publicDir, "favicon-16x16.png");
const icon32 = path.join(publicDir, "favicon-32x32.png");
const apple = path.join(publicDir, "apple-touch-icon.png");
const faviconIco = path.join(appDir, "favicon.ico");

await mkdir(publicDir, { recursive: true });
await mkdir(appDir, { recursive: true });

await sharp(source).resize(16, 16).png().toFile(icon16);
await sharp(source).resize(32, 32).png().toFile(icon32);
await sharp(source).resize(180, 180).png().toFile(apple);

const icoBuffer = await pngToIco([
  await readFile(icon16),
  await readFile(icon32),
  await readFile(apple),
]);

await writeFile(faviconIco, icoBuffer);
