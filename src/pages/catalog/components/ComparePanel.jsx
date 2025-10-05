import React from 'react'

function Title({ name }) {
  return name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

export default function ComparePanel({ items = [], onUnpin }) {
  if (!items.length) return null

  return (
    <div className="glass mb-4 rounded-2xl p-3 shadow-glow">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">Compare</h3>
        <div className="text-xs text-slate-500">{items.length} selected</div>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {items.map((it) => (
          <div key={it.url} className="overflow-hidden rounded-xl border border-white/10 bg-white/50 shadow dark:bg-slate-900/30">
            <div className="flex items-center justify-between gap-2 p-2 text-xs">
              <div className="truncate font-medium" title={it.filename}><Title name={it.filename} /></div>
              <button onClick={() => onUnpin(it)} className="rounded bg-white/60 px-2 py-1 text-[11px] hover:bg-white/80 dark:bg-slate-800/50">Unpin</button>
            </div>
            <div className="aspect-video">
              <img src={it.url} alt={it.filename} className="h-full w-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

