'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { RightLines } from "../../svg/rightLines"
import Hero from "./hero"
import HeroCard from "./heroCard"

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const svgOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.03],
    [0, 0, 1],
  )
  const frameOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.151],
    [1, 1, 0.5],
  )
  const frameY = useTransform(
    scrollYProgress,
    [0, 0.15, 0.151],
    ['0', '0', '-13%'],
  )
  const heroSectionMarginTop = useTransform(
    scrollYProgress,
    [0, 0.15, 0.1501],
    ['0', '0', '-89vh'],
  )
  return (
    <motion.section
      className='h-[20%] snap-start bg-auretto-white md:bg-auretto-white2 pb-14'
      style={{
        transition: "all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
        // marginTop: heroSectionMarginTop,
      }}
    >
      <motion.div
        className='sticky h-screen top-0 left-0 right-0 bg-auretto-white md:bg-auretto-white2 overflow-hidden'
        style={{
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
          opacity: frameOpacity,
          y: frameY,
        }}
      >
        <Hero />
        <motion.div
          className='absolute bottom-0 left-0 pointer-events-none w-full h-full'
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            restDelta: 0.001,
          }}
          style={{
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
            opacity: svgOpacity
          }}
        >
          <RightLines className="fill-auretto opacity-25 lg:opacity-100" />
        </motion.div>
        <div className='absolute top-0 right-0 h-full pointer-events-auto w-full justify-end flex'>
          <HeroCard />
        </div>
      </motion.div>
    </motion.section>
  )
}