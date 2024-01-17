import Section from './components/section'
import HeroSection from './components/home/hero/heroSection'
import ImoveisDestaque from './components/home/imoveisDestaque'
import Parceiros from './components/home/parceiros/parceiros'
import Atividades from './components/home/atividades/atividades'

export default function Home() {
  return (
    <div className='absolute h-[1610vh] w-full bg-auretto-white overflow-x-clip'>
      <HeroSection />
      {/* <div className='relative z-50 w-full h-[15vh] bg-auretto-white2'>
        <div className='sticky  top-0 left-0 right-0 h-[4vh] bg-auretto-white2'>

        </div>
        <div className='h-[15vh] -rotate-3 scale-125 bg-auretto-white2'>

        </div>
      </div> */}
      <Section className='h-[11%] lg:h-[9%] bg-auretto-white2' >
        <div className='h-full top-0 left-0 right-0 pt-[7vh] lg:pt-[13vh] bg-auretto-white'>
          <Atividades />
          <Parceiros />
        </div>
      </Section>
      <Section className='h-[10.1%] '>
        <div className='h-screen bg-auretto-white'>
          <ImoveisDestaque />
        </div>
      </Section>
    </div>

    // <div className='absolute h-screen overflow-scroll snap-y snap-mandatory'>
    //   <Section className='h-[322vh] snap-start'>
    //     <HeroAndCompanyDescription />
    //   </Section>
    //   <Section className='h-[164vh] snap-start'>
    //     <div className='sticky h-screen top-0 left-0 right-0 bg-auretto-white'>
    //       <span className="text-4xl text-right font-semibold text-auretto-dark-blue selection:bg-auretto-red selection:text-auretto-dark-blue">Imóveis em destaque</span>
    //     </div>
    //   </Section>
    //   <Section className='h-[161vh] snap-start'>
    //     <div className='sticky  h-screen bg-black' />
    //   </Section>
    // </div>
  )
}
