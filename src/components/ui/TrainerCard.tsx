import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { Trainer } from '@/types/sanity'

interface TrainerCardProps {
    trainer: Trainer
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
    return (
        <div className="group relative aspect-3/4 overflow-hidden bg-surface">
            {trainer.photo ? (
                <Image
                    src={urlFor(trainer.photo).url()}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[0.5]"
                />
            ) : (
                <div className="w-full h-full bg-stone-900 border border-white/5" />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-accent text-xs font-black uppercase tracking-widest mb-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {trainer.specialization}
                </span>
                <h3 className="text-3xl font-black mb-4">
                    {trainer.name}
                </h3>

                <div className="h-px w-0 group-hover:w-full bg-accent transition-all duration-500 mb-6" />

                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                    {trainer.credentials?.map((cred, i) => (
                        <div key={i} className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                            • {cred}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
