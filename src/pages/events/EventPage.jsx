import React, { useMemo, useState,useRef } from 'react'
import MapView from './components/MapView.jsx'
import Timeline from './components/Timeline.jsx'
import Filters from './components/Filters.jsx'
import Sidebar from './components/Sidebar.jsx'
import EVENTS, { EVENT_TYPES } from './data/events.js'
import './styles.css'
import { useNavigate } from "react-router-dom";
import { useSoundEffect } from "../../hooks/useSoundEffect.jsx";
import { IoArrowBack } from "react-icons/io5";



export default function EventPage() {

  const backButtonRef = useRef(null);
    const navigate = useNavigate();
    const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });



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

  
  const handleBackClick = async () => {
    await clickSound.play();
    navigate("/terra25");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 font-custom3">
      <header className="relative border-b border-white/10 bg-zinc-900/60 backdrop-blur-xl">
        <div className="px-8 py-6 flex items-center justify-between">
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛰️</span>
            <h1 className="text-3xl font-bold text-white tracking-wide">
              NASA TERRA Events (2005–2025)
            </h1>
          </div>

          {/* Back Button */}
          <button
            ref={backButtonRef}
            onClick={handleBackClick}
            className="relative px-5 py-2 border-2 border-white/60 rounded-md 
                 bg-black/70 backdrop-blur-md 
                 hover:border-white hover:bg-black/80 
                 transition-all duration-300 shadow-lg 
                 flex items-center gap-2 group"
          >
            {/* Icon (uncomment if needed) */}
            <IoArrowBack className="text-white text-lg group-hover:-translate-x-1 transition-transform duration-300" />

            <span className="font-custom3 text-white text-sm tracking-wider font-semibold">
              Back
            </span>

            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/70 
                       group-hover:w-3 group-hover:h-3 transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/70 
                       group-hover:w-3 group-hover:h-3 transition-all duration-300" />
          </button>
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
    </div>
  )
}