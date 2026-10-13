import fs from "node:fs/promises"
import path from "node:path"
import { resolveRelative, simplifySlug } from "@quartz-community/utils"

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;")

export default function LegacyFolderUrls() {
  return {
    name: "LegacyFolderUrls",
    async *emit(ctx, content) {
      const written = new Set()
      for (const [, file] of content) {
        const { relativePath, slug } = file.data
        if (!relativePath || !slug?.endsWith("/index")) continue

        // v4 kept Mathematics/Mathematics; v5 renders that folder note as mathematics/index.
        const legacySlug = relativePath
          .replaceAll("\\", "/")
          .replace(/\.md$/, "")
          .replace(/\s/g, "-")
          .replace(/&/g, "-and-")
          .replace(/%/g, "-percent")
          .replace(/[?#]/g, "")
        const segments = legacySlug.split("/")
        if (
          segments.length < 2 ||
          segments.at(-1).toLowerCase() !== segments.at(-2).toLowerCase()
        ) {
          continue
        }

        // Write the lowercase directory first on case-insensitive Windows filesystems.
        for (const alias of new Set([legacySlug.toLowerCase(), legacySlug])) {
          if (alias === slug || written.has(alias)) continue
          written.add(alias)
          const baseUrl = ctx.cfg.configuration.baseUrl
          const target = resolveRelative(alias, slug)
          const canonical = baseUrl
            ? `https://${baseUrl}/${simplifySlug(slug).replace(/^\//, "")}`
            : target
          const escapedTarget = escapeHtml(target)
          const scriptTarget = JSON.stringify(target).replaceAll("<", "\\u003c")
          const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<link rel="canonical" href="${escapeHtml(canonical)}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${escapedTarget}">
<script>location.replace(${scriptTarget} + location.search + location.hash)</script>
</head></html>
`
          const destination = path.join(ctx.argv.output, `${alias}.html`)
          await fs.mkdir(path.dirname(destination), { recursive: true })
          await fs.writeFile(destination, html)
          yield destination
        }
      }
    },
  }
}
