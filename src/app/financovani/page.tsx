import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FinancingCalculator from "@/components/sections/FinancingCalculator";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-6 h-6 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m9-11h3l3 3v4h-1m-5 1V5" />
      </svg>
    ),
    title: "Vyberete si vůz",
    desc: "Prohlédněte si naši nabídku a vyberte si ten pravý vůz pro vás.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Nezávazná konzultace",
    desc: "Probereme vaše možnosti financování a připravíme vám nabídku na míru.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Schválení financování",
    desc: "Vaši žádost vyřídíme rychle a vy získáte jasné podmínky bez skrytých poplatků.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-6 h-6 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: "Přebíráte klíče",
    desc: "Po podpisu smlouvy je vůz váš. Přejeme mnoho šťastných kilometrů!",
  },
];

export default function FinancovaniPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-[#F5F5F3] min-h-screen">
        {/* ── Hero ── */}
        <section className="py-20 bg-[#F5F5F3]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            {/* Breadcrumb */}
            <div
              className="flex items-center gap-2 text-xs text-[#7D7D7D]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Link href="/" className="hover:text-[#0B0B0B] transition-colors">
                Domů
              </Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/sluzby" className="hover:text-[#0B0B0B] transition-colors">
                Služby
              </Link>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-[#0B0B0B] font-medium">Financování</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
              {/* Left */}
              <AnimateOnScroll direction="left">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                  <span
                    className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Financování
                  </span>
                </div>
                <h1
                  className="text-5xl font-black uppercase leading-tight mb-5 text-[#0B0B0B]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  CHYTRÉ FINANCOVÁNÍ PRO VAŠI JÍZDU
                </h1>
                <p
                  className="text-[#7D7D7D] text-sm leading-relaxed max-w-md mb-10"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Nabízíme flexibilní možnosti financování, které se přizpůsobí vašim potřebám. Rychle, transparentně a bez zbytečných komplikací — tak, aby váš sen byl dosažitelný.
                </p>
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider bg-[#245CFF] text-white transition-all duration-300 hover:shadow-[0_8px_32px_rgba(36,92,255,0.45)] hover:scale-[1.02]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  SPOČÍTAT SPLÁTKU →
                </a>
              </AnimateOnScroll>

              {/* Right — car image */}
              <AnimateOnScroll direction="right" delay={150}>
                <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden bg-[#0B0B0B]">
                  <Image
                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=85"
                    alt="Luxury car financing"
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Calculator ── */}
        <section id="calculator" className="bg-white py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <FinancingCalculator />
          </div>
        </section>

        {/* ── Financing Example ── */}
        <section className="bg-[#F5F5F3] py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <AnimateOnScroll>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Příklad Financování
                </span>
              </div>
              <h2
                className="font-black text-3xl mb-10 text-[#0B0B0B]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Příklad financování vozu Lamborghini Huracán EVO
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-2xl border border-[#E7E7E7] p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Car image */}
                  <div className="relative w-full md:w-64 h-44 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80"
                      alt="Lamborghini Huracán EVO"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  {/* Stats */}
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div
                        className="text-xs text-[#7D7D7D] mb-1 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Cena vozu
                      </div>
                      <div
                        className="text-xl font-black text-[#0B0B0B]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        6 990 000 Kč
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-xs text-[#7D7D7D] mb-1 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Akontace
                      </div>
                      <div
                        className="text-xl font-black text-[#0B0B0B]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        30% (2 097 000 Kč)
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-xs text-[#7D7D7D] mb-1 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Doba financování
                      </div>
                      <div
                        className="text-xl font-black text-[#0B0B0B]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        48 měsíců
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-xs text-[#7D7D7D] mb-1 uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Měsíční splátka od
                      </div>
                      <div
                        className="text-2xl font-black text-[#245CFF]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        96 833 Kč
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info note */}
              <div className="flex items-start gap-3 mt-4 p-4 bg-white rounded-xl border border-[#E7E7E7]">
                <div className="w-5 h-5 rounded-full border-2 border-[#245CFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#245CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p
                  className="text-[#7D7D7D] text-sm"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Financování je možné již od 10% akontace. Skutečná výše splátky závisí na finálních podmínkách a bonitě klienta. Získejte svůj vysněný vůz ještě dnes.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Process Steps ── */}
        <section className="bg-white py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <AnimateOnScroll>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Jak to funguje
                </span>
              </div>
              <h2
                className="text-4xl font-black uppercase leading-tight mb-14 text-[#0B0B0B]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                JEDNODUCHÁ CESTA K VAŠEMU VOZU
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <AnimateOnScroll key={step.num} delay={i * 80}>
                  <div className="relative">
                    <div className="bg-[#F5F5F3] rounded-2xl p-8 h-full">
                      <div
                        className="text-[#245CFF] font-bold text-sm mb-4"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {step.num}
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center mb-5">
                        {step.icon}
                      </div>
                      <h3
                        className="font-bold text-[#0B0B0B] text-base mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-[#7D7D7D] text-sm leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {step.desc}
                      </p>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute -right-3 top-12 z-10">
                        <svg
                          className="w-4 h-4 text-[#245CFF]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
