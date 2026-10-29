"use client";

import Link from "next/link";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2, TrendingDown, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";

export function Hero() {
  const { setActiveSection } = useNavigation();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#1A2838] via-[#1A2F4A] to-[#142030] text-white py-20 sm:py-28 lg:py-36"
    >
      {/* Background Nomira Pixel Matrix Grid Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pixel-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="3.5" height="3.5" rx="0.8" fill="#FF9500" />
              <rect x="16" y="16" width="3.5" height="3.5" rx="0.8" fill="#8FB0DC" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pixel-grid)" />
        </svg>
      </div>

      {/* Ambient energetic gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2C4A7C]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#FF9500]/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Brand Emblem Centerpiece with Fluid Pixel Flow */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="inline-flex items-center gap-4 px-7 py-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-2xl transition-all duration-500 hover:scale-105 hover:border-[#FF9500]/50 hover:bg-white/15">
            <NomiraLogo
              variant="mark"
              theme="dark"
              height={58}
              speed="normal"
            />
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-[#8FB0DC]">
            <span className="w-2 h-2 rounded-full bg-[#FF9500] animate-pulse" />
            <span className="font-semibold text-white tracking-wide">Normina</span>
            <span>· Plateforme certifiée · Logiciels ciblés à prix fixe</span>
          </div>
        </div>

        {/* Main Headline - Space Grotesk */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto mb-6 leading-[1.1] text-white">
          Un problème visé.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA23C] via-[#FF9500] to-[#ED7410]">
            Un coût en moins.
          </span>
        </h1>

        {/* Slogan & Editorial Tone */}
        <p className="text-lg sm:text-2xl text-[#C3D0E2] max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Vos relances ou vos saisies manuelles vous coûtent des dizaines d&apos;heures chaque mois. Nomira conçoit et déploie vos micro-solutions logicielles ciblées en quelques jours.
        </p>

        {/* 3 Metric Value Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <div className="p-4 rounded-xl bg-white/5 border border-[#3A5C8A]/40 backdrop-blur-sm text-left transition-all duration-300 hover:border-[#FF9500]/50 hover:bg-white/10 group">
            <div className="text-xs uppercase tracking-wider text-[#93A9C7] font-semibold flex items-center gap-1.5 mb-1">
              <TrendingDown className="w-3.5 h-3.5 text-[#FF9500]" />
              Coût moyen
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              −<span className="text-[#FF9500]">32 %</span>
            </div>
            <p className="text-xs text-[#8FB0DC] mt-1">sur vos frais de gestion ciblés</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-[#3A5C8A]/40 backdrop-blur-sm text-left transition-all duration-300 hover:border-[#FF9500]/50 hover:bg-white/10 group">
            <div className="text-xs uppercase tracking-wider text-[#93A9C7] font-semibold flex items-center gap-1.5 mb-1">
              <Clock className="w-3.5 h-3.5 text-[#FF9500]" />
              Déploiement
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              4 jours
            </div>
            <p className="text-xs text-[#8FB0DC] mt-1">pour être opérationnel</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-[#3A5C8A]/40 backdrop-blur-sm text-left transition-all duration-300 hover:border-[#FF9500]/50 hover:bg-white/10 group">
            <div className="text-xs uppercase tracking-wider text-[#93A9C7] font-semibold flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF9500]" />
              Subventions
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Jusqu&apos;à <span className="text-[#FFA23C]">70 %</span>
            </div>
            <p className="text-xs text-[#8FB0DC] mt-1">d&apos;aides financières mobilisées</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setActiveSection(8)} // Jump to contact
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-xl shadow-orange-500/25"
          >
            Demander le diagnostic chiffré (0 €)
          </Button>

          <Button
            variant="dark"
            size="lg"
            onClick={() => setActiveSection(1)} // Jump to Constat
            className="w-full sm:w-auto text-[#C3D0E2]"
          >
            Découvrir le constat
          </Button>
        </div>

        {/* Assurance footer note */}
        <p className="text-xs text-[#8FB0DC] mt-6 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#1D9E75]" />
          <span>Vous saurez exactement ce que vous économisez avant tout engagement.</span>
        </p>
      </div>
    </section>
  );
}
