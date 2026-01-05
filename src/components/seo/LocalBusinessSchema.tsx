import { SiteSettings } from '@/types/sanity'

export default function LocalBusinessSchema({ settings }: { settings: SiteSettings }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Gym',
        name: settings.gymName,
        address: {
            '@type': 'PostalAddress',
            streetAddress: settings.address,
            // You can expand this if address is split in Sanity
        },
        telephone: settings.phone,
        email: settings.email,
        url: 'https://fitnessforge.com',
        image: 'https://fitnessforge.com/og-image.jpg', // Placeholder
        openingHoursSpecification: settings.hours?.map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            // This is a simplification; in a real app, you'd parse business hours
            opens: '05:00',
            closes: '22:00',
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
