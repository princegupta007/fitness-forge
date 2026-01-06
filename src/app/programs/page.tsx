import { sanityFetch } from '@/sanity/lib/client'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import ProgramCard from '@/components/ui/ProgramCard'
import { Program } from '@/types/sanity'

export const metadata = {
  title: 'Our Programs | FITNESS FORGE',
  description:
    'Explore our wide range of fitness programs, from strength training to HIIT and yoga.',
}

const ALL_PROGRAMS_QUERY = `*[_type == "program"] | order(title asc)`

export default async function ProgramsPage() {
  const programs = (await sanityFetch<Program[]>({ query: ALL_PROGRAMS_QUERY })) || []

  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <SectionHeader
            subtitle="Training"
            title="Forging Excellence"
            description="We offer a diverse range of programs designed to push your limits and help you achieve extraordinary results, regardless of your current fitness level."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.length > 0 ? (
              programs.map((program) => (
                <div key={program._id} id={program.slug.current} className="scroll-mt-32">
                  <ProgramCard program={program} />
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10 text-slate-500">
                No programs found.
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Benefits CTA */}
      <Section className="bg-surface border-t border-white/5">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                subtitle="Why Choose Us"
                title="Elevate Your Training"
                description="Our programs are built on scientific principles and led by experts who care about your progress as much as you do."
                className="mb-8"
              />
              <ul className="space-y-6">
                {[
                  {
                    title: 'Expert Guidance',
                    desc: 'Certified trainers with years of experience.',
                  },
                  {
                    title: 'Elite Community',
                    desc: 'Train with motivated, like-minded individuals.',
                  },
                  {
                    title: 'Modern Equipment',
                    desc: 'Top-of-the-line gear for every training style.',
                  },
                  {
                    title: 'Trackable Progress',
                    desc: 'Built-in assessment and progress tracking.',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 font-black text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video bg-stone-900 overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
