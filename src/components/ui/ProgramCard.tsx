import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { urlFor } from '@/sanity/lib/client'
import { Program } from '@/types/sanity'

interface ProgramCardProps {
  program: Program
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="group relative bg-surface border border-white/5 overflow-hidden transition-all hover:border-accent/50">
      <div className="relative h-64 w-full overflow-hidden">
        {program.image ? (
          <Image
            src={urlFor(program.image).url()}
            alt={program.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-stone-900 flex items-center justify-center">
            <span className="text-stone-700 font-bold uppercase tracking-widest text-xl">
              FITNESS FORGE
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-8">
        {program.suitableFor && (
          <span className="text-accent text-xs font-black uppercase tracking-widest mb-3 inline-block">
            {program.suitableFor}
          </span>
        )}
        <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors">
          {program.title}
        </h3>
        <p className="text-slate-400 mb-8 line-clamp-3">{program.description}</p>
        <Link
          href={`/programs#${program.slug.current}`}
          className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all"
        >
          Learn More <ArrowRight className="text-accent" size={16} />
        </Link>
      </div>
    </div>
  )
}
