"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useNavigation } from "@/context/NavigationContext";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { DiagnosticModal } from "@/components/ui/DiagnosticModal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <header className="sticky top-0 z-50 bg-[#1A2838]/95 backdrop-blur-md border-b border-[#3A5C8A]/40 transition-all duration-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Animated Brand Logo in Header */}
        <Link href="/" className="flex items-center gap-3 py-1 group/logo">
          <NomiraLogo
            variant="horizontal"
            theme="dark"
            height={38}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#141F2D]/80 p-1.5 rounded-full border border-[#3A5C8A]/50 backdrop-blur-sm shadow-inner">
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                activeSection === i
                  ? "bg-[#2C4A7C] text-white shadow-sm shadow-black/30 border border-[#8FB0DC]/30 scale-[1.02]"
                  : "text-[#93A9C7] hover:text-[#FFA23C] hover:bg-white/5"
              }`}
            >
              {activeSection === i && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9500] animate-pulse" />
              )}
              {s.name}
            </button>
          ))}
        </nav>

        {/* Header Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsModalOpen(true)}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
            className="shadow-orange-500/20"
          >
            Diagnostic 0 €
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="p-2 rounded-xl text-[#93A9C7] hover:text-[#FFA23C] hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation if toggled (Mobile Sidebar) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#1A2838] border-b border-[#3A5C8A]/40 px-4 py-4 space-y-3 shadow-2xl">
          <div className="pb-3 border-b border-[#3A5C8A]/40 flex items-center justify-between">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <NomiraLogo variant="horizontal" theme="dark" height={32} />
            </Link>
            <span className="text-[11px] font-semibold text-[#8FB0DC] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
              Navigation
            </span>
          </div>
          <div className="space-y-1.5">
            {sections.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveSection(i);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-between ${
                  activeSection === i
                    ? "bg-[#2C4A7C] text-white shadow-sm"
                    : "text-[#93A9C7] hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{s.name}</span>
                {activeSection === i && (
                  <span className="w-2 h-2 rounded-full bg-[#FF9500]" />
                )}
              </button>
            ))}
          </div>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="w-full justify-center"
            >
              Demander le diagnostic 0 €
            </Button>
          </div>
        </div>
      )}

      {/* Mobile Tab Carousel Navigation bar */}
      <div className="relative lg:hidden border-t border-[#3A5C8A]/30 bg-[#162230]">
        <div className="overflow-x-auto flex gap-2 px-4 py-2.5 scrollbar-hide scroll-smooth">
          {sections.map((s, i) => (
            <button
              key={i}
              ref={(el) => {
                mobileButtonRefs.current[i] = el;
              }}
              onClick={() => setActiveSection(i)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer active:scale-95 flex items-center gap-1.5 ${
                activeSection === i
                  ? "bg-[#FF9500] text-white shadow-md shadow-orange-500/25 scale-105"
                  : "bg-[#1F2E44] text-[#93A9C7] hover:bg-[#2C4A7C]/60 hover:text-white"
              }`}
            >
              {activeSection === i && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Branded Pop-up / Modal for Quick Diagnostic */}
      <DiagnosticModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}
