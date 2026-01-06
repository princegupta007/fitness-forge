import { Section, Container } from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/Skeleton'

export default function PricingLoading() {
  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <div className="flex justify-center">
              <Skeleton className="h-6 w-32 mb-4" />
            </div>
            <div className="flex justify-center">
              <Skeleton className="h-12 w-64 mb-6" />
            </div>
            <div className="flex justify-center">
              <Skeleton className="h-20 w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-6 p-10 bg-surface/40 border border-white/5">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-16 w-32" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <Skeleton className="h-14 w-full mt-auto" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
