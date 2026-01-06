import { sanityFetch } from '@/sanity/lib/client'
import { Program } from '@/types/sanity'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import ProgramCard from '@/components/ui/ProgramCard'
import EmptyState from '@/components/ui/EmptyState'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const PROGRAMS_QUERY = `*[_type == "program"][0...3]`

export default async function ProgramsTeaser() {
  const programs = await sanityFetch<Program[]>({ query: PROGRAMS_QUERY })

  return (
    <Section className="bg-black">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            subtitle="Our Programs"
            title="Train for results"
            description="Whether you're looking to build muscle, lose weight, or improve your athletic performance, we have the perfect program for you."
            className="mb-0 md:max-w-2xl"
          />
          <Link href="/programs" className="btn-secondary flex items-center gap-2 mb-4">
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.length > 0 ? (
            programs.map((program) => <ProgramCard key={program._id} program={program} />)
          ) : (
            <EmptyState
              title="No Programs Found"
              description="Our forge is currently being prepared with new training programs. Check back soon for elite regimens."
            />
          )}
        </div>
      </Container>
    </Section>
  )
}
