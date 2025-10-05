import { readdir, stat, writeFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'

const exts = new Set(['.gif', '.png', '.jpg', '.jpeg'])

function toTags(name) {
  return name
    .replace(/\.[^.]+$/, '')
    .toLowerCase()
    .split(/[_\-\s]+/)
    .filter(Boolean)
}

async function scanData(root) {
  const dataDir = join(root, 'public', 'Data')
  let files
  try {
    files = await readdir(dataDir)
  } catch {
    return []
  }
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
      tags: toTags(f),
    })
  }
  items.sort((a, b) => a.filename.localeCompare(b.filename))
  return { items, outPath: join(dataDir, 'manifest.json') }
}

export default function dataManifestPlugin() {
  return {
    name: 'data-manifest-plugin',
    apply: 'serve',
    async configureServer(server) {
      const root = server.config.root
      async function buildOnce() {
        const res = await scanData(root)
        if (!res || !res.items) return
        await writeFile(res.outPath, JSON.stringify(res.items, null, 2) + '\n')
      }
      await buildOnce()

      const dataDir = join(root, 'public', 'Data')
      const watchGlobs = [`${dataDir}/*`]
      const reload = () => server.ws.send({ type: 'full-reload', path: '/Data/manifest.json' })
      server.watcher.add(watchGlobs)
      server.watcher.on('add', async (p) => {
        if (exts.has(extname(p).toLowerCase())) {
          await buildOnce(); reload()
        }
      })
      server.watcher.on('unlink', async (p) => {
        if (exts.has(extname(p).toLowerCase())) {
          await buildOnce(); reload()
        }
      })
      server.watcher.on('change', async (p) => {
        if (exts.has(extname(p).toLowerCase())) {
          await buildOnce(); reload()
        }
      })
    },
  }
}

export function dataManifestPluginBuild() {
  return {
    name: 'data-manifest-plugin-build',
    apply: 'build',
    async buildStart() {
      const root = this.meta.watchMode ? process.cwd() : this.getModuleInfo ? process.cwd() : process.cwd()
      const res = await scanData(root)
      if (!res || !res.items) return
      await writeFile(res.outPath, JSON.stringify(res.items, null, 2) + '\n')
    },
  }
}

