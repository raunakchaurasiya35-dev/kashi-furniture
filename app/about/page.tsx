"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"] 
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function AboutPage() {
  
  // Interactive UX: Toast Notification State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Simulated Add to Cart Function
  const handleAction = (e: React.MouseEvent, message: string) => {
    e.preventDefault();
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000); // Hide after 3 seconds
  };

  // Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuredProducts = [
    { id: 1, name: "Velvet Accent Chair", price: "₹24,500", oldPrice: "₹32,000", rating: 5, img: "/chair1.jpg" },
    { id: 2, name: "Oak Lounge Seat", price: "₹35,000", oldPrice: "₹45,000", rating: 4, img: "/chair2.jpg" },
    { id: 3, name: "Minimalist Stool", price: "₹12,800", oldPrice: "₹18,000", rating: 5, img: "/chair3.jpg" },
    { id: 4, name: "Classic Dining Chair", price: "₹16,500", oldPrice: "₹22,000", rating: 5, img: "/feature1.jpg" },
    { id: 5, name: "Modern Leather Sofa", price: "₹85,000", oldPrice: "₹1,10,000", rating: 4, img: "/hero.png" },
    { id: 6, name: "Fabric Armchair", price: "₹28,000", oldPrice: "₹38,000", rating: 5, img: "/feature2.jpg" },
  ];

  return (
    <main className={`relative w-full min-h-screen bg-[#f4ebe1] overflow-x-hidden ${inter.className}`}>
      
      {/* ================= UX: Premium Toast Notification ================= */}
      <div className={`fixed bottom-10 right-10 bg-[#1a1a1a] text-white px-6 py-4 rounded-xl shadow-2xl z-50 transform transition-all duration-500 flex items-center gap-4 ${toastMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="w-8 h-8 bg-[#2a7f54] rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <div>
          <h4 className="font-bold text-sm">Success</h4>
          <p className="text-xs text-gray-300">{toastMessage}</p>
        </div>
      </div>

      {/* ================= 1. PROMOTIONAL BANNERS ================= */}
      <section className="w-full pt-32 pb-16 px-6 md:px-12 lg:px-16 max-w-[1500px] mx-auto">
        
        <div className="mb-12 text-center md:text-left">
          <h1 className={`${playfair.className} text-[3rem] md:text-[4rem] font-bold text-[#1a1a1a] leading-tight tracking-tight`}>
            About Kashi Steel
          </h1>
          <p className="text-gray-600 font-medium text-[15px] mt-2">Discover our collections and the story behind the craft.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[450px]">
          
          {/* Left Large Banner */}
          <div className="md:col-span-8 bg-[#e8ded3] rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group border border-[#e8ded3] hover:border-gray-300 transition-colors">
            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start text-left">
              <span className="text-[#2a7f54] text-xs font-bold tracking-widest uppercase mb-3 bg-white/60 px-3 py-1 rounded-full shadow-sm">New Arrival • 20% Off</span>
              <h2 className={`${playfair.className} text-[2.5rem] lg:text-[3.2rem] font-bold text-[#1a1a1a] leading-[1.1] mb-4`}>
                New Sofa<br />Collections
              </h2>
              <p className="text-gray-600 text-[14px] font-medium leading-relaxed mb-8 max-w-xs">
                Explore our latest range of modular sofas designed for modern Indian homes. 
              </p>
              {/* Functional Scroll Button */}
              <button 
                onClick={() => scrollToSection('featured-products')}
                className="bg-[#1a1a1a] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-[#2a7f54] transition-all flex items-center gap-3 shadow-lg active:scale-95"
              >
                Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </div>
            
            <div className="relative w-full md:w-1/2 h-[250px] md:h-full mt-8 md:mt-0">
              <Image src="/hero.png" alt="Sofa Collection" fill className="object-cover object-center rounded-2xl md:rounded-none md:rounded-l-2xl group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Right Smaller Banner */}
          <div className="md:col-span-4 bg-white rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden group shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="relative z-10">
              <span className="text-[#2a7f54] text-xs font-bold tracking-widest uppercase mb-2 block">Premium Range</span>
              <h2 className={`${playfair.className} text-[2rem] font-bold text-[#1a1a1a] leading-[1.1] mb-6`}>
                Chair<br />Collection
              </h2>
              <button 
                onClick={() => scrollToSection('brand-story')}
                className="text-[#1a1a1a] text-sm font-bold uppercase tracking-widest border-b-2 border-[#1a1a1a] pb-1 hover:text-[#2a7f54] hover:border-[#2a7f54] transition-colors cursor-pointer"
              >
                Read Our Story
              </button>
            </div>
            <div className="relative w-full h-[200px] mt-6">
              <Image src="/chair1.jpg" alt="Chair Collection" fill className="object-contain object-bottom group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </section>


      {/* ================= 2. FEATURED BRAND PRODUCTS ================= */}
      <section id="featured-products" className="w-full bg-[#f4ebe1] py-16 px-6 md:px-12 lg:px-16 border-t border-gray-300">
        <div className="max-w-[1500px] mx-auto">
          
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} text-[2.5rem] md:text-[3.2rem] font-bold text-[#1a1a1a] mb-4`}>
              Featured Brand Products
            </h2>
            <p className="text-gray-600 text-[15px] font-medium max-w-2xl mx-auto leading-relaxed">
              Collaboratively pursue proactive designs. We prioritize premium materials and functional minimalism for your everyday spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-auto">
            
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {featuredProducts.slice(0, 3).map((product) => (
                <Link 
                  href="#" 
                  key={product.id}
                  onClick={(e) => handleAction(e, `${product.name} added to wishlist!`)} 
                  className="bg-white rounded-[1.5rem] p-4 flex items-center gap-6 shadow-sm border border-transparent hover:border-gray-200 hover:shadow-lg transition-all group active:scale-[0.98] cursor-pointer"
                >
                  <div className="w-[100px] h-[100px] relative bg-[#f9f7f4] rounded-xl overflow-hidden shrink-0">
                    <Image src={product.img} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col w-full relative">
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={i < product.rating ? "#eab308" : "#e5e7eb"} stroke={i < product.rating ? "#eab308" : "#e5e7eb"} strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                    <h4 className="text-[#1a1a1a] font-bold text-[15px] mb-1 leading-tight group-hover:text-[#2a7f54] transition-colors">{product.name}</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gray-400 text-[13px] line-through font-medium">{product.oldPrice}</span>
                      <span className="text-[#2a7f54] text-[15px] font-extrabold">{product.price}</span>
                    </div>
                    {/* Hover Add icon */}
                    <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[#1a1a1a]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Center Column */}
            <div className="bg-[#e8ded3] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between items-center text-center relative overflow-hidden group h-full min-h-[500px]">
               <div className="relative z-10 w-full flex flex-col items-center">
                  <div className="bg-[#1a1a1a] text-white text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-md mb-6 shadow-md">
                    Up to 20% Off
                  </div>
                  <h3 className={`${playfair.className} text-[2.5rem] font-bold text-[#1a1a1a] leading-tight mb-6`}>
                    Modern & Minimal<br />Furniture
                  </h3>
                  <button 
                    onClick={(e) => handleAction(e, "Redirecting to collection catalog...")}
                    className="bg-[#2a7f54] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-[#1e613f] transition-all shadow-lg active:scale-95 flex items-center gap-2"
                  >
                    Explore Collection
                  </button>
               </div>
               
               <div className="relative w-full h-[300px] mt-8 z-0 cursor-pointer" onClick={(e) => handleAction(e, "Opening product details...")}>
                  <Image src="/chair2.jpg" alt="Highlight Furniture" fill className="object-contain object-bottom group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700" />
               </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {featuredProducts.slice(3, 6).map((product) => (
                <Link 
                  href="#" 
                  key={product.id}
                  onClick={(e) => handleAction(e, `${product.name} added to cart!`)} 
                  className="bg-white rounded-[1.5rem] p-4 flex items-center gap-6 shadow-sm border border-transparent hover:border-gray-200 hover:shadow-lg transition-all group active:scale-[0.98] cursor-pointer"
                >
                  <div className="w-[100px] h-[100px] relative bg-[#f9f7f4] rounded-xl overflow-hidden shrink-0">
                    <Image src={product.img} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col w-full relative">
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill={i < product.rating ? "#eab308" : "#e5e7eb"} stroke={i < product.rating ? "#eab308" : "#e5e7eb"} strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                    <h4 className="text-[#1a1a1a] font-bold text-[15px] mb-1 leading-tight group-hover:text-[#2a7f54] transition-colors">{product.name}</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gray-400 text-[13px] line-through font-medium">{product.oldPrice}</span>
                      <span className="text-[#2a7f54] text-[15px] font-extrabold">{product.price}</span>
                    </div>
                    {/* Hover Cart icon */}
                    <div className="absolute right-0 bottom-0 w-8 h-8 bg-[#2a7f54] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. THE PROCESS ================= */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 border-t border-gray-300">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          <div className="flex flex-col items-center pt-8 md:pt-0 px-6 cursor-pointer group">
            <div className="w-16 h-16 bg-[#f4ebe1] text-[#2a7f54] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2a7f54] group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Premium Sourcing</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">We ethically source A-grade timber and raw materials to ensure high durability and sustainable ecological impact.</p>
          </div>

          <div className="flex flex-col items-center pt-8 md:pt-0 px-6 cursor-pointer group">
            <div className="w-16 h-16 bg-[#f4ebe1] text-[#2a7f54] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2a7f54] group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Master Crafting</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">Over 50 hours of meticulous hand-craftsmanship goes into each furniture piece, merging technology with tradition.</p>
          </div>

          <div className="flex flex-col items-center pt-8 md:pt-0 px-6 cursor-pointer group">
            <div className="w-16 h-16 bg-[#f4ebe1] text-[#2a7f54] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#2a7f54] group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Flawless Finish</h4>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">Multiple layers of eco-friendly varnishes and strict quality checks ensure that the final piece is nothing short of perfect.</p>
          </div>

        </div>
      </section>


      {/* ================= 4. DETAILED CONTENT (Light Theme Implementation) ================= */}
      <section id="brand-story" className="w-full bg-[#f4ebe1] py-24 lg:py-32 px-6 md:px-12 lg:px-16 overflow-hidden relative">
        <div className="max-w-[1300px] mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: The Story Text */}
            <div className="flex flex-col pr-0 lg:pr-10">
              <span className="text-[#2a7f54] text-[13px] font-bold tracking-widest uppercase mb-4">Our Heritage</span>
              <h2 className={`${playfair.className} text-[3rem] md:text-[4.5rem] font-bold text-[#1a1a1a] leading-[1.05] mb-8 tracking-tight`}>
                Redefining <br className="hidden md:block"/>
                <span className="italic font-medium text-gray-500">Craftsmanship.</span>
              </h2>
              
              <div className="flex flex-col gap-6 text-gray-600 text-[16px] leading-relaxed font-medium mb-12">
                <p>
                  Founded in the cultural heart of Varanasi, Kashi Steel began with a singular vision: to bridge the gap between traditional Indian woodworking and contemporary global design. 
                </p>
                <p>
                  We believe that furniture should not just occupy a space; it should define it. Every piece in our collection is engineered using ethically sourced timber, high-grade steel, and premium fabrics that withstand the test of time.
                </p>
              </div>

              {/* Functional CTA */}
              <button 
                onClick={(e) => handleAction(e, "Opening factory tour booking form...")}
                className="bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-all w-max shadow-sm hover:shadow-lg active:scale-95"
              >
                Book a Factory Tour
              </button>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-300">
                <div>
                  <h4 className={`${playfair.className} text-3xl font-bold text-[#1a1a1a] mb-2`}>15+</h4>
                  <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">Years of Craft</p>
                </div>
                <div>
                  <h4 className={`${playfair.className} text-3xl font-bold text-[#2a7f54] mb-2`}>10k</h4>
                  <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">Happy Homes</p>
                </div>
                <div>
                  <h4 className={`${playfair.className} text-3xl font-bold text-[#1a1a1a] mb-2`}>200</h4>
                  <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">Master Artisans</p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Video/Image Container */}
            <div 
              className="w-full h-[500px] lg:h-[700px] relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group cursor-pointer"
              onClick={(e) => handleAction(e, "Playing brand documentary video...")}
            >
              <Image 
                src="/hero.png" 
                alt="Craftsmanship details" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-black/10 to-transparent"></div>
              
              {/* Floating Glass Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white group-hover:bg-[#2a7f54] group-hover:border-[#2a7f54] group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </div>
              
              <div className="absolute bottom-10 left-10 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
                <h4 className={`${playfair.className} text-2xl font-bold mb-1`}>The Varanasi Workshop</h4>
                <p className="text-sm text-gray-200 font-light flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2a7f54] animate-pulse"></span> Watch the process
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}