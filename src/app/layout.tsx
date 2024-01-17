import type { Metadata } from 'next'
import { Sora, Bitter } from 'next/font/google'
import './globals.css'
import Header from './components/header'

const sora = Sora({
  weight: ["100", "300", "400", "500", "700", "800"],
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
    <html lang="pt-BR" className=' scroll-smooth overflow-x-hidden'>
      <body className={sora.className + ' overflow-x-hidden selection:bg-auretto'}>
        <Header />
        {children}
      </body>
    </html>
  )
}
