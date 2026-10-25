import type { Metadata, Viewport } from 'next'
import { Pixelify_Sans, VT323, Quicksand } from 'next/font/google'
import './globals.css'
import { PERSONAL_INFO } from '@/lib/content'

const pixel = Pixelify_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-pixel', display: 'swap' })
const term = VT323({ subsets: ['latin'], weight: '400', variable: '--font-term', display: 'swap' })
const body = Quicksand({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const title = `${PERSONAL_INFO.name} ✦ Full Stack Developer`
const description =
  'Portfolio of Chetna Singh, an MCA student and full stack developer building MERN apps and friendly, responsive interfaces.'

export const viewport: Viewport = {
  themeColor: '#db6b8f',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  authors: [{ name: PERSONAL_INFO.name, url: siteUrl }],
  openGraph: {
    title,
    description,
    type: 'website',
    url: siteUrl,
    siteName: PERSONAL_INFO.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: PERSONAL_INFO.name }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
  icons: { icon: '/icon.png', apple: '/icon.png' },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pixel.variable} ${term.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
