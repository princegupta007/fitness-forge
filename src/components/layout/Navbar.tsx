'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
    { name: 'Programs', href: '/programs' },
    { name: 'Trainers', href: '/trainers' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <Dumbbell className="w-8 h-8 text-accent group-hover:rotate-12 transition-transform" />
                    <span className="text-2xl font-black tracking-tighter">
                        FITNESS<span className="text-accent">FORGE</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                'text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors',
                                pathname === link.href ? 'text-accent' : 'text-foreground'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" className="btn-primary py-2 px-4 text-sm">
                        Join Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    'absolute top-full left-0 w-full bg-black border-b border-white/10 transition-all duration-300 md:hidden overflow-hidden',
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                )}
            >
                <div className="flex flex-col gap-6 p-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                'text-xl font-bold uppercase tracking-widest',
                                pathname === link.href ? 'text-accent' : 'text-foreground'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="btn-primary w-full text-center"
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </nav>
    )
}
