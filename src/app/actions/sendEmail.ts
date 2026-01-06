'use server'

import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/validations/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ActionState = {
  success: boolean
  error?: string | Record<string, string[]>
  message: string
  fields?: Record<string, any>
}

export async function sendEmail(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const rawData = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
    website: formData.get('website') as string,
  }

  const validatedFields = ContactFormSchema.safeParse(rawData)

  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid form data. Please check the fields.',
      fields: rawData,
    }
  }

  const { name, email, message, website } = validatedFields.data

  // Basic honeypot check
  if (website) {
    return { success: true, message: 'Message sent successfully' }
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
    const missing = !process.env.RESEND_API_KEY ? 'RESEND_API_KEY' : 'CONTACT_EMAIL'
    return {
      success: false,
      error: `Email service is not configured: missing ${missing}`,
      message: 'Email service is not configured',
      fields: rawData,
    }
  }

  try {
    await resend.emails.send({
      from: 'Fitness Forge <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return { success: true, message: 'Message sent successfully' }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to send message. Please try again later.',
      message: 'Failed to send message. Please try again later.',
      fields: rawData,
    }
  }
}
