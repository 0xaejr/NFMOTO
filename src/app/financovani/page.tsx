import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FinancingCalculator from "@/components/sections/FinancingCalculator";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    num: "01",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m9-11h3l3 3v4h-1m-5 1V5" /></svg>,
    title: "Vyberete si vůz",
    desc: "Prohlédněte si naši nabídku a vyberte si ten pravý vůz pro vás.",
  },
  {
    num: "02",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    title: "Nezávazná konzultace",
    desc: "Probereme vaše možnosti financování a připravíme vám nabídku na míru.",
  },
  {
    num: "03",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Schválení financování",
    desc: "Vaši žádost vyřídíme rychle a vy získáte jasné podmínky bez skrytých poplatků.",
  },
  {
    num: "04",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>,
    title: "Přebíráte klíče",
    desc: "Po podpisu smlouvy je vůz váš. Přejeme mnoho šťastných kilometrů!",
  },
];

export default function FinancovaniPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 bg-[#F5F5F3]">
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4">
          <div className="flex items-center gap-2 text-xs text-[#7D7D7D]" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Domů</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/sluzby" className="hover:text-[#0B0B0B] transition-colors">Služby</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#0B0B0B] font-medium">Financování</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-12 bg-[#F5F5F3]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <AnimateOnScroll direction="left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
                  <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                    Financování
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B0B0B] uppercase leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
                  CHYTRÉ FINANCOVÁNÍ<br />PRO VAŠI JÍZDU
                </h1>
                <p className="text-[#7D7D7D] text-sm leading-relaxed mb-8 max-w-md" style={{ fontFamily: "var(--font-body)" }}>
                  Nabízíme flexibilní možnosti financování, které se přizpůsobí vašim potřebám. Rychle, transparentně a bez zbytečných komplikací.
                </p>
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#245CFF] text-white text-sm font-bold rounded-full uppercase tracking-wider transition-all duration-300 hover:shadow-[0_8px_32px_rgba(36,92,255,0.4)] hover:scale-[1.03]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  SPOČÍTAT SPLÁTKU
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </AnimateOnScroll>

              {/* Right — car image */}
              <AnimateOnScroll direction="right" delay={150}>
                <div className="relative h-72 md:h-96 rounded-[16px] overflow-hidden bg-[#0B0B0B]">
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

        {/* Calculator */}
        <section id="calculator" className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <FinancingCalculator />
          </div>
        </section>

        {/* Example financing */}
        <section className="py-16 bg-[#F5F5F3]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <AnimateOnScroll>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
                <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                  Příklad Financování
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-[#0B0B0B] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Příklad financování vozu Lamborghini Huracán EVO
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <div className="bg-white rounded-[20px] border border-[#E7E7E7] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-full md:w-64 h-44 flex-shrink-0 rounded-[12px] overflow-hidden bg-[#F5F5F3]">
                  <Image
                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80"
                    alt="Lamborghini Huracán EVO"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-xs text-[#7D7D7D] mb-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Cena vozu</div>
                    <div className="text-xl font-bold text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>6 990 000 Kč</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#7D7D7D] mb-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Akontace</div>
                    <div className="text-xl font-bold text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>30% (2 097 000 Kč)</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#7D7D7D] mb-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Doba financování</div>
                    <div className="text-xl font-bold text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>48 měsíců</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#7D7D7D] mb-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Měsíční splátka od</div>
                    <div className="text-2xl font-bold text-[#245CFF]" style={{ fontFamily: "var(--font-display)" }}>96 833 Kč</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-4 p-4 bg-white rounded-[12px] border border-[#E7E7E7]">
                <div className="w-5 h-5 rounded-full border-2 border-[#245CFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#245CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#7D7D7D] text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  Financování je možné již od 10% akontace. Získejte svůj vysněný vůz ještě dnes.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <AnimateOnScroll>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
                <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                  Jak to funguje
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] uppercase leading-tight mb-12" style={{ fontFamily: "var(--font-display)" }}>
                Jednoduchá cesta k vašemu vozu
              </h2>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <AnimateOnScroll key={step.num} delay={i * 80}>
                  <div className="relative">
                    <div className="text-[#245CFF] font-bold text-sm mb-3" style={{ fontFamily: "var(--font-body)" }}>{step.num}</div>
                    <div className="w-12 h-12 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#0B0B0B] mb-4 bg-[#F5F5F3]">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-[#0B0B0B] text-base mb-2" style={{ fontFamily: "var(--font-body)" }}>{step.title}</h3>
                    <p className="text-[#7D7D7D] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{step.desc}</p>
                    {i < steps.length - 1 && (
                      <div className="hidden md:flex absolute top-[52px] -right-3 z-10 w-6 h-6 items-center justify-center">
                        <svg className="w-4 h-4 text-[#245CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
