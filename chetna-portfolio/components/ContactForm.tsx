'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/content'
import { contactSchema, INQUIRY_LABELS, INQUIRY_TYPES, type InquiryType } from '@/lib/contact-schema'
import Window from './Window'
import Socials from './Socials'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('career')
  const [form, setForm] = useState({ name: '', email: '', organization: '', message: '', website: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState<string | null>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrors({})
    setServerError(null)

    const payload = { ...form, role: '', inquiryType }
    const parsed = contactSchema.safeParse(payload)
    if (!parsed.success) {
      const next: Record<string, string> = {}
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) next[String(i.path[0])] = i.message
      })
      setErrors(next)
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) {
        if (res.status === 400 && data.errors) {
          setErrors(data.errors)
          setStatus('idle')
          return
        }
        throw new Error(data.error || 'Could not send your message. Please try again.')
      }
      setStatus('success')
      setForm({ name: '', email: '', organization: '', message: '', website: '' })
    } catch (err) {
      setStatus('error')
      setServerError(
        err instanceof Error ? err.message : `Could not send your message. Email me at ${PERSONAL_INFO.email} instead.`
      )
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-5 py-16 scroll-mt-24">
      <h2 className="section-title">Contact Me</h2>
      <Window title="send_message.exe">
        {status === 'success' ? (
          <div role="status" className="pop text-center space-y-3 py-6">
            <div className="font-pixel text-5xl text-rose" aria-hidden="true">♥</div>
            <h3 className="font-pixel text-2xl m-0">Message sent!</h3>
            <p className="m-0">Thanks for writing. I&apos;ll reply as soon as I can.</p>
            <button type="button" className="btn-pixel" onClick={() => setStatus('idle')}>Send another</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <label htmlFor="c-name" className="label-term">♡ Name</label>
              <input id="c-name" className="field" value={form.name} onChange={set('name')} autoComplete="name"
                aria-invalid={!!errors.name} aria-describedby={errors.name ? 'c-name-err' : undefined} />
              {errors.name && <p id="c-name-err" className="m-0 mt-1 text-sm text-[#c2233f]">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="c-email" className="label-term">♡ Email</label>
              <input id="c-email" type="email" className="field" value={form.email} onChange={set('email')} autoComplete="email"
                aria-invalid={!!errors.email} aria-describedby={errors.email ? 'c-email-err' : undefined} />
              {errors.email && <p id="c-email-err" className="m-0 mt-1 text-sm text-[#c2233f]">{errors.email}</p>}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="c-type" className="label-term">♡ Reason</label>
                <select id="c-type" className="field" value={inquiryType} onChange={(e) => setInquiryType(e.target.value as InquiryType)}>
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t} value={t}>{INQUIRY_LABELS[t]}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="c-org" className="label-term">♡ Company or school (optional)</label>
                <input id="c-org" className="field" value={form.organization} onChange={set('organization')} autoComplete="organization" />
              </div>
            </div>

            <div>
              <label htmlFor="c-msg" className="label-term">♡ Message</label>
              <textarea id="c-msg" rows={5} className="field" value={form.message} onChange={set('message')}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'c-msg-err' : undefined} />
              {errors.message && <p id="c-msg-err" className="m-0 mt-1 text-sm text-[#c2233f]">{errors.message}</p>}
            </div>

            {/* Honeypot: hidden from people, filled by bots */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
              <label>Website<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} /></label>
            </div>

            {status === 'error' && serverError && (
              <p role="alert" className="m-0 text-[#c2233f] font-semibold">{serverError}</p>
            )}

            <button type="submit" className="btn-pixel rose w-full" disabled={status === 'submitting'}>
              <Send size={18} /> {status === 'submitting' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </Window>

      <div className="mt-8 text-center space-y-4">
        <p className="m-0">
          Prefer email? Write to{' '}
          <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-berry underline decoration-rose decoration-2 underline-offset-4">
            {PERSONAL_INFO.email}
          </a>
        </p>
        <Socials className="justify-center" />
      </div>
    </section>
  )
}
