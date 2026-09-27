"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  weight: ["400", "500", "600"] 
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function HeroFeature() {
  const originalFeatures = [
    {
      id: "01",
      title: "Premium Materials",
      desc: "Crafted with a molded capsule shell and upholstered in rich, top-grain aniline leather.",
      img: "/feature1.jpg", 
    },
    {
      id: "02",
      title: "Ergonomic Form",
      desc: "Engineered with organic, low-profile wave contours to deliver uncompromising comfort.",
      img: "/feature2.jpg",
    },
    {
      id: "03",
      title: "Artisan Craft",
      desc: "Hand-finished wooden legs and meticulous stitching reflecting generations of mastery.",
      img: "/feature3.jpg",
    },
    {
      id: "04",
      title: "Sustainable Core",
      desc: "Built with responsibly sourced timber and eco-friendly memory foam for a greener future.",
      img: "/feature4.jpg",
    },
    {
      id: "05",
      title: "Timeless Aesthetics",
      desc: "A perfect balance of mid-century charm and contemporary minimalism for any space.",
      img: "/feature5.jpg",
    },
  ];

  const features = [...originalFeatures, ...originalFeatures];

  return (
    // bg-transparent ensures it blends fully with page.tsx background
    <section className={`relative w-full bg-transparent pt-4 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden ${inter.className}`}>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 40s linear infinite;
          width: max-content;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="lg:col-span-4 flex flex-col items-start text-left lg:pr-6 z-20">
          <div className="inline-block border border-gray-400 text-gray-800 rounded-full px-5 py-1.5 text-[13px] font-semibold tracking-wide uppercase mb-8">
            Features
          </div>
          <p className="text-gray-700 text-[15px] leading-relaxed mb-8 max-w-sm font-medium">
            Intentionally designed furniture crafted to bring effortless elegance and functional luxury to your home.
          </p>
          <h2 className="text-[3rem] md:text-[3.5rem] leading-[1.1] font-medium text-[#2a7f62] mb-12 tracking-tight">
            Crafting <span className={`${playfair.className} italic text-gray-500`}>Intentional</span><br /> Spaces.
          </h2>
          <button className="bg-[#2a7f62] text-white px-9 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-[#2a7f54] transition-all shadow-[0_10px_20px_rgba(18,18,64,0.2)] hover:shadow-[0_15px_30px_rgba(18,18,64,0.3)] transform hover:-translate-y-1 duration-300">
            Meet the Craft
          </button>
        </div>

        {/* RIGHT COLUMN: Scrolling track */}
        <div className="lg:col-span-8 relative w-full flex overflow-hidden group">
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#f4ebe1] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#f4ebe1] to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-infinite-scroll py-6 pl-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative w-[280px] sm:w-[320px] lg:w-[350px] h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_15px_35px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] transition-shadow duration-500 flex-shrink-0"
              >
                <Image 
                  src={feature.img} 
                  alt={feature.title} 
                  fill 
                  sizes="(max-width: 768px) 320px, 350px"
                  className="object-cover hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full p-7 z-10 pointer-events-none">
                  <h3 className="text-white text-xl lg:text-2xl font-semibold tracking-wide mb-3 drop-shadow-md">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 text-[13px] leading-relaxed font-light w-[95%] drop-shadow-sm">
                    {feature.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-1 right-5 z-10 pointer-events-none">
                  <span className={`${playfair.className} text-[5rem] lg:text-[6rem] leading-none text-white/50 font-bold drop-shadow-lg`}>
                    {feature.id}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}