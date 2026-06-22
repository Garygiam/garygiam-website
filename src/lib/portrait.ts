import path from "node:path";
import { existsSync } from "node:fs";

function normalizePortraitSource(src: string): string {
  return src.startsWith("/") ? src.slice(1) : src;
}

function toFilesystemPath(src: string): string {
  return path.join(
    process.cwd(),
    "public",
    normalizePortraitSource(src).replace(/^public\//, "")
  );
}

export function resolvePortraitSource(src: string): string | null {
  const normalized = normalizePortraitSource(src).replace(/^public\//, "");

  if (existsSync(toFilesystemPath(normalized))) {
    return `/${normalized}`;
  }

  const parsed = path.posix.parse(normalized);
  const fallbackExtensions = [".jpg", ".jpeg", ".png", ".webp"].filter(
    (extension) => extension !== parsed.ext
  );

  for (const extension of fallbackExtensions) {
    const candidate = path.posix.join(parsed.dir, `${parsed.name}${extension}`);

    if (existsSync(toFilesystemPath(candidate))) {
      return `/${candidate}`;
    }
  }

  return null;
}

export function isPortraitAvailable(src: string): boolean {
  return resolvePortraitSource(src) !== null;
}
