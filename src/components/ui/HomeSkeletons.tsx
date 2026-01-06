import { Skeleton } from './Skeleton'
import { Section, Container } from './Section'

export function SectionHeaderSkeleton() {
  return (
    <div className="mb-16">
      <Skeleton className="h-4 w-24 mb-4" />
      <Skeleton className="h-12 w-64 md:w-96 mb-6" />
      <Skeleton className="h-6 w-full max-w-2xl" />
    </div>
  )
}

export function ProgramsSkeleton() {
  return (
    <Section className="bg-black">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeaderSkeleton />
          <Skeleton className="h-12 w-48 mb-4 shrink-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-surface border border-white/5 p-8 h-80 flex flex-col justify-end"
            >
              <Skeleton className="h-8 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export function TrainersSkeleton() {
  return (
    <Section className="bg-surface">
      <Container>
        <div className="text-center mb-16 flex flex-col items-center">
          <Skeleton className="h-4 w-32 mb-4" />
          <Skeleton className="h-12 w-80 mb-6" />
          <Skeleton className="h-6 w-full max-w-xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[4/5] bg-black/20 border border-white/5 relative overflow-hidden"
            >
              <Skeleton className="absolute inset-0" />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Skeleton className="h-16 w-64" />
        </div>
      </Container>
    </Section>
  )
}

export function TransformationsSkeleton() {
  return (
    <Section className="bg-black border-y border-white/5">
      <Container>
        <div className="text-center mb-16 flex flex-col items-center">
          <Skeleton className="h-4 w-32 mb-4" />
          <Skeleton className="h-12 w-80 mb-6" />
          <Skeleton className="h-6 w-full max-w-xl" />
        </div>
        <div className="max-w-5xl mx-auto h-96">
          <Skeleton className="w-full h-full" />
        </div>
      </Container>
    </Section>
  )
}
