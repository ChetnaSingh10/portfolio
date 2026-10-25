import type { ReactNode } from 'react'

export default function Window({
  title,
  tone = 'rose',
  children,
  className = '',
  bodyClassName = '',
}: {
  title: string
  tone?: 'rose' | 'lilac' | 'mint' | 'butter'
  children: ReactNode
  className?: string
  bodyClassName?: string
}) {
  return (
    <div className={`win ${className}`}>
      <div className={`win-bar ${tone === 'rose' ? '' : tone}`}>
        <span aria-hidden="true">♡</span>
        <span className="truncate">{title}</span>
        <span className="win-dots" aria-hidden="true"><i /><i /><i /></span>
      </div>
      <div className={`win-body ${bodyClassName}`}>{children}</div>
    </div>
  )
}
