"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"] 
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function HeroTestimonial() {
  const testimonials = [
    {
      id: 1,
      quote: "Kashi completely transformed my studio. The seamless blend of natural wood and bold silhouettes is nothing short of masterful.",
      name: "Ajay Kumar",
      role: "Interior Architect, NY",
      productName: "Amber Modern Chair",
      productImg: "/hero.png",
      avatar: "/avatar1.jpg", // Use actual avatar images if you have them, else chair images act as placeholders
      rating: 5,
    },
    {
      id: 2,
      quote: "A perfect balance of art and utility. The craftsmanship on the wood grain and the comfort of the cushions are unparalleled.",
      name: "rakesh",
      role: "Creative Director",
      productName: "Crimson Velvet",
      productImg: "/chair2.jpg",
      avatar: "/avatar2.jpg",
      rating: 5,
    },
    {
      id: 3,
      quote: "It's rare to find furniture that feels like a sculptural masterpiece yet serves your everyday life so effortlessly.",
      name: "Vinod",
      role: "Design Enthusiast",
      productName: "Slate Minimal",
      productImg: "/chair3.jpg",
      avatar: "/avatar3.jpg",
      rating: 5,
    }
  ];

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const SLIDE_DURATION = 6000; // 6 seconds

  // Auto-Slide Logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  return (
    <section className={`relative w-full bg-[#f4ebe1] py-16 lg:py-24 overflow-hidden ${inter.className}`}>
      
      {/* Background Aesthetic Blur Orbs */}
      <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-white/40 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 right-[10%] w-[300px] h-[300px] bg-[#2a7f54]/5 rounded-full blur-[60px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-16 text-center">
          <div className="inline-block border-2 border-[#2a7f54]/40 text-[#2a7f54] rounded-full px-6 py-2 text-[15px] font-semibold tracking-wide mb-6">
            Client Voices
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-[#121240] tracking-tight leading-tight">
            Stories of <br className="md:hidden"/> <span className={`${playfair.className} italic text-[#2a7f54]`}>Transformation.</span>
          </h2>
        </div>

        {/* Dynamic Testimonial Display Area */}
        <div 
          className="relative w-full max-w-[1100px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white shadow-[0_30px_60px_rgba(0,0,0,0.04)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          <div className="absolute top-0 left-6 lg:top-4 lg:left-10 opacity-[0.07] pointer-events-none select-none">
            <span className={`${playfair.className} text-[8rem] lg:text-[16rem] text-[#2a7f54] leading-none`}>“</span>
          </div>

          {/* Left: The Quote */}
          <div className="w-full lg:w-[60%] relative z-10 min-h-[220px] flex items-center">
            {testimonials.map((testi, index) => (
              <div 
                key={testi.id}
                className={`absolute top-1/2 -translate-y-1/2 w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  index === active 
                  ? "opacity-100 translate-x-0 blur-0 pointer-events-auto scale-100" 
                  : "opacity-0 -translate-x-8 blur-sm pointer-events-none scale-95"
                }`}
              >
                <p className={`${playfair.className} text-[1.6rem] md:text-3xl lg:text-[2.8rem] leading-[1.3] text-[#121240] font-medium tracking-wide drop-shadow-sm`}>
                  "{testi.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Right: Author & Product Info */}
          <div className="w-full lg:w-[40%] relative z-10 flex flex-col border-l-0 lg:border-l-2 border-gray-300/30 pl-0 lg:pl-12 mt-28 md:mt-12 lg:mt-0 min-h-[220px] justify-center">
            {testimonials.map((testi, index) => (
              <div 
                key={testi.id}
                className={`absolute top-1/2 -translate-y-1/2 w-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col gap-6 ${
                  index === active 
                  ? "opacity-100 translate-y-0 pointer-events-auto" 
                  : "opacity-0 translate-y-6 pointer-events-none"
                }`}
              >
                <div>
                  <h4 className="text-2xl lg:text-[1.7rem] font-bold text-[#121240] mb-1.5">{testi.name}</h4>
                  <p className="text-[#2a7f54] text-sm font-bold tracking-widest uppercase mb-4">{testi.role}</p>
                  
                  <div className="flex gap-1.5">
                    {[...Array(testi.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#eab308" stroke="#eab308" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 w-max pr-6">
                  <div className="w-14 h-14 relative bg-[#f4ebe1] rounded-xl overflow-hidden border border-gray-200">
                    <Image src={testi.productImg} alt={testi.productName} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Purchased</span>
                    <span className="text-[15px] font-bold text-[#121240] leading-none">{testi.productName}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Circular Avatar Progress Navigation */}
        <div className="flex items-center justify-center gap-6 mt-14">
          {testimonials.map((testi, index) => {
            const isActive = index === active;
            return (
              <div 
                key={index}
                onClick={() => { setActive(index); setIsPaused(true); }}
                className="relative cursor-pointer group flex flex-col items-center gap-2"
              >
                {/* Circular SVG Progress Ring */}
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-sm border border-gray-200">
                  
                  {/* SVG Ring background */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                    
                    {/* Animated Progress Ring */}
                    <circle 
                      cx="50" cy="50" r="48" 
                      fill="none" 
                      stroke="#2a7f54" 
                      strokeWidth="4" 
                      strokeDasharray="301.59" // 2 * PI * 48
                      strokeDashoffset={isActive && !isPaused ? "0" : "301.59"}
                      style={{
                        transition: isActive && !isPaused ? `stroke-dashoffset ${SLIDE_DURATION}ms linear` : 'none',
                      }}
                    />
                  </svg>

                  {/* Avatar Image inside Ring */}
                  <div className="w-[85%] h-[85%] relative rounded-full overflow-hidden">
                    <Image 
                      src={testi.avatar} 
                      alt={testi.name} 
                      fill 
                      sizes="50px" 
                      className={`object-cover transition-all duration-300 ${isActive ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0'}`} 
                    />
                  </div>
                </div>
                
                {/* Name Label */}
                <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-[#2a7f54]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                  {testi.name.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}