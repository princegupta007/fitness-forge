'use client'

import { useState } from 'react'
import { sendEmail } from '@/app/actions/sendEmail'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(formData: FormData) {
        setStatus('loading')
        const result = await sendEmail(formData)

        if (result.error) {
            setStatus('error')
            setErrorMessage(result.error)
        } else {
            setStatus('success')
        }
    }

    if (status === 'success') {
        return (
            <div className="bg-surface border border-accent/20 p-12 text-center flex flex-col items-center gap-6">
                <CheckCircle2 className="text-accent w-16 h-16" />
                <div>
                    <h3 className="text-3xl font-black uppercase mb-4">Message Forged!</h3>
                    <p className="text-slate-400">
                        Thank you for reaching out. A member of our team will contact you within 24 hours to schedule your session.
                    </p>
                </div>
                <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-4"
                >
                    Send Another Message
                </button>
            </div>
        )
    }

    return (
        <form action={handleSubmit} className="space-y-6 bg-surface border border-white/5 p-8 md:p-12">
            {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 text-red-500 flex items-center gap-3 text-sm">
                    <AlertCircle size={20} />
                    <span>{errorMessage}</span>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-black border border-white/10 px-4 py-3 focus:border-accent outline-none transition-colors text-white"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-black border border-white/10 px-4 py-3 focus:border-accent outline-none transition-colors text-white"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full bg-black border border-white/10 px-4 py-3 focus:border-accent outline-none transition-colors text-white"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="preferredTime" className="text-xs font-black uppercase tracking-widest text-slate-500">
                        Preferred Contact Time
                    </label>
                    <select
                        id="preferredTime"
                        name="preferredTime"
                        className="w-full bg-black border border-white/10 px-4 py-3 focus:border-accent outline-none transition-colors text-white appearance-none"
                    >
                        <option value="anytime">Anytime</option>
                        <option value="morning">Morning (5AM - 11AM)</option>
                        <option value="afternoon">Afternoon (11AM - 4PM)</option>
                        <option value="evening">Evening (4PM - 10PM)</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Message <span className="text-accent">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-accent outline-none transition-colors text-white resize-none"
                    placeholder="Tell us about your fitness goals..."
                />
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full py-5 flex items-center justify-center gap-3 disabled:opacity-70"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                    </>
                ) : (
                    'Send Message'
                )}
            </button>

            <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest leading-relaxed">
                By submitting this form, you agree to receive fitness Forge communications. <br />
                We respect your privacy and will never share your information.
            </p>
        </form>
    )
}
