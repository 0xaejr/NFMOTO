import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NF MOTORS – Prémiové Automobily",
  description: "NF Motors – prémiový autosalon s exkluzivním výběrem luxusních vozidel. Financování, leasing, dovoz a registrace.",
  keywords: "prémiové automobily, luxusní auta, autosalon, financování auta, leasing, NF Motors",
  openGraph: {
    title: "NF MOTORS – Prémiové Automobily",
    description: "NF Motors – prémiový autosalon s exkluzivním výběrem luxusních vozidel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased" style={{ fontFamily: "var(--font-body)" }}>
        {children}
      </body>
    </html>
  );
}
