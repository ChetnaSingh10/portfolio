import { MetadataRoute } from 'next'
import { PERSONAL_INFO } from '@/lib/content'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PERSONAL_INFO.name} — Portfolio`,
    short_name: 'Chetna Singh',
    description: 'Personal portfolio of Chetna Singh. Full Stack Developer and UI/UX Designer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFE9F1',
    theme_color: '#db6b8f',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
