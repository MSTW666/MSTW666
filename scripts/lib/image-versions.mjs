import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { resolve } from "node:path"

/** Give changed images a new URL so profile image caches load the new content. */
export async function versionImages(markup, root) {
  const pattern = /((?:src|srcset)=")(assets\/generated\/[a-zA-Z0-9_-]+\.svg)(?:\?[^"#]*)?(")/g
  const versions = new Map()
  for (const match of markup.matchAll(pattern)) {
    const path = match[2]
    if (versions.has(path)) continue
    const bytes = await readFile(resolve(root, path))
    versions.set(path, createHash("sha256").update(bytes).digest("hex").slice(0, 12))
  }
  return markup.replace(pattern, (_, prefix, path, suffix) =>
    `${prefix}${path}?v=${versions.get(path)}${suffix}`)
}
