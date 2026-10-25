'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import PixelCat from '@/components/PixelCat'
import Window from '@/components/Window'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error)
  }, [error])

  return (
    <main className="min-h-screen grid place-items-center p-6">
      <Window title="oops.sys" className="max-w-md w-full" bodyClassName="text-center space-y-4">
        <PixelCat size={9} className="mx-auto" />
        <h1 className="font-pixel text-3xl m-0">Something broke</h1>
        <p className="m-0">The page hit an error. Try again, or go back home.</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <button type="button" className="btn-pixel rose" onClick={reset}>Try again</button>
          <Link href="/" className="btn-pixel">Back to home</Link>
        </div>
      </Window>
    </main>
  )
}
