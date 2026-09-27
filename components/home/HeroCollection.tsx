"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"] 
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function HeroCollection() {
  const collections = [
    { id: 1, name: "Crimson Velvet", src: "/collection1.jpg" }, 
    { id: 2, name: "Slate Minimal", src: "/collection2.jpg" },
    { id: 3, name: "Earth Lounge", src: "/collection3.jpg" },
    { id: 4, name: "Amber Modern", src: "/collection4.jpg" }, 
    { id: 5, name: "Ocean Teal", src: "/collection5.jpg" },
    { id: 6, name: "Mustard Accent", src: "/collection6.jpg" },
    { id: 7, name: "Charcoal Seat", src: "/collection7.jpg" },
  ];

  const [active, setActive] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  
  // Hover delay ko handle karne ke liye Ref
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smooth Auto-scroll
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % collections.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, collections.length]);

  const nextCard = () => setActive((prev) => (prev + 1) % collections.length);
  const prevCard = () => setActive((prev) => (prev === 0 ? collections.length - 1 : prev - 1));

  // Smart Hover Logic: Flickering roke aur smooth banaye
  const handleMouseEnter = (index: number) => {
    setIsPaused(true);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    
    // 150ms delay se confirm hoga ki user waqai card dekhna chahta hai
    hoverTimeout.current = setTimeout(() => {
      setActive(index);
    }, 150);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  return (
    <section className={`relative w-full bg-[#f4ebe1] py-12 lg:py-16 overflow-hidden ${inter.className}`}>
      
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-8 lg:gap-12">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-0">
          
          <div className="flex flex-col gap-4">
            {/* Reduced text gap using leading-[0.9] */}
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[0.9] font-bold text-[#121240] tracking-tight">
              Curated Eras.<br/>
              <span className={`${playfair.className} font-medium italic text-gray-500`}>Modern</span> Spaces.
            </h2>
            
            <div className="flex gap-4 mt-3">
              <button onClick={prevCard} className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-[#2a7f62] hover:border-[#2a7f62] hover:text-white transition-all active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button onClick={nextCard} className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-[#2a7f62] hover:border-[#2a7f62] hover:text-white transition-all active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5 max-w-md text-left lg:text-right">
            <button className="border-2 border-[#121240] text-[#121240] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#121240] hover:text-white transition-colors">
              Our Collections
            </button>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Explore our latest design drops. Each collection is a cohesive system of architectural silhouettes engineered for modern living, blending timeless craftsmanship with contemporary comfort.
            </p>
          </div>
        </div>

        {/* ================= 3D COVER FLOW CAROUSEL ================= */}
        <div 
          className="relative w-full h-[400px] lg:h-[550px] flex items-center justify-center mt-6 lg:mt-8"
        >
          {collections.map((item, index) => {
            let diff = index - active;
            if (diff > Math.floor(collections.length / 2)) diff -= collections.length;
            if (diff < -Math.floor(collections.length / 2)) diff += collections.length;

            const isActive = diff === 0;
            const isVisible = Math.abs(diff) <= 2; 

            let translateX = `calc(${diff} * 110%)`; 
            let scale = isActive ? 1.15 : 1 - Math.abs(diff) * 0.12;
            let zIndex = 40 - Math.abs(diff);
            let opacity = isVisible ? (isActive ? 1 : 0.5) : 0;
            let rotate = isActive ? '-3deg' : '0deg';

            return (
              <div 
                key={item.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="absolute left-1/2 top-1/2 w-[200px] md:w-[260px] lg:w-[300px] h-[260px] md:h-[320px] lg:h-[380px] -ml-[100px] md:-ml-[130px] lg:-ml-[150px] -mt-[130px] md:-mt-[160px] lg:-mt-[190px] cursor-pointer"
                style={{ 
                  zIndex,
                  pointerEvents: isVisible ? 'auto' : 'none'
                }}
              >
                <div 
                  className={`w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center ${
                    isActive 
                    ? "bg-white border-[6px] border-white/90 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]" 
                    : "bg-[#e5ddd3] border-2 border-transparent"
                  }`}
                  style={{
                    transform: `translateX(${translateX}) scale(${scale}) rotate(${rotate})`,
                    opacity
                  }}
                >
                  {/* FULL SIZE IMAGE COVER */}
                  <div className="w-full h-full relative">
                    <Image 
                      src={item.src} 
                      alt={item.name} 
                      fill 
                      sizes="(max-width: 768px) 200px, 300px"
                      className={`object-cover transition-transform duration-700 ${isActive ? 'scale-110' : 'scale-100'}`}
                    />
                  </div>
                  
                  {isActive && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 animate-[fadeIn_0.5s_ease_forwards_0.3s]">
                      <span className="text-xs font-bold text-gray-800 tracking-widest uppercase bg-white/70 backdrop-blur-md px-5 py-1.5 rounded-full shadow-sm border border-gray-200">
                        {item.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA BUTTON ================= */}
        <div className="flex justify-center mt-2 relative z-50">
          <button className="bg-[#2a7f62] text-white px-10 py-4 rounded-full text-[15px] font-semibold tracking-wide hover:bg-[#1f634b] transition-all shadow-[0_10px_20px_rgba(42,127,98,0.3)] hover:shadow-[0_15px_30px_rgba(42,127,98,0.4)] transform hover:-translate-y-1 duration-300">
            Explore Our Eras
          </button>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}} />
    </section>
  );
}