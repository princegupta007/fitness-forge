import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import { getSiteSettings } from '@/sanity/lib/client'

// Google Fonts fetch fails in some environments, using system fonts fallback
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: "FITNESS FORGE | Iron City's Elite Gym",
  description:
    'Forging elite athletes and healthy lifestyles through expert-led training and a world-class community.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const settings = await getSiteSettings()

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>{settings && <LocalBusinessSchema settings={settings} />}</head>
      <body className={`bg-black text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
