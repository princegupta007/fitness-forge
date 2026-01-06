import { Section, Container } from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/Skeleton'

export default function ProgramsLoading() {
  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="mb-12 md:mb-16">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-12 w-64 mb-6" />
            <Skeleton className="h-20 w-full max-w-2xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 bg-surface/40 border border-white/5">
                <Skeleton className="aspect-video w-full rounded-none" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full mt-4" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
