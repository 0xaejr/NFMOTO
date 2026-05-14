import Link from "next/link";
import Image from "next/image";
import { Car, formatPrice, formatMileage } from "@/lib/cars";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="group bg-white rounded-[24px] border border-[#E7E7E7] overflow-hidden transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1.5">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#F5F5F3]">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {car.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-[#245CFF] text-white text-xs font-semibold rounded-full" style={{ fontFamily: "var(--font-body)" }}>
            {car.badge}
          </div>
        )}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0B0B0B] text-xs font-medium rounded-full" style={{ fontFamily: "var(--font-body)" }}>
          {car.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-1">
          <span className="text-xs font-medium text-[#245CFF] tracking-widest uppercase" style={{ fontFamily: "var(--font-body)" }}>{car.brand}</span>
        </div>
        <h3 className="text-lg font-bold text-[#0B0B0B] mb-1" style={{ fontFamily: "var(--font-display)" }}>{car.model}</h3>
        <p className="text-xs text-[#7D7D7D] mb-5" style={{ fontFamily: "var(--font-body)" }}>{car.bodyType} · {car.fuel}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-y border-[#E7E7E7]">
          {[
            { label: "Nájezd", value: formatMileage(car.mileage) },
            { label: "Palivo", value: car.fuel },
            { label: "Výkon", value: car.power },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="text-[10px] text-[#7D7D7D] mb-1 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>{label}</div>
              <div className="text-xs font-semibold text-[#0B0B0B]" style={{ fontFamily: "var(--font-body)" }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-[#7D7D7D] mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Cena</div>
            <div className="text-xl font-bold text-[#0B0B0B]" style={{ fontFamily: "var(--font-display)" }}>{formatPrice(car.price)}</div>
          </div>
          <Link
            href={`/nabidka/${car.id}`}
            className="px-5 py-2.5 bg-[#245CFF] text-white text-xs font-semibold rounded-full transition-all duration-300 hover:shadow-[0_8px_24px_rgba(36,92,255,0.35)] hover:scale-[1.04]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
