"use server";

import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const preferredTime = formData.get("preferredTime") as string;

  if (!name || !email || !message) {
    return { error: "Missing required fields" };
  }

  if (!resend) {
    console.error("Missing RESEND_API_KEY environment variable");
    return {
      error:
        "Email service is not configured. Please add RESEND_API_KEY to .env.local",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Fitness Forge <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "info@fitnessforge.com",
      subject: `New Lead: ${name} - Trial Request`,
      replyTo: email,
      html: `
        <h2>New lead from fitnessforge.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Preferred Contact Time:</strong> ${preferredTime || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { error: err.message || "Something went wrong" };
  }
}
