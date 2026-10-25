import { PERSONAL_INFO, LAST_UPDATED } from '@/lib/content'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6 text-center">
      <Socials className="justify-center mb-4" />
      <p className="font-term text-xl m-0">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. made with ♡ · updated {LAST_UPDATED}
      </p>
    </footer>
  )
}
