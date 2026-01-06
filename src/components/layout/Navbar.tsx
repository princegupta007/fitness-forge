'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-white/10 py-4'
          : 'bg-transparent border-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-accent p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Dumbbell size={24} className="text-white" />
            </div>
            <span className="text-2xl font-black uppercase tracking-tighter text-white">
              Fitness<span className="text-accent">Forge</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent',
                  pathname === link.href ? 'text-accent' : 'text-slate-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 top-[73px] bg-black z-40 md:hidden transition-all duration-500 ease-in-out',
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-3xl font-black uppercase tracking-tighter transition-colors',
                pathname === link.href ? 'text-accent' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="mt-4 btn-primary w-full py-6 text-xl">
            Start Your Journey
          </Link>
        </div>
      </div>
    </nav>
  )
}
