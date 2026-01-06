import Link from 'next/link'
import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { getSiteSettings } from '@/sanity/lib/client'

export default async function Footer() {
  const settings = await getSiteSettings()

  return (
    <footer className="bg-surface pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-accent p-1.5 rounded-lg">
                <Dumbbell size={24} className="text-white" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-white">
                Fitness<span className="text-accent">Forge</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Forging elite athletes and healthy lifestyles through expert-led training and a
              world-class community.
            </p>
            <div className="flex gap-4">
              {settings?.socialLinks?.map((link: any) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  className="p-3 bg-white/5 rounded-full hover:bg-accent transition-colors group"
                  aria-label={`Follow us on ${link.platform}`}
                >
                  {link.platform.toLowerCase() === 'instagram' && <Instagram size={20} />}
                  {link.platform.toLowerCase() === 'facebook' && <Facebook size={20} />}
                  {link.platform.toLowerCase() === 'twitter' && <Twitter size={20} />}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-wider mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-slate-400 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/trainers"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  Trainers
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-black uppercase tracking-wider mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-accent shrink-0" size={20} />
                <span className="text-slate-400">
                  {settings?.address || '123 Muscle Way, Iron City, ST 12345'}
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-slate-400">{settings?.phone || '+1 (555) 000-0000'}</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-slate-400">
                  {settings?.email || 'forge@fitnessforge.com'}
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-black uppercase tracking-wider mb-8">Hours</h4>
            <ul className="space-y-4">
              {settings?.hours ? (
                settings.hours.map((hour: string, i: number) => (
                  <li key={i} className="text-slate-400">
                    {hour}
                  </li>
                ))
              ) : (
                <>
                  <li className="text-slate-400">Monday - Friday: 5am - 10pm</li>
                  <li className="text-slate-400">Saturday: 7am - 8pm</li>
                  <li className="text-slate-400">Sunday: 8am - 4pm</li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} FITNESS FORGE. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
