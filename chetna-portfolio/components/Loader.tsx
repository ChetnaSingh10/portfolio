'use client'

import { useEffect, useState } from 'react'
import PixelCat from './PixelCat'

export default function Loader() {
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const step = reduce ? 100 : 4
    const id = window.setInterval(() => {
      setPct((p) => {
        const next = Math.min(100, p + step)
        if (next === 100) window.clearInterval(id)
        return next
      })
    }, 60)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (pct < 100) return
    const t = window.setTimeout(() => setGone(true), 350)
    return () => window.clearTimeout(t)
  }, [pct])

  useEffect(() => {
    document.body.style.overflow = gone ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [gone])

  if (gone) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-blush px-6"
      style={{ backgroundImage: 'radial-gradient(var(--petal) 2px, transparent 2px)', backgroundSize: '22px 22px' }}
    >
      <PixelCat size={12} className="bounce-pix" />
      <h1 className="h-pixel text-2xl sm:text-4xl text-center">LOADING CUTE MODE</h1>
      <div className="w-full max-w-sm">
        <div className="h-7 border-[3px] border-berry rounded-lg bg-cream overflow-hidden shadow-[4px_4px_0_var(--berry)]">
          <div className="h-full bg-rose" style={{ width: `${pct}%`, transition: 'width .06s steps(2)' }} />
        </div>
        <p className="font-term text-xl mt-3 text-center">
          ♡ booting the portfolio files... {pct}%
        </p>
      </div>
    </div>
  )
}
