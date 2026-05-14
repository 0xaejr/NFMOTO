import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VehiclesContent from "@/components/sections/VehiclesContent";
import Image from "next/image";
import Link from "next/link";

export default function NabidkaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-[#F5F5F3] min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center gap-2 text-xs text-[#7D7D7D]" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Domů</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#0B0B0B] font-medium">Nabídka vozů</span>
          </div>
        </div>

        {/* Hero */}
        <section className="pb-12">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
                  <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                    Nabídka Vozů
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B0B0B] uppercase leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
                  EXKLUZIVNÍ VOZY<br />PRO NÁROČNÉ
                </h1>
                <p className="text-[#7D7D7D] text-sm leading-relaxed mb-8 max-w-md" style={{ fontFamily: "var(--font-body)" }}>
                  Objevte naši exkluzivní nabídku prověřených vozů. Každý automobil prochází důkladnou kontrolou kvality, abychom vám zajistili maximální spolehlivost a radost z jízdy.
                </p>
                {/* Badge */}
                <div className="inline-flex items-center gap-4 bg-[#0B0B0B] text-white px-6 py-4 rounded-[14px]">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#245CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m9-11h3l3 3v4h-1m-5 1V5" />
                    </svg>
                    <div>
                      <div className="font-black text-lg" style={{ fontFamily: "var(--font-display)" }}>120+</div>
                      <div className="text-[10px] text-white/60 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>PROVĚŘENÝCH VOZŮ</div>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <p className="text-white/70 text-xs leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    Každý vůz je prověřen<br />a připraven k okamžitému odběru.
                  </p>
                </div>
              </div>

              {/* Right — car image */}
              <div className="relative h-72 md:h-96 rounded-[16px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=85"
                  alt="Exkluzivní vozy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main content — filters + grid */}
        <VehiclesContent />
      </main>
      <Footer />
    </>
  );
}
