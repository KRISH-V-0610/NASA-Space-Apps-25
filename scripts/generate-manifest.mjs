import { readdir, stat, writeFile } from 'node:fs/promises'
import { join, extname } from 'node:path'

const root = process.cwd()
const dataDir = join(root, 'public', 'Data')
const exts = new Set(['.gif', '.png', '.jpg', '.jpeg'])

function toTags(name) {
  return name
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .split(/[_\-\s]+/)
    .filter(Boolean)
}

async function main() {
  const files = await readdir(dataDir)
  const items = []
  for (const f of files) {
    const ext = extname(f).toLowerCase()
    if (!exts.has(ext)) continue
    const s = await stat(join(dataDir, f))
    items.push({
      filename: f,
      url: `/Data/${f}`,
      type: ext.replace('.', ''),
      bytes: s.size,
      tags: toTags(f)
    })
  }
  items.sort((a, b) => a.filename.localeCompare(b.filename))
  const out = join(dataDir, 'manifest.json')
  await writeFile(out, JSON.stringify(items, null, 2) + '\n')
  console.log(`Wrote ${items.length} items to ${out}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

