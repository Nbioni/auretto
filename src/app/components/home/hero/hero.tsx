'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { CustomTextCursor } from '../../customTextCursor'
import { useState } from 'react'
import Balancer from 'react-wrap-balancer'
import { useResponsive } from '@/hooks/responsive'

export default function Hero() {
  const customTextCursorDefaultText = "Clique para ouvir"
  const [muted, setMuted] = useState(true)
  const [customTextCursor, setCustomTextCursor] = useState(customTextCursorDefaultText)

  const { isDesktopOrLaptop } = useResponsive()
  
  const handleToggleMute = () => {
    setMuted(current => !current)
  }

  const { scrollYProgress } = useScroll()
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.02],
    isDesktopOrLaptop ? [1, 0.77] : [1, 0.88],
  )
  const heroWidth = useTransform(
    scrollYProgress,
    [0, 0.02, 0.03],
    isDesktopOrLaptop ? ['100%', '80%', '47%'] : ['100%', '100%', '100%'],
  )
  const heroRadius = useTransform(
    scrollYProgress,
    [0, 0.02],
    [0, 4],
  )
  const heroBrightness = useTransform(
    scrollYProgress,
    [0, 0.02],
    ['brightness(1)', 'brightness(0.77)'],
  )
  const heroLeft = useTransform(
    scrollYProgress,
    [0, 0.02],
    isDesktopOrLaptop ? ['0', '1%'] :  ['0', '0%'],
  )
  const heroTop = useTransform(
    scrollYProgress,
    [0, 0.03],
    isDesktopOrLaptop ? ['0', '0'] :  ['0', '-100%'],
  )
  const heroTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.02],
    ['1', '0'],
  )
  const heroTextDisplay = useTransform(
    scrollYProgress,
    [0, 0.02, 0.02],
    ['block', 'block', 'none'],
  )


  return (
    <motion.div className='absolute lg:sticky h-screen top-0 left-0 right-0 bg-auretto-dark-blue overflow-hidden z-10'
      style={{
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
        scale: heroScale,
        borderRadius: heroRadius,
        width: heroWidth,
        left: heroLeft,
        top: heroTop,
        filter: heroBrightness
      }}>
      <video id="background-video" playsInline autoPlay loop muted={muted}
        className="w-full pointer-events-none relative top-0 h-full object-cover"
        src="/maringa-video.mp4" />

      <button className='absolute top-0 left-0 right-0 w-full h-full object-cover'
        onClick={handleToggleMute}
      />
      <button
        onClick={handleToggleMute}
        onMouseEnter={() => setCustomTextCursor(muted ? "Ativar" : "Desativar")}
        onMouseLeave={() => setCustomTextCursor(customTextCursorDefaultText)}
        className="absolute z-10 bottom-[7vw] lg:bottom-[1.9791666667vw] right-[1.77vw] bg-transparent text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded animate-jump animate-twice animate-duration-[2000ms] animate-delay-[980ms] animate-ease-linear">
        <svg width="28" height="28" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          {
            muted ? <path d="M3.10473 29.3949C3.35868 29.6487 3.70305 29.7913 4.06213 29.7913C4.42121 29.7913 4.76558 29.6487 5.01953 29.3949L11.7904 22.624L26.0091 8.40527L29.3945 5.01985C29.5239 4.89494 29.627 4.74551 29.698 4.5803C29.769 4.41508 29.8063 4.23739 29.8079 4.05758C29.8094 3.87778 29.7752 3.69946 29.7071 3.53304C29.639 3.36662 29.5385 3.21542 29.4113 3.08828C29.2842 2.96113 29.133 2.86058 28.9665 2.79249C28.8001 2.7244 28.6218 2.69014 28.442 2.6917C28.2622 2.69326 28.0845 2.73062 27.9193 2.80159C27.7541 2.87256 27.6046 2.97572 27.4797 3.10506L26.4059 4.17892V4.06246C26.4059 3.82073 26.3412 3.58341 26.2185 3.37514C26.0958 3.16686 25.9196 2.99522 25.7082 2.87804C25.4967 2.76086 25.2578 2.70241 25.0162 2.70875C24.7745 2.7151 24.539 2.78601 24.334 2.91412L13.8297 9.47912H5.4163C5.05715 9.47912 4.71271 9.62179 4.45876 9.87575C4.2048 10.1297 4.06213 10.4741 4.06213 10.8333V21.6666C4.06213 22.0258 4.2048 22.3702 4.45876 22.6242C4.71271 22.8781 5.05715 23.0208 5.4163 23.0208H7.564L3.10473 27.4801C2.85087 27.734 2.70825 28.0784 2.70825 28.4375C2.70825 28.7965 2.85087 29.1409 3.10473 29.3949ZM6.77046 20.3125V12.1875H14.2184C14.4722 12.1875 14.7209 12.1161 14.9361 11.9816L23.6975 6.50673V6.88725L10.2723 20.3125H6.77046ZM26.4059 13.5416V28.4375C26.4059 28.6792 26.3412 28.9165 26.2185 29.1248C26.0958 29.3331 25.9196 29.5047 25.7082 29.6219C25.4967 29.7391 25.2578 29.7975 25.0162 29.7912C24.7745 29.7848 24.539 29.7139 24.334 29.5858L15.6673 24.1691C15.3621 23.9786 15.145 23.6746 15.0638 23.324C14.9827 22.9734 15.0442 22.605 15.2347 22.2997C15.4252 21.9944 15.7292 21.7773 16.0798 21.6962C16.4304 21.6151 16.7988 21.6765 17.1041 21.867L23.6975 26V13.5416C23.6975 13.1825 23.8402 12.838 24.0942 12.5841C24.3481 12.3301 24.6926 12.1875 25.0517 12.1875C25.4109 12.1875 25.7553 12.3301 26.0093 12.5841C26.2632 12.838 26.4059 13.1825 26.4059 13.5416Z" fill="white"></path>
              : <path d="M3.70841 23.0209H8.63487L16.3834 29.4789C16.6269 29.6813 16.9335 29.7919 17.2501 29.7917C17.4486 29.7919 17.6448 29.748 17.8242 29.6631C18.0572 29.554 18.2544 29.3808 18.3925 29.1637C18.5306 28.9467 18.6041 28.6948 18.6042 28.4375V4.06253C18.6044 3.80511 18.5312 3.55297 18.3932 3.33567C18.2552 3.11837 18.0581 2.94491 17.825 2.83562C17.5919 2.72633 17.3325 2.68574 17.0772 2.7186C16.8219 2.75147 16.5812 2.85643 16.3834 3.02118L8.63487 9.4792H3.70841C3.34927 9.4792 3.00483 9.62187 2.75087 9.87583C2.49692 10.1298 2.35425 10.4742 2.35425 10.8334V21.6667C2.35425 22.0258 2.49692 22.3703 2.75087 22.6242C3.00483 22.8782 3.34927 23.0209 3.70841 23.0209ZM5.06258 12.1875H9.12508C9.44165 12.1878 9.7483 12.0771 9.99175 11.8747L15.8959 6.95368V25.5464L9.99175 20.6253C9.7483 20.423 9.44165 20.3123 9.12508 20.3125H5.06258V12.1875ZM32.1459 16.25C32.143 18.7632 31.1434 21.1726 29.3664 22.9496C27.5893 24.7267 25.1799 25.7263 22.6667 25.7292C22.3076 25.7292 21.9632 25.5865 21.7092 25.3326C21.4553 25.0786 21.3126 24.7342 21.3126 24.375C21.3126 24.0159 21.4553 23.6714 21.7092 23.4175C21.9632 23.1635 22.3076 23.0209 22.6667 23.0209C24.4625 23.0209 26.1847 22.3075 27.4544 21.0377C28.7242 19.768 29.4376 18.0458 29.4376 16.25C29.4376 14.4543 28.7242 12.7321 27.4544 11.4623C26.1847 10.1926 24.4625 9.4792 22.6667 9.4792C22.3076 9.4792 21.9632 9.33653 21.7092 9.08257C21.4553 8.82862 21.3126 8.48418 21.3126 8.12503C21.3126 7.76589 21.4553 7.42145 21.7092 7.16749C21.9632 6.91354 22.3076 6.77087 22.6667 6.77087C25.1799 6.77373 27.5893 7.77335 29.3664 9.55042C31.1434 11.3275 32.143 13.7369 32.1459 16.25V16.25ZM25.3751 16.25C25.3751 15.5317 25.0897 14.8429 24.5818 14.335C24.0739 13.827 23.385 13.5417 22.6667 13.5417C22.3076 13.5417 21.9632 13.399 21.7092 13.1451C21.4553 12.8911 21.3126 12.5467 21.3126 12.1875C21.3126 11.8284 21.4553 11.4839 21.7092 11.23C21.9632 10.976 22.3076 10.8334 22.6667 10.8334C24.1033 10.8334 25.4811 11.404 26.4969 12.4199C27.5127 13.4357 28.0834 14.8134 28.0834 16.25C28.0834 17.6866 27.5127 19.0644 26.4969 20.0802C25.4811 21.096 24.1033 21.6667 22.6667 21.6667C22.3076 21.6667 21.9632 21.524 21.7092 21.2701C21.4553 21.0161 21.3126 20.6717 21.3126 20.3125C21.3126 19.9534 21.4553 19.6089 21.7092 19.355C21.9632 19.101 22.3076 18.9584 22.6667 18.9584C23.385 18.9584 24.0739 18.673 24.5818 18.1651C25.0897 17.6572 25.3751 16.9683 25.3751 16.25Z" fill="white"></path>
          }
        </svg>
      </button>
      <CustomTextCursor text={customTextCursor} />

      <motion.div
        className="absolute text-auretto-white md:max-w-7xl bottom-[10%] text-3xl sm:text-4xl md:text-5xl lg:text-7xl px-7 md:px-20 lg:px-36 selection:bg-auretto"
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.001,
        }}
        style={{
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1)",
          opacity: heroTextOpacity,
          display: heroTextDisplay
        }}
      >
        <Balancer>Existe algo de infinito em cada sonho que se realiza</Balancer>
      </motion.div>
    </motion.div>
  )
}
