import Image from 'next/image'
import Link from 'next/link'
import { LogoAuretto } from './LogoAuretto'

export function Header() {
  return (
    <header className='fixed z-20 top-0 left-0 flex text-sm py-4 md:py-7 justify-between px-7 md:px-20 lg:px-36  items-center w-screen animate-fade-up animate-duration-[1700ms] animate-delay-[700ms] animate-ease-in'>
      <Link href='/' >
        <LogoAuretto />
      </Link>
      <nav className='hidden md:flex items-center text-base text-white justify-center'>
        <div className='hidden md:flex items-center justify-center w-max gap-10'>
          <Link href='/'>nós</Link>
          <Link href='/'>imóveis</Link>
          <Link href='/'>blog</Link>
          <Link href='/'>pessoas</Link>
        </div>
      </nav>
    </header>
  )
}