import React, { useMemo } from 'react'

export default function EventDetails({ year, events, selectedEvent, onSelect }) {
  const gallery = useMemo(() => {
    const list = [...events]
    if (selectedEvent) {
      const idx = list.findIndex(e => e.id === selectedEvent.id)
      if (idx > -1) list.splice(idx, 1)
      return [selectedEvent, ...list]
    }
    return list
  }, [events, selectedEvent])

  if (selectedEvent) {
    return (
      <div className="p-6 space-y-4">
        <div className="relative rounded-xl overflow-hidden border border-white/10">
          <img 
            className="w-full h-64 object-cover" 
            src={selectedEvent.image} 
            alt={selectedEvent.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-2xl mb-2">{selectedEvent.title}</h3>
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <span className="px-3 py-1 bg-white/10 rounded-full">{selectedEvent.type}</span>
            <span>•</span>
            <span>{selectedEvent.year}</span>
            <span>•</span>
            <span>{selectedEvent.region}</span>
          </div>
        </div>

        <div className="bg-zinc-800/60 border border-white/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">🤖</span>
            <span className="text-cyan-400 text-xs font-semibold tracking-wider">AI SUMMARY</span>
          </div>
          <p className="text-white/90 text-sm leading-relaxed">{selectedEvent.summary}</p>
        </div>

        <div className="text-white/50 text-xs pt-2 border-t border-white/10">
          Source: {selectedEvent.source}
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-white font-bold text-2xl">{year} Highlights</h3>
        <p className="text-white/60 text-sm mt-2">
          {gallery.length} {gallery.length === 1 ? 'event' : 'events'} found
        </p>
      </div>
      
      <div className="space-y-4">
        {gallery.length === 0 && (
          <div className="text-center py-12 text-white/40">
            <p className="text-lg">No events for current filters.</p>
            <p className="text-sm mt-2">Try adjusting your filters or year selection.</p>
          </div>
        )}
        {gallery.map(e => (
          <div 
            key={e.id} 
            onClick={() => onSelect?.(e.id)}
            className="group cursor-pointer bg-zinc-800/40 border border-white/10 hover:border-white/30 rounded-xl overflow-hidden transition-all duration-300 hover:bg-zinc-800/60"
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={e.image} 
                alt={e.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-4">
              <h4 className="text-white font-semibold text-base mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {e.title}
              </h4>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <span className="px-2 py-1 bg-white/10 rounded">{e.type}</span>
                <span>•</span>
                <span>{e.region}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}