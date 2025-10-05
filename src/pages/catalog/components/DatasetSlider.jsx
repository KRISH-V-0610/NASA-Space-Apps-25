import React, { useMemo } from 'react'

function titleOf(name) {
  return name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

export default function DatasetSlider({ items = [], selected, onSelect }) {
  const index = useMemo(() => {
    if (!selected) return 0
    const i = items.findIndex((x) => x.url === selected.url)
    return i >= 0 ? i : 0
  }, [items, selected])

  const max = Math.max(items.length - 1, 0)

  function setIndex(i) {
    const clamped = Math.min(Math.max(i, 0), max)
    const next = items[clamped]
    if (next) onSelect(next)
  }

  if (!items.length) return null

  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl p-6 shadow-2xl">
      <div className="mb-4 flex items-center justify-between text-xs text-white/70 font-custom3">
        <span>Dataset {index + 1} / {items.length}</span>
        <span className="truncate max-w-[200px]" title={items[index]?.filename}>
          {items[index] ? titleOf(items[index].filename) : ''}
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          className="px-4 py-2 text-xs font-semibold bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
        >
          Prev
        </button>
        
        <div className="flex-1 relative">
          <input
            type="range"
            min={0}
            max={max}
            step={1}
            value={index}
            onChange={(e) => setIndex(parseInt(e.target.value, 10))}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer slider-white"
          />
        </div>
        
        <button 
          onClick={() => setIndex(index + 1)}
          disabled={index === max}
          className="px-4 py-2 text-xs font-semibold bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
        >
          Next
        </button>
      </div>
    </div>
  )
}