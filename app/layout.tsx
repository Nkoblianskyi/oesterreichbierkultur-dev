import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Österreich Bierkultur – Craft & Traditionsbiere aus Österreich',
  description:
    'Entdecken Sie die reiche Bierkultur Österreichs: authentische Craftbiere, klassische Lagerbiere und jahrhundertealte Brautraditionen auf oesterreichbierkultur.com.',
  keywords: 'österreichisches Bier, Craftbier, Brauerei Österreich, Bierkultur, Handwerksbier',
  authors: [{ name: 'Österreich Bierkultur' }],
  metadataBase: new URL('https://oesterreichbierkultur.com'),
  openGraph: {
    title: 'Österreich Bierkultur',
    description: 'Authentische Bierkultur aus dem Herzen Österreichs',
    url: 'https://oesterreichbierkultur.com',
    siteName: 'Österreich Bierkultur',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de-AT">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
