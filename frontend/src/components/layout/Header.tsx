"use client";

import { useState } from "react";
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`relative py-1 transition-colors duration-200 ${activeSection === i ? "text-blue-600" : "text-slate-600 hover:text-blue-600"}`}
            >
              {s.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === i ? "w-full" : "w-0 group-hover:w-full"}`} />
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

      {/* Mobile Tab Navigation */}
      <div className="md:hidden overflow-x-auto flex border-b border-slate-200 bg-white/95 backdrop-blur-md scrollbar-hide">
        {sections.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveSection(i)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
              activeSection === i ? "border-blue-600 text-blue-600" : "border-transparent text-slate-600"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>
    </header>
  );
}
