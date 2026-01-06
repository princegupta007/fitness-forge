import { getSiteSettings } from '@/sanity/lib/client'
import Hero from './Hero'

export default async function HomeHero() {
  const siteSettings = await getSiteSettings()
  return <Hero stats={siteSettings?.stats} />
}
