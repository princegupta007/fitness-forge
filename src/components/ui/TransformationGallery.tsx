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
  const [direction, setDirection] = useState(0)
  const current = transformations[index]

  const next = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % transformations.length)
  }
  const prev = () => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  if (!transformations.length) return null

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <div className="relative max-w-5xl mx-auto overflow-hidden px-4 md:px-0">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
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
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xl md:text-2xl font-black italic uppercase tracking-wider text-white text-center md:text-left"
          >
            "{current.caption}"
          </motion.p>
        </AnimatePresence>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="p-4 bg-surface border border-white/5 hover:bg-accent transition-colors group"
            aria-label="Previous transformation"
          >
            <ChevronLeft size={24} className="group-active:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={next}
            className="p-4 bg-surface border border-white/5 hover:bg-accent transition-colors group"
            aria-label="Next transformation"
          >
            <ChevronRight size={24} className="group-active:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="mt-12 flex justify-center gap-2">
        {transformations.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1)
              setIndex(i)
            }}
            className={`h-1.5 transition-all duration-300 rounded-full ${i === index ? 'w-8 bg-accent' : 'w-4 bg-white/10 hover:bg-white/20'}`}
            aria-label={`Go to transformation ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
