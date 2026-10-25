import { ABOUT, PERSONAL_INFO } from '@/lib/content'
import PixelCat from './PixelCat'
import Window from './Window'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-16 scroll-mt-24">
      <h2 className="section-title">About Me</h2>
      <div className="grid gap-8 md:grid-cols-[1.4fr_.6fr] items-start">
        <Window title="about_me.txt" bodyClassName="space-y-4 text-[1.05rem]">
          {ABOUT.map((p) => (
            <p key={p} className="m-0">{p}</p>
          ))}
          <p className="m-0 flex flex-wrap gap-2 pt-2">
            <span className="chip lilac">{PERSONAL_INFO.status}</span>
            <span className="chip mint">{PERSONAL_INFO.institution}</span>
            <span className="chip butter">{PERSONAL_INFO.location}</span>
          </p>
        </Window>

        <div className="flex flex-col items-center gap-5 text-center">
          <PixelCat size={10} className="float" />
          <p className="font-term text-2xl m-0">
            Curious about me?
            <br />
            Peek at my skills below ♡
          </p>
          <a href="#skills" className="btn-pixel">Open skills</a>
        </div>
      </div>
    </section>
  )
}
