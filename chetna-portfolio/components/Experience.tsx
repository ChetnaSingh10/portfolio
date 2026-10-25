import { EXPERIENCE } from '@/lib/content'
import Window from './Window'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-5 py-16 scroll-mt-24">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-8">
        {EXPERIENCE.map((e) => (
          <Window key={`${e.company}-${e.period}`} title={`${e.company.replace(/[^a-z0-9]+/gi, '_').toLowerCase()}.sys`}>
            <h3 className="font-pixel text-2xl m-0">{e.role}</h3>
            <p className="font-term text-xl m-0 mb-3 text-rose">
              {e.company} · {e.period}
            </p>
            <ul className="m-0 pl-5 space-y-2">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Window>
        ))}
      </div>
    </section>
  )
}
