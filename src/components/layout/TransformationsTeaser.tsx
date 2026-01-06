import { sanityFetch } from '@/sanity/lib/client'
import { Transformation } from '@/types/sanity'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import TransformationGallery from '@/components/ui/TransformationGallery'
import EmptyState from '@/components/ui/EmptyState'
import { Sparkles } from 'lucide-react'

const TRANSFORMATIONS_QUERY = `*[_type == "transformation"][0...5]`

export default async function TransformationsTeaser() {
  const transformations = await sanityFetch<Transformation[]>({ query: TRANSFORMATIONS_QUERY })

  return (
    <Section className="bg-black border-y border-white/5">
      <Container>
        <SectionHeader
          centered
          subtitle="Success Stories"
          title="Forged in fire"
          description="Real results from real people. Our members' transformations speak for themselves."
        />

        {transformations.length > 0 ? (
          <TransformationGallery transformations={transformations} />
        ) : (
          <EmptyState
            icon={Sparkles}
            title="Transformations Coming"
            description="Members are currently in the heat of their journey. Check back soon for their forged results."
          />
        )}
      </Container>
    </Section>
  )
}
