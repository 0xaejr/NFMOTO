import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VehiclesContent from "@/components/sections/VehiclesContent";
import Image from "next/image";
import Link from "next/link";

export default function NabidkaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#F5F5F3] min-h-screen">
        {/* ── Hero ── */}
        <section className="py-16 bg-[#F5F5F3]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* LEFT */}
              <div>
                {/* Breadcrumb */}
                <div
                  className="flex items-center gap-2 text-xs text-[#7D7D7D] mb-8"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Link href="/" className="hover:text-[#0B0B0B] transition-colors">
                    Domů
                  </Link>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-[#0B0B0B] font-medium">Nabídka vozů</span>
                </div>

                {/* Label */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                  <span
                    className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Nabídka Vozů
                  </span>
                </div>

                {/* Heading */}
                <h1
                  className="text-5xl md:text-6xl font-black uppercase leading-tight mb-5 text-[#0B0B0B]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  EXKLUZIVNÍ VOZY PRO NÁROČNÉ
                </h1>

                {/* Description */}
                <p
                  className="text-[#7D7D7D] text-sm leading-relaxed max-w-md mb-10"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Objevte naši exkluzivní nabídku prověřených vozů. Každý automobil prochází důkladnou kontrolou kvality, abychom vám zajistili maximální spolehlivost a radost z jízdy.
                </p>

                {/* Dark badge */}
                <div className="inline-flex items-center gap-4 bg-[#0B0B0B] text-white px-6 py-4 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#245CFF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m9-11h3l3 3v4h-1m-5 1V5"
                      />
                    </svg>
                    <div>
                      <div
                        className="font-black text-lg"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        120+
                      </div>
                      <div
                        className="text-[10px] text-white/60 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        PROVĚŘENÝCH VOZŮ
                      </div>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <p
                    className="text-white/70 text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Každý vůz je prověřen<br />a připraven k okamžitému odběru.
                  </p>
                </div>
              </div>

              {/* RIGHT — car image */}
              <div className="relative h-72 md:h-[420px] rounded-2xl overflow-hidden">
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

        {/* ── Vehicles filter + grid ── */}
        <VehiclesContent />
      </main>
      <Footer />
    </>
  );
}
