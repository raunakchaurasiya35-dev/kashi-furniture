"use client";

import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ 
  subsets: ["latin"] 
});

const inter = Inter({ 
  subsets: ["latin"] 
});

export default function Footer() {
  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/product' },
    { name: 'Showroom', path: '/showroom' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Space Consultation', path: '/services/space-consultation' },
    { name: 'Bespoke Curation', path: '/services/bespoke-curation' },
    { name: 'White-Glove Delivery', path: '/services/delivery' },
    { name: 'Care Guide', path: '/care-guide' }
  ];

  return (
    <footer className={`w-full bg-[#121212] pt-16 pb-6 border-t border-gray-800 ${inter.className}`}>
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand, Contact & Social (Takes 4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Clear and prominent Kashi Steel Branding */}
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-white tracking-tight mb-4`}>
              Kashi Steel.
            </h2>
            <p className="text-gray-400 text-[14.5px] leading-relaxed font-medium max-w-[280px] mb-4">
              We engineer premium, minimalist furniture bridging the gap between striking form and everyday utility.
            </p>
            
            {/* Contact Details */}
            <div className="mb-8">
              <a 
                href="tel:+919336754268" 
                className="inline-flex items-center gap-2 text-gray-300 text-[15px] font-semibold hover:text-[#2a7f54] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                9336754268
              </a>
            </div>
            
            {/* Realistic Social Icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#2a7f54] hover:border-[#2a7f54] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              {/* Twitter/X */}
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#2a7f54] hover:border-[#2a7f54] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </Link>
              {/* LinkedIn */}
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:bg-[#2a7f54] hover:border-[#2a7f54] hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Explore</h4>
            <ul className="flex flex-col gap-3.5">
              {exploreLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="text-gray-400 text-[14px] font-medium hover:text-[#2a7f54] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="flex flex-col gap-3.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.path} className="text-gray-400 text-[14px] font-medium hover:text-[#2a7f54] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Simple Newsletter */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-[14px] leading-relaxed font-medium mb-4">
              Subscribe to get special offers, free giveaways, and design news.
            </p>
            {/* FIX 3: Form me onSubmit add kiya gaya hai taaki page reload na ho */}
            <form onSubmit={(e) => e.preventDefault()} className="relative w-full flex items-center border-b border-gray-700 pb-2 group focus-within:border-[#2a7f54] transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent w-full text-white text-[14px] outline-none placeholder-gray-500 font-medium"
                required
              />
              <button 
                type="submit" 
                className="absolute right-0 text-gray-500 group-hover:text-[#2a7f54] transition-colors"
                aria-label="Subscribe"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800 text-[13px] text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Kashi Steel. All rights reserved.</p>
          {/* <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#2a7f54] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#2a7f54] transition-colors">Terms of Service</Link>
          </div> */}
        </div>

      </div>
    </footer>
  );
}