import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kashi Steel - Luxury Furniture",
  description: "All type furniture seller for office or any workspace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#fef7f2_30%,_#fae6d8_100%)] text-[#1a1a1a]">
        <Navbar />
        
        <main className="relative z-0 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}