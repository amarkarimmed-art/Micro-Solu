"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useNavigation } from "@/context/NavigationContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useNavigation();

  const sections = [
    { name: "Accueil" },
    { name: "Constat" },
    { name: "Parcours" },
    { name: "Avantage" },
    { name: "Solutions" },
    { name: "Subventions" },
    { name: "Pourquoi" },
    { name: "FAQ" },
    { name: "Contact" },
  ];

  // References for mobile tab buttons to scroll them into view automatically
  const mobileButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeBtn = mobileButtonRefs.current[activeSection];
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-95">
            M
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            Micro<span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-500">Solu</span>
          </span>
        </Link>

        {/* Desktop Navigation - UI UX PRO MAX Pill Style */}
        <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/40 backdrop-blur-sm shadow-inner">
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${
                activeSection === i
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-[1.03]"
                  : "text-slate-600 hover:text-blue-600 hover:bg-white/60"
              }`}
            >
              {s.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Tab Navigation - UI UX PRO MAX Carousel Style */}
      <div className="relative md:hidden border-b border-slate-200/60 bg-white/95 backdrop-blur-md">
        {/* Subtle Fade indicators on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div className="overflow-x-auto flex gap-2.5 px-6 py-3 scrollbar-hide scroll-smooth">
          {sections.map((s, i) => (
            <button
              key={i}
              ref={(el) => {
                mobileButtonRefs.current[i] = el;
              }}
              onClick={() => setActiveSection(i)}
              className={`px-4.5 py-2.5 text-xs font-bold rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer active:scale-90 ${
                activeSection === i
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-100/70 text-slate-600 hover:bg-slate-150 active:bg-slate-200"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
