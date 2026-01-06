import { sanityFetch } from '@/sanity/lib/client'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { Transformation } from '@/types/sanity'
import TransformationGallery from '@/components/ui/TransformationGallery'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export const metadata = {
  title: 'Success Gallery | FITNESS FORGE',
  description: 'Witness the incredible transformations of our members at FITNESS FORGE.',
}

const ALL_TRANSFORMATIONS_QUERY = `*[_type == "transformation"]`

export default async function GalleryPage() {
  const transformations = await sanityFetch<Transformation[]>({ query: ALL_TRANSFORMATIONS_QUERY })

  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <SectionHeader
            centered
            subtitle="Hall of Fame"
            title="The results of hard work"
            description="Explore the transformations of our dedicated members. Every success story here started with a single decision to show up."
          />

          <div className="mt-16">
            {transformations.length > 0 ? (
              <TransformationGallery transformations={transformations} />
            ) : (
              <div className="py-20 text-center border border-dashed border-white/10 text-slate-500">
                No transformations found yet. Check back soon for more success stories.
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Atmosphere Grid */}
      <Section className="bg-surface border-t border-white/5">
        <Container>
          <SectionHeader
            subtitle="The Forge"
            title="Our Atmosphere"
            description="More than just a gym. Experience the intensity and community that defines FITNESS FORGE."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1571902251103-d71b46324837?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1534367507873-d2b7e24959ac?q=80&w=2070&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <img
                  src={src}
                  alt={`Fitness Forge atmosphere ${i + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:opacity-0 transition-opacity" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
