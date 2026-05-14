import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";

export default function ONasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="py-8 bg-white max-w-[1440px] mx-auto px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-black text-[#0B0B0B] uppercase pt-4" style={{ fontFamily: "var(--font-display)" }}>O NÁS</h1>
        </div>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
