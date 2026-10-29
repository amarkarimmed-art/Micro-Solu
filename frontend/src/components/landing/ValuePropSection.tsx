"use client";

import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Card } from "@/components/ui/Card";
import { Timer, CheckSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigation } from "@/context/NavigationContext";

export function ValuePropSection() {
  const { setActiveSection } = useNavigation();

  return (
    <section id="avantage" className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-[#E2E9F3]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Nomira Logo Mark */}
        <NomiraDivider
          badge="03 · L'Avantage Nomira"
          align="center"
          theme="light"
          markHeight={28}
        />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A2838] tracking-tight mb-6">
            Pourquoi nos déploiements se comptent en jours et non en trimestres
          </h2>
          <p className="text-lg text-[#4A6890] leading-relaxed">
            Les agences traditionnelles repartent de zéro et facturent chaque ligne au temps passé. Nomira assemble des strates logicielles éprouvées et optimisées.
          </p>
        </div>

        {/* 2 Core Comparison Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card
            variant="light"
            hoverEffect={false}
            className="p-8 border-[#E2E9F3] bg-[#F3F6FA]/50"
          >
            <div className="text-xs uppercase tracking-wider font-semibold text-[#8FB0DC] mb-2">
              Modèle d&apos;agence classique
            </div>
            <h3 className="text-xl font-bold text-[#1A2838] mb-4">
              Cadrage flou & délais élastiques
            </h3>
            <ul className="space-y-3 text-sm text-[#4A6890]">
              <li className="flex items-start gap-2">
                <span className="text-[#D8412A] font-bold">×</span>
                <span>Délais de livraison moyens constatés : 4 à 8 mois.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8412A] font-bold">×</span>
                <span>Devis réévalué en cours de route avec avenants imprévus.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D8412A] font-bold">×</span>
                <span>Code surdimensionné difficilement maintenable par vos équipes.</span>
              </li>
            </ul>
          </Card>

          {/* Dedicated Nomira Card with Animated Brand Logo */}
          <Card
            variant="dark"
            hoverEffect={false}
            className="p-8 border-[#3A5C8A]/60 bg-[#1A2838] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF9500]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <NomiraLogo variant="horizontal" theme="dark" height={32} />
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FF9500]/20 text-[#FFA23C] border border-[#FF9500]/30">
                Garantie 4 Jours
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Strates logicielles modulaires & délai garanti
            </h3>
            <ul className="space-y-3 text-sm text-[#C3D0E2]">
              <li className="flex items-start gap-2">
                <span className="text-[#FF9500] font-bold">✓</span>
                <span>Mise en production en 4 jours pour votre premier cas d&apos;usage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9500] font-bold">✓</span>
                <span>Prix forfaitaire fixé avant signature, zéro frais dissimulé.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9500] font-bold">✓</span>
                <span>Architecture moderne, API documentées et pleine portabilité des données.</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* 3 Value outcome cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card variant="light" className="p-6 text-center group">
            <div className="w-12 h-12 rounded-[10px] bg-[#F3F6FA] border border-[#E2E9F3] text-[#2C4A7C] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2C4A7C] group-hover:text-white transition-colors duration-300">
              <Timer className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#1A2838] mb-2">Un calendrier ferme</h4>
            <p className="text-xs text-[#4A6890] leading-relaxed">
              Une date d&apos;ouverture annoncée et respectée contractuellement.
            </p>
          </Card>

          <Card variant="light" className="p-6 text-center group">
            <div className="w-12 h-12 rounded-[10px] bg-[#FF9500]/10 border border-[#FF9500]/20 text-[#ED7410] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF9500] group-hover:text-white transition-colors duration-300">
              <CheckSquare className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#1A2838] mb-2">Zéro frais masqué</h4>
            <p className="text-xs text-[#4A6890] leading-relaxed">
              Le montant voté est le montant facturé. Sans suppléments de fin de projet.
            </p>
          </Card>

          <Card variant="light" className="p-6 text-center group">
            <div className="w-12 h-12 rounded-[10px] bg-[#F3F6FA] border border-[#E2E9F3] text-[#2C4A7C] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2C4A7C] group-hover:text-white transition-colors duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-[#1A2838] mb-2">Propriété intégrale</h4>
            <p className="text-xs text-[#4A6890] leading-relaxed">
              Vous êtes 100 % propriétaire de vos données et de vos environnements.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => setActiveSection(4)} // To Solutions
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explorer les micro-solutions disponibles
          </Button>
        </div>
      </div>
    </section>
  );
}
