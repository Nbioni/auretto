
export function VideoBackground() {

  return (
    <div className=" bg-auretto-dark-blue w-screen h-screen">
      <div className="flex items-start 
           w-screen h-screen overflow-hidden opacity-70 contrast-[0.85] sepia-[0.07]">
        <video autoPlay loop muted className="absolute top-0 w-screen h-screen object-cover" src="https://github.com/Nbioni/auretto/raw/main/public/maringa-video.mp4" />
      </div>
    </div>
  );
}
