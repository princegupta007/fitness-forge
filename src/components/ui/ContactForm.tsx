'use client'

import { useActionState, useTransition } from 'react'
import { sendEmail, type ActionState } from '@/app/actions/sendEmail'
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialState: ActionState = {
  success: false,
  message: '',
  error: undefined,
}

export default function ContactForm() {
  const [state, action, isPending] = useActionState(sendEmail, initialState)

  return (
    <div className="bg-surface border border-white/5 p-8 md:p-12 rounded-2xl shadow-2xl">
      <h3 className="text-3xl font-black uppercase mb-8 tracking-tight">
        Send Us a <span className="text-accent">Message</span>
      </h3>

      {state.success ? (
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-xl flex gap-4 items-center">
          <CheckCircle2 className="text-emerald-500 shrink-0" size={32} />
          <div>
            <h4 className="text-white font-bold text-lg">Message Sent!</h4>
            <p className="text-emerald-500/80 font-medium">
              Thanks for reaching out. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      ) : (
        <form action={action} className="space-y-6">
          {state.message && !state.success && (
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex gap-3 items-center text-red-500 mb-6">
              <AlertCircle size={20} />
              <p className="font-semibold">
                {state.message}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-bold uppercase tracking-wider text-slate-400 ml-1"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                minLength={2}
                maxLength={100}
                defaultValue={(state?.fields?.name as string) || ''}
                placeholder="John Doe"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 font-medium"
              />
              {state?.error && typeof state.error === 'object' && state.error.name && (
                <p className="text-red-500 text-xs font-bold mt-1 ml-1 uppercase">
                  {state.error.name[0]}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-bold uppercase tracking-wider text-slate-400 ml-1"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                defaultValue={(state?.fields?.email as string) || ''}
                placeholder="john@example.com"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 font-medium"
              />
              {state?.error && typeof state.error === 'object' && state.error.email && (
                <p className="text-red-500 text-xs font-bold mt-1 ml-1 uppercase">
                  {state.error.email[0]}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-bold uppercase tracking-wider text-slate-400 ml-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={1000}
              defaultValue={(state?.fields?.message as string) || ''}
              rows={6}
              placeholder="Tell us about your fitness goals..."
              className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:outline-hidden focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600 font-medium resize-none"
            />
            {state?.error && typeof state.error === 'object' && state.error.message && (
              <p className="text-red-500 text-xs font-bold mt-1 ml-1 uppercase">
                {state.error.message[0]}
              </p>
            )}
          </div>

          {/* Honeypot */}
          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin" size={24} />
                Processing...
              </>
            ) : (
              <>
                Send Message{' '}
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
