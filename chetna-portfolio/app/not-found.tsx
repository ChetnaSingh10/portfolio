import Link from 'next/link'
import PixelCat from '@/components/PixelCat'
import Window from '@/components/Window'

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <Window title="404.exe" className="max-w-md w-full" bodyClassName="text-center space-y-4">
        <PixelCat size={9} className="mx-auto bounce-pix" />
        <h1 className="font-pixel text-3xl m-0">Page not found</h1>
        <p className="m-0">This page doesn&apos;t exist. Head back home to see the portfolio.</p>
        <Link href="/" className="btn-pixel rose">Back to home</Link>
      </Window>
    </main>
  )
}
