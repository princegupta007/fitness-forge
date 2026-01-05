'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { urlFor } from '@/sanity/lib/client'
import { Transformation } from '@/types/sanity'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TransformationGalleryProps {
    transformations: Transformation[]
}

export default function TransformationGallery({ transformations }: TransformationGalleryProps) {
    const [index, setIndex] = useState(0)
    const current = transformations[index]

    const next = () => setIndex((prev) => (prev + 1) % transformations.length)
    const prev = () => setIndex((prev) => (prev - 1 + transformations.length) % transformations.length)

    if (!transformations.length) return null

    return (
        <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden bg-surface group">
                    <Image
                        src={urlFor(current.beforeImage).url()}
                        alt="Before"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1 text-[10px] font-black uppercase tracking-widest border border-white/10">
                        Before
                    </div>
                </div>
                <div className="relative aspect-square overflow-hidden bg-surface group">
                    <Image
                        src={urlFor(current.afterImage).url()}
                        alt="After"
                        fill
                        className="object-cover border-l-4 border-accent"
                    />
                    <div className="absolute top-4 right-4 bg-accent px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                        After
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-xl font-black italic uppercase tracking-wider text-white">
                    "{current.caption}"
                </p>

                <div className="flex gap-4">
                    <button
                        onClick={prev}
                        className="p-4 bg-surface border border-white/5 hover:bg-accent transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="p-4 bg-surface border border-white/5 hover:bg-accent transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Pagination dots */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {transformations.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 transition-all duration-300 ${i === index ? 'w-8 bg-accent' : 'w-4 bg-white/10'}`}
                    />
                ))}
            </div>
        </div>
    )
}
