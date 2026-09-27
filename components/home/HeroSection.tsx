"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"] 
});

export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    { id: 1, name: "Accent Chair", src: "/chair1.jpg" },
    { id: 2, name: "Lounge Chair", src: "/chair2.jpg" },
    { id: 3, name: "Modern Seat", src: "/chair3.jpg" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const nextCard = () => setActiveCard((prev) => (prev + 1) % cards.length);
  const prevCard = () => setActiveCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

  return (
    // Background color yahan se hataya gaya hai taaki page.tsx ka bg apply ho
    <section className="relative w-full min-h-screen pt-12 md:pt-24 pb-8 px-6 md:px-12 max-w-[1500px] mx-auto flex flex-col justify-center">
      
      {/* Background Big Text - (Fixed: changed -z-10 to z-0 so it doesn't hide behind background) */}
      <div className="absolute top-[10%] md:top-[12%] left-0 right-0 w-full flex justify-center z-0 pointer-events-none select-none px-4">
        <h1 className={`${playfair.className} text-[15vw] md:text-[11vw] leading-[0.9] text-[#2a7f62] tracking-widest uppercase opacity-90 text-center w-full whitespace-nowrap`}>
          KASHI LUXURY
        </h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-4 mt-20 md:mt-32 w-full">
        
        {/* Left Side */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <p className="text-gray-700 text-sm leading-relaxed mb-8 max-w-[260px] font-medium">
            We engineer premium, minimalist furniture that balances striking silhouettes with everyday functionality.
          </p>
          
          <button className="bg-[#2a7f62] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-[#1f634b] transition-all shadow-[0_8px_20px_rgba(42,127,98,0.3)] hover:-translate-y-1 mb-12 lg:mb-16">
            View Lookbook
          </button>

         <div className="flex flex-col items-center lg:items-start">
  <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2a7f62] mb-3">
    28K+
  </h2>

  <div className="flex -space-x-3 mb-3">
    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#fef7f2] shadow-sm z-30">
      <img
        src="/avatar1.jpg"
        alt="Customer"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#fef7f2] shadow-sm z-20">
      <img
        src="/avatar2.jpg"
        alt="Customer"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#fef7f2] shadow-sm z-10">
      <img
        src="/avatar3.jpg"
        alt="Customer"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="w-9 h-9 rounded-full bg-[#2a7f62] border-2 border-[#fef7f2] shadow-sm z-0 flex items-center justify-center text-[10px] text-white font-bold">
      +
    </div>
  </div>

  <p className="text-xs text-gray-500 font-medium leading-tight">
    Customers are satisfied with
    <br />
    our furniture collection.
  </p>
</div>
        </div>

        {/* Center */}
        <div className="col-span-1 lg:col-span-6 relative flex justify-center items-center order-1 lg:order-2 h-[350px] md:h-[500px]">
          <div className="absolute left-[5%] md:left-[10%] top-[25%] bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] md:text-xs font-bold text-gray-800 shadow-md border border-white/60 z-30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2a7f62]"></span> Bold Comfort
          </div>
          <div className="absolute right-[5%] md:right-[10%] top-[65%] bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] md:text-xs font-bold text-gray-800 shadow-md border border-white/60 z-30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2a7f62]"></span> Sculpted Style
          </div>

          <div className="relative w-full max-w-[550px] md:max-w-[750px] h-full z-20">
            <Image 
              src="/hero.png" 
              alt="Main Drose Chair" 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 750px"
              className="object-contain scale-125 lg:scale-[1.4] drop-shadow-[0_50px_50px_rgba(0,0,0,0.3)] transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="col-span-1 lg:col-span-3 flex flex-col items-center lg:items-end justify-center order-3 min-h-[300px]">
          <div className="relative w-[220px] h-[280px] flex justify-center items-center">
            {cards.map((card, index) => {
              const isActive = index === activeCard;
              const isNext = index === (activeCard + 1) % cards.length;
              const isPrev = index === (activeCard - 1 + cards.length) % cards.length;

              let transformClass = "scale-90 opacity-0 z-0";
              if (isActive) {
                transformClass = "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100 z-30 shadow-2xl";
              } else if (isNext) {
                transformClass = "translate-x-5 translate-y-4 rotate-6 scale-95 opacity-80 z-20 shadow-md";
              } else if (isPrev) {
                transformClass = "-translate-x-5 translate-y-4 -rotate-6 scale-95 opacity-80 z-10 shadow-md";
              }

              return (
                <div 
                  key={card.id}
                  className={`absolute w-full h-full bg-white/95 backdrop-blur-xl p-3 rounded-[1.5rem] border border-white transition-all duration-500 ease-in-out flex flex-col ${transformClass}`}
                >
                   <div className="w-full h-[75%] bg-[#f4f4f4] rounded-xl mb-3 relative overflow-hidden">
                      <Image 
                        src={card.src} 
                        alt={card.name} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 220px"
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                   </div>
                   <div className="flex-grow flex items-center justify-center">
                     <p className="text-[13px] text-center font-bold text-gray-800">{card.name}</p>
                   </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-3 mt-6 mr-2">
            <button onClick={prevCard} className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#2a7f62] hover:text-[#2a7f62] hover:bg-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={nextCard} className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#2a7f62] hover:text-[#2a7f62] hover:bg-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}