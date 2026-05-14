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
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] bg-[#050505] overflow-hidden">
      {/* Background */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt="Luxury car"
            fill
            priority={i === 0}
            className="object-cover opacity-50"
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1440px] mx-auto px-6 md:px-10 pt-20">
        <div className="max-w-2xl">
          {/* Label */}
          <div
            className="flex items-center gap-2 mb-6 transition-all duration-700"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transitionDelay: "100ms" }}
          >
            <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
            <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Drive Beyond Limits
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6 whitespace-pre-line transition-all duration-700"
            style={{ fontFamily: "var(--font-display)", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)", transitionDelay: "200ms" }}
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/60 text-base leading-relaxed max-w-sm mb-10 transition-all duration-700"
            style={{ fontFamily: "var(--font-body)", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)", transitionDelay: "350ms" }}
          >
            {slide.subtitle}
          </p>

          {/* CTA */}
          <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)", transition: "all 0.7s ease", transitionDelay: "500ms" }}>
            <Link
              href="/nabidka"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#245CFF] text-white text-sm font-bold rounded-full tracking-widest uppercase transition-all duration-400 hover:shadow-[0_8px_32px_rgba(36,92,255,0.5)] hover:scale-[1.03]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              EXPLORE SHOWROOM
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-10 left-6 md:left-10 flex items-center gap-6" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease", transitionDelay: "700ms" }}>
          <button
            onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>0{current + 1}</span>
            <div className="w-16 h-px bg-white/20 relative">
              <div
                className="absolute top-0 left-0 h-full bg-[#245CFF] transition-all duration-300"
                style={{ width: `${((current + 1) / slides.length) * 100}%` }}
              />
            </div>
            <span className="text-white/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>0{slides.length}</span>
          </div>
          <button
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Stats bottom right */}
        <div className="absolute bottom-10 right-6 md:right-10 flex gap-8" style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.7s ease", transitionDelay: "700ms" }}>
          {[
            { value: "10+", label: "Years of\nExcellence" },
            { value: "250+", label: "Luxury\nVehicles" },
          ].map(({ value, label }) => (
            <div key={label} className="text-right">
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
              <div className="text-white/30 text-xs whitespace-pre-line leading-tight mt-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Thumbnails — right side */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
          {thumbImages.map((src, i) => (
            <div key={i} className="w-16 h-12 rounded-lg overflow-hidden border border-white/10 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <Image src={src} alt="" fill className="object-cover" sizes="64px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
