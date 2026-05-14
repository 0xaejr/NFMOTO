import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const stats = [
  { value: "1200+", label: "AUT SKLADEM" },
  { value: "550+", label: "PRODANÝCH VOZŮ" },
  { value: "98%", label: "ŠŤASTNÝCH KILOMETRŮ" },
  { value: "450+", label: "SPOKOJENÝCH KLIENTŮ" },
];

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
    desc: "Prohlédněte si naši pečlivě vybranou nabídku vozů a vyberte ten pravý pro vás.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Nezávazná konzultace",
    desc: "Probereme vaše představy, požadavky a možnosti financování. Vše bez závazků.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Kompletní vyřízení",
    desc: "Zařídíme veškeré náležitosti – financování, pojištění, dovoz a registraci vozu.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-6 h-6 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    title: "Přebíráte klíče",
    desc: "Váš nový vůz je připraven. Přebíráte klíče a můžete vyrazit vstříc novým zážitkům.",
  },
];

const showrooms = [
  {
    city: "Miami, Florida",
    address: "1450 Ocean Luxe Boulevard,\nSuite 300, Miami, FL 33139",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  },
  {
    city: "Tampa, Florida",
    address: "7800 Elite Car Avenue,\nBuilding 12, Tampa, FL 33602",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
];

export default function SluzbyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white min-h-screen">
        {/* ── Page Hero ── */}
        <section className="bg-white py-20 border-b border-[#E7E7E7]">
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
              <span className="text-[#0B0B0B] font-medium">Služby</span>
            </div>

            {/* Centered label + heading */}
            <AnimateOnScroll>
              <div className="text-center mt-8">
                <div className="flex items-center justify-center gap-2.5 mb-5">
                  <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                  <span
                    className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Naše Služby
                  </span>
                </div>
                <h1
                  className="text-5xl md:text-6xl font-black uppercase text-center max-w-4xl mx-auto leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  PROFESIONÁLNÍ PŘÍSTUP KE KAŽDÉMU VOZU
                </h1>
                <p
                  className="text-center max-w-2xl mx-auto text-[#7D7D7D] text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Každý vůz v naší nabídce prochází důkladným výběrem a kontrolou. Naším cílem je poskytnout vám maximální kvalitu, transparentnost a jistotu při každém nákupu.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-[#F5F5F3] py-16 border-y border-[#E7E7E7]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map(({ value, label }, i) => (
                <AnimateOnScroll key={label} delay={i * 80}>
                  <div>
                    <div
                      className="text-5xl font-black text-[#0B0B0B]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {value}
                    </div>
                    <div
                      className="text-xs text-[#7D7D7D] uppercase tracking-widest mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {label}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Full-width showroom photo ── */}
        <section className="relative w-full h-[500px] md:h-[620px]">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=85"
            alt="NF Motors Showroom"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#050505]/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-5xl font-black text-white tracking-[0.15em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              NF MOTORS
            </span>
          </div>
        </section>

        {/* ── Process Steps ── */}
        <section className="bg-white py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <AnimateOnScroll>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Náš Proces
                </span>
              </div>
              <h2
                className="text-4xl font-black uppercase leading-tight mb-14 text-[#0B0B0B]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CESTA K VAŠEMU VOZU
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <AnimateOnScroll key={step.num} delay={i * 100}>
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

        {/* ── Showrooms Section ── */}
        <section className="bg-[#F5F5F3] py-28">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* LEFT — text */}
              <AnimateOnScroll direction="left">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                    <span
                      className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Naše Showroomy
                    </span>
                  </div>
                  <h2
                    className="text-4xl font-black uppercase leading-tight mb-5 text-[#0B0B0B]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    NAVŠTIVTE NÁŠ SHOWROOM
                  </h2>
                  <p
                    className="text-[#7D7D7D] text-sm leading-relaxed mb-10"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Přijďte se podívat na naše vozy osobně. V našich showroomech na vás čeká prvotřídní servis a luxusní prostředí. Náš tým odborníků je vám plně k dispozici.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider bg-[#245CFF] text-white transition-all duration-300 hover:shadow-[0_8px_32px_rgba(36,92,255,0.45)] hover:scale-[1.02]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    ZOBRAZIT SHOWROOMY →
                  </Link>
                </div>
              </AnimateOnScroll>

              {/* RIGHT — showroom photo cards */}
              <AnimateOnScroll direction="right" delay={150}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {showrooms.map((s) => (
                    <div
                      key={s.city}
                      className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer"
                    >
                      <Image
                        src={s.image}
                        alt={s.city}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div
                          className="text-white font-bold text-base mb-1"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {s.city}
                        </div>
                        <div
                          className="text-white/60 text-xs whitespace-pre-line"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {s.address}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
