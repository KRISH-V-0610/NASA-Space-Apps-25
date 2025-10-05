import React from 'react'
import { EVENT_TYPES, typeToEmoji, typeToLabel } from '../data/events.js'

export default function Filters({ activeTypes, onToggleType, onSelectOnly, onReset }) {
  const [open, setOpen] = React.useState(false)

  const allSelected = activeTypes.size === EVENT_TYPES.length

  return (
    <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-5">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold text-xl tracking-wide">Filters</div>
        <div className="flex gap-2">
          <button 
            className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white text-sm transition-all duration-300 flex items-center gap-2"
            onClick={() => setOpen(v => !v)}
          >
            <span>Event Types</span>
            <span className="text-white/60 text-xs">
              {allSelected ? 'All' : `${activeTypes.size} selected`}
            </span>
            <span className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
              ▾
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 bg-zinc-900/60 border border-white/10 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-3 mb-4">
            {EVENT_TYPES.map(type => {
              const active = activeTypes.has(type)
              return (
                <label 
                  key={type} 
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-300 cursor-pointer ${
                    active 
                      ? 'bg-white/10 border-white/30 hover:bg-white/15' 
                      : 'bg-transparent border-white/10 hover:bg-white/5'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() => onToggleType(type)}
                    className="w-4 h-4 rounded accent-cyan-500"
                  />
                  <span className="text-lg">{typeToEmoji[type]}</span>
                  <span className="text-white text-sm flex-1">{typeToLabel[type]}</span>
                  {!active && (
                    <button 
                      className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold" 
                      onClick={(e) => { 
                        e.preventDefault()
                        e.stopPropagation()
                        onSelectOnly(type)
                      }}
                    >
                      only
                    </button>
                  )}
                </label>
              )
            })}
          </div>
          <div className="flex gap-2 pt-3 border-t border-white/10">
            <button 
              className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white text-sm transition-all duration-300" 
              onClick={onReset}
            >
              Select All
            </button>
            <button 
              className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-lg text-white text-sm transition-all duration-300" 
              onClick={() => { 
                EVENT_TYPES.forEach(t => activeTypes.has(t) && onToggleType(t))
              }}
            >
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  )
}