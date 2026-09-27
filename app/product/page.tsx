"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Data folder se saara data import kar rahe hain
import { productsData, categories, features, roomInspo, reviews } from "../data/products";

export default function ProductPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts = activeCategory === "All"
    ? productsData
    : productsData.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans">
      
      {/* --- 1. HERO SECTION (Mirroring the reference top image) --- */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <Image 
          src="/product/sofa-1.jpg"
          alt="Perfect Modular Sofa" 
          fill 
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center px-4 mt-[-10vh]">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 drop-shadow-md">
            Find Your<br />
            <span className="font-bold italic">Perfect Modular Sofa</span>
          </h1>
          <div className="flex items-center justify-center gap-1 mb-8">
             {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white drop-shadow-md" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
          </div>
          <Link href="#products" className="inline-block bg-black/80 hover:bg-[#2a7f62] backdrop-blur-md text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all border border-white/20">
            Shop The Collection
          </Link>
        </div>
      </section>

      {/* --- 2. FEATURES BAR (Dark bar under hero) --- */}
      <section className="w-full bg-[#1A1A1A] text-white py-4">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-8 text-sm">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <feature.icon className="w-5 h-5 text-gray-300" strokeWidth={1.5} />
              <span className="text-gray-300 font-medium tracking-wide">{feature.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. PRODUCT GRID SECTION --- */}
      <section id="products" className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
          Made For Your <span className="italic text-[#2a7f62]">Home</span>
        </h2>

        {/* --- FILTER BUTTONS --- */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-[#2a7f62] text-white border-[#2a7f62]" // Theme color applied to active filter
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#2a7f62] hover:text-[#2a7f62]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- GRID (10 Products) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 text-left">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col h-full">
              {/* Image Container with Link to details page */}
              <Link href={`/product/${product.id}`} className="block relative w-full aspect-[4/3] bg-[#F3F2EE] overflow-hidden mb-4 rounded-sm">
                 {product.tag && (
                    <span className="absolute top-3 right-3 z-10 bg-black text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1">
                      {product.tag}
                    </span>
                 )}
                 <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </Link>
              
              {/* Product Info */}
              <div className="flex-grow flex flex-col">
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#2a7f62] transition-colors line-clamp-1 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    ₹{product.price.toLocaleString('en-IN')}
                  </p>
                </Link>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 mb-4">
                  {product.colors.map((color, idx) => (
                    <button 
                      key={idx} 
                      className={`w-4 h-4 rounded-full border border-gray-300 shadow-inner ${idx === 0 ? 'ring-1 ring-offset-1 ring-black' : ''}`}
                      style={{ backgroundColor: color }}
                      aria-label={`Color option ${color}`}
                    ></button>
                  ))}
                  {product.colors.length > 3 && (
                     <span className="text-xs text-gray-400 ml-1">+{product.colors.length - 3}</span>
                  )}
                </div>

                {/* Explore Now Button */}
                <Link href={`/product/${product.id}`} className="w-full mt-auto text-center py-2.5 border border-black text-black text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors block">
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredProducts.length > 0 && (
           <div className="mt-16">
              <button className="bg-black hover:bg-[#2a7f62] text-white px-10 py-3 rounded-full text-sm font-medium transition-all">
                 View More
              </button>
           </div>
        )}
        {filteredProducts.length === 0 && (
           <p className="text-gray-500 mt-10">No products found in this category.</p>
        )}
      </section>

      {/* --- 4. INSPIRATION / FIND THE PERFECT FIT --- */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-gray-900 mb-2">Find the Perfect <span className="italic text-[#2a7f62]">Fit</span></h2>
              <p className="text-gray-500 text-sm">Discover the layout that fits your space flawlessly.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
              {roomInspo.map((room) => (
                 <div key={room.id} className="relative aspect-[3/4] overflow-hidden group cursor-pointer bg-gray-100">
                    <Image 
                       src={room.image}
                       alt={room.name}
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="w-12 h-12 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1"><path d="M4.5 4.5v15l15-7.5-15-7.5z" /></svg>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- 5. EFFORTLESS HOME LIVING (Split Section) --- */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-20">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
               <Image src="/product/sofa-2.jpg" alt="Fabric Detail" fill className="object-cover" />
            </div>
            {/* Right Content */}
            <div className="max-w-md mx-auto md:mx-0 text-center md:text-left">
               <h2 className="text-3xl font-serif text-gray-900 mb-6">Effortless Home <br/><span className="italic text-[#2a7f62]">Living</span></h2>
               <p className="text-gray-600 text-sm leading-relaxed mb-10">
                  We put thoughtful design first to create a space that feels uniquely yours. Explore our modular setups designed to adapt to your everyday life.
               </p>
               <div className="flex gap-6 justify-center md:justify-start">
                  <div className="text-center p-4 border border-gray-200 rounded-lg min-w-[120px]">
                     <p className="text-3xl font-serif text-[#2a7f62] mb-1">850+</p>
                     <p className="text-xs text-gray-500 uppercase tracking-widest">Designs</p>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg min-w-[120px]">
                     <p className="text-3xl font-serif text-[#2a7f62] mb-1">98%</p>
                     <p className="text-xs text-gray-500 uppercase tracking-widest">Happy Clients</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 6. CUSTOMER REVIEWS --- */}
      <section className="bg-[#F6F5F2] py-20">
         <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Customers Love Us</h2>
               <p className="text-gray-600 font-serif italic">Over 500+ Five-Star Reviews</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {/* Testimonial Text (Left) */}
               <div className="md:col-span-1 flex flex-col justify-center">
                  <span className="text-6xl font-serif text-[#2a7f62] leading-none mb-4">"</span>
                  <div className="flex text-[#D4AF37] mb-4">
                     {[...Array(5)].map((_,i) => <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <p className="text-gray-700 italic mb-6 leading-relaxed">
                     "{reviews[0].text}"
                  </p>
                  <p className="text-sm font-bold text-gray-900">- {reviews[0].author}</p>
               </div>
               
               {/* Review Images Grid (Right) */}
               <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {reviews.map((review, idx) => (
                     <div key={idx} className={`relative aspect-square rounded-xl overflow-hidden bg-white shadow-sm ${idx === 0 ? 'col-span-2 md:col-span-1 md:row-span-2 aspect-auto' : ''}`}>
                        <Image src={review.image} alt="Customer photo" fill className="object-cover" />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- 7. LARGE BANNER (Beautiful Spaces) --- */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
         <Image src="/product/sofa-3.jpg" alt="Beautiful Spaces" fill className="object-cover object-center" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
         <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-12 flex justify-between items-end">
            <div>
               <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">Beautiful Spaces</h2>
               <p className="text-white/80 font-serif italic text-xl">Start Here</p>
            </div>
            <Link href="#products" className="hidden md:inline-block border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-sm uppercase tracking-widest">
               Shop Now
            </Link>
         </div>
      </section>

      {/* --- 8. FOOTER/NEWSLETTER SPLIT --- */}
      <section className="bg-[#FAF9F6] border-t border-gray-200">
         <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
            
            {/* Newsletter form */}
            <div>
               <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Ready <br/>For What's Next</h2>
               <p className="text-gray-500 text-sm mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
               <form className="max-w-md">
                  <div className="border-b border-gray-300 pb-2 mb-6">
                     <input type="email" placeholder="Email Address" className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400" required />
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#2a7f62] transition-colors rounded-full">
                     Subscribe Now
                  </button>
               </form>
            </div>

            {/* Dimensional Drawing Graphic */}
            <div className="relative w-full aspect-video bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex items-center justify-center">
               <Image src="/product/sofa-4.jpg" alt="Dimensions" fill className="object-contain p-4 mix-blend-multiply opacity-80" />
            </div>
            
         </div>
      </section>

    </div>
  );
}