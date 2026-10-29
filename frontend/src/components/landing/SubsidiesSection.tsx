"use client";

import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileCheck, BadgePercent, Handshake, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";

export function SubsidiesSection() {
  const { setActiveSection } = useNavigation();

  return (
    <section id="subventions" className="relative py-24 sm:py-32 bg-[#1A2838] text-white overflow-hidden border-b border-[#3A5C8A]/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2C4A7C]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#FF9500]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Nomira Logo Mark */}
        <NomiraDivider
          badge="05 · Financements & Aides"
          align="center"
          theme="dark"
          markHeight={28}
        />

        <div className="text-center mb-16 flex flex-col items-center">
          <div className="mb-4">
            <NomiraLogo variant="mark" theme="dark" height={34} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6 leading-tight tracking-tight">
            Votre transition logicielle peut être{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA23C] to-[#FF9500]">
              subventionnée jusqu&apos;à 70 %
            </span>
          </h2>
          <p className="text-lg text-[#C3D0E2] max-w-2xl mx-auto leading-relaxed">
            Dans le cadre des plans d&apos;aide à la digitalisation des TPE et PME, des financements publics et régionaux absorbent la majorité de votre investissement.
          </p>
        </div>

        {/* 3 Value Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          <Card
            variant="dark"
            className="p-6 text-center border-[#3A5C8A]/60 bg-[#142030]/90 backdrop-blur-sm group hover:border-[#FF9500]/50"
          >
            <div className="w-12 h-12 rounded-[10px] bg-white/5 border border-white/10 text-[#FF9500] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base mb-2 text-white">Éligibilité vérifiée</h3>
            <p className="text-xs text-[#93A9C7] leading-relaxed">
              Audit instantané de vos critères d&apos;aide lors du diagnostic initial sans frais.
            </p>
          </Card>

          <Card
            variant="dark"
            className="p-6 text-center border-[#3A5C8A]/60 bg-[#142030]/90 backdrop-blur-sm group hover:border-[#FF9500]/50"
          >
            <div className="w-12 h-12 rounded-[10px] bg-white/5 border border-white/10 text-[#FF9500] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <BadgePercent className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base mb-2 text-white">Dossier clé en main</h3>
            <p className="text-xs text-[#93A9C7] leading-relaxed">
              Nomira rédige les descriptifs techniques et monte votre dossier de demande.
            </p>
          </Card>

          <Card
            variant="dark"
            className="p-6 text-center border-[#3A5C8A]/60 bg-[#142030]/90 backdrop-blur-sm group hover:border-[#FF9500]/50"
          >
            <div className="w-12 h-12 rounded-[10px] bg-white/5 border border-white/10 text-[#FF9500] flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base mb-2 text-white">Zéro avance lourde</h3>
            <p className="text-xs text-[#93A9C7] leading-relaxed">
              Le calendrier de paiement s&apos;aligne sur le versement effectif des subventions.
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setActiveSection(8)} // To contact
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Vérifier mon montant subventionnable
          </Button>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8FB0DC]">
            <ShieldCheck className="w-4 h-4 text-[#1D9E75]" />
            <span>Étude de dossier 100 % confidentielle et sans obligation contractuelle</span>
          </div>
        </div>
      </div>
    </section>
  );
}
