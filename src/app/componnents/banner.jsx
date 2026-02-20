import Image from "next/image";

export default function Banner() {
   
  return (
    
    <section className="w-screen h-screen flex items-center justify-center">
        <div className="relative w-full h-full aspect-[5/3] bg-purple-500 ">
          {/* Grid layer - positioned below the overlay */}
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-4 items-center justify-center z-0">
            <div id="grid-item-1" className="bg-red-500 h-10 w-10">
            </div>
            <div id="grid-item-2" className="bg-blue-500 h-10 w-10">
            </div>
            <div id="grid-item-3" className="bg-green-500 h-10 w-10">
            </div>
            <div id="grid-item-4" className="bg-red-500 h-10 w-10">
            </div>
            <div id="grid-item-5" className="bg-blue-500 h-10 w-10">
            </div>
            <div id="grid-item-6" className="bg-green-500 h-10 w-10">
            </div>
            <div id="grid-item-7" className="bg-red-500 h-10 w-10">
            </div>
            <div id="grid-item-8" className="bg-blue-500 h-10 w-10">
            </div>
            <div id="grid-item-9" className="bg-green-500 h-10 w-10">
            </div>
            <div id="grid-item-10" className="bg-red-500 h-10 w-10">
            </div>
            <div id="grid-item-11" className="bg-blue-500 h-10 w-10">
            </div>
            <div id="grid-item-12" className="bg-green-500 h-10 w-10">
            </div>
            <div id="grid-item-13" className="bg-green-500 h-10 w-10">
            </div>
            <div id="grid-item-14" className="bg-green-500 h-10 w-10">
            </div>
            <div id="grid-item-15" className="bg-green-500 h-10 w-10">
            </div>
          </div>
          {/* TV Overlay - positioned above the grid */}
          <Image src="/tv_overlay.png" alt="banner" fill className="object-fit z-10" />
        </div>
    </section>
  );
  
}