import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'pdtlyte1',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false,
})

async function test() {
  try {
    console.log('Testing Sanity connection...')

    const settings = await client.fetch(`*[_type == "siteSettings"][0]`)
    console.log('Site Settings:', JSON.stringify(settings, null, 2))

    const programsCount = await client.fetch(`count(*[_type == "program"])`)
    console.log('Programs Count:', programsCount)

    console.log('Sanity test complete.')
  } catch (error) {
    console.error('Sanity test failed:', error)
  }
}

test()
