import { SKILL_CATEGORIES } from '@/lib/content'
import Window from './Window'

const TONES = ['rose', 'lilac', 'mint', 'butter'] as const
const CHIPS = ['', 'lilac', 'mint', 'butter'] as const
const FILE_EXT = ['sys', 'cfg', 'db', 'bin', 'exe', 'dll']

function fileName(category: string, i: number) {
  return `${category.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '')}.${FILE_EXT[i % FILE_EXT.length]}`
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-24">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid gap-7 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((cat, i) => (
          <Window key={cat.category} title={fileName(cat.category, i)} tone={TONES[i % TONES.length]}>
            <h3 className="font-pixel text-xl m-0 mb-3">{cat.category}</h3>
            <ul className="flex flex-wrap gap-2 m-0 p-0 list-none">
              {cat.skills.map((s) => (
                <li key={s} className={`chip ${CHIPS[i % CHIPS.length]}`}>{s}</li>
              ))}
            </ul>
          </Window>
        ))}
      </div>
    </section>
  )
}
