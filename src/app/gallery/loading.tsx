import { Section, Container } from '@/components/ui/Section'
import { Skeleton } from '@/components/ui/Skeleton'

export default function GalleryLoading() {
  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="mb-12 md:mb-16">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-12 w-64 mb-6" />
            <Skeleton className="h-20 w-full max-w-2xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-2">
                  <Skeleton className="aspect-[3/4] w-full" />
                  <Skeleton className="aspect-[3/4] w-full" />
                </div>
                <div className="flex justify-center">
                  <Skeleton className="h-6 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
