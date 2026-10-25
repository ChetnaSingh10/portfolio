import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '@/lib/content'
import Window from './Window'

const TONES = ['rose', 'lilac', 'mint', 'butter'] as const

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-24">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((p, i) => {
          const github = p.links.github.url
          const live = p.links.live?.url
          return (
            <Window
              key={p.id}
              title={`${p.id.replace(/-/g, '_')}.exe`}
              tone={TONES[i % TONES.length]}
              className="h-full"
              bodyClassName="flex h-full flex-col gap-3"
            >
              <div>
                <h3 className="font-pixel text-2xl m-0">{p.title}</h3>
                <p className="font-term text-xl m-0 text-rose">{p.subtitle}</p>
              </div>
              <ul className="m-0 pl-5 space-y-1.5 text-[.98rem]">
                {p.whatIBuilt.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2 m-0 p-0 list-none mt-auto pt-2">
                {p.stack.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>
              {(github || live) && (
                <div className="flex gap-3 pt-1">
                  {github && (
                    <a className="btn-pixel !text-sm !py-2" href={github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> {p.links.github.label}
                    </a>
                  )}
                  {live && (
                    <a className="btn-pixel rose !text-sm !py-2" href={live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> {p.links.live?.label ?? 'Live'}
                    </a>
                  )}
                </div>
              )}
            </Window>
          )
        })}
      </div>
    </section>
  )
}
