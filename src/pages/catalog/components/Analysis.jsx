/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'

import Header from './Header.jsx'
import LeftPanel from './LeftPanel.jsx'
import DatasetSlider from './DatasetSlider.jsx'
import FocusView from './FocusView.jsx'
import Sidebar from './Sidebar.jsx'
import OutcomeTitle from './OutcomeTitle.jsx'
import { trackSearch, trackType, trackView, getTopViews, getTopSearches, getTypeUsage } from '../lib/analytics.js'

function Analysis() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')
  const [selected, setSelected] = useState(null)



  // Force dark theme once on mount
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/Data/manifest.json', { cache: 'no-store' })
        if (!res.ok) throw new Error('manifest missing')
        const manifest = await res.json()
        setItems(manifest)
        setSelected(manifest[0] ?? null)
      } catch (e) {
        const candidates = [
          'aerosol_timeseries.gif',
          'albedo_timeseries.gif',
          'cloud_timeseries.gif',
          'cloud_wind_timeseries.gif',
          'ndvi_timeseries.gif',
          'toa_lw_all_mon_animation.gif',
          'toa_sw_all_mon_animation.gif',
        ].map((f) => ({ filename: f, url: `/Data/${f}`, type: 'gif', bytes: undefined, tags: [] }))
        setItems(candidates)
        setSelected(candidates[0] ?? null)
      }
    }
    load()
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((it) => {
      const matchesType = type === 'all' || it.type === type
      const hay = `${it.filename} ${it.tags?.join(' ')}`.toLowerCase()
      const matchesQuery = !q || hay.includes(q)
      return matchesType && matchesQuery
    })
  }, [items, query, type])

  const stats = useMemo(() => {
    const byType = items.reduce((acc, it) => {
      acc[it.type] = (acc[it.type] || 0) + 1
      return acc
    }, {})
    return { total: items.length, byType }
  }, [items])

  function handleSelect(it) {
    setSelected(it)
    trackView(it.url)
  }

  useEffect(() => {
    const id = setTimeout(() => {
      if (query) trackSearch(query)
    }, 600)
    return () => clearTimeout(id)
  }, [query])

  useEffect(() => {
    if (type && type !== 'all') trackType(type)
  }, [type])

  // keep analytics available for future, but not rendered now
  useMemo(() => getTopViews(6), [selected])
  useMemo(() => getTopSearches(6), [query])
  useMemo(() => getTypeUsage(), [type])



  return (
    <div className="font-custom3 min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Header with Back Button */}
      <div className="border-b border-white/10 bg-zinc-900/60 backdrop-blur-xl relative">
        {/* Back Button - Positioned absolutely within header */}
    
        
        <Header stats={stats} />
      </div>

      <main className="mx-auto grid max-w-screen-2xl grid-cols-12 gap-6 p-5 sm:p-6 min-h-[calc(100vh-90px)]">
        {/* Left controls */}
        <aside className="col-span-12 md:col-span-3 xl:col-span-3">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl sticky top-6 scrollbar-hidden overflow-y-auto max-h-[calc(100vh-120px)]">
            <LeftPanel
              query={query}
              onQuery={setQuery}
              type={type}
              onType={setType}
              stats={stats}
            />
          </div>
        </aside>

        {/* Middle focus with slider */}
        <section className="col-span-12 md:col-span-6 xl:col-span-6 space-y-6 scrollbar-hidden overflow-y-auto max-h-[calc(100vh-120px)]">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
            <OutcomeTitle item={selected} />
          </div>
          
      
          
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
            <FocusView item={selected} />
          </div>

              <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
            <DatasetSlider items={filtered} selected={selected} onSelect={handleSelect} />
          </div>
        </section>

        {/* Right AI Summary */}
        <aside className="col-span-12 md:col-span-3 xl:col-span-3 ">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl sticky top-6 scrollbar-hidden overflow-y-auto max-h-[calc(100vh-120px)]">
            <Sidebar item={selected} onOpenFull={() => selected && window.open(selected.url, '_blank')} />
          </div>
        </aside>
      </main>
    </div>
  )
}

export default Analysis