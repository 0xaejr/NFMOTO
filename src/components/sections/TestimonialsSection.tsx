"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Cruze made buying my McLaren effortless with Easy Financing. The Prime Warranty ensures I drive with total confidence on every thrilling journey.",
    name: "Alex Reed",
    location: "New York",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    carImage: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80",
  },
  {
    quote:
      "Smart Trade-in at Motors was fair and straightforward. The team handled everything professionally. Loving my new Lamborghini every single day!",
    name: "Mark Lane",
    location: "Florida",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    carImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
  },
  {
    quote:
      "The NF Motors team simplified the entire financing process for my Ferrari. Professional, transparent and incredibly efficient from start to finish.",
    name: "Luke Nash",
    location: "Illinois",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    carImage: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=400&q=80",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#F5F5F3] py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <AnimateOnScroll>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
            <span
              className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Testimonials
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h2
              className="font-black text-4xl uppercase leading-tight text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              DŮVĚRA NAŠICH KLIENTŮ
            </h2>
            <button
              className="flex items-center gap-2 text-sm font-bold text-[#0B0B0B] hover:text-[#245CFF] transition-colors uppercase tracking-wider whitespace-nowrap flex-shrink-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              VIEW ALL REVIEWS →
            </button>
          </div>
        </AnimateOnScroll>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} delay={i * 80}>
              <div
                className={`bg-white rounded-2xl overflow-hidden border border-[#E7E7E7] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] ${
                  i === current ? "shadow-[0_8px_32px_rgba(0,0,0,0.07)]" : ""
                }`}
                onClick={() => setCurrent(i)}
              >
                {/* Car image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={t.carImage}
                    alt="Car"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-[#245CFF] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote */}
                  <p
                    className="text-sm text-[#0B0B0B] leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Person */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden relative flex-shrink-0 bg-[#F5F5F3]">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                    <div>
                      <div
                        className="text-sm font-bold text-[#0B0B0B]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-xs text-[#7D7D7D]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#245CFF]" : "w-1.5 bg-[#E7E7E7]"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
