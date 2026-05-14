import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "PROVĚŘENÉ VOZY",
    description: "Pečlivě vybíráme a prověřujeme každý vůz, abyste měli jistotu kvality, původu a bezpečného nákupu.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "FINANCOVÁNÍ A POJIŠTĚNÍ",
    description: "Nabízíme výhodné financování na míru a komplexní pojištění, které vám zajistí klidnou jízdu bez starostí.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "DOVOZ A REGISTRACE",
    description: "Kompletní dovoz vozidla ze zahraničí včetně všech formalit a registrace v ČR. Vyřídíme vše za vás.",
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <AnimateOnScroll>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
            <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] uppercase leading-tight mb-16" style={{ fontFamily: "var(--font-display)" }}>
            COMPLETE SERVICES<br />FOR A SEAMLESS EXPERIENCE
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div className="text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#0B0B0B]">
                    {s.icon}
                  </div>
                </div>
                <h3 className="font-bold text-[#0B0B0B] text-sm tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-body)" }}>
                  {s.title}
                </h3>
                <p className="text-[#7D7D7D] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {s.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
