'use client'

import Image from 'next/image'
import InViewAnimation from '../../inViewAnimation'
import { useResponsive } from '@/hooks/responsive'
import Balancer from 'react-wrap-balancer'
export default function Atividades() {

  const { isDesktopOrLaptop } = useResponsive()
  return (
    <div className='w-full mt-[14vh] lg:mt-[21vh] mb-[7vh] lg:mb-[13vh] lg:h-[350px] lg:-rotate-3 bg-white flex flex-col lg:flex-row scale-110 pt-12 lg:py-16 lg:px-[7%] text-white'>
      <div className='flex flex-col flex-1 lg:rotate-3 items-center justify-center text-center px-[7%] lg:px-0 mb-8 lg:mb-0'>
        <div className='text-2xl md:text-4xl font-bold  text-auretto  selection:text-white mb-7'>
          <Balancer>O morar dos sonhos está mais perto do que você imagina.</Balancer>
        </div>
        <div className='text-lg sm:text-xl md:text-2xl  text-auretto-dark-blue'>
          <Balancer>“Idealizar seu patrimônio é nossa prioridade. Concretizar seu sonho é nossa realidade.”</Balancer>
        </div>
      </div>
      <div className='flex flex-1 items-center lg:rotate-3 justify-center'>
        <InViewAnimation delay='0.01s' duration='1.44s' >
            <Image className='w-screen lg:w-[40vw] lg:-mt-[200px]' src='/casa.jpg' alt={'Imóvel'} width={500} height={500} />
        </InViewAnimation>
      </div>
    </div>
  )
}