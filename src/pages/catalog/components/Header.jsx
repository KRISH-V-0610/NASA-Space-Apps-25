import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom.jsx'

export default function Header({ stats }) {

  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate('/terra25')
  }
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-gradient-to-b from-slate-900/80 to-transparent p-5 backdrop-blur">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">

        {/* Left Section: Logo + Back + Title */}
        <div className="flex items-center gap-4">
       

          {/* Back Button + Title */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackClick}
              className="cursor-pointer px-6 py-3 border-2 border-white/40 bg-zinc-900/90 backdrop-blur-md hover:border-white hover:bg-zinc-800 transition-all duration-300 shadow-lg group flex items-center gap-2 "
            >
              <IoArrowBack className="text-white text-lg group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white text-xs tracking-wider font-semibold">Back</span>
            </button>
                      {/* Logo */}
<div className="relative">
  {/* Glow Behind Logo */}
  <span className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-amber-500/40 via-green-500/30 to-blue-500/40 blur-xl opacity-70 animate-pulse"></span>
  
  {/* Logo Container */}
  <div className="relative grid h-12 w-12 place-items-center rounded-xl 
                  bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800
                  border border-white/10 
                  shadow-[0_0_20px_rgba(236,72,153,0.4)]
                  backdrop-blur-sm">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M12 2l2.39 4.84L20 8l-3.8 3.7L17.5 18 12 15.27 6.5 18l1.3-6.3L4 8l5.61-1.16L12 2z"
        fill="currentColor"
      />
    </svg>
  </div>
</div>
            <div>

       
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                NASA Data Catalog
              </h1>
              <p className="text-sm text-slate-400">
                Stunning visual explorer for GIF, PNG, JPG
              </p>
            </div>
          </div>
        </div>

        {/* Right Stats */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-300">
            <span className="glass rounded-md px-3 py-1.5">Total: {stats.total}</span>
            {Object.entries(stats.byType || {}).map(([k, v]) => (
              <span key={k} className="glass rounded-md px-3 py-1.5 uppercase">
                {k}: {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
