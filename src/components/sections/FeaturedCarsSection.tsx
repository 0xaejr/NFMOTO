"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cars, categories, formatPrice } from "@/lib/cars";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FeaturedCarsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filtered = cars
    .filter((c) => c.category.includes(activeCategory))
    .slice(0, 4);

  const toggleFav = (id: number) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  };

  return (
    <section className="py-24 bg-[#F5F5F3]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header */}
        <AnimateOnScroll>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
            <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
              Our Collection
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] uppercase leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              EXCLUSIVE SELECTION<br />OF LUXURY VEHICLES
            </h2>
            <Link
              href="/nabidka"
              className="flex items-center gap-2 text-sm font-semibold text-[#0B0B0B] hover:text-[#245CFF] transition-colors whitespace-nowrap uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
            >
              VIEW ALL VEHICLES
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#0B0B0B] text-white"
                    : "bg-transparent text-[#0B0B0B] border border-[#E7E7E7] hover:border-[#0B0B0B]"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {cat === "ALL" ? "All Vehicles" : cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Cars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((car, i) => (
            <AnimateOnScroll key={car.id} delay={i * 80}>
              <div className="group bg-white rounded-[16px] overflow-hidden border border-[#E7E7E7] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-44 bg-[#F5F5F3] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Year badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-[#0B0B0B] text-[10px] font-bold rounded-md" style={{ fontFamily: "var(--font-body)" }}>
                    {car.year}
                  </div>
                  {/* Heart */}
                  <button
                    onClick={() => toggleFav(car.id)}
                    className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    aria-label="Oblíbené"
                  >
                    <svg className={`w-3.5 h-3.5 transition-colors ${favorites.includes(car.id) ? "fill-red-500 text-red-500" : "fill-none text-[#0B0B0B]"}`} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-[#0B0B0B] text-sm mb-0.5" style={{ fontFamily: "var(--font-body)" }}>
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-[#7D7D7D] text-xs mb-3" style={{ fontFamily: "var(--font-body)" }}>
                    {car.bodyType} • {car.transmission}
                  </p>
                  <div className="text-lg font-bold text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>
                    {formatPrice(car.price)}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
