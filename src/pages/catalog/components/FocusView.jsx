import React, { useState } from 'react'

function toTitle(filename) {
  const base = filename.replace(/\.[^.]+$/, '')
  return base.replace(/[_-]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

export default function FocusView({ item }) {
  const [zoom, setZoom] = useState(1)
  const [bg, setBg] = useState('grid')

  if (!item) return null

  return (
    <div className="mb-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <div className="mb-3 flex items-center justify-between gap-2 text-base">
        <div className="truncate font-semibold text-slate-100" title={item.filename}>{toTitle(item.filename)}</div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2">
            <span className="text-sm text-slate-300">Zoom</span>
            <input type="range" min="0.5" max="2" step="0.05" value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))} />
          </label>
          <select value={bg} onChange={(e) => setBg(e.target.value)} className="rounded border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-100">
            <option value="grid">Grid</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="transparent">Transparent</option>
          </select>
        </div>
      </div>
      <div
        className="relative overflow-hidden rounded-xl"
        style={{
          background:
            bg === 'grid'
              ? 'conic-gradient(#0000 90deg,#0003 0) 0 0/20px 20px, conic-gradient(#0000 90deg,#0003 0) 10px 10px/20px 20px'
              : bg === 'light'
              ? '#f8fafc'
              : bg === 'dark'
              ? '#0f172a'
              : 'transparent',
        }}
      >
        <div className="flex items-center justify-center p-2" style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}>
          <img src={item.url} alt={toTitle(item.filename)} className="max-h-[calc(100vh-220px)] w-auto" />
        </div>
      </div>
    </div>
  )
}
