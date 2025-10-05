import React from 'react'

function Title({ text }) {
  return (
    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-400">
      {text}
    </h3>
  )
}

export default function Overview({ items, topViews = [], topSearches = [], typeUsage = {} }) {
  const urlToItem = new Map(items.map((i) => [i.url, i]))

  return (
    <div className="grid grid-cols-12 gap-4">
      <section className="col-span-12 lg:col-span-7">
        <div className="glass rounded-2xl p-4 shadow-glow">
          <Title text="Most Viewed" />
          {topViews.length === 0 ? (
            <p className="text-sm text-slate-500">No views yet. Explore the catalog to build insights.</p>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {topViews.map(([url, count]) => {
                const it = urlToItem.get(url)
                if (!it) return null
                return (
                  <div key={url} className="overflow-hidden rounded-xl border border-white/10 bg-white/50 shadow dark:bg-slate-900/30">
                    <div className="aspect-video">
                      <img src={it.url} alt={it.filename} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between p-2 text-xs">
                      <span className="truncate" title={it.filename}>{it.filename}</span>
                      <span className="rounded bg-primary-600/80 px-1.5 py-0.5 font-semibold text-white">{count}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <section className="col-span-12 lg:col-span-5 space-y-4">
        <div className="glass rounded-2xl p-4 shadow-glow">
          <Title text="Top Searches" />
          {topSearches.length === 0 ? (
            <p className="text-sm text-slate-500">No searches yet.</p>
          ) : (
            <div className="flex flex-wrap gap-2 text-xs">
              {topSearches.map(([q, n]) => (
                <span key={q} className="rounded-full bg-white/60 px-2 py-1 dark:bg-slate-800/50">{q} × {n}</span>
              ))}
            </div>
          )}
        </div>
        <div className="glass rounded-2xl p-4 shadow-glow">
          <Title text="Type Usage" />
          <div className="flex gap-2 text-xs">
            {Object.keys(typeUsage).length === 0 ? (
              <span className="text-slate-500">No type changes yet.</span>
            ) : (
              Object.entries(typeUsage).map(([k, v]) => (
                <span key={k} className="rounded-md bg-white/60 px-2 py-1 dark:bg-slate-800/50">{k.toUpperCase()}: {v}</span>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

