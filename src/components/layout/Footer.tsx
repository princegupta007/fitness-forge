import Link from 'next/link'
import { Dumbbell, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-surface pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Dumbbell className="w-8 h-8 text-accent" />
                        <span className="text-2xl font-black tracking-tighter">
                            FITNESS<span className="text-accent">FORGE</span>
                        </span>
                    </Link>
                    <p className="text-slate-400 max-w-xs">
                        Forging elite athletes and healthy lifestyles through expert-led training and a world-class community.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent transition-colors">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-accent transition-colors">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        {['Programs', 'Trainers', 'Pricing', 'Schedule', 'Gallery'].map((item) => (
                            <li key={item}>
                                <Link href={`/${item.toLowerCase()}`} className="text-slate-400 hover:text-accent transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li className="flex items-center gap-3">
                            <Phone className="text-accent" size={20} />
                            <span>+1 (555) 000-0000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-accent" size={20} />
                            <span>info@fitnessforge.com</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="text-accent mt-1" size={20} />
                            <span>123 Muscle Way, Iron City, ST 12345</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
                    <ul className="space-y-2 text-slate-400">
                        <li className="flex justify-between">
                            <span>Mon - Fri</span>
                            <span>5AM - 10PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sat</span>
                            <span>7AM - 8PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sun</span>
                            <span>8AM - 4PM</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} FITNESS FORGE. All rights reserved.</p>
            </div>
        </footer>
    )
}
