import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['500', '700', '300'] })

export const metadata: Metadata = {
  title: 'Agiliza Doutor',
  description:
    'Descomplique seus processos cirúrgicos. Sistema que gerencia dados e prazos, trazendo maior agilidade de todo o processo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={(roboto.className, 'w-full  mx-auto')}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
