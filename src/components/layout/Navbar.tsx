"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Domů" },
  { href: "/o-nas", label: "O nás" },
  { href: "/nabidka", label: "Nabídka vozů" },
  { href: "/sluzby", label: "Služby" },
  { href: "/financovani", label: "Financování" },
  { href: "/kontakt", label: "Kontakt" },
];

// Pages where hero is dark → navbar needs white text
const DARK_HERO_PAGES = ["/", "/kontakt"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkHero = DARK_HERO_PAGES.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrolled → always white bg with dark text
  // Dark hero pages (not scrolled) → transparent bg with white text
  // Light pages (not scrolled) → transparent bg with dark text
  const navBg = scrolled ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent";
  const textColor = scrolled ? "text-[#0B0B0B]" : isDarkHero ? "text-white" : "text-[#0B0B0B]";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-5 ${navBg}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left — Hamburger */}
          <button
            className={`flex flex-col gap-[5px] p-1 transition-colors duration-300 ${textColor}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Otevřít menu"
          >
            <span className="block w-6 h-[1.5px] bg-current" />
            <span className="block w-4 h-[1.5px] bg-current" />
            <span className="block w-6 h-[1.5px] bg-current" />
          </button>

          {/* Center — Logo */}
          <Link
            href="/"
            className={`absolute left-1/2 -translate-x-1/2 font-black text-base tracking-[0.15em] transition-colors duration-300 ${textColor}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            NF MOTORS
          </Link>

          {/* Right — Search */}
          <button
            className={`p-1 transition-colors duration-300 ${textColor}`}
            aria-label="Vyhledat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#050505]/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[90vw] bg-[#050505] flex flex-col transition-transform duration-500 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/10">
            <span className="font-black text-white text-sm tracking-[0.15em]" style={{ fontFamily: "var(--font-display)" }}>
              NF MOTORS
            </span>
            <button
              className="text-white/50 hover:text-white transition-colors p-1"
              onClick={() => setMenuOpen(false)}
              aria-label="Zavřít menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 px-8 py-8 flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-4 border-b border-white/5 font-black text-xl transition-all duration-300 group ${
                  pathname === link.href ? "text-[#245CFF]" : "text-white hover:text-[#245CFF]"
                }`}
                style={{ fontFamily: "var(--font-display)", transitionDelay: `${i * 40}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </nav>

          <div className="px-8 py-8 border-t border-white/10 space-y-1">
            <p className="text-white/30 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-body)" }}>Kontakt</p>
            <a href="tel:+11234567890" className="block text-white text-sm font-medium hover:text-[#245CFF] transition-colors" style={{ fontFamily: "var(--font-body)" }}>+1 (123) 456-7890</a>
            <a href="mailto:info@nfmotors.com" className="block text-white/60 text-sm hover:text-white transition-colors" style={{ fontFamily: "var(--font-body)" }}>info@nfmotors.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
