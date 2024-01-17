'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from "framer-motion"
import InViewAnimation from "../../inViewAnimation"
import { useResponsive } from '@/hooks/responsive'
import Balancer from 'react-wrap-balancer'
export default function heroCard() {

  const { isDesktopOrLaptop } = useResponsive()
  const { scrollYProgress } = useScroll()
  const heroCardWidth = useTransform(
    scrollYProgress,
    [0, 0.02, 0.025],
    isDesktopOrLaptop ? ['100%', '89%', '59.9%'] : ['100%', '100%', '100%'],
  )
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.025, 0.028, 0.03],
    [0, 0, 0.1, 1],
  )
  const cardSection1Display = useTransform(
    scrollYProgress,
    [0, 0.089, 0.09],
    ['flex', 'flex', 'none'],
  )
  const cardSection2Display = useTransform(
    scrollYProgress,
    [0, 0.089, 0.09, 0.169, 0.17],
    ['none', 'none', 'flex', 'flex', 'none'],
  )

  return (
    <motion.div
      className='flex flex-col justify-center w-full h-full items-center bg-none lg:bg-auretto-white selection:bg-auretto selection:text-auretto-white text-3xl border-none overflow-hidden'
      style={{
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
        width: heroCardWidth,
      }}
    >
      <motion.div
        className="h-screen px-7 flex-col justify-center items-center inline-flex absolute bottom-0"
        style={{
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
          opacity: heroOpacity,
          // y: cardSection1OffsetY
        }}>
        <motion.div className="flex flex-col items-center justify-center h-screen"
          style={{
            display: cardSection1Display
          }}>
          <div className="flex-col justify-center flex text-center lg:text-end w-full items-center lg:items-end mb-10">
            <InViewAnimation className="text-4xl md:text-6xl" delay='0.13s' duration='0.55s'>
              <span className="text-auretto">somos a </span>
              <span className="font-bold text-auretto selection:text-auretto-red">auretto</span>
            </InViewAnimation>
            <InViewAnimation className="text-2xl md:text-4xl text-center lg:text-right" delay='0.55s' duration='0.89s'>
              <span className="font-light">nosso ofício é criar novas <br /></span>
              <span className="font-semibold text-auretto-red selection:text-auretto-red">possibilidades</span>
            </InViewAnimation>
          </div>
          <InViewAnimation delay='0.89s' duration='1.44s'>
            <div className=" md:w-[520px] lg:w-[48vw] text-center lg:text-right text-lg sm:text-xl md:text-2xl font-normal ">
              <Balancer className='mb-7'>
                Acreditamos que o viver pode ser mais bonito, que o cotidiano pode ter mais afeto, e que uma morada
                pode ser um lugar pulsante e vivo. Para nós, as manhãs foram feitas para sonhar, e os dias foram feitos
                para se maravilhar.
              </Balancer>
              <Balancer className='text-lg sm:text-xl'>
                “Existe algo de infinito em cada sonho que se realiza.
                Essa é nossa maior realização.”
              </Balancer>
            </div>
          </InViewAnimation>
        </motion.div>
      </motion.div>

      <motion.div
        className="h-screen px-7 flex-col justify-center items-center inline-flex absolute bottom-0"
        style={{
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
          opacity: heroOpacity,
          // y: cardSection2OffsetY
        }}>
        <motion.div
          className="flex flex-col items-end justify-center h-screen"
          style={{
            display: cardSection2Display
          }} >
          <div className="flex-col justify-center flex text-end w-full items-end mb-10">
            <InViewAnimation className="text-4xl md:text-6xl" delay='0.13s' duration='0.7s'>
              <span className="text-auretto-red">nossa </span>
              <span className="font-bold text-auretto-red selection:text-auretto-red ">missão</span>
              <span className="text-auretto-red"> é</span>
            </InViewAnimation>
            <InViewAnimation delay='0.21s' duration='0.7s'>
              <span className="text-2xl md:text-4xl text-right font-semibold text-auretto-dark-blu selection:text-auretto-dark-blue">servir encantadoramente<br /></span>
            </InViewAnimation>
          </div>
          <div className='flex flex-col justify-end items-end gap-3'>
            <InViewAnimation className="flex flex-row text-end gap-7 items-center" delay='0.34s' duration='0.7s'>
              <span className="flex-1 text-2xl text-right font-normal">
                realizando sonhos
              </span>
              <div className='w-[15vh] md:w-[21vh] selection:bg-opacity-0'>
                <Image src='/quarto1.jpeg' alt={'Auretto'} width={200} height={200} />
              </div>
            </InViewAnimation>
            <InViewAnimation className="flex flex-row text-end gap-7 items-center" delay='0.55s' duration='0.7s'>
              <span className="flex-1 text-2xl text-right font-normal">
                otimizando tempo
              </span>
              <div className='w-[15vh] md:w-[21vh] selection:bg-opacity-0'>
                <Image src='/banheiro1.jpeg' alt={'Auretto'} width={200} height={200} />
              </div>
            </InViewAnimation>
            <InViewAnimation className="flex flex-row text-end gap-7 items-center" delay='0.89s' duration='0.7s'>
              <span className="flex-1 text-2xl text-right font-normal">
                reduzindo preocupações
              </span>
              <div className='w-[15vh] md:w-[21vh] selection:bg-opacity-0'>
                <Image src='/sala1.jpeg' alt={'Auretto'} width={200} height={200} />
              </div>
            </InViewAnimation>
          </div>
        </motion.div>
      </motion.div>
    </motion.div >
  )
}