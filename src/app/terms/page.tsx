import { Section, Container } from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Terms of Service | FITNESS FORGE',
  description:
    'Read our terms of service to understand the rules and guidelines for using our gym.',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <Section className="bg-black">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              subtitle="Legal"
              title="Terms of Service"
              description="Last updated: January 6, 2026"
            />

            <div className="prose prose-invert max-w-none space-y-8 text-slate-400">
              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  1. Membership Terms
                </h3>
                <p>
                  By signing up for a membership at FITNESS FORGE, you agree to abide by all gym
                  rules and regulations. Memberships are non-transferable and subject to our
                  cancellation policy.
                </p>
              </section>

              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  2. Health and Safety
                </h3>
                <p>
                  Members must disclose any health conditions that may affect their ability to
                  exercise safely. We recommend consulting a physician before starting any new
                  fitness regimen.
                </p>
              </section>

              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  3. Conduct
                </h3>
                <p>
                  We maintain a high standard of respect and discipline. Any conduct deemed harmful,
                  offensive, or disruptive to others may result in immediate suspension or
                  termination of membership.
                </p>
              </section>

              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  4. Liability
                </h3>
                <p>
                  While we maintain our equipment and facility to elite standards, physical exercise
                  carries inherent risks. By using our facility, you assume all risks associated
                  with your training.
                </p>
              </section>

              <section>
                <h3 className="text-white text-xl font-black uppercase tracking-wider mb-4">
                  5. Modifications
                </h3>
                <p>
                  FITNESS FORGE reserves the right to modify these terms at any time. Changes will
                  be effective immediately upon posting to the website.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
