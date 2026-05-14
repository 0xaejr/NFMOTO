"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    quote: "Cruze made buying my McLaren effortless with Easy Financing. The Prime Warranty ensures I drive with total confidence on every thrilling journey.",
    name: "Alex Reed",
    location: "New York",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    carImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
  },
  {
    quote: "Smart Trade-in at Motors was fair. Loving my new Lamborghini!",
    name: "Mark Lane",
    location: "Florida",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    carImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
  },
  {
    quote: "The NF Motors team simplified financing for my Ferrari with ease!",
    name: "Luke Nash",
    location: "Illinois",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    carImage: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=400&q=80",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 bg-[#F5F5F3]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header */}
        <AnimateOnScroll>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
            <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Testimonials
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] uppercase leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              DŮVĚRA NAŠICH KLIENTŮ
            </h2>
            <button className="flex items-center gap-2 text-sm font-semibold text-[#0B0B0B] hover:text-[#245CFF] transition-colors uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
              VIEW ALL REVIEWS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </AnimateOnScroll>

        {/* Cards + Controls */}
        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center text-[#0B0B0B] hover:border-[#0B0B0B] transition-all shadow-sm hidden md:flex"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white rounded-[16px] overflow-hidden border border-[#E7E7E7] transition-all duration-500 ${i === current ? "shadow-[0_8px_32px_rgba(0,0,0,0.08)]" : ""}`}
              >
                {/* Car image */}
                <div className="relative h-40 bg-[#0B0B0B] overflow-hidden">
                  <Image src={t.carImage} alt="Car" fill className="object-cover opacity-70" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                {/* Content */}
                <div className="p-5">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-[#245CFF] fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#0B0B0B] text-sm leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-[#F5F5F3]">
                      <Image src={t.avatar} alt={t.name} width={36} height={36} className="object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0B0B0B]" style={{ fontFamily: "var(--font-body)" }}>{t.name}</div>
                      <div className="text-xs text-[#7D7D7D]" style={{ fontFamily: "var(--font-body)" }}>{t.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-[#E7E7E7] flex items-center justify-center text-[#0B0B0B] hover:border-[#0B0B0B] transition-all shadow-sm hidden md:flex"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#245CFF]" : "w-1.5 bg-[#E7E7E7]"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
