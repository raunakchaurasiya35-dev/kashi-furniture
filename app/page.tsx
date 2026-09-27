import HeroSection from "../components/home/HeroSection";
import HeroFeature from "../components/home/HeroFeature";
import HeroCollection from "../components/home/HeroCollection";
import HeroAbout from "../components/home/HeroAbout";
import HeroTestimonial from "../components/home/HeroTestimonial";
export default function Home() {
  return (
    // Pura page ek hi background color me rahega, koi line nahi aayegi
    <main className="w-full bg-[#f4ebe1] flex flex-col overflow-x-hidden">
      <HeroSection />
      <HeroFeature />
      <HeroCollection />
      <HeroAbout />
      <HeroTestimonial />
    </main>
  );
}