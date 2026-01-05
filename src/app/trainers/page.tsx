import { sanityFetch } from '@/sanity/lib/client'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import TrainerCard from '@/components/ui/TrainerCard'
import { Trainer } from '@/types/sanity'

export const metadata = {
    title: 'Our Trainers | FITNESS FORGE',
    description: 'Meet our world-class trainers, dedicated to helping you achieve your fitness goals.',
}

const ALL_TRAINERS_QUERY = `*[_type == "trainer"] | order(name asc)`

export default async function TrainersPage() {
    const trainers = await sanityFetch<Trainer[]>({ query: ALL_TRAINERS_QUERY })

    return (
        <div className="pt-20">
            <Section className="bg-black">
                <Container>
                    <SectionHeader
                        subtitle="The Team"
                        title="Elite Coaches"
                        description="Our trainers aren't just experts in their fields—they are dedicated mentors who will guide, motivate, and push you to surpass your limits."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {trainers.length > 0 ? (
                            trainers.map((trainer) => (
                                <TrainerCard key={trainer._id} trainer={trainer} />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center border border-dashed border-white/10 text-slate-500">
                                No trainers found.
                            </div>
                        )}
                    </div>
                </Container>
            </Section>

            {/* Philosophy Section */}
            <Section className="bg-surface border-t border-white/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 inline-block">
                            Our Philosophy
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            MORE THAN JUST <br />
                            <span className="text-accent">REPS AND SETS</span>
                        </h2>
                        <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12">
                            At FITNESS FORGE, we believe in a holistic approach to fitness. Our coaches combine advanced exercise science with mental fortitude training to ensure you're as strong mentally as you are physically.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                            {[
                                { title: 'Science Based', desc: 'Programs built on proven physiological principles.' },
                                { title: 'Goal Oriented', desc: 'Every workout has a purpose tied to your objectives.' },
                                { title: 'Safety First', desc: 'Proper form and injury prevention are our top priorities.' },
                            ].map((item, i) => (
                                <div key={i}>
                                    <h4 className="text-accent font-black uppercase tracking-widest mb-3">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
