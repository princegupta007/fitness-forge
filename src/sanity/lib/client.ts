import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'
import { SanityImage, SiteSettings } from '@/types/sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'unconfigured'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

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
}): Promise<QueryResponse | null> {
  if (projectId === 'unconfigured') {
    console.warn('Sanity project ID is not configured. returning null for query:', query)
    return null
  }

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
