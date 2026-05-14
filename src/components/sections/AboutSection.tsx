import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const stats = [
  { value: "1200+", label: "MODELS\nIN STOCK" },
  { value: "550+", label: "MODELS\nSOLD" },
  { value: "450+", label: "HAPPY\nCLIENTS" },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <AnimateOnScroll direction="left">
            <div className="relative rounded-[16px] overflow-hidden aspect-[4/3] bg-[#0B0B0B]">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=85"
                alt="NF Motors luxury car"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          {/* Right */}
          <AnimateOnScroll direction="right" delay={150}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
                <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                  About Us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-[#0B0B0B] leading-tight mb-5 uppercase" style={{ fontFamily: "var(--font-display)" }}>
                CRAFTING EXCELLENCE<br />ON EVERY DRIVE
              </h2>

              <p className="text-[#7D7D7D] text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
                At NF Motors, we believe that a car is more than just a vehicle – it's a statement of ambition and individuality. We curate the world's finest automobiles to deliver an unparalleled ownership experience.
              </p>

              <Link
                href="/sluzby"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#245CFF] text-white text-sm font-bold rounded-full tracking-wider uppercase transition-all duration-300 hover:shadow-[0_8px_32px_rgba(36,92,255,0.4)] hover:scale-[1.03] mb-12"
                style={{ fontFamily: "var(--font-body)" }}
              >
                LEARN MORE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-0 divide-x divide-[#E7E7E7] border-t border-[#E7E7E7] pt-8">
                {stats.map(({ value, label }) => (
                  <div key={label} className="px-6 first:pl-0 last:pr-0">
                    <div className="text-3xl font-bold text-[#0B0B0B] mb-1" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
                    <div className="text-[10px] text-[#7D7D7D] whitespace-pre-line leading-tight uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
