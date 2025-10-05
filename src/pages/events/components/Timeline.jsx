import React, { useEffect, useMemo, useState } from 'react'

export default function Timeline({ year, onChange, min = 2005, max = 2025 }) {
  const years = useMemo(() => Array.from({ length: max - min + 1 }, (_, i) => min + i), [min, max])

  const labelFor = (y) => (y === min ? String(y) : String(y).slice(2))

  const [playing, setPlaying] = useState(false)
  const [loop, setLoop] = useState(true)

  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => {
      const next = year + 1
      if (next > max) {
        if (loop) onChange?.(min)
        else {
          onChange?.(max)
          setPlaying(false)
        }
      } else {
        onChange?.(next)
      }
    }, 800)
    return () => clearInterval(id)
  }, [playing, year, min, max, loop, onChange])

  const atStart = year <= min
  const atEnd = year >= max

  return (
    <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <div className="text-white font-semibold text-lg tracking-wide">Timeline</div>
        <div className="text-3xl font-bold text-white">{year}</div>
      </div>
      
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex gap-2">
          <button 
            className="px-3 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:text-white/30 border border-white/20 hover:border-white/30 disabled:border-white/10 rounded-lg text-white text-sm transition-all duration-300" 
            title="First" 
            onClick={() => onChange?.(min)} 
            disabled={atStart}
          >
            |&lt;
          </button>
          <button 
            className="px-3 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:text-white/30 border border-white/20 hover:border-white/30 disabled:border-white/10 rounded-lg text-white text-sm transition-all duration-300" 
            title="Previous" 
            onClick={() => onChange?.(Math.max(min, year - 1))} 
            disabled={atStart}
          >
            &lt;
          </button>
          <button 
            className="px-4 py-2 bg-gradient-to-br from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border border-blue-400/40 rounded-lg text-white text-sm font-semibold transition-all duration-300 shadow-lg" 
            title={playing ? 'Pause' : 'Play'} 
            onClick={() => setPlaying(p => !p)}
          >
            {playing ? 'Pause' : 'Play'}
          </button>
          <button 
            className="px-3 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:text-white/30 border border-white/20 hover:border-white/30 disabled:border-white/10 rounded-lg text-white text-sm transition-all duration-300" 
            title="Next" 
            onClick={() => onChange?.(Math.min(max, year + 1))} 
            disabled={atEnd}
          >
            &gt;
          </button>
          <button 
            className="px-3 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:text-white/30 border border-white/20 hover:border-white/30 disabled:border-white/10 rounded-lg text-white text-sm transition-all duration-300" 
            title="Last" 
            onClick={() => onChange?.(max)} 
            disabled={atEnd}
          >
            &gt;|
          </button>
        </div>
        <label className="flex items-center gap-2 text-white text-sm cursor-pointer">
          <input 
            type="checkbox" 
            checked={loop} 
            onChange={e => setLoop(e.target.checked)}
            className="w-4 h-4 rounded accent-cyan-500"
          />
          <span>loop</span>
        </label>
      </div>

      <div className="relative">
        <input
          aria-label="Year"
          type="range"
          min={min}
          max={max}
          step={1}
          value={year}
          onChange={e => onChange?.(parseInt(e.target.value, 10))}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider-cyan"
        />
      </div>

      <div className="flex justify-between mt-3">
        {years.map(y => (
          <span 
            key={y} 
            className={`text-xs transition-all duration-300 ${
              y === year 
                ? 'text-cyan-400 font-bold scale-110' 
                : 'text-white/40'
            }`}
          >
            {labelFor(y)}
          </span>
        ))}
      </div>
    </div>
  )
}