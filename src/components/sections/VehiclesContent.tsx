"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { cars, brands, modelsByBrand, formatPrice, formatMileage } from "@/lib/cars";

const CARS_PER_PAGE = 12;

export default function VehiclesContent() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [maxPrice, setMaxPrice] = useState(15000000);
  const [maxMileage, setMaxMileage] = useState(100000);
  const [pendingBrand, setPendingBrand] = useState("");
  const [pendingModel, setPendingModel] = useState("");
  const [pendingPrice, setPendingPrice] = useState(15000000);
  const [pendingMileage, setPendingMileage] = useState(100000);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [favorites, setFavorites] = useState<number[]>([]);

  const availableModels = pendingBrand ? modelsByBrand[pendingBrand] || [] : [];

  const handleSave = () => {
    setSelectedBrand(pendingBrand);
    setSelectedModel(pendingModel);
    setMaxPrice(pendingPrice);
    setMaxMileage(pendingMileage);
    setPage(1);
  };

  const handleReset = () => {
    setPendingBrand(""); setPendingModel(""); setPendingPrice(15000000); setPendingMileage(100000);
    setSelectedBrand(""); setSelectedModel(""); setMaxPrice(15000000); setMaxMileage(100000);
    setPage(1);
  };

  const filtered = useMemo(() => {
    let result = [...cars];
    if (selectedBrand) result = result.filter((c) => c.brand === selectedBrand);
    if (selectedModel) result = result.filter((c) => c.model === selectedModel);
    result = result.filter((c) => c.price <= maxPrice && c.mileage <= maxMileage);
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "mileage") result.sort((a, b) => a.mileage - b.mileage);
    else result.sort((a, b) => b.year - a.year);
    return result;
  }, [selectedBrand, selectedModel, maxPrice, maxMileage, sortBy]);

  const totalPages = Math.ceil(filtered.length / CARS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * CARS_PER_PAGE, page * CARS_PER_PAGE);

  const toggleFav = (id: number) => setFavorites((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <section className="pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="flex gap-6">
          {/* Sidebar filters */}
          <aside className="hidden md:block w-[200px] flex-shrink-0">
            <div className="bg-white rounded-[20px] border border-[#E7E7E7] p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-4 h-4 text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span className="font-black text-sm tracking-widest uppercase text-[#0B0B0B]" style={{ fontFamily: "var(--font-body)" }}>Filtry</span>
              </div>

              {/* Brand */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#0B0B0B] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Značka</label>
                <div className="relative">
                  <select
                    value={pendingBrand}
                    onChange={(e) => { setPendingBrand(e.target.value); setPendingModel(""); }}
                    className="w-full bg-[#F5F5F3] border border-[#E7E7E7] rounded-[12px] px-3 py-2.5 text-sm text-[#0B0B0B] pr-8 focus:outline-none focus:border-[#245CFF]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <option value="">Vyberte značku</option>
                    {brands.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                  <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7D7D7D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Model */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#0B0B0B] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Model vozu</label>
                <div className="relative">
                  <select
                    value={pendingModel}
                    onChange={(e) => setPendingModel(e.target.value)}
                    disabled={!pendingBrand}
                    className="w-full bg-[#F5F5F3] border border-[#E7E7E7] rounded-[12px] px-3 py-2.5 text-sm text-[#0B0B0B] pr-8 focus:outline-none focus:border-[#245CFF] disabled:opacity-50"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <option value="">Vyberte model</option>
                    {availableModels.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7D7D7D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Price */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-[#0B0B0B] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Cena</label>
                <div className="text-xs text-[#7D7D7D] mb-2" style={{ fontFamily: "var(--font-body)" }}>0 Kč – {(maxPrice / 1000000).toFixed(1).replace(".", ",")} mil. Kč</div>
                <input
                  type="range" min={500000} max={15000000} step={100000} value={pendingPrice}
                  onChange={(e) => setPendingPrice(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #245CFF 0%, #245CFF ${((pendingPrice - 500000) / (15000000 - 500000)) * 100}%, #E7E7E7 ${((pendingPrice - 500000) / (15000000 - 500000)) * 100}%, #E7E7E7 100%)`,
                    borderRadius: "999px", height: "4px", appearance: "none",
                  }}
                />
                <div className="flex justify-between text-[10px] text-[#7D7D7D] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                  <span>0 Kč</span>
                  <span>{(pendingPrice / 1000000).toFixed(0)} mil. Kč</span>
                </div>
              </div>

              {/* Mileage */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#0B0B0B] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>Nájezd</label>
                <div className="text-xs text-[#7D7D7D] mb-2" style={{ fontFamily: "var(--font-body)" }}>0 km – {pendingMileage.toLocaleString("cs-CZ")} km</div>
                <input
                  type="range" min={0} max={100000} step={1000} value={pendingMileage}
                  onChange={(e) => setPendingMileage(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #245CFF 0%, #245CFF ${(pendingMileage / 100000) * 100}%, #E7E7E7 ${(pendingMileage / 100000) * 100}%, #E7E7E7 100%)`,
                    borderRadius: "999px", height: "4px", appearance: "none",
                  }}
                />
                <div className="flex justify-between text-[10px] text-[#7D7D7D] mt-1" style={{ fontFamily: "var(--font-body)" }}>
                  <span>0 km</span>
                  <span>100 000 km</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mb-3">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 border border-[#E7E7E7] rounded-full text-xs font-semibold text-[#0B0B0B] uppercase tracking-wider hover:border-[#0B0B0B] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Resetovat
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-2.5 bg-[#0B0B0B] text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#245CFF] transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Uložit
                </button>
              </div>

              <button
                onClick={handleSave}
                className="w-full py-3 bg-[#0B0B0B] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#245CFF] transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                ZOBRAZIT {filtered.length} VOZŮ
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </aside>

          {/* Main grid */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="text-sm text-[#7D7D7D]" style={{ fontFamily: "var(--font-body)" }}>
                Zobrazeno <span className="font-semibold text-[#0B0B0B]">{filtered.length}</span> vozů
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value); setPage(1); }}
                    className="bg-white border border-[#E7E7E7] rounded-full px-4 py-2 text-sm text-[#0B0B0B] pr-8 focus:outline-none focus:border-[#245CFF]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <option value="newest">Seřadit: Nejnovější</option>
                    <option value="price-asc">Cena: Nejnižší</option>
                    <option value="price-desc">Cena: Nejvyšší</option>
                    <option value="mileage">Nájezd: Nejnižší</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#7D7D7D] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {/* View toggle */}
                <div className="flex gap-1 bg-white border border-[#E7E7E7] rounded-full p-1">
                  <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded-full transition-colors ${viewMode === "grid" ? "bg-[#0B0B0B] text-white" : "text-[#7D7D7D]"}`} aria-label="Grid">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z"/></svg>
                  </button>
                  <button onClick={() => setViewMode("list")} className={`p-1.5 rounded-full transition-colors ${viewMode === "list" ? "bg-[#0B0B0B] text-white" : "text-[#7D7D7D]"}`} aria-label="List">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Car grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginated.map((car) => (
                  <div key={car.id} className="group bg-white rounded-[16px] overflow-hidden border border-[#E7E7E7] transition-all duration-400 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                    <div className="relative h-44 bg-[#F5F5F3] overflow-hidden">
                      <Image src={car.image} alt={`${car.brand} ${car.model}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold rounded-md text-[#0B0B0B]" style={{ fontFamily: "var(--font-body)" }}>{car.year}</span>
                        {car.mileage > 0 && <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-medium rounded-md text-[#7D7D7D]" style={{ fontFamily: "var(--font-body)" }}>{car.mileage.toLocaleString("cs-CZ")} km</span>}
                      </div>
                      <button onClick={() => toggleFav(car.id)} className="absolute top-3 right-3 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Oblíbené">
                        <svg className={`w-3.5 h-3.5 transition-colors ${favorites.includes(car.id) ? "fill-red-500 text-red-500" : "fill-none text-[#0B0B0B]"}`} stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-[#0B0B0B] text-sm mb-1" style={{ fontFamily: "var(--font-body)" }}>{car.brand} {car.model}</h3>
                      <div className="flex items-center gap-3 mb-3 text-[#7D7D7D] text-xs" style={{ fontFamily: "var(--font-body)" }}>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m9-11h3l3 3v4h-1m-5 1V5" /></svg>
                          {car.bodyType}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {car.transmission}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>{formatPrice(car.price)}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {paginated.map((car) => (
                  <div key={car.id} className="group bg-white rounded-[16px] overflow-hidden border border-[#E7E7E7] flex transition-all duration-400 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                    <div className="relative w-48 h-32 flex-shrink-0 bg-[#F5F5F3]">
                      <Image src={car.image} alt={`${car.brand} ${car.model}`} fill className="object-cover" sizes="200px" />
                    </div>
                    <div className="flex-1 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-[#0B0B0B] text-base mb-1" style={{ fontFamily: "var(--font-body)" }}>{car.brand} {car.model}</h3>
                        <div className="flex items-center gap-3 text-[#7D7D7D] text-xs mb-2" style={{ fontFamily: "var(--font-body)" }}>
                          <span>{car.year}</span>
                          <span>{formatMileage(car.mileage)}</span>
                          <span>{car.bodyType}</span>
                          <span>{car.transmission}</span>
                          <span>{car.fuel}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-xl font-bold text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>{formatPrice(car.price)}</div>
                        <button onClick={() => toggleFav(car.id)} className="w-8 h-8 bg-[#F5F5F3] rounded-full flex items-center justify-center" aria-label="Oblíbené">
                          <svg className={`w-4 h-4 ${favorites.includes(car.id) ? "fill-red-500 text-red-500" : "fill-none text-[#0B0B0B]"}`} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-9 h-9 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#0B0B0B] hover:border-[#0B0B0B] transition-colors disabled:opacity-30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
                {[...Array(Math.min(totalPages, 5))].map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${page === p ? "bg-[#0B0B0B] text-white" : "border border-[#E7E7E7] text-[#0B0B0B] hover:border-[#0B0B0B]"}`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {p}
                    </button>
                  );
                })}
                {totalPages > 5 && <span className="text-[#7D7D7D] px-1">...</span>}
                {totalPages > 5 && (
                  <button onClick={() => setPage(totalPages)} className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors border border-[#E7E7E7] text-[#0B0B0B] hover:border-[#0B0B0B]`} style={{ fontFamily: "var(--font-body)" }}>
                    {totalPages}
                  </button>
                )}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-9 h-9 rounded-full border border-[#E7E7E7] flex items-center justify-center text-[#0B0B0B] hover:border-[#0B0B0B] transition-colors disabled:opacity-30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
