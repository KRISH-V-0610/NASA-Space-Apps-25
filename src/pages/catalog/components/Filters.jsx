import React from 'react'

export default function Filters({ query, onQuery, type, onType, count }) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2">
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="Search by name, tag or type..."
          className="w-64 max-w-full rounded-lg border border-white/10 bg-white/60 px-3 py-2 text-sm shadow focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-slate-900/40"
        />
        <select
          value={type}
          onChange={(e) => onType(e.target.value)}
          className="rounded-lg border border-white/10 bg-white/60 px-2 py-2 text-sm dark:bg-slate-900/40"
        >
          <option value="all">All Types</option>
          <option value="gif">GIF</option>
          <option value="png">PNG</option>
          <option value="jpg">JPG</option>
          <option value="jpeg">JPEG</option>
        </select>
      </div>
      <div className="text-xs text-slate-600 dark:text-slate-400">{count} item(s)</div>
    </div>
  )
}

