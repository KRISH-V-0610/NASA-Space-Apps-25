import React, { useMemo } from 'react'

function toTitle(filename) {
  const base = filename.replace(/\.[^.]+$/, '')
  return base.replace(/[_-]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

function humanBytes(bytes) {
  if (!bytes && bytes !== 0) return '—'
  const units = ['B', 'KB', 'MB', 'GB']
  let i = 0
  let v = bytes
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024
    i++
  }
  return `${v.toFixed(1)} ${units[i]}`
}

function autoSummary(item) {
  if (!item) return ''
  const title = toTitle(item.filename)
  const keywords = title.toLowerCase().split(/\s+/)
  const theme = keywords.find((k) => ['aerosol','albedo','cloud','wind','ndvi','toa','radiation','sw','lw','timeseries','animation'].includes(k))
  const kind = item.type?.toUpperCase() || 'IMAGE'
  const scope = keywords.includes('timeseries') ? 'over time' : 'global pattern'
  return `${title} — ${kind} highlighting ${theme || 'earth observation'} ${scope}. Curated from NASA datasets for rapid visual insight.`
}

function varyPhrasing(text) {
  const variants = [
    'Key Insight', 'What It Shows', 'Why It Matters', 'Reading The Visual', 'At A Glance', 'Quick Take'
  ]
  const pick = variants[Math.floor(Math.random() * variants.length)]
  return `${pick}: ${text}`
}

function aiBullets(item) {
  if (!item) return []
  const t = toTitle(item.filename).toLowerCase()
  const looks = []
  if (t.includes('timeseries')) looks.push('Look for seasonal cycles and anomalies')
  if (t.includes('cloud')) looks.push('Contrast cloud coverage across regions and latitudes')
  if (t.includes('wind')) looks.push('Track wind-driven motion patterns in the animation')
  if (t.includes('ndvi')) looks.push('Identify vegetation greening/browning over time')
  if (t.includes('albedo')) looks.push('Note reflective changes over ice and desert zones')
  if (t.includes('toa') || t.includes('radiation')) looks.push('Compare shortwave vs longwave radiation fields')
  if (!looks.length) looks.push('Observe spatial patterns and temporal variation')
  return looks.slice(0, 4)
}

export default function Sidebar({ item, onOpenFull }) {
  const summary = useMemo(() => varyPhrasing(autoSummary(item)), [item])
  const bullets = useMemo(() => aiBullets(item), [item])

  if (!item) {
    return (
      <div className="glass sticky top-20 rounded-2xl p-5 shadow-glow">
        <p className="text-sm text-slate-600 dark:text-slate-400">Select a visual to see details.</p>
      </div>
    )
  }

  return (
    <div className="glass sticky top-20 max-h-[calc(100vh-120px)] overflow-auto rounded-2xl p-6 shadow-glow scrollbar-hidden">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">AI Summary & Description</h3>
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold leading-tight text-slate-100">{toTitle(item.filename)}</h2>
        <span className="rounded-md bg-primary-600/90 px-2 py-1 text-xs font-medium uppercase text-white">{item.type}</span>
      </div>

      <div className="mb-3 space-y-2 text-base text-slate-200">
        <p>{summary}</p>
        <ul className="ml-4 list-disc space-y-1">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 text-sm">
          {(item.tags?.length ? item.tags : toTitle(item.filename).toLowerCase().split(' ')).slice(0,6).map((t) => (
            <span key={t} className="rounded-full bg-slate-800 px-3 py-1 text-slate-100">#{t}</span>
          ))}
        </div>
      </div>

      <dl className="mb-4 grid grid-cols-2 gap-3 text-sm">
        <div className="glass rounded-lg p-3">
          <dt className="text-slate-400">Filename</dt>
          <dd className="truncate font-medium text-slate-100" title={item.filename}>{item.filename}</dd>
        </div>
        <div className="glass rounded-lg p-3">
          <dt className="text-slate-400">Size</dt>
          <dd className="font-medium text-slate-100">{humanBytes(item.bytes)}</dd>
        </div>
        <div className="glass col-span-2 rounded-lg p-3">
          <dt className="text-slate-400">URL</dt>
          <dd className="truncate font-medium"><a href={item.url} target="_blank" rel="noreferrer" className="text-primary-400 hover:underline">{item.url}</a></dd>
        </div>
      </dl>

      <div className="flex items-center gap-2">
        <button onClick={onOpenFull} className="flex-1 rounded-lg bg-primary-600 px-4 py-2 text-base font-semibold text-white shadow hover:shadow-glow">Open Full View</button>
        <a href={item.url} download className="rounded-lg border border-white/10 bg-slate-900/60 px-4 py-2 text-base hover:shadow">Download</a>
      </div>
    </div>
  )
}
