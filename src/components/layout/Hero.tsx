'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Section'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Gradient/Image Placeholder */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black z-10" />
            <div
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
                role="img"
                aria-label="Gym background"
            />

            <Container className="relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block text-accent font-black uppercase tracking-[0.3em] mb-4 text-sm md:text-base">
                        Forge Your Best Self
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-8 leading-[0.9]">
                        UNLEASH YOUR <br />
                        <span className="text-accent">POTENTIAL</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
                        Join the most elite fitness community in Iron City. World-class equipment, expert trainers, and a culture of excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="btn-primary w-full sm:w-auto px-10 py-5 flex items-center justify-center gap-2">
                            Start Free Trial <ArrowRight size={20} />
                        </Link>
                        <Link href="/programs" className="btn-secondary w-full sm:w-auto px-10 py-5">
                            Explore Programs
                        </Link>
                    </div>
                </motion.div>
            </Container>

            {/* Hero Stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:flex gap-20"
            >
                <div className="text-center">
                    <div className="text-3xl font-black text-white">500+</div>
                    <div className="text-xs uppercase text-slate-500 font-bold tracking-widest">Members</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-black text-white">15+</div>
                    <div className="text-xs uppercase text-slate-500 font-bold tracking-widest">Trainers</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-black text-white">30+</div>
                    <div className="text-xs uppercase text-slate-500 font-bold tracking-widest">Programs</div>
                </div>
            </motion.div>
        </div>
    )
}
