import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PricingTier } from '@/types/sanity'
import Link from 'next/link'

interface PricingCardProps {
  tier: PricingTier
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative p-10 border transition-all duration-300',
        tier.highlight
          ? 'bg-accent border-accent scale-105 z-10'
          : 'bg-surface border-white/5 hover:border-white/20'
      )}
    >
      {tier.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1">
          Most Popular
        </div>
      )}

      <div className="mb-10 text-center">
        <h3 className="text-xl font-black uppercase tracking-widest mb-4">{tier.name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-black">$</span>
          <span className="text-6xl font-black">{tier.price}</span>
          <span
            className={cn(
              'text-sm font-bold uppercase tracking-widest',
              tier.highlight ? 'text-white/80' : 'text-slate-500'
            )}
          >
            /MO
          </span>
        </div>
      </div>

      <ul className="space-y-6 mb-12">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4">
            <div
              className={cn(
                'mt-1 shrink-0 rounded-full p-1',
                tier.highlight ? 'bg-white text-accent' : 'bg-accent text-white'
              )}
            >
              <Check size={12} strokeWidth={4} />
            </div>
            <span className={cn('font-medium', tier.highlight ? 'text-white' : 'text-slate-300')}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={cn(
          'btn-primary w-full text-center flex items-center justify-center',
          tier.highlight ? 'bg-white text-black hover:bg-slate-100' : ''
        )}
      >
        {tier.ctaText || 'Get Started'}
      </Link>
    </div>
  )
}
