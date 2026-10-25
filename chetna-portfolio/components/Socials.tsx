import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/content'

export default function Socials({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a className="icon-btn" href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={20} />
      </a>
      <a className="icon-btn" href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github size={20} />
      </a>
      <a className="icon-btn" href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email">
        <Mail size={20} />
      </a>
      <a className="icon-btn" href={PERSONAL_INFO.resumePdf} target="_blank" rel="noopener noreferrer" aria-label="Resume (PDF)">
        <FileText size={20} />
      </a>
    </div>
  )
}
