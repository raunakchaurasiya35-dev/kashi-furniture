"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, CheckCircle2, Truck } from "lucide-react"; 
import { productsData } from "../../data/products";


type Props = {
  params: Promise<{ id: string }>;
};

export default function ProductDetail({ params }: Props) {
  // Naye Next.js me params ek Promise hota hai, isliye use() se unwrap kiya hai
  const resolvedParams = use(params);
  
  // Find the product by ID from URL
  const product = productsData.find(p => p.id === resolvedParams.id) || productsData[0]; 

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [activeTab, setActiveTab] = useState("details");

  // Aapke naye contact details
  const phoneNumber = "+919336754268"; 
  const whatsappNumber = "919336754268";
  
  // WhatsApp message format fixed
  const whatsappMessage = `Hello Kashi Steel! I am interested in your product: *${product.name}* (₹${product.price.toLocaleString('en-IN')}). Could you please share more details?`;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans pt-24 sm:pt-32 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 mb-8">
        <nav className="flex text-xs text-gray-500 font-medium tracking-wider uppercase">
          <Link href="/" className="hover:text-[#2a7f62] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/product" className="hover:text-[#2a7f62] transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 line-clamp-1">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT: IMAGE GALLERY */}
        <div className="flex flex-col gap-4">
          {/* Main Image */}
          <div className="relative w-full aspect-[4/3] bg-[#F3F2EE] rounded-2xl overflow-hidden shadow-sm">
            <Image 
              src={activeImage} 
              alt={product.name} 
              fill 
              className="object-cover object-center transition-opacity duration-500"
              priority
            />
          </div>
          {/* Thumbnail Images */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-[4/3] bg-[#F3F2EE] rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeImage === img ? 'border-[#2a7f62]' : 'border-transparent hover:border-gray-300'}`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="flex flex-col pt-2">
          <div className="mb-6">
            <p className="text-xs text-[#2a7f62] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#2a7f62]"></span>
              {product.category}
            </p>
            <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight">{product.name}</h1>
            <p className="text-3xl text-gray-900 font-semibold mb-2">₹{product.price.toLocaleString('en-IN')}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Inclusive of all taxes (Shipping extra)</p>
          </div>

          <div className="mb-10">
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Color Selection */}
          <div className="mb-10">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
              Available Finishes / Colors
            </h3>
            <div className="flex items-center gap-3">
              {product.colors.map((color, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full border-2 shadow-inner transition-all ${selectedColor === color ? 'border-black scale-110' : 'border-transparent hover:border-gray-300'}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select color`}
                ></button>
              ))}
            </div>
          </div>

          {/* Call to Actions - Enquiry based */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            {/* Call Button */}
            <a 
              href={`tel:${phoneNumber}`}
              className="w-full sm:flex-1 h-14 flex items-center justify-center gap-2 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#2a7f62] transition-colors shadow-lg shadow-black/10"
            >
              <Phone className="w-4 h-4" />
              Call for Enquiry
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 h-14 flex items-center justify-center gap-2 border-2 border-black text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Features / Trust Badges */}
          <div className="grid grid-cols-2 gap-4 py-6 border-y border-gray-200 mb-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2a7f62]" />
              <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">Premium Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#2a7f62]" />
              <span className="text-xs text-gray-600 font-medium uppercase tracking-wider">Pan India Delivery</span>
            </div>
          </div>

          {/* Details Tabs (Accordion Style) */}
          <div className="flex flex-col">
            {/* Details Tab */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setActiveTab(activeTab === "details" ? "" : "details")}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-gray-900 group-hover:text-[#2a7f62] transition-colors">Product Details</span>
                <span className="text-gray-500 text-lg transition-transform duration-300">{activeTab === "details" ? "-" : "+"}</span>
              </button>
              {activeTab === "details" && (
                <div className="pb-5 text-sm text-gray-600 leading-relaxed animate-fade-in">
                  {product.description} Built with top-grade materials ensuring durability and elegance that lasts for generations.
                </div>
              )}
            </div>

            {/* Dimensions Tab */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setActiveTab(activeTab === "dimensions" ? "" : "dimensions")}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-gray-900 group-hover:text-[#2a7f62] transition-colors">Dimensions & Specs</span>
                <span className="text-gray-500 text-lg transition-transform duration-300">{activeTab === "dimensions" ? "-" : "+"}</span>
              </button>
              {activeTab === "dimensions" && (
                <div className="pb-5 text-sm text-gray-600 animate-fade-in space-y-2">
                  <p><strong className="text-gray-900">Overall:</strong> {product.dimensions}</p>
                  <p><strong className="text-gray-900">Material:</strong> High-Grade Steel & Premium Upholstery</p>
                  <p><strong className="text-gray-900">Care:</strong> Wipe clean with a damp cloth.</p>
                </div>
              )}
            </div>

            {/* Shipping Tab */}
            <div className="border-b border-gray-200">
              <button 
                onClick={() => setActiveTab(activeTab === "shipping" ? "" : "shipping")}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-sm font-bold uppercase tracking-widest text-gray-900 group-hover:text-[#2a7f62] transition-colors">Delivery & Policies</span>
                <span className="text-gray-500 text-lg transition-transform duration-300">{activeTab === "shipping" ? "-" : "+"}</span>
              </button>
              {activeTab === "shipping" && (
                <div className="pb-5 text-sm text-gray-600 animate-fade-in">
                  Contact our support team via call or WhatsApp for detailed shipping timelines and installation support specific to your location.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}