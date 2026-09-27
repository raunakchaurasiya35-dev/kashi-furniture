"use client";

import { useState } from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"] 
});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function ContactPage() {
  const whatsappNumber = "919336754268"; 

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "Custom Furniture",
    message: ""
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = `Hello Kashi Steel team!%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Looking for:* ${formData.interest}%0A%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className={`relative w-full min-h-screen bg-[#f4ebe1] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden ${inter.className}`}>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-24">
        
        {/* ================= TOP SECTION: CONTACT INFO & FORM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Heading, Info Cards & Map */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#2a7f54]"></span>
              <span className="text-[#2a7f54] text-[13px] font-bold tracking-widest uppercase">Contact Us</span>
            </div>
            
            <h1 className={`${playfair.className} text-[3rem] md:text-[4rem] font-bold text-[#121240] leading-[1.1] tracking-tight mb-4`}>
              Get In Touch <br />
              <span className="italic text-gray-500 font-medium">With Our Studio</span>
            </h1>
            
            <p className="text-gray-600 text-[15px] font-medium max-w-md mb-10 leading-relaxed">
              Fill out the form to send us a direct WhatsApp message. Our design team will get back to you instantly to discuss your space.
            </p>

            {/* 4 Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* Card 1: Head Office */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-[#121240]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <h4 className="font-bold text-[15px]">Head Office</h4>
                </div>
                <p className="text-gray-500 text-sm">Near Sigra,<br/>Varanasi, UP 221010</p>
              </div>

              {/* Card 2: Direct Call (Clickable) */}
              <a href="tel:+919336754268" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col hover:border-[#2a7f54] hover:shadow-md transition-all group">
                <div className="flex items-center gap-3 mb-3 text-[#121240] group-hover:text-[#2a7f54] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <h4 className="font-bold text-[15px]">Direct Call</h4>
                </div>
                <p className="text-gray-500 text-sm group-hover:text-gray-700">+91 9336754268</p>
              </a>

              {/* Card 3: Email */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-[#121240]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <h4 className="font-bold text-[15px]">Email</h4>
                </div>
                <p className="text-gray-500 text-sm">hello@kashisteel.com</p>
              </div>

              {/* Card 4: Working Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-[#121240]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <h4 className="font-bold text-[15px]">Working Hours</h4>
                </div>
                <p className="text-gray-500 text-sm">Mon - Sat (10 AM - 7 PM)</p>
              </div>
            </div>

            {/* Real Embedded Map Centered on Sigra, Varanasi */}
            <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-200">
               <iframe 
                src="https://maps.google.com/maps?q=Sigra,%20Varanasi,%20Uttar%20Pradesh%20221010&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "contrast(1.1) opacity(0.9)" }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* RIGHT SIDE: WhatsApp Form (Clean White Card) */}
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 w-full">
            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#121240] text-sm font-semibold">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter full name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-[#121240] focus:outline-none focus:border-[#2a7f54] focus:bg-white transition-colors"
                    required
                  />
                </div>
                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-[#121240] text-sm font-semibold">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 Enter phone number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-[#121240] focus:outline-none focus:border-[#2a7f54] focus:bg-white transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Looking For (Select Box) */}
              <div className="flex flex-col gap-2">
                <label className="text-[#121240] text-sm font-semibold">What are you looking for?</label>
                <select 
                  value={formData.interest}
                  onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-[#121240] focus:outline-none focus:border-[#2a7f54] focus:bg-white transition-colors appearance-none cursor-pointer"
                >
                  <option value="Custom Furniture">Custom Furniture</option>
                  <option value="Living Room Set">Living Room Set</option>
                  <option value="Office & Studio">Office & Studio</option>
                  <option value="Wholesale/Bulk">Wholesale / Bulk Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[#121240] text-sm font-semibold">Message</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Enter your message or specific requirements..."
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-[#2a7f54] focus:outline-none focus:border-[#2a7f54] focus:bg-white transition-colors resize-none"
                  required
                ></textarea>
              </div>

              {/* Action Buttons: WhatsApp and Direct Call */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button 
                  type="submit" 
                  className="flex-1 bg-[#2a7f54] text-white py-4 rounded-xl text-[15px] font-bold tracking-wide hover:bg-[#1e613f] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                  Send via WhatsApp
                </button>
                <a 
                  href={`tel:+${whatsappNumber}`} 
                  className="flex-1 bg-transparent border-2 border-[#121240] text-[#121240] py-4 rounded-xl text-[15px] font-bold tracking-wide hover:bg-[#2a7f54] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  Call Us Directly
                </a>
              </div>
            </form>
          </div>

        </div>

        {/* ================= BOTTOM SECTION: TESTIMONIAL GRID ================= */}
        <div className="pt-16 border-t border-gray-300">
          
          <div className="text-center mb-12">
            <span className="text-[#2a7f54] text-xs font-bold tracking-widest uppercase mb-3 block">Testimonials</span>
            <h2 className={`${playfair.className} text-[2.5rem] font-bold text-[#121240] tracking-tight`}>
              Trusted by minimalists worldwide
            </h2>
          </div>

          {/* Bento Grid layout matching the reference image structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            
            {/* Tall Left Card */}
            <div className="md:col-span-1 md:row-span-2 bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between border border-gray-100">
              <div>
                <h3 className="text-[#121240] font-bold text-xl mb-6 uppercase tracking-widest">Kashi Steel</h3>
                <p className="text-[#121240] text-lg font-medium leading-relaxed mb-8">
                  "Before finding Kashi, we spent hours looking for the perfect blend of modern aesthetics and comfort. Their custom oak dining set completely transformed our living space."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                  <Image src="/avatar1.jpg" alt="User" width={40} height={40} className="object-cover" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#121240]">Jamieson Silva</h5>
                  <p className="text-xs text-gray-500">Homeowner, NY</p>
                </div>
              </div>
            </div>

            {/* Middle Top Card */}
            <div className="md:col-span-1 bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between border border-gray-100">
               <p className="text-gray-700 text-[15px] font-medium leading-relaxed mb-6">
                  "The finish on the wood grains is absolutely pristine. It's rare to find such authentic craftsmanship that fits perfectly into a modern minimalist home."
                </p>
                <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <Image src="/hero.png" alt="User" width={32} height={32} className="object-cover" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#121240]">Samuel T.</h5>
                  <p className="text-xs text-gray-500">Architect</p>
                </div>
              </div>
            </div>

            {/* Right Top Card */}
            <div className="md:col-span-1 bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between border border-gray-100">
               <p className="text-gray-700 text-[15px] font-medium leading-relaxed mb-6">
                  "We sourced our entire office lounge seating from them. Saved us weeks of searching. The comfort level is matched only by the stunning visual appeal."
                </p>
                <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <Image src="/avatar3.jpg" alt="User" width={32} height={32} className="object-cover" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#121240]">Alex R.</h5>
                  <p className="text-xs text-gray-500">Creative Director</p>
                </div>
              </div>
            </div>

            {/* Middle Bottom Card */}
            <div className="md:col-span-1 bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between border border-gray-100">
               <p className="text-gray-700 text-[15px] font-medium leading-relaxed mb-6">
                  "The bespoke curation process was flawless. From selecting the fabrics to final delivery, the team was professional and the end product is breathtaking."
                </p>
                <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                  <Image src="/avatar1.jpg" alt="User" width={32} height={32} className="object-cover" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[#121240]">Emma W.</h5>
                  <p className="text-xs text-gray-500">Interior Designer</p>
                </div>
              </div>
            </div>

            {/* Right Bottom Dark Card (Updated to Green Theme) */}
            <div className="md:col-span-1 bg-[#2a7f54] rounded-3xl p-8 shadow-lg flex flex-col justify-between">
               <h3 className="text-white font-bold text-xl mb-4">Studio Excellence</h3>
               <p className="text-white/90 text-[15px] font-light leading-relaxed mb-6">
                  "Integrating these signature pieces into our showroom transformed the entire vibe in minutes — giving our space the luxury focal point it desperately needed."
                </p>
                <div className="flex items-center gap-3 mt-auto">
                <div className="w-8 h-8 bg-white/20 rounded-full overflow-hidden">
                  <Image src="/avatar2.jpg" alt="User" width={32} height={32} className="object-cover grayscale" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">Sarah Tan</h5>
                  <p className="text-xs text-white/70">Boutique Owner</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}