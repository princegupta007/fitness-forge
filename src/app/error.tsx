'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCcw } from 'lucide-react'
import Link from 'next/link'
import { Container } from '@/components/ui/Section'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Critical Application Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <Container className="text-center">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20">
          <AlertTriangle className="text-red-500 w-10 h-10" />
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
          SYSTEM <span className="text-red-500">MALLFUNCTION</span>
        </h1>

        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
          Our elite engineers are currently recalibrating the forge. Please try again or return to
          base.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <pre className="bg-red-500/10 p-4 rounded border border-red-500/20 text-xs text-red-500 max-w-xl mx-auto mb-8 overflow-auto text-left">
            {error.message}
            {error.digest && `\nDigest: ${error.digest}`}
          </pre>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="btn-primary w-full sm:w-auto px-10 py-5 flex items-center justify-center gap-2"
          >
            <RefreshCcw size={20} /> Try Again
          </button>

          <Link href="/" className="btn-secondary w-full sm:w-auto px-10 py-5">
            Back to Home
          </Link>
        </div>
      </Container>
    </div>
  )
}
