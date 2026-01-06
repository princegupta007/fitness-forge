import { sanityFetch } from '@/sanity/lib/client'
import { Trainer } from '@/types/sanity'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import TrainerCard from '@/components/ui/TrainerCard'
import EmptyState from '@/components/ui/EmptyState'
import Link from 'next/link'
import { Users } from 'lucide-react'

const TRAINERS_QUERY = `*[_type == "trainer"][0...3]`

export default async function TrainersTeaser() {
  const trainers = await sanityFetch<Trainer[]>({ query: TRAINERS_QUERY })

  return (
    <Section className="bg-surface">
      <Container>
        <SectionHeader
          centered
          subtitle="Expert Coaching"
          title="Meet the forge masters"
          description="Our world-class trainers are dedicated to helping you achieve your fitness goals with science-based coaching and personalized attention."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trainers.length > 0 ? (
            trainers.map((trainer) => <TrainerCard key={trainer._id} trainer={trainer} />)
          ) : (
            <EmptyState
              icon={Users}
              title="No Masters Found"
              description="The Forge Masters are currently out leading private sessions. Meet them here soon."
            />
          )}
        </div>

        <div className="text-center">
          <Link href="/trainers" className="btn-primary px-12">
            Meet All Trainers
          </Link>
        </div>
      </Container>
    </Section>
  )
}
