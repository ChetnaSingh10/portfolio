'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto max-w-5xl flex items-center justify-between rounded-xl border-[3px] border-berry bg-cream px-4 py-2 shadow-[4px_4px_0_var(--berry)]"
      >
        <a href="#top" className="font-pixel text-xl no-underline text-berry">♡ chetna</a>

        <ul className="hidden md:flex gap-5 m-0 p-0 list-none font-term text-xl">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-berry no-underline hover:text-rose">{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden icon-btn !w-10 !h-10"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="md:hidden mx-auto mt-2 max-w-5xl list-none m-0 p-3 rounded-xl border-[3px] border-berry bg-cream shadow-[4px_4px_0_var(--berry)] font-term text-2xl"
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-berry no-underline">
                ♡ {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
