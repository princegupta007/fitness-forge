import { Section, Container } from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/Skeleton'

export default function TrainersLoading() {
  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="mb-12 md:mb-16">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-12 w-64 mb-6" />
            <Skeleton className="h-20 w-full max-w-2xl" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 p-4 bg-surface/40 border border-white/5">
                <Skeleton className="aspect-[4/5] w-full rounded-none" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
