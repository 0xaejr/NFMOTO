import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AboutSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Image */}
          <AnimateOnScroll direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=85"
                alt="NF Motors luxury car"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          {/* RIGHT — Content */}
          <AnimateOnScroll direction="right" delay={150}>
            <div>
              {/* Label */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
                <span
                  className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2
                className="font-black text-4xl lg:text-5xl uppercase leading-[1.05] text-[#0B0B0B] mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Crafting Excellence on Every Drive
              </h2>

              {/* Paragraphs */}
              <p
                className="text-[#7D7D7D] text-base leading-relaxed mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                NF Motors is your premier destination for the world&apos;s finest automobiles. We curate an exclusive selection of luxury and performance vehicles, ensuring every car meets our uncompromising standards of excellence.
              </p>
              <p
                className="text-[#7D7D7D] text-sm leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)" }}
              >
                From iconic sports cars to refined executive sedans, our expert team is dedicated to finding the perfect vehicle for your lifestyle — backed by transparent pricing and world-class after-sales care.
              </p>

              {/* CTA Button */}
              <Link
                href="/sluzby"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider bg-[#245CFF] text-white transition-all duration-300 hover:shadow-[0_8px_32px_rgba(36,92,255,0.45)] hover:scale-[1.02]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                LEARN MORE →
              </Link>

              {/* Stats */}
              <div className="mt-14 pt-8 border-t border-[#E7E7E7]">
                <div className="grid grid-cols-3 gap-0">
                  <div className="text-center pr-6 border-r border-[#E7E7E7]">
                    <div
                      className="font-black text-4xl text-[#0B0B0B]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      1200+
                    </div>
                    <div
                      className="text-[10px] text-[#7D7D7D] uppercase tracking-widest leading-tight whitespace-pre-line mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {"MODELS IN\nSTOCK"}
                    </div>
                  </div>

                  <div className="text-center px-6 border-r border-[#E7E7E7]">
                    <div
                      className="font-black text-4xl text-[#0B0B0B]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      550+
                    </div>
                    <div
                      className="text-[10px] text-[#7D7D7D] uppercase tracking-widest leading-tight whitespace-pre-line mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {"MODELS\nSOLD"}
                    </div>
                  </div>

                  <div className="text-center pl-6">
                    <div
                      className="font-black text-4xl text-[#0B0B0B]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      450+
                    </div>
                    <div
                      className="text-[10px] text-[#7D7D7D] uppercase tracking-widest leading-tight whitespace-pre-line mt-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {"HAPPY\nCLIENTS"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
