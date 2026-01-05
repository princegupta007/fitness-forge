import { sanityFetch } from '@/sanity/lib/client'
import Hero from '@/components/layout/Hero'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import ProgramCard from '@/components/ui/ProgramCard'
import TrainerCard from '@/components/ui/TrainerCard'
import TransformationGallery from '@/components/ui/TransformationGallery'
import { Program, Trainer, Transformation } from '@/types/sanity'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Queries
const PROGRAMS_QUERY = `*[_type == "program"][0...3]`
const TRAINERS_QUERY = `*[_type == "trainer"][0...3]`
const TRANSFORMATIONS_QUERY = `*[_type == "transformation"][0...5]`

export default async function HomePage() {
  const [programs, trainers, transformations] = await Promise.all([
    sanityFetch<Program[]>({ query: PROGRAMS_QUERY }),
    sanityFetch<Trainer[]>({ query: TRAINERS_QUERY }),
    sanityFetch<Transformation[]>({ query: TRANSFORMATIONS_QUERY }),
  ])

  return (
    <>
      <Hero />

      {/* Programs Teaser */}
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
              programs.map((program) => (
                <ProgramCard key={program._id} program={program} />
              ))
            ) : (
              // Empty state or dummy data handled by Sanity returning empty []
              <div className="col-span-full py-20 text-center border border-dashed border-white/10 text-slate-500">
                No programs found in CMS. Please add some to see them here.
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Trainers Teaser */}
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
              trainers.map((trainer) => (
                <TrainerCard key={trainer._id} trainer={trainer} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10 text-slate-500">
                No trainers found in CMS.
              </div>
            )}
          </div>

          <div className="text-center">
            <Link href="/trainers" className="btn-primary px-12">
              Meet All Trainers
            </Link>
          </div>
        </Container>
      </Section>

      {/* Transformations */}
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
            <div className="col-span-full py-20 text-center border border-dashed border-white/10 text-slate-500">
              No transformation stories found in CMS.
            </div>
          )}
        </Container>
      </Section>

      {/* Contact CTA */}
      <Section className="relative bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] text-white">
                READY TO START <br />
                YOUR JOURNEY?
              </h2>
              <p className="text-white/80 text-xl font-medium mb-10 max-w-xl">
                Book your free trial session today and experience the difference of training at FITNESS FORGE.
              </p>
              <Link href="/contact" className="btn-secondary bg-white text-accent border-none hover:bg-slate-100 px-12 py-5 text-xl">
                Claim Your Free Trial
              </Link>
            </div>
            <div className="hidden lg:block relative aspect-square">
              {/* Decorative image or icon could go here */}
              <div className="absolute inset-0 border-8 border-white/20 rotate-12 scale-90" />
              <div className="absolute inset-0 border-8 border-white/10 -rotate-6" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
