import React from 'react'

export default function LeftPanel({ query, onQuery, type, onType, stats }) {
  return (
    <div className="glass sticky top-20 max-h-[calc(100vh-120px)] overflow-auto rounded-2xl p-6 shadow-glow">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-300">Catalog Controls</h3>

      <div className="mb-3 border-t border-white/10 pt-3">
        <label className="mb-1 block text-xs text-slate-500">Search</label>
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Find datasets..."
          className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-400"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-xs text-slate-500">Type</label>
        <select
          value={type}
          onChange={(e) => onType(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-3 text-base text-slate-100"
        >
          <option value="all">All</option>
          <option value="gif">GIF</option>
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
          <option value="jpeg">JPEG</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
        <div className="glass rounded-md px-3 py-2">Total: {stats?.total ?? 0}</div>
        {Object.entries(stats?.byType || {}).map(([k, v]) => (
          <div key={k} className="glass rounded-md px-3 py-2 uppercase">{k}: {v}</div>
        ))}
      </div>
    </div>
  )
}
