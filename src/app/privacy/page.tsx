import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Privacy Policy | FITNESS FORGE',
  description: 'Our privacy policy explains how we collect and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              subtitle="Legal"
              title="Privacy Policy"
              description="Last updated: January 6, 2026"
            />

            <div className="prose prose-invert max-w-none space-y-8 text-slate-400">
              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  1. Information We Collect
                </h3>
                <p>
                  We collect information you provide directly to us when you register for a
                  membership, sign up for a trial, or contact us. This includes your name, email
                  address, phone number, and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  2. How We Use Your Information
                </h3>
                <p>
                  We use the information we collect to provide, maintain, and improve our services,
                  communicate with you about your membership, and send you technical notices,
                  updates, and support messages.
                </p>
              </section>

              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  3. Data Security
                </h3>
                <p>
                  We take reasonable measures to help protect information about you from loss,
                  theft, misuse and unauthorized access, disclosure, alteration, and destruction.
                </p>
              </section>

              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  4. Third-Party Services
                </h3>
                <p>
                  We may use third-party service providers to help us operate our business. These
                  parties are authorized to use your personal information only as necessary to
                  provide these services to us.
                </p>
              </section>

              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  5. Contact Us
                </h3>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at
                  privacy@fitnessforge.com.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
