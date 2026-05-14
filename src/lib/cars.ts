export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  bodyType: string;
  power: string;
  image: string;
  badge?: string;
  category: string[];
}

export const cars: Car[] = [
  { id: 1, brand: "Mercedes-Benz", model: "S 500", year: 2023, price: 2450000, mileage: 10250, fuel: "Benzín", transmission: "Automat", bodyType: "Sedan", power: "335 kW", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", category: ["ALL", "SEDAN"] },
  { id: 2, brand: "Lamborghini", model: "Huracán EVO", year: 2024, price: 6990000, mileage: 0, fuel: "Benzín", transmission: "Automat", bodyType: "Kupé", power: "470 kW", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80", badge: "Nové", category: ["ALL", "SPORT", "PERFORMANCE"] },
  { id: 3, brand: "BMW", model: "X7 M50d", year: 2023, price: 2850000, mileage: 15600, fuel: "Diesel", transmission: "Automat", bodyType: "SUV", power: "294 kW", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", category: ["ALL", "SUV"] },
  { id: 4, brand: "Audi", model: "RS6 Avant", year: 2022, price: 2990000, mileage: 8900, fuel: "Benzín", transmission: "Automat", bodyType: "Kombi", power: "441 kW", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80", category: ["ALL", "PERFORMANCE"] },
  { id: 5, brand: "Porsche", model: "911 Carrera 4S", year: 2023, price: 3790000, mileage: 4100, fuel: "Benzín", transmission: "Automat", bodyType: "Kupé", power: "331 kW", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", category: ["ALL", "SPORT", "PERFORMANCE"] },
  { id: 6, brand: "Mercedes-Benz", model: "G 63 AMG", year: 2021, price: 3650000, mileage: 22300, fuel: "Benzín", transmission: "Automat", bodyType: "SUV", power: "430 kW", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", category: ["ALL", "SUV"] },
  { id: 7, brand: "Range Rover", model: "Autobiography", year: 2023, price: 3290000, mileage: 12800, fuel: "Benzín", transmission: "Automat", bodyType: "SUV", power: "390 kW", image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80", category: ["ALL", "SUV"] },
  { id: 8, brand: "Bentley", model: "Continental GT", year: 2022, price: 4990000, mileage: 9500, fuel: "Benzín", transmission: "Automat", bodyType: "Kupé", power: "404 kW", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", category: ["ALL", "SPORT"] },
  { id: 9, brand: "Ferrari", model: "F8 Tributo", year: 2024, price: 8990000, mileage: 1250, fuel: "Benzín", transmission: "Automat", bodyType: "Kupé", power: "530 kW", image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80", badge: "Nové", category: ["ALL", "SPORT", "PERFORMANCE"] },
  { id: 10, brand: "Porsche", model: "Cayenne Turbo GT", year: 2023, price: 3890000, mileage: 11200, fuel: "Benzín", transmission: "Automat", bodyType: "SUV", power: "471 kW", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", category: ["ALL", "SUV", "PERFORMANCE"] },
  { id: 11, brand: "McLaren", model: "720S", year: 2024, price: 7990000, mileage: 2900, fuel: "Benzín", transmission: "Automat", bodyType: "Kupé", power: "527 kW", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80", badge: "Nové", category: ["ALL", "SPORT", "PERFORMANCE"] },
  { id: 12, brand: "Mercedes-Benz", model: "AMG GT 63 S", year: 2023, price: 3290000, mileage: 7800, fuel: "Benzín", transmission: "Automat", bodyType: "Kupé", power: "450 kW", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", category: ["ALL", "SPORT", "PERFORMANCE"] },
  { id: 13, brand: "BMW", model: "M8 Competition", year: 2023, price: 4200000, mileage: 5400, fuel: "Benzín", transmission: "Automat", bodyType: "Kupé", power: "460 kW", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", category: ["ALL", "SPORT", "PERFORMANCE"] },
  { id: 14, brand: "Lamborghini", model: "Aventador SVJ", year: 2022, price: 15500000, mileage: 3200, fuel: "Benzín", transmission: "Automat", bodyType: "Kupé", power: "566 kW", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80", badge: "Exclusive", category: ["ALL", "SPORT", "PERFORMANCE"] },
  { id: 15, brand: "Rolls-Royce", model: "Ghost", year: 2023, price: 12800000, mileage: 2100, fuel: "Benzín", transmission: "Automat", bodyType: "Sedan", power: "420 kW", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", badge: "Exclusive", category: ["ALL"] },
  { id: 16, brand: "Audi", model: "e-tron GT RS", year: 2024, price: 3650000, mileage: 4800, fuel: "Elektro", transmission: "Automat", bodyType: "Sedan", power: "440 kW", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80", badge: "Nové", category: ["ALL", "ELECTRIC"] },
];

export const brands = ["BMW", "Mercedes-Benz", "Porsche", "Audi", "Lamborghini", "Range Rover", "Ferrari", "Bentley", "McLaren", "Rolls-Royce"];

export const modelsByBrand: Record<string, string[]> = {
  "BMW": ["M8 Competition", "X7 M50d", "M5 Competition", "iX M60"],
  "Mercedes-Benz": ["S 500", "G 63 AMG", "AMG GT 63 S", "EQS 580"],
  "Porsche": ["Cayenne Turbo GT", "911 Carrera 4S", "Panamera Turbo", "Taycan Turbo S"],
  "Audi": ["RS6 Avant", "e-tron GT RS", "Q8 RS", "R8 V10"],
  "Lamborghini": ["Huracán EVO", "Aventador SVJ", "Urus S"],
  "Range Rover": ["Autobiography", "Sport P530", "Defender V8"],
  "Ferrari": ["F8 Tributo", "SF90 Stradale", "Roma"],
  "Bentley": ["Continental GT", "Flying Spur", "Bentayga"],
  "McLaren": ["720S", "Artura", "GT"],
  "Rolls-Royce": ["Ghost", "Phantom", "Cullinan"],
};

export const categories = ["ALL", "SPORT", "SUV", "CABRIO", "PERFORMANCE", "ELECTRIC"];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 0 }).format(price) + " Kč";
}

export function formatMileage(mileage: number): string {
  if (mileage === 0) return "Nový";
  return new Intl.NumberFormat("cs-CZ").format(mileage) + " km";
}
