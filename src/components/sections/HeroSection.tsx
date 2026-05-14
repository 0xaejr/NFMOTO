"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=90",
    title: "LUXURY\nREDEFINED",
    subtitle: "Experience the perfect blend of power, elegance, and cutting-edge technology.",
  },
  {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=90",
    title: "BORN TO\nPERFORM",
    subtitle: "Every vehicle in our collection is a masterpiece of engineering and design.",
  },
  {
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1920&q=90",
    title: "DRIVE\nBEYOND",
    subtitle: "Discover the world's most exclusive automobiles at NF Motors.",
  },
];

const thumbImages = [
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&q=80",
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&q=80",
  "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=200&q=80",
  "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=200&q=80",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5500);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] bg-[#050505] overflow-hidden">
      {/* Background slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1200"
          style={{ opacity: i === current ? 1 : 0, transitionDuration: "1200ms" }}
        >
          <Image
            src={s.image}
            alt="Luxury car"
            fill
            priority={i === 0}
            className="object-cover"
            style={{ opacity: 0.45 }}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1440px] mx-auto px-6 md:px-10 pt-24">
        <div className="max-w-2xl">
          {/* Label */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(12px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "80ms",
            }}
          >
            <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
            <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Drive Beyond Limits
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-6xl md:text-7xl lg:text-[90px] font-black text-white leading-[0.92] tracking-tight mb-6 whitespace-pre-line"
            style={{
              fontFamily: "var(--font-display)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "180ms",
            }}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/55 text-base leading-relaxed max-w-sm mb-10"
            style={{
              fontFamily: "var(--font-body)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "320ms",
            }}
          >
            {slide.subtitle}
          </p>

          {/* CTA */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "none" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transitionDelay: "460ms",
            }}
          >
            <Link
              href="/nabidka"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#245CFF] text-white text-sm font-bold rounded-full tracking-widest uppercase transition-all duration-400 hover:shadow-[0_8px_32px_rgba(36,92,255,0.55)] hover:scale-[1.04] active:scale-[0.97]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              EXPLORE SHOWROOM
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Bottom bar: slider controls (left) + stats (right) ── */}
        <div
          className="absolute bottom-10 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.7s ease",
            transitionDelay: "600ms",
          }}
        >
          {/* Slide counter + arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-200"
              aria-label="Předchozí"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-3">
              <span className="text-white/40 text-xs tabular-nums" style={{ fontFamily: "var(--font-body)" }}>
                0{current + 1}
              </span>
              <div className="relative w-16 h-px bg-white/15">
                <div
                  className="absolute inset-y-0 left-0 bg-[#245CFF] transition-all duration-700"
                  style={{ width: `${((current + 1) / slides.length) * 100}%` }}
                />
              </div>
              <span className="text-white/40 text-xs tabular-nums" style={{ fontFamily: "var(--font-body)" }}>
                0{slides.length}
              </span>
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-200"
              aria-label="Další"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="hidden md:flex gap-8">
            {[
              { value: "10+", label: "YEARS OF\nEXCELLENCE" },
              { value: "250+", label: "LUXURY\nVEHICLES" },
            ].map(({ value, label }) => (
              <div key={label} className="text-right">
                <div className="text-3xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
                <div className="text-white/30 text-[10px] whitespace-pre-line leading-tight mt-1 tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnails — right side */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2.5">
          {thumbImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i % slides.length)}
              className={`relative w-[72px] h-[52px] rounded-lg overflow-hidden border transition-all duration-300 ${
                i === current ? "border-[#245CFF] opacity-100" : "border-white/10 opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="72px" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
