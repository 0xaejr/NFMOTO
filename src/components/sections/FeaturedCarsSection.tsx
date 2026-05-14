"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cars, categories, formatPrice } from "@/lib/cars";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const CATEGORY_LABELS: Record<string, string> = {
  ALL: "ALL VEHICLES",
  SPORT: "SPORT",
  SUV: "SUV",
  CABRIO: "CABRIO",
  PERFORMANCE: "PERFORMANCE",
  ELECTRIC: "ELECTRIC",
};

export default function FeaturedCarsSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filtered = cars.filter((c) => c.category.includes(activeCategory)).slice(0, 4);

  const toggleFav = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-[#F5F5F3] py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header row */}
        <AnimateOnScroll>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-2 h-2 bg-[#245CFF] rounded-sm flex-shrink-0" />
            <span
              className="text-xs tracking-[0.2em] uppercase text-[#245CFF] font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Collection
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2
              className="font-black text-4xl uppercase leading-tight text-[#0B0B0B]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              EXCLUSIVE SELECTION OF<br />LUXURY VEHICLES
            </h2>
            <Link
              href="/nabidka"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#0B0B0B] hover:text-[#245CFF] transition-colors whitespace-nowrap flex-shrink-0"
              style={{ fontFamily: "var(--font-body)" }}
            >
              VIEW ALL VEHICLES →
            </Link>
          </div>

          {/* Category filter tabs */}
          <div className="flex gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#0B0B0B] text-white"
                    : "border border-[#E7E7E7] bg-white text-[#0B0B0B] hover:border-[#0B0B0B]"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {CATEGORY_LABELS[cat] ?? cat}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Cars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((car, i) => (
            <AnimateOnScroll key={car.id} delay={i * 80}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-[#E7E7E7] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1.5">
                {/* Image area */}
                <div className="relative h-48 bg-[#F5F5F3] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Year badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur text-[10px] font-bold rounded-lg text-[#0B0B0B]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {car.year}
                  </div>
                  {/* Heart button */}
                  <button
                    onClick={() => toggleFav(car.id)}
                    className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                    aria-label="Oblíbené"
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-colors ${
                        favorites.includes(car.id)
                          ? "fill-red-500 text-red-500"
                          : "fill-none text-[#0B0B0B]"
                      }`}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div
                    className="text-xs font-bold text-[#245CFF] uppercase tracking-widest mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {car.brand}
                  </div>
                  <div
                    className="font-bold text-[#0B0B0B] text-sm mb-0.5"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {car.model}
                  </div>
                  <div
                    className="text-xs text-[#7D7D7D] mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {car.bodyType} · {car.transmission}
                  </div>
                  <div
                    className="font-black text-xl text-[#0B0B0B]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
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
