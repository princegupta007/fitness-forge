import { sanityFetch } from '@/sanity/lib/client'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import PricingCard from '@/components/ui/PricingCard'
import { PricingTier } from '@/types/sanity'
import { Check, ShieldCheck, Zap, Trophy } from 'lucide-react'

export const metadata = {
    title: 'Pricing | FITNESS FORGE',
    description: 'Flexible membership tiers designed for every fitness level and goal.',
}

const PRICING_QUERY = `*[_type == "pricingTier"] | order(price asc)`

export default async function PricingPage() {
    const tiers = await sanityFetch<PricingTier[]>({ query: PRICING_QUERY })

    return (
        <div className="pt-20">
            <Section className="bg-black">
                <Container>
                    <SectionHeader
                        centered
                        subtitle="Memberships"
                        title="Forging Value"
                        description="Choose the tier that fits your ambition. No hidden fees, no long-term contracts. Just results."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {tiers.length > 0 ? (
                            tiers.map((tier) => (
                                <PricingCard key={tier._id} tier={tier} />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center border border-dashed border-white/10 text-slate-500">
                                No pricing tiers found.
                            </div>
                        )}
                    </div>
                </Container>
            </Section>

            {/* Features Table / Comparison */}
            <Section className="bg-surface border-t border-white/5">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader
                            centered
                            subtitle="The Standard"
                            title="Included in Every Plan"
                            description="Regardless of your membership, you get full access to our world-class culture and fundamental amenities."
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: <ShieldCheck className="text-accent" />, title: 'Elite Community', desc: 'Secure and respectful environment for all members.' },
                                { icon: <Zap className="text-accent" />, title: 'Premium Gear', desc: 'Access to Hammer Strength and Eleiko equipment.' },
                                { icon: <Trophy className="text-accent" />, title: 'Performance Tracking', desc: 'Complimentary usage of our progress tracking app.' },
                                { icon: <Check className="text-accent" />, title: 'Free WiFi', desc: 'High-speed internet throughout the facility.' },
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-6 p-8 bg-black/40 border border-white/5">
                                    <div className="shrink-0">{feature.icon}</div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-widest mb-2">{feature.title}</h4>
                                        <p className="text-slate-500 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    )
}
