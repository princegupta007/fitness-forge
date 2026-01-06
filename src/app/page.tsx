import { Suspense } from 'react'
import HomeHero from '@/components/layout/HomeHero'
import ProgramsTeaser from '@/components/layout/ProgramsTeaser'
import TrainersTeaser from '@/components/layout/TrainersTeaser'
import TransformationsTeaser from '@/components/layout/TransformationsTeaser'
import { Section, Container } from '@/components/ui/Section'
import Link from 'next/link'
import {
  ProgramsSkeleton,
  TrainersSkeleton,
  TransformationsSkeleton,
} from '@/components/ui/HomeSkeletons'
import { Skeleton } from '@/components/ui/Skeleton'

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <HomeHero />
      </Suspense>

      <Suspense fallback={<ProgramsSkeleton />}>
        <ProgramsTeaser />
      </Suspense>

      <Suspense fallback={<TrainersSkeleton />}>
        <TrainersTeaser />
      </Suspense>

      <Suspense fallback={<TransformationsSkeleton />}>
        <TransformationsTeaser />
      </Suspense>

      {/* Contact CTA */}
      <Section className="relative bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] text-white">
                READY TO START <br />
                YOUR JOURNEY?
              </h2>
              <p className="text-white/80 text-xl font-medium mb-10 max-w-xl">
                Book your free trial session today and experience the difference of training at
                FITNESS FORGE.
              </p>
              <Link
                href="/contact"
                className="btn-secondary bg-white text-accent border-none hover:bg-slate-100 px-12 py-5 text-xl"
              >
                Claim Your Free Trial
              </Link>
            </div>
            <div className="hidden lg:block relative aspect-square">
              <div className="absolute inset-0 border-8 border-white/20 rotate-12 scale-90" />
              <div className="absolute inset-0 border-8 border-white/10 -rotate-6" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

function HeroSkeleton() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black">
      <Container className="text-center">
        <Skeleton className="h-4 w-40 mx-auto mb-6" />
        <Skeleton className="h-24 md:h-48 w-full max-w-4xl mx-auto mb-10" />
        <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-12" />
        <div className="flex gap-4 justify-center">
          <Skeleton className="h-16 w-48" />
          <Skeleton className="h-16 w-48" />
        </div>
      </Container>
    </div>
  )
}
