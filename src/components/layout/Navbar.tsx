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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const darkPages = ["/kontakt"];
  const isDarkPage = darkPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
    : "bg-transparent";

  const textColor = scrolled
    ? "text-[#0B0B0B]"
    : isDarkPage
    ? "text-white"
    : "text-[#0B0B0B]";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} py-4`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left — Hamburger */}
          <button
            className={`flex flex-col gap-[5px] p-1 transition-colors duration-300 ${textColor}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Otevřít menu"
          >
            <span className="block w-6 h-[1.5px] bg-current" />
            <span className="block w-6 h-[1.5px] bg-current" />
            <span className="block w-6 h-[1.5px] bg-current" />
          </button>

          {/* Center — Logo */}
          <Link
            href="/"
            className={`absolute left-1/2 -translate-x-1/2 font-black text-lg tracking-[0.1em] transition-colors duration-300 ${textColor}`}
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
        <div className="absolute inset-0 bg-[#050505]" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 left-0 h-full w-full max-w-sm bg-[#050505] flex flex-col transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/10">
            <span className="font-black text-white text-lg tracking-[0.1em]" style={{ fontFamily: "var(--font-display)" }}>
              NF MOTORS
            </span>
            <button
              className="text-white/60 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Zavřít menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-8 py-10 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between py-4 border-b border-white/5 text-2xl font-bold transition-all duration-300 group ${
                  pathname === link.href ? "text-[#245CFF]" : "text-white hover:text-[#245CFF]"
                }`}
                style={{ fontFamily: "var(--font-display)", transitionDelay: `${i * 50}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className="px-8 py-8 border-t border-white/10">
            <p className="text-white/30 text-xs mb-1" style={{ fontFamily: "var(--font-body)" }}>Kontakt</p>
            <a href="tel:+1234567890" className="text-white text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>+1 (123) 456-7890</a>
          </div>
        </div>
      </div>
    </>
  );
}
