import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'

const assistant = Assistant({
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
    <html lang="pt-BR" className={assistant.className} >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
