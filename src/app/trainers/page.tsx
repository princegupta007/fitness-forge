import { sanityFetch } from '@/sanity/lib/client'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import TrainerCard from '@/components/ui/TrainerCard'
import { Trainer } from '@/types/sanity'

export const metadata = {
  title: 'Our Coaches | FITNESS FORGE',
  description: 'Meet our world-class trainers dedicated to helping you achieve your fitness goals.',
}

const ALL_TRAINERS_QUERY = `*[_type == "trainer"] | order(name asc)`

export default async function TrainersPage() {
  const trainers = await sanityFetch<Trainer[]>({ query: ALL_TRAINERS_QUERY })

  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <SectionHeader
            subtitle="Forge Masters"
            title="Meet our world-class coaches"
            description="Our trainers aren't just experts in their field—they're dedicated mentors who are personally invested in your success. Each brings a unique specialization to help you forge your best self."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.length > 0 ? (
              trainers.map((trainer) => <TrainerCard key={trainer._id} trainer={trainer} />)
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10 text-slate-500">
                No trainers found.
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Motivation Section */}
      <Section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
            alt="Training motivation"
            className="w-full h-full object-cover object-center grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black" />
        </div>

        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8 leading-[0.9]">
            "The only bad workout <br />
            is the one that <span className="text-accent">didn't happen.</span>"
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm">
            Start your journey today
          </p>
        </Container>
      </Section>
    </div>
  )
}
