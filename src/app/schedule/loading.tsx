import { Section, Container } from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/Skeleton'

export default function ScheduleLoading() {
  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="mb-12 md:mb-16">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-12 w-64 mb-6" />
            <Skeleton className="h-20 w-full max-w-2xl" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex flex-col">
                <Skeleton className="h-12 w-full mb-0 scale-y-105" />
                <div className="flex-1 bg-surface/20 border-x border-b border-white/5 p-4 space-y-4 min-h-[400px]">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
