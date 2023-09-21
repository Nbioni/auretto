import { VideoBackground } from "@/components/VideoBackground";

export default function Home() {

  return <main className="min-h-screen flex-col flex items-center h-96 bg-auretto-dark-blue">
    <div className="animate-jump-in animate-duration-[1000ms] animate-delay-[144ms] animate-ease-in">
      <div className=" justify-center animate-fade animate-duration-[2000ms] animate-delay-[144ms] animate-ease-in">
        <div className="relative h-screen w-screen">
          <VideoBackground />
          <span className="absolute text-auretto-white bottom-[10%] text-5xl lg:text-7xl px-7 md:px-20 lg:px-36 animate-fade-right animate-once animate-duration-[2000ms] animate-delay-[1500ms] animate-ease-in-out">
            Existe algo de infinito em <br />
            cada sonho que se realiza
          </span>
        </div>
      </div>
    </div>

  </main>
}
