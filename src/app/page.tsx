import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedCarsSection from "@/components/sections/FeaturedCarsSection";
import ServicesPreviewSection from "@/components/sections/ServicesPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedCarsSection />
        <ServicesPreviewSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
