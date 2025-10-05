import React, { useMemo, useState } from 'react'
import MapView from './components/MapView.jsx'
import Timeline from './components/Timeline.jsx'
import Filters from './components/Filters.jsx'
import Sidebar from './components/Sidebar.jsx'
import EVENTS, { EVENT_TYPES } from './data/events.js'
import './styles.css'

export default function EventPage() {
  const [year, setYear] = useState(2005)
  const [activeTypes, setActiveTypes] = useState(() => new Set(EVENT_TYPES))
  const [selectedEventId, setSelectedEventId] = useState(null)

  const filteredEvents = useMemo(() => {
    return EVENTS.filter(e => e.year === year && activeTypes.has(e.type))
  }, [year, activeTypes])

  const selectedEvent = useMemo(() => {
    return EVENTS.find(e => e.id === selectedEventId) || null
  }, [selectedEventId])

  const onToggleType = (type) => {
    setSelectedEventId(null)
    setActiveTypes(prev => {
      const next = new Set(prev)
      if (next.has(type)) next.delete(type)
      else next.add(type)
      return next
    })
  }

  const onSelectOnly = (type) => {
    setSelectedEventId(null)
    setActiveTypes(new Set([type]))
  }

  const onResetFilters = () => {
    setSelectedEventId(null)
    setActiveTypes(new Set(EVENT_TYPES))
  }

  const mapEvents = useMemo(
    () => (selectedEvent ? [selectedEvent] : filteredEvents),
    [selectedEvent, filteredEvents]
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 font-custom3">
      <header className="border-b border-white/10 bg-zinc-900/60 backdrop-blur-xl">
        <div className="px-8 py-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛰️</span>
            <h1 className="text-3xl font-bold text-white tracking-wide">
              NASA TERRA Events (2005–2025)
            </h1>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-88px)]">
        <div className="flex-1 flex flex-col p-6 gap-6">
          <Filters
            activeTypes={activeTypes}
            onToggleType={onToggleType}
            onSelectOnly={onSelectOnly}
            onReset={onResetFilters}
          />

          <div className="flex-1 rounded-xl overflow-hidden border border-white/10 bg-zinc-800/40">
            <MapView
              year={year}
              events={mapEvents}
              onSelect={(id) => setSelectedEventId(id)}
              selectedId={selectedEventId}
            />
          </div>

          <Timeline year={year} onChange={setYear} />
        </div>

        <div className="w-[450px] border-l border-white/10 bg-zinc-900/60 backdrop-blur-xl">
          <Sidebar
            year={year}
            events={filteredEvents}
            selectedEvent={selectedEvent}
            onClear={() => setSelectedEventId(null)}
            onSelect={(id) => setSelectedEventId(id)}
          />
        </div>
      </div>

      <footer className="border-t border-white/10 bg-zinc-900/60 backdrop-blur-xl px-8 py-4">
        <span className="text-white/60 text-sm">
          Tiles © OpenStreetMap contributors • Built with React + Leaflet
        </span>
      </footer>
    </div>
  )
}