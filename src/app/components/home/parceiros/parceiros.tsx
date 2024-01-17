import Image from 'next/image'
import InViewAnimation from '../../inViewAnimation'
import Balancer from 'react-wrap-balancer'
export default function Parceiros() {
  return (
    <InViewAnimation className="mt-40 py-0 lg:py-[13vh] mb-[13vh] px-[7%] flex flex-col justify-center items-center" delay='0.13s' duration='0.89s'>
      <div className="mb-7">
        <Balancer className='w-full text-center text-lg font-serif'>CONHEÇA NOSSOS PRINCIPAIS PARCEIROS</Balancer>
      </div>
      <div className="px-[7%] w-full">
        <div className='flex flex-wrap transition-all gap-7 justify-evenly items-center p-10 border-opacity-30 border-y-black border-y-[1px] selection:bg-opacity-0'>
          <Image className='filter brightness-0 w-auto hover:scale-110 cursor-pointer' src='/barbara-marangoni-arquitetura.png' alt={'Bárbara Marangoni Arquitetura'} width={256} height={56} />
          <Image className='filter brightness-0 hover:scale-110 cursor-pointer' src='/ettore-netto.png' alt={'Ettore Netto'} width={200} height={23} />
          <Image className="hover:scale-110 cursor-pointer" src='/lopes-e-maia-engenharia.png' alt={'Lopes e Maia Engenharia'} width={120} height={120} />
        </div>
      </div>
    </InViewAnimation>
  )
} 