import React from 'react'

function formatTitle(filename) {
  const base = filename.replace(/\.[^.]+$/, '')
  return base.replace(/[_-]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

export default function GalleryGrid({ items, onSelect, selected, onPin, pinned = [] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {items.map((item) => (
        <button
          key={item.url}
          onClick={() => onSelect(item)}
          className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/50 shadow transition hover:shadow-glow dark:bg-slate-900/30 ${
            selected?.url === item.url ? 'ring-2 ring-primary-500' : ''
          }`}
          title={formatTitle(item.filename)}
        >
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={item.url}
              alt={formatTitle(item.filename)}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>
          <div className="absolute right-2 top-2 z-10">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onPin?.(item) }}
              className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase backdrop-blur transition ${
                pinned.some((p) => p.url === item.url) ? 'bg-primary-600 text-white shadow-glow' : 'bg-white/70 hover:bg-white/90 dark:bg-slate-900/50'
              }`}
            >
              {pinned.some((p) => p.url === item.url) ? 'Pinned' : 'Pin'}
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/60 to-transparent p-2 text-left">
            <div className="truncate text-xs font-medium text-white drop-shadow">
              {formatTitle(item.filename)}
            </div>
            <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] uppercase text-white">
              {item.type}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}
