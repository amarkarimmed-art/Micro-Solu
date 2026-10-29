"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import {
  Printer,
  Download,
  Image as ImageIcon,
  Globe,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Zap,
  ShieldCheck,
  Percent,
} from "lucide-react";

export default function CarteVisitePage() {
  const [versoTheme, setVersoTheme] = useState<"dark" | "white">("dark");

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex flex-col font-sans selection:bg-[#FF9500] selection:text-white">
      {/* Screen only header */}
      <div className="print:hidden">
        <Header />
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 print:p-0 print:m-0 print:max-w-none">
        {/* Breadcrumb / Top Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#3A5C8A]/30 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#8FB0DC] hover:text-[#FFA23C] transition-colors"
          >
            ← Retour à l'accueil
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#8FB0DC]">
            <span className="w-2 h-2 rounded-full bg-[#FF9500] animate-pulse" />
            Format officiel 85 × 55 mm · 100% Opaque sans artefact
          </div>
        </div>

        {/* Animated Brand Emblem */}
        <div className="flex justify-center mb-6 print:hidden">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#141F2D] border border-[#3A5C8A]/50 shadow-xl transition-all duration-300 hover:scale-105">
            <NomiraLogo variant="horizontal" theme="dark" height={40} speed="normal" />
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 print:hidden">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4 text-white">
            Carte de Visite{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA23C] via-[#FF9500] to-[#ED7410]">
              Officielle Nomira
            </span>
          </h1>
          <p className="text-[#C3D0E2] text-base sm:text-lg leading-relaxed">
            Support d'affaires officiel (300 DPI) au rendu naturel, plein et opaque. Zéro ligne blanche, zéro artefact de transparence.
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 print:hidden">
          <Button
            variant="primary"
            size="md"
            onClick={handlePrint}
            className="shadow-lg shadow-[#FF9500]/25 flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimer la carte (85 × 55 mm)</span>
          </Button>

          <a
            href="/brand/carte-visite/carte-visite-recto.png"
            download="nomira-carte-recto.png"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A2838] border border-[#3A5C8A]/50 text-white font-medium text-sm hover:border-[#FF9500] hover:bg-[#2C4A7C]/50 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-[#FFA23C]" />
            <span>Télécharger Recto HD</span>
          </a>

          <a
            href={
              versoTheme === "dark"
                ? "/brand/carte-visite/carte-visite-verso.png"
                : "/brand/carte-visite/carte-visite-verso-blanc.png"
            }
            download={`nomira-carte-verso-${versoTheme}.png`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A2838] border border-[#3A5C8A]/50 text-white font-medium text-sm hover:border-[#FF9500] hover:bg-[#2C4A7C]/50 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-[#FFA23C]" />
            <span>Télécharger Verso HD ({versoTheme === "dark" ? "Sombre" : "Blanc"})</span>
          </a>

          <a
            href="/brand/carte-visite/carte-visite-mockup.png"
            download="nomira-carte-showcase.png"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1A2838] border border-[#3A5C8A]/50 text-white font-medium text-sm hover:border-[#FF9500] hover:bg-[#2C4A7C]/50 transition-all duration-200"
          >
            <ImageIcon className="w-4 h-4 text-[#8FB0DC]" />
            <span>Télécharger Mockup 3D</span>
          </a>
        </div>

        {/* Verso Theme Switcher */}
        <div className="flex justify-center items-center gap-3 mb-8 print:hidden">
          <span className="text-xs font-semibold text-[#8FB0DC] uppercase tracking-wider">
            Thème du Verso :
          </span>
          <div className="inline-flex p-1 rounded-xl bg-[#141F2D] border border-[#3A5C8A]/40">
            <button
              onClick={() => setVersoTheme("dark")}
              className={`px-3.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                versoTheme === "dark"
                  ? "bg-[#2C4A7C] text-white shadow-sm"
                  : "text-[#8FB0DC] hover:text-white"
              }`}
            >
              🌙 Sombre (Luxe)
            </button>
            <button
              onClick={() => setVersoTheme("white")}
              className={`px-3.5 py-1 text-xs font-semibold rounded-lg transition-all ${
                versoTheme === "white"
                  ? "bg-white text-[#1A2838] shadow-sm"
                  : "text-[#8FB0DC] hover:text-white"
              }`}
            >
              ☀️ Blanc (Exécutif)
            </button>
          </div>
        </div>

        {/* Cards Display Grid (Print friendly) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 print:block print:max-w-none print:m-0">
          {/* RECTO */}
          <div className="flex flex-col items-center print:mb-8 print:break-after-page">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8FB0DC] mb-3 print:hidden">
              <span className="w-2 h-2 rounded-full bg-[#8FB0DC]" />
              Face 1 : Recto (Identité 4 Barres · 100% Opaque)
            </div>
            <div className="w-full max-w-[510px] aspect-[85/55] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.01] print:w-[85mm] print:h-[55mm] print:max-w-none print:shadow-none print:rounded-none">
              <img
                src="/brand/carte-visite/carte-visite-recto.png"
                alt="Carte de visite Nomira - Recto"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

          {/* VERSO */}
          <div className="flex flex-col items-center print:break-after-avoid">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF9500] mb-3 print:hidden">
              <span className="w-2 h-2 rounded-full bg-[#FF9500]" />
              Face 2 : Verso (Coordonnées & QR Code Direct)
            </div>
            <div className="w-full max-w-[510px] aspect-[85/55] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.01] print:w-[85mm] print:h-[55mm] print:max-w-none print:shadow-none print:rounded-none">
              <img
                src={
                  versoTheme === "dark"
                    ? "/brand/carte-visite/carte-visite-verso.png"
                    : "/brand/carte-visite/carte-visite-verso-blanc.png"
                }
                alt="Carte de visite Nomira - Verso"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Detailed Vector Coordinates Grid */}
        <div className="max-w-5xl mx-auto mb-16 rounded-3xl bg-[#141F2D] border border-[#3A5C8A]/30 p-6 sm:p-8 shadow-xl print:hidden">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#3A5C8A]/30">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9500]" />
            <h2 className="text-lg font-bold font-heading text-white">
              Coordonnées Officielles & Pictogrammes Vectoriels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#1A2838] border border-[#3A5C8A]/30">
              <div className="w-10 h-10 rounded-xl bg-[#2C4A7C]/40 flex items-center justify-center text-[#FF9500] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#8FB0DC] uppercase tracking-wider block">Site web</span>
                <a href="https://www.nomira.ma" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-[#FFA23C] transition-colors">
                  www.nomira.ma
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#1A2838] border border-[#3A5C8A]/30">
              <div className="w-10 h-10 rounded-xl bg-[#2C4A7C]/40 flex items-center justify-center text-[#8FB0DC] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#8FB0DC] uppercase tracking-wider block">Email</span>
                <a href="mailto:contact@nomira.ma" className="text-sm font-semibold text-white hover:text-[#FFA23C] transition-colors">
                  contact@nomira.ma
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#1A2838] border border-[#3A5C8A]/30">
              <div className="w-10 h-10 rounded-xl bg-[#2C4A7C]/40 flex items-center justify-center text-[#8FB0DC] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#8FB0DC] uppercase tracking-wider block">Téléphone</span>
                <a href="tel:+212661574247" className="text-sm font-semibold text-white hover:text-[#FFA23C] transition-colors">
                  +212 6 61 57 42 47
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#1A2838] border border-[#3A5C8A]/30">
              <div className="w-10 h-10 rounded-xl bg-[#2C4A7C]/40 flex items-center justify-center text-[#4ADE80] shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#8FB0DC] uppercase tracking-wider block">WhatsApp Direct</span>
                <a href="https://wa.me/212661574247" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#4ADE80] hover:underline">
                  +212 6 61 57 42 47
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#1A2838] border border-[#3A5C8A]/30 sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#2C4A7C]/40 flex items-center justify-center text-[#8FB0DC] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-[#8FB0DC] uppercase tracking-wider block">Implantation</span>
                <span className="text-sm font-semibold text-white">
                  Casablanca · Paris
                </span>
              </div>
            </div>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#3A5C8A]/30">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2838] border border-[#3A5C8A]/40 text-xs font-semibold text-[#8FB0DC]">
              <Zap className="w-3.5 h-3.5 text-[#FF9500]" />
              <span>Déploiement en 4 jours</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2838] border border-[#3A5C8A]/40 text-xs font-semibold text-[#8FB0DC]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#8FB0DC]" />
              <span>Forfait fixe garanti</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A2838] border border-[#3A5C8A]/40 text-xs font-semibold text-[#8FB0DC]">
              <Percent className="w-3.5 h-3.5 text-[#FF9500]" />
              <span>Aides jusqu'à 70%</span>
            </div>
          </div>
        </div>

        {/* High Resolution Presentation Mockup Showcase */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#141F2D] p-4 sm:p-8 print:hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-[#3A5C8A]/30">
            <div>
              <h2 className="text-xl font-bold font-heading text-white">
                Rendu de Présentation Prestige
              </h2>
              <p className="text-xs text-[#8FB0DC] mt-1">
                Aperçu naturel des deux faces avec vernis sélectif préconisé sur le logo à 4 barres.
              </p>
            </div>
            <a
              href="/carte-de-visite-nomira.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#FFA23C] hover:underline inline-flex items-center gap-1"
            >
              Ouvrir le gabarit autonome ↗
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-inner">
            <img
              src="/brand/carte-visite/carte-visite-mockup.png"
              alt="Mockup Haute Définition de la carte de visite"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>

      {/* Print stylesheet */}
      <style jsx global>{`
        @media print {
          @page {
            size: 85mm 55mm;
            margin: 0;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
