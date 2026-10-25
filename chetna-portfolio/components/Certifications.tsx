import { CERTIFICATIONS } from '@/lib/content'
import Window from './Window'

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-24">
      <h2 className="section-title">Certifications</h2>
      <div className="grid gap-7 md:grid-cols-3">
        {CERTIFICATIONS.map((c, i) => (
          <Window
            key={c.title}
            title={`${c.issuer.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.pdf`}
            tone={(['lilac', 'mint', 'butter'] as const)[i % 3]}
            bodyClassName="text-center space-y-2"
          >
            <div className="font-pixel text-4xl text-rose" aria-hidden="true">★</div>
            <h3 className="font-pixel text-lg m-0">{c.title}</h3>
            <p className="font-term text-xl m-0">{c.issuer}</p>
            <p className="m-0 text-sm">{c.platform}</p>
          </Window>
        ))}
      </div>
    </section>
  )
}
