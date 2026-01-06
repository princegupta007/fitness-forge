import { sanityFetch } from '@/sanity/lib/client'
import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { PricingTier } from '@/types/sanity'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Pricing Plans | FITNESS FORGE',
  description: 'Choose the membership plan that best fits your fitness goals and budget.',
}

const PRICING_QUERY = `*[_type == "pricingTier"] | order(price asc)`

export default async function PricingPage() {
  const plans = await sanityFetch<PricingTier[]>({ query: PRICING_QUERY })

  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <SectionHeader
            centered
            subtitle="Membership"
            title="Investment in yourself"
            description="Transparent pricing with no hidden fees. Choose the plan that fits your ambition and start your transformation today."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className={cn(
                  'relative flex flex-col p-8 md:p-12 border transition-all duration-300',
                  plan.highlight
                    ? 'bg-surface border-accent shadow-[0_0_40px_-10px_rgba(255,51,51,0.3)] scale-105 z-10'
                    : 'bg-surface/50 border-white/5 hover:border-white/10'
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-black uppercase tracking-widest mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">$</span>
                    <span className="text-6xl font-black text-white">{plan.price}</span>
                    <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                      /month
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 font-medium text-sm">
                      <Check className="text-accent shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    'w-full py-4 px-6 text-center font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 group',
                    plan.highlight
                      ? 'bg-accent text-white hover:bg-red-700'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  )}
                >
                  {plan.ctaText || 'Get Started'}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ Summary */}
      <Section className="bg-surface border-t border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              centered
              subtitle="Common Questions"
              title="Frequently Asked"
              description="Everything you need to know about our memberships and services."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              {[
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes, our monthly memberships are flexible. You can cancel with a 30-day notice.',
                },
                {
                  q: 'Do you offer student discounts?',
                  a: 'We offer special rates for students and first responders. Contact us with your ID.',
                },
                {
                  q: 'Is personal training included?',
                  a: 'Elite plans include 2 sessions per month. Other plans can add sessions as needed.',
                },
                {
                  q: 'Do you have locker rooms?',
                  a: 'Yes, we provide full-service locker rooms with showers, towels, and dry saunas.',
                },
              ].map((faq, i) => (
                <div key={i}>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-3 flex gap-3">
                    <span className="text-accent">Q:</span> {faq.q}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
