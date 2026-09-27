"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Showroom", href: "/showroom" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-4 py-5 sm:px-6 sm:py-6 md:px-8">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* Logo - Stylish Italian/Luxury Text Font */}
        <Link
          href="/"
          className="relative z-[60] shrink-0"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold text-[#2a7f62] tracking-wider drop-shadow-sm">
            Kashi Steel
          </span>
        </Link>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium rounded-full bg-white/40 px-7 xl:px-8 py-3.5 shadow-sm backdrop-blur-md border border-white/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`whitespace-nowrap transition-colors duration-200 ${
                pathname === link.href
                  ? "text-black font-bold"
                  : "text-gray-600 hover:text-[#2a7f62]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 relative z-10">

          {/* Search */}
          <button
            aria-label="Search"
            className="text-gray-700 hover:text-[#2a7f62] transition-colors p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9336754268"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-gray-700 hover:text-[#25D366] transition-colors p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* Book Now */}
          <Link
            href="tel:9336754268"
            className="ml-1 xl:ml-2 bg-[#2a7f62] text-white px-5 xl:px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#1f634b] transition-all shadow-md whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/50 shadow-sm backdrop-blur-md lg:hidden"
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[1.5px] w-full bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-y-[6.5px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-full bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-[1.5px] w-full bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "-translate-y-[6.5px] -rotate-45"
                  : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-3 right-3 top-[76px] overflow-hidden rounded-3xl border border-white/60 bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-out sm:left-5 sm:right-5 sm:top-[88px] lg:hidden ${
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-3">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-2xl px-5 py-3.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#2a7f62]/10 font-bold text-[#2a7f62]"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#2a7f62]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Actions */}
          <div className="mt-2 flex items-center gap-2 border-t border-gray-200/70 pt-3">

            {/* Mobile Search */}
            <button
              aria-label="Search"
              className="flex h-11 flex-1 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-[#2a7f62] hover:text-[#2a7f62]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>

            {/* Mobile WhatsApp */}
            <a
              href="https://wa.me/9336754268"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 flex-1 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 1 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            {/* Mobile Book Now */}
            <Link
              href="tel:9336754268"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-11 flex-[2] items-center justify-center rounded-full bg-[#2a7f62] px-5 text-sm font-semibold tracking-wide text-white shadow-md transition-all hover:bg-[#1f634b]"
            >
              Book Now
            </Link>

          </div>
        </nav>
      </div>
    </header>
  );
}