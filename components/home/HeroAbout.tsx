"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"] 
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function HeroAbout() {
  const services = [
    {
      id: 1,
      title: "Space Consultation",
      desc: "We analyze your room's unique architecture and lighting layout to build a tailored spatial blueprint.",
      img: "/chair1.jpg", 
    },
    {
      id: 2,
      title: "Bespoke Curation",
      desc: "Select custom high-end textiles, rich wood grains, configurations guided by our expert designers.",
      img: "/hero.png",
    },
    {
      id: 3,
      title: "Seamless Installation",
      desc: "Our specialized team manages white-glove transport, unboxing, and precise final placement effortlessly.",
      img: "/chair2.jpg",
    }
  ];

  return (
    <section className={`relative w-full bg-[#f4ebe1] py-12 lg:py-16 overflow-hidden ${inter.className}`}>
      
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col">
        
        {/* ================= 1. TOP HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 mb-12 lg:mb-16">
          <div className="inline-block border-2 border-[#2a7f54]/40 text-[#2a7f54] rounded-full px-6 py-2 text-[15px] font-semibold tracking-wide hover:bg-[#2a7f54] hover:text-white transition-colors cursor-pointer">
            About Us
          </div>
          
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed font-medium max-w-[340px] text-left md:text-right">
            We engineer premium, minimalist furniture bridging the gap between striking form and everyday utility.
          </p>
        </div>

        {/* ================= 2. MASSIVE TYPOGRAPHY ================= */}
        <div className="w-full max-w-[1350px] mx-auto text-left lg:text-center leading-[1.2] lg:leading-[1.1]">
          <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4.8rem] font-bold text-[#2a7f54] tracking-tight">
            
            {/* LINE 1 */}
            Kashi brings <span className={`${playfair.className} italic font-medium text-[#2a7f54]/70`}>intentional</span> 
            <span className="inline-block relative w-[45px] md:w-[70px] lg:w-[90px] h-[55px] md:h-[80px] lg:h-[100px] align-middle mx-3 lg:mx-5 -rotate-6 shadow-xl border-[4px] border-white rounded-xl overflow-hidden cursor-pointer hover:rotate-0 hover:scale-110 transition-all duration-500 z-10">
              <Image src="/chair1.jpg" alt="Chair detail" fill sizes="90px" className="object-cover bg-[#f4ebe1]" />
            </span>
            <br className="hidden lg:block" />
            
            {/* LINE 2 */}
            design to your home, balancing 
            <br className="hidden lg:block" />
            
            {/* LINE 3 */}
            bold 
            <span className="inline-block relative w-[40px] md:w-[65px] lg:w-[80px] h-[50px] md:h-[75px] lg:h-[90px] align-middle mx-3 lg:mx-4 rotate-12 shadow-xl border-[4px] border-white rounded-xl overflow-hidden cursor-pointer hover:rotate-0 hover:scale-110 transition-all duration-500 z-10">
              <Image src="/chair2.jpg" alt="Chair silhouette" fill sizes="80px" className="object-cover bg-[#f4ebe1]" />
            </span>
            <span className={`${playfair.className} italic font-medium text-[#2a7f54]/70`}>silhouettes</span> with uncompromising comfort.
          </h2>
        </div>

        {/* ================= 3. PREMIUM GREEN SERVICE CARDS (STAGGERED GRID) ================= */}
        <div className="mt-20 lg:mt-32 w-full">
          
          {/* Explore Service Pill */}
          <div className="mb-10 lg:mb-14">
            <button className="bg-[#2a7f54] text-white rounded-full px-8 py-3.5 text-[15px] font-semibold tracking-wider uppercase hover:bg-[#1f5c3d] transition-all shadow-[0_8px_20px_rgba(42,127,84,0.3)] hover:-translate-y-1">
              Explore Service
            </button>
          </div>

          {/* Staggered Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`bg-gradient-to-br from-[#2a7f54] to-[#1a5537] rounded-[2.5rem] p-4 lg:p-5 flex flex-col group cursor-pointer hover:shadow-[0_20px_40px_rgba(42,127,84,0.4)] transition-all duration-500 ${
                  index === 1 ? "md:-mt-16" : "md:mt-12"
                }`}
              >
                {/* Image Container with Inner Shadow trick */}
                <div className="relative w-full h-[260px] lg:h-[320px] rounded-[1.8rem] overflow-hidden mb-6 bg-[#f4ebe1] shadow-inner">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                  />
                  
                  {/* Floating Arrow Icon (Top Right) */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-md bg-white/10 group-hover:bg-white group-hover:text-[#2a7f54] text-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:rotate-45 transition-transform duration-300"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </div>
                </div>
                
                {/* Text Container */}
                <div className="px-4 pb-6">
                  <h3 className="text-white text-[1.4rem] lg:text-2xl font-bold mb-3 tracking-wide drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-[14.5px] lg:text-[15px] leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}