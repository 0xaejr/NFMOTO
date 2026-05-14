"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

function formatCzk(value: number) {
  return new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 0 }).format(value) + " Kč";
}

function formatPct(value: number) {
  return value.toFixed(2).replace(".", ",") + " %";
}

function calcMonthlyPayment(price: number, downPct: number, months: number, annualRate: number): number {
  const loanAmount = price * (1 - downPct / 100);
  if (annualRate === 0) return loanAmount / months;
  const monthlyRate = annualRate / 100 / 12;
  return (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
}

function sliderFillPct(value: number, min: number, max: number) {
  return `${Math.round(((value - min) / (max - min)) * 100)}%`;
}

interface SliderRowProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}

function SliderRow({ label, value, min, max, step, onChange, display }: SliderRowProps) {
  const fill = sliderFillPct(value, min, max);
  return (
    <div className="mb-7">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-[#7D7D7D]" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
        <span className="text-sm font-semibold text-[#0B0B0B]" style={{ fontFamily: "var(--font-body)" }}>{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--slider-fill": fill } as React.CSSProperties}
        className="w-full"
      />
      <div className="mt-4 h-px bg-[#E7E7E7]" />
    </div>
  );
}

export default function FinancingCalculator() {
  const [carPrice, setCarPrice] = useState(2500000);
  const [downPct, setDownPct] = useState(25);
  const [months, setMonths] = useState(60);
  const [annualRate, setAnnualRate] = useState(649); // stored as basis points × 100, e.g. 649 = 6.49%

  const rate = annualRate / 100;
  const downAmount = Math.round(carPrice * downPct / 100);
  const loanAmount = carPrice - downAmount;
  const monthlyPayment = calcMonthlyPayment(carPrice, downPct, months, rate);
  const totalPayment = Math.round(monthlyPayment * months + downAmount);

  return (
    <AnimateOnScroll>
      <div className="bg-white rounded-[24px] border border-[#E7E7E7] overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ── Left: Inputs ── */}
          <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-[#E7E7E7]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-[#245CFF] rounded-sm" />
              <span className="text-[#245CFF] text-xs font-semibold tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-body)" }}>
                Kalkulace Ceny
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0B0B0B] leading-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Spočítejte si<br />měsíční splátku
            </h2>

            <SliderRow
              label="Cena vozu"
              value={carPrice}
              min={500000}
              max={15000000}
              step={50000}
              onChange={setCarPrice}
              display={formatCzk(carPrice)}
            />
            <SliderRow
              label="Akontace"
              value={downPct}
              min={10}
              max={70}
              step={1}
              onChange={setDownPct}
              display={`${downPct} % (${formatCzk(downAmount)})`}
            />
            <SliderRow
              label="Doba financování"
              value={months}
              min={12}
              max={84}
              step={6}
              onChange={setMonths}
              display={`${months} měsíců`}
            />
            <SliderRow
              label="Roční úroková sazba"
              value={annualRate}
              min={199}
              max={1500}
              step={1}
              onChange={setAnnualRate}
              display={formatPct(rate)}
            />

            <button
              className="w-full mt-2 py-4 bg-[#245CFF] text-white text-sm font-bold rounded-full uppercase tracking-wider transition-all duration-300 hover:shadow-[0_8px_32px_rgba(36,92,255,0.4)] hover:scale-[1.01] flex items-center justify-center gap-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              SPOČÍTAT SPLÁTKU
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* ── Right: Results ── */}
          <div className="p-8 md:p-10 bg-[#F5F5F3]">
            <h3 className="text-sm font-semibold text-[#0B0B0B] mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Výsledek kalkulace
            </h3>

            {/* Big 3 */}
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[#E7E7E7]">
              <div>
                <div className="text-xs text-[#7D7D7D] mb-1" style={{ fontFamily: "var(--font-body)" }}>Měsíční splátka</div>
                <div className="text-xl font-black text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>
                  {Math.round(monthlyPayment).toLocaleString("cs-CZ")} Kč
                </div>
              </div>
              <div>
                <div className="text-xs text-[#7D7D7D] mb-1" style={{ fontFamily: "var(--font-body)" }}>Celkem zaplatíte</div>
                <div className="text-xl font-black text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>
                  {totalPayment.toLocaleString("cs-CZ")} Kč
                </div>
              </div>
              <div>
                <div className="text-xs text-[#7D7D7D] mb-1" style={{ fontFamily: "var(--font-body)" }}>RPSN</div>
                <div className="text-xl font-black text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>
                  {formatPct(rate)}
                </div>
              </div>
            </div>

            {/* Info note */}
            <div className="flex items-start gap-3 p-4 bg-white rounded-[12px] border border-[#E7E7E7] mb-6">
              <svg className="w-4 h-4 text-[#245CFF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-[#7D7D7D]" style={{ fontFamily: "var(--font-body)" }}>
                Tato kalkulace je pouze orientační a nezávazná. Skutečné podmínky vám připravíme na míru.
              </p>
            </div>

            {/* Summary table */}
            <div className="font-semibold text-[#0B0B0B] text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Shrnutí financování
            </div>
            <div className="space-y-2.5">
              {[
                { label: "Cena vozu", value: formatCzk(carPrice) },
                { label: `Akontace (${downPct} %)`, value: formatCzk(downAmount) },
                { label: "Výše úvěru", value: formatCzk(loanAmount) },
                { label: "Doba financování", value: `${months} měsíců` },
                { label: "Roční úroková sazba", value: formatPct(rate) },
                { label: "RPSN", value: formatPct(rate) },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-[#7D7D7D]" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
                  <span className="text-[#0B0B0B] font-medium" style={{ fontFamily: "var(--font-body)" }}>{value}</span>
                </div>
              ))}
              <div className="border-t border-[#E7E7E7] pt-3 flex justify-between">
                <span className="font-bold text-[#0B0B0B] text-sm" style={{ fontFamily: "var(--font-body)" }}>Měsíční splátka</span>
                <span className="font-black text-[#245CFF] text-base" style={{ fontFamily: "var(--font-display)" }}>
                  {Math.round(monthlyPayment).toLocaleString("cs-CZ")} Kč
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
