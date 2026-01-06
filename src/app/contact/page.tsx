import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import ContactForm from '@/components/ui/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { getSiteSettings } from '@/sanity/lib/client'

export const metadata = {
  title: 'Contact Us | FITNESS FORGE',
  description: 'Book your free trial session or get in touch with our team for any inquiries.',
}

export default async function ContactPage() {
  const siteSettings = await getSiteSettings()

  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <SectionHeader
                subtitle="Contact"
                title="Join the forge"
                description="Ready to transform? Drop us a message to book your free trial or ask us anything. Our team is ready to help you start your journey."
                className="mb-12"
              />

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-surface border border-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest mb-2 text-sm text-white">
                      Location
                    </h4>
                    <p className="text-slate-400 font-medium">
                      {siteSettings?.address || '123 Muscle Way, Iron City, ST 12345'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-surface border border-white/5 flex items-center justify-center shrink-0">
                    <Phone className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest mb-2 text-sm text-white">
                      Phone
                    </h4>
                    <p className="text-slate-400 font-medium">
                      {siteSettings?.phone || '+1 (555) 000-0000'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-surface border border-white/5 flex items-center justify-center shrink-0">
                    <Mail className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest mb-2 text-sm text-white">
                      Email
                    </h4>
                    <p className="text-slate-400 font-medium">
                      {siteSettings?.email || 'info@fitnessforge.com'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-surface border border-white/5 flex items-center justify-center shrink-0">
                    <Clock className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest mb-2 text-sm text-white">
                      Hours
                    </h4>
                    <ul className="text-slate-400 font-medium space-y-1">
                      {siteSettings?.hours?.map((hour: string, i: number) => (
                        <li key={i}>{hour}</li>
                      )) || (
                        <>
                          <li>Mon - Fri: 5AM - 10PM</li>
                          <li>Sat: 7AM - 8PM</li>
                          <li>Sun: 8AM - 4PM</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-surface relative overflow-hidden grayscale contrast-125 border-y border-white/5">
        <iframe
          src={
            siteSettings?.mapEmbedUrl ||
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1704455822345!5m2!1sen!2sin'
          }
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gym Location"
        />
        <div className="absolute inset-0 pointer-events-none bg-black/5" />
      </section>
    </div>
  )
}
