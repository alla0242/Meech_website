import Image from "next/image";

export default function Banner() {
   
  return (
    
    <section className="w-screen aspect-[5/3] flex items-center justify-center">
        <div className="relative w-full aspect-[5/3] bg-purple-500 ">
          {/* Grid layer - positioned below the overlay */}
          <div className="absolute inset-0 grid grid-rows-3 gap-0 z-0 h-full p-0 m-0" style={{ gridTemplateColumns: '18% 18% 21% 19% 23%' }}>
            <div id="grid-item-1" className="bg-red-500 h-[98%] w-[98%] self-center justify-self-center rounded-4xl overflow-hidden">
            </div>
            <div id="grid-item-2" className="bg-blue-500  h-[98%] w-full self-center justify-self-center rounded-4xl overflow-hidden">
            </div>
            <div id="grid-item-3" className="bg-green-500  h-[98%] w-full self-center justify-self-center rounded-4xl overflow-hidden">
            </div>
            <div id="grid-item-4" className="bg-red-500  h-[98%] w-full self-center justify-self-center rounded-4xl overflow-hidden">
            </div>
            <div id="grid-item-5" className="bg-blue-500  h-[98%] w-[98%] self-center justify-self-start rounded-4xl overflow-hidden">
            </div>
                        <div id="grid-item-1" className="bg-red-500 h-[98%] w-[98%] self-start justify-self-center rounded-4xl overflow-hidden">

            </div>
            <div id="grid-item-2" className="bg-blue-500  h-[98%] w-full self-center justify-self-center rounded-4xl overflow-hidden">
            </div>
            <div id="grid-item-3" className="bg-green-500  h-[98%] w-full self-center justify-self-center rounded-4xl overflow-hidden">
            </div>
            <div id="grid-item-4" className="bg-red-500  h-[98%] w-full self-center justify-self-center rounded-4xl overflow-hidden">
            </div>
                        <div id="grid-item-5" className="bg-blue-500  h-[98%] w-[98%] self-center justify-self-start rounded-4xl overflow-hidden">

            </div>
                        <div id="grid-item-1" className="bg-red-500 h-[98%] w-[98%] self-start justify-self-center rounded-4xl overflow-hidden">

            </div>
            <div id="grid-item-2" className="bg-blue-500  h-[98%] w-full self-start justify-self-start rounded-4xl overflow-hidden">
            </div>
            <div id="grid-item-3" className="bg-green-500  h-[98%] w-[98%] self-start justify-self-start rounded-4xl overflow-hidden">
            </div>
            <div id="grid-item-4" className="bg-red-500  h-[98%] w-full self-start justify-self-center rounded-4xl overflow-hidden relative">
              <Image src="/scanline_overlay.jpg" alt="scanline overlay" fill className="object-cover object-center opacity-25 bg-blend-darken-50" />
            </div>
                        <div id="grid-item-5" className="bg-blue-500  h-[98%] w-[98%] self-start justify-self-start rounded-4xl overflow-hidden">

            </div>
            
          </div>
          {/* TV Overlay - positioned above the grid */}
          <Image src="/tv_overlay.png" alt="banner" fill className="object-fit z-10" />
        </div>
    </section>
  );
  
}