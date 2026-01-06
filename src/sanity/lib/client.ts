import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import { SanityImage, SiteSettings } from '@/types/sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production', // Enable CDN in production for edge caching
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImage) {
  return builder.image(source)
}

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 30 : 3600,
      tags,
    },
  })
}

export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0]`
  return sanityFetch<SiteSettings>({ query })
}
