import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Dark Hero with Form ── */}
        <section className="relative min-h-screen bg-[#050505] flex items-center">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=85"
              alt="NF Motors Showroom"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/40" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* LEFT — contact info */}
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                  <span
                    className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Kontakt
                  </span>
                </div>
                <h1
                  className="text-5xl md:text-6xl font-black uppercase text-white leading-tight mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  RÁDI VÁM POMŮŽEME
                </h1>
                <p
                  className="text-white/60 text-sm leading-relaxed max-w-sm mb-12"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Máte dotaz, zájem o vůz nebo potřebujete poradit s financováním? Neváhejte nás kontaktovat. Náš tým je tu pro vás.
                </p>

                {/* Contact items */}
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      label: "+1 (123) 456-7890",
                      sub: "Po–Pá: 9:00 – 18:00",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      label: "info@nfmotors.com",
                      sub: "Odpovíme do 24 hodin",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: "Miami, Florida",
                      sub: "1450 Ocean Luxe Boulevard,\nSuite 300, Miami, FL 33139",
                    },
                  ].map(({ icon, label, sub }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <div
                          className="text-white font-semibold text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {label}
                        </div>
                        <div
                          className="text-white/40 text-xs leading-relaxed whitespace-pre-line"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {sub}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — Form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ── Location Section ── */}
        <section className="bg-white py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
            <AnimateOnScroll>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Najdete nás
                </span>
              </div>
              <h2
                className="font-black text-4xl uppercase leading-tight mb-12 text-[#0B0B0B]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                KDE NÁS NAJDETE
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Showroom card */}
              <AnimateOnScroll delay={0}>
                <div className="bg-[#F5F5F3] rounded-2xl p-8 h-full border border-[#E7E7E7]">
                  <div className="w-10 h-10 rounded-full border border-[#E7E7E7] bg-white flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3
                    className="font-bold text-[#0B0B0B] text-base mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Showroom
                  </h3>
                  <p
                    className="text-[#7D7D7D] text-sm leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    1450 Ocean Luxe Boulevard,<br />Suite 300, Miami, FL 33139
                  </p>
                  <button
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0B0B0B] text-[#0B0B0B] text-xs font-bold rounded-full uppercase tracking-wider transition-all hover:bg-[#0B0B0B] hover:text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    ZOBRAZIT NA MAPĚ
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </AnimateOnScroll>

              {/* Opening hours */}
              <AnimateOnScroll delay={80}>
                <div className="bg-[#F5F5F3] rounded-2xl p-8 h-full border border-[#E7E7E7]">
                  <div className="w-10 h-10 rounded-full border border-[#E7E7E7] bg-white flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3
                    className="font-bold text-[#0B0B0B] text-base mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Otevírací doba
                  </h3>
                  <div className="space-y-2">
                    {[
                      { day: "Pondělí – Pátek", time: "9:00 – 18:00" },
                      { day: "Sobota", time: "10:00 – 16:00" },
                      { day: "Neděle", time: "Zavřeno" },
                    ].map(({ day, time }) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span
                          className="text-[#7D7D7D]"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {day}
                        </span>
                        <span
                          className="font-medium text-[#0B0B0B]"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Map */}
              <AnimateOnScroll delay={160}>
                <div className="rounded-2xl overflow-hidden h-64 border border-[#E7E7E7]">
                  <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-80.2500%2C25.7617%2C-80.1500%2C25.8000&layer=mapnik&marker=25.7825%2C-80.2000"
                    className="w-full h-full border-0"
                    loading="lazy"
                    title="NF Motors Miami showroom"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Showroom CTA ── */}
        <section className="relative h-72 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
            alt="NF Motors showroom interior"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#050505]/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h2
              className="text-4xl font-black text-white uppercase mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              NAVŠTIVTE NÁŠ SHOWROOM
            </h2>
            <p
              className="text-white/60 text-sm max-w-md mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Přijďte se podívat na naše vozy osobně. V našich showroomech na vás čeká prvotřídní servis.
            </p>
            <Link
              href="/sluzby"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#245CFF] text-white text-sm font-bold rounded-full uppercase tracking-wider transition-all hover:shadow-[0_8px_32px_rgba(36,92,255,0.4)] hover:scale-[1.03]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ZOBRAZIT SHOWROOMY →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
