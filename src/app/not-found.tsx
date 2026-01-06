import Link from 'next/link'
import { Container } from '@/components/ui/Section'
import { Dumbbell } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <Container className="text-center">
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 border border-accent/20">
          <Dumbbell className="text-accent w-12 h-12 -rotate-45" />
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-6 uppercase tracking-tighter text-white">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl font-black mb-8 uppercase text-accent">
          OUT OF BOUNDS
        </h2>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium font-italic">
          You've wandered off the training floor. This page doesn't exist, but your goals still do.
        </p>

        <Link href="/" className="btn-primary px-12 py-5 inline-block">
          Return to HQ
        </Link>
      </Container>
    </div>
  )
}
