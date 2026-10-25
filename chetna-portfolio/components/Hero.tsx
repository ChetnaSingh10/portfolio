'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PERSONAL_INFO, ROLES } from '@/lib/content'
import Socials from './Socials'

const HEARTS = [
  { top: '4%', left: '6%', size: 28, delay: '0s' },
  { top: '18%', right: '2%', size: 22, delay: '.6s' },
  { bottom: '14%', left: '0%', size: 20, delay: '1.1s' },
  { bottom: '4%', right: '12%', size: 30, delay: '1.6s' },
] as const

export default function Hero() {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(ROLES[0])
      return
    }
    const full = ROLES[i]
    const t = window.setTimeout(
      () => {
        if (!deleting) {
          const next = full.slice(0, text.length + 1)
          setText(next)
          if (next === full) window.setTimeout(() => setDeleting(true), 1200)
        } else {
          const next = full.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setDeleting(false)
            setI((n) => (n + 1) % ROLES.length)
          }
        }
      },
      deleting ? 45 : 85
    )
    return () => window.clearTimeout(t)
  }, [text, deleting, i])

  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pt-10 pb-20 sm:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="font-term text-2xl m-0">hello, i&apos;m</p>
          <h2 className="h-pixel text-5xl sm:text-6xl md:text-7xl m-0 mb-4" style={{ textShadow: '4px 4px 0 var(--petal)' }}>
            {PERSONAL_INFO.name}
          </h2>
          <p className="font-term text-3xl sm:text-4xl m-0 min-h-[2.6rem] text-rose" aria-label={ROLES.join(', ')}>
            <span aria-hidden="true">{text}</span>
            <span aria-hidden="true" className="blink">▌</span>
          </p>
          <Socials className="mt-6 justify-center md:justify-start" />
          <div className="mt-7 flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn-pixel rose">See my projects</a>
            <a href="#contact" className="btn-pixel">Say hi</a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative mx-auto w-full max-w-[340px]">
          {HEARTS.map(({ size, delay, ...pos }, idx) => (
            <span
              key={idx}
              aria-hidden="true"
              className="float absolute z-10 text-rose select-none"
              style={{ ...pos, fontSize: size, animationDelay: delay }}
            >
              ♥
            </span>
          ))}
          <div className="win">
            <div className="win-bar">
              <span aria-hidden="true">♡</span>
              <span>chetna.png</span>
              <span className="win-dots" aria-hidden="true"><i /><i /><i /></span>
            </div>
            <div className="bg-lilac aspect-square relative">
              <Image
                src="/portrait-cutout.png"
                alt={`Portrait of ${PERSONAL_INFO.name}`}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 340px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
