import { sanityFetch } from '@/sanity/lib/client'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { Transformation } from '@/types/sanity'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'

export const metadata = {
    title: 'Transformation Gallery | FITNESS FORGE',
    description: 'See the real-life results of our dedicated members and athletes.',
}

const TRANSFORMATIONS_QUERY = `*[_type == "transformation"]`

export default async function GalleryPage() {
    const transformations = await sanityFetch<Transformation[]>({ query: TRANSFORMATIONS_QUERY })

    return (
        <div className="pt-20">
            <Section className="bg-black">
                <Container>
                    <SectionHeader
                        subtitle="Results"
                        title="The Gallery of Forge"
                        description="Transformation isn't just about the mirror. These stories represent dedication, consistency, and the power of elite training."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        {transformations.length > 0 ? (
                            transformations.map((item) => (
                                <div key={item._id} className="group overflow-hidden">
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        <div className="relative aspect-3/4 overflow-hidden bg-surface">
                                            <Image
                                                src={urlFor(item.beforeImage).url()}
                                                alt="Before"
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 text-[8px] font-black uppercase tracking-widest border border-white/10">
                                                Before
                                            </div>
                                        </div>
                                        <div className="relative aspect-3/4 overflow-hidden bg-surface">
                                            <Image
                                                src={urlFor(item.afterImage).url()}
                                                alt="After"
                                                fill
                                                className="object-cover border-l-2 border-accent transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 right-4 bg-accent px-3 py-1 text-[8px] font-black uppercase tracking-widest">
                                                After
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black italic uppercase tracking-wider text-white text-center group-hover:text-accent transition-colors">
                                        &ldquo;{item.caption}&rdquo;
                                    </h3>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center border border-dashed border-white/10 text-slate-500">
                                No transformations found.
                            </div>
                        )}
                    </div>
                </Container>
            </Section>

            {/* Motivation Section */}
            <Section className="bg-accent">
                <Container className="text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase">
                        YOUR STORY STARTS <br />
                        <span className="text-black">WITH THE FIRST STEP</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
                        Don&apos;t wait for the &ldquo;perfect time&rdquo;. The perfect time is now. Join our community and forge your own transformation.
                    </p>
                    <a href="/contact" className="btn-secondary bg-white text-accent border-none hover:bg-slate-100 px-16 py-6 text-xl">
                        Start Today
                    </a>
                </Container>
            </Section>
        </div>
    )
}
