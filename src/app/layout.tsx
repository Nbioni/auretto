import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Auretto',
  description: 'Existe algo de infinito em cada sonho que se realiza.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.className} >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
