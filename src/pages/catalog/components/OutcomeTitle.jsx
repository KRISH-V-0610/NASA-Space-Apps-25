import React, { useMemo } from 'react'

function toTitle(filename = '') {
  const base = filename.replace(/\.[^.]+$/, '')
  return base.replace(/[_-]+/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

function inferOutcome(filename = '') {
  const t = toTitle(filename).toLowerCase()
  const has = (k) => t.includes(k)

  if (has('ndvi')) return 'Vegetation Index Trends'
  if (has('aerosol')) return 'Aerosol Distribution Dynamics'
  if (has('albedo')) return 'Surface Reflectance Variability'
  if (has('cloud') && has('wind')) return 'Cloud-Wind Interaction Patterns'
  if (has('cloud')) return 'Cloud Coverage Variability'
  if (has('toa') && (has('sw') || has('shortwave'))) return 'TOA Shortwave Radiation Anomalies'
  if (has('toa') && (has('lw') || has('longwave'))) return 'TOA Longwave Radiation Patterns'
  if (has('toa')) return 'Top-of-Atmosphere Radiation Overview'
  if (has('timeseries')) return 'Temporal Evolution (Time Series)'
  return 'Earth Observation Insight'
}

export default function OutcomeTitle({ item }) {
  const text = useMemo(() => {
    if (!item) return 'Select a dataset to view outcomes'
    const outcome = inferOutcome(item.filename)
    const title = toTitle(item.filename)
    return `Analysis Outcome: ${outcome} — ${title}`
  }, [item])

  return (
    <div className="mb-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
      <h2 className="text-xl font-bold tracking-tight text-slate-100 sm:text-2xl">
        {text}
      </h2>
    </div>
  )
}

