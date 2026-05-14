import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const services = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "PROVĚŘENÉ VOZY",
    description:
      "Pečlivě vybíráme a prověřujeme každý vůz, abyste měli jistotu kvality, původu a bezpečného nákupu bez nepříjemných překvapení.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "FINANCOVÁNÍ A POJIŠTĚNÍ",
    description:
      "Nabízíme výhodné financování na míru a komplexní pojištění, které vám zajistí klidnou jízdu a ochranu vaší investice.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "DOVOZ A REGISTRACE",
    description:
      "Kompletní dovoz vozidla ze zahraničí včetně všech formalit a registrace v ČR. Vyřídíme vše za vás – rychle a bez starostí.",
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Centered header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
              <span
                className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our Services
              </span>
            </div>
            <h2
              className="font-black text-4xl uppercase leading-tight text-[#0B0B0B] max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-display)" }}
            >
              COMPLETE SERVICES FOR A SEAMLESS EXPERIENCE
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 100}>
              <div className="text-center">
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full border-2 border-[#E7E7E7] flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                {/* Title */}
                <h3
                  className="font-bold text-sm tracking-widest uppercase text-[#0B0B0B] mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.title}
                </h3>
                {/* Description */}
                <p
                  className="text-[#7D7D7D] text-sm leading-relaxed max-w-xs mx-auto"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
