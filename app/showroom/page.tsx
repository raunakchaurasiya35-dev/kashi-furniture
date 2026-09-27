"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"] 
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function ShowroomPage() {
  // Database of all products
  const allProducts = [
    { id: 1, name: "Amber Modern Sofa", price: "₹85,000", img: "/hero.png", height: "h-[400px]" },
    { id: 2, name: "Slate Minimal Chair", price: "₹24,500", img: "/collection1.jpg", height: "h-[250px]" },
    { id: 3, name: "Crimson Velvet Lounger", price: "₹45,000", img: "/collection2.jpg", height: "h-[350px]" },
    { id: 4, name: "Oak Wood Coffee Table", price: "₹18,200", img: "/collection3.jpg", height: "h-[280px]" },
    { id: 5, name: "Emerald Accent Chair", price: "₹32,500", img: "/collection4.jpg", height: "h-[450px]" },
    { id: 6, name: "Sculpted Nightstand", price: "₹12,800", img: "/collection5.jpg", height: "h-[260px]" },
    { id: 7, name: "Classic Dining Seat", price: "₹16,000", img: "/collection6.jpg", height: "h-[320px]" },
    { id: 8, name: "Plush Corner Sofa", price: "₹1,15,000", img: "/hero.png", height: "h-[380px]" },
    // Extra products for the "Load More" functionality
    { id: 9, name: "Nordic Lounge Chair", price: "₹28,000", img: "/chair-3.png", height: "h-[300px]" },
    { id: 10, name: "Walnut Media Console", price: "₹55,000", img: "/hero.jpg", height: "h-[250px]" },
    { id: 11, name: "Boucle Accent Sofa", price: "₹92,000", img: "/hero.png", height: "h-[420px]" },
    { id: 12, name: "Minimalist Bookshelf", price: "₹34,000", img: "/chair-2.png", height: "h-[350px]" },
  ];

  // State to handle functional "Load More"
  const [visibleItems, setVisibleItems] = useState(8);

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 4, allProducts.length));
  };

  // Smooth scroll functionality for Hero Button
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery-section");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={`relative w-full min-h-screen bg-[#f4ebe1] overflow-x-hidden ${inter.className}`}>
      
      {/* ================= 1. FULL-SCREEN IMMERSIVE HERO ================= */}
      <section className="relative w-full h-[90vh] min-h-[600px] lg:h-screen flex items-center pt-20">
        
        {/* Full Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image 
            src="/showroom.png" // Apni pasand ki image lagayein
            alt="Showroom Interior" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
        </div>

        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10 flex flex-col lg:flex-row justify-between h-full pb-12 lg:pb-24">
          
          {/* LEFT SIDE: Typography & Main CTA */}
          <div className="flex flex-col justify-center lg:justify-end h-full max-w-2xl mt-12 lg:mt-0">
            <h1 className={`${playfair.className} text-white text-[3.2rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-6 drop-shadow-md`}>
              Crafted to be <br className="hidden md:block" />
              <span className="italic text-[#f4ebe1]/90 font-medium">in your space,</span> <br className="hidden md:block" />
              not just admired.
            </h1>
            
            <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed font-light max-w-[500px] mb-12 drop-shadow-sm">
              Our furniture is designed with care — using premium woods, meticulous craftsmanship, and styles that harmonize with your living environment instead of overwhelming it.
            </p>
            
            {/* Functional View All Button */}
            <div className="flex items-center">
              <button 
                onClick={scrollToGallery}
                className="group bg-white text-[#1a1a1a] rounded-full pl-7 pr-2.5 py-2.5 flex items-center gap-5 hover:bg-[#f4ebe1] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95"
              >
                <span className="text-[14px] font-bold tracking-wide uppercase">Explore Gallery</span>
                <span className="w-11 h-11 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center group-hover:bg-[#2a7f54] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Floating Glassmorphism Product Card */}
          <div className="flex items-end justify-start lg:justify-end mt-12 lg:mt-0 w-full lg:w-auto">
            <Link href="#" className="block bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.25)] w-full max-w-[400px] group cursor-pointer hover:bg-white/15 active:scale-95 transition-all duration-500">
              
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 relative bg-white/90 rounded-[1.2rem] overflow-hidden shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-500">
                  <Image src="/chair1.jpg" alt="Horizon Couch" fill className="object-cover" />
                </div>
                
                <div className="flex flex-col justify-center">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">Kashi Premium Couch</h3>
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1.5">Seating Options</p>
                  <p className="text-[#2a7f54] font-extrabold text-[17px] bg-white/90 w-max px-3 py-1 rounded-md">₹1,35,000</p>
                </div>
              </div>
              
              <p className="text-white/80 text-sm font-light leading-relaxed mb-7">
                Adapt it to your evolving lifestyle with modular configurations and sustainable materials.
              </p>
              
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white text-[#1a1a1a] py-3.5 rounded-xl text-sm font-bold hover:bg-[#2a7f54] hover:text-white transition-colors shadow-sm text-center">
                  Add to basket
                </div>
                <div className="flex-1 bg-transparent border border-white/40 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-white/10 hover:border-white transition-colors text-center">
                  Browse items
                </div>
              </div>

            </Link>
          </div>

        </div>
      </section>


      {/* ================= 2. REFINED PINTEREST MASONRY SHOWCASE ================= */}
      <section id="gallery-section" className="w-full bg-[#f4ebe1] py-24 px-6 md:px-12 lg:px-16 border-t border-gray-300">
        <div className="max-w-[1500px] mx-auto">
          
          {/* Gallery Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <div className="inline-block border border-[#2a7f54]/40 text-[#2a7f54] rounded-full px-5 py-1.5 text-[12px] font-bold tracking-widest uppercase mb-5">
                The Collection
              </div>
              <h2 className={`${playfair.className} text-[2.8rem] md:text-5xl font-bold text-[#1a1a1a] leading-tight`}>
                Curated Eras.
              </h2>
              <p className="text-gray-600 font-medium text-[15px] mt-4 max-w-md leading-relaxed">
                Explore our meticulously crafted pieces, designed to elevate your everyday living experience.
              </p>
            </div>
            
            {/* Filter Buttons (Only "All Items" remaining as requested) */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <button className="text-[#1a1a1a] text-sm font-bold uppercase tracking-widest border-b-2 border-[#1a1a1a] pb-1 cursor-default">
                All Items
              </button>
            </div>
          </div>

          {/* Functional Masonry Grid Setup */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {allProducts.slice(0, visibleItems).map((product) => (
              <Link 
                href="#"
                key={product.id} 
                className="block break-inside-avoid relative group rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl active:scale-[0.98] transition-all duration-500 cursor-pointer border border-transparent hover:border-gray-100"
              >
                {/* Image Container */}
                <div className={`relative w-full ${product.height} bg-[#f9f7f4]`}>
                  <Image 
                    src={product.img} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                  />
                  
                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#1a1a1a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating View/Cart Icon */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault(); 
                      // Add to cart functionality logic here later
                    }}
                    className="absolute top-5 right-5 w-11 h-11 bg-white text-[#1a1a1a] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-[#2a7f54] hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6 bg-white flex flex-col gap-2">
                  <h3 className="text-[#1a1a1a] font-bold text-xl leading-tight group-hover:text-[#2a7f54] transition-colors">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-400 font-semibold text-[11px] tracking-widest uppercase">Signature</p>
                    <p className="text-[#1a1a1a] font-extrabold text-[16px]">{product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Functional Load More Button */}
          {visibleItems < allProducts.length && (
            <div className="flex justify-center mt-24">
              <button 
                onClick={handleLoadMore}
                className="bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] px-12 py-4 rounded-full text-[14px] font-bold tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 active:scale-95 duration-300 flex items-center gap-3"
              >
                Load More Collection
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}