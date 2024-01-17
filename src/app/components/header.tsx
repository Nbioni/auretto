'use client'
import Link from "next/link"
import { LogoAuretto } from "./svg/logoAuretto"
import { motion, useScroll, useTransform } from "framer-motion"
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathName = usePathname()
  const { scrollYProgress } = useScroll()
  const homeHeaderColor = useTransform(
    scrollYProgress,
    [0, 0.005, 0.007],
    ['hsl(0deg 0% 100%)', 'hsl(0deg 0% 100%)', 'hsl(32.62deg 60.32% 48.43%)']
  );

  return (
    <motion.header
      className='fixed w-full top-0 z-50 left-0 flex text-sm py-4 md:py-7 justify-between px-7 md:px-20 lg:px-36 items-center'
      style={{ color: pathName === '/' ? homeHeaderColor : 'white' }}
    >
      <Link href='/' >
        <LogoAuretto />
      </Link>
      <nav className='hidden md:flex items-center text-lg justify-center'>
        <div className='hidden md:flex items-center justify-center w-max gap-10'>
          <Link href='/'>home</Link>
          <Link href='/'>imóveis</Link>
          <Link href='/'>nós</Link>
        </div>
      </nav>
    </motion.header>
  )
}