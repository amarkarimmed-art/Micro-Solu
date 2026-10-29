"use client";

import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Search, Compass, Zap, Rocket, RefreshCw, ArrowRight } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";

export function ProcessSection() {
  const { setActiveSection } = useNavigation();

  const steps = [
    {
      num: "01",
      title: "Diagnostic chiffré",
      bold: "Un problème ciblé, un calcul immédiat.",
      desc: "Échange de 30 minutes sans frais pour quantifier vos heures perdues et vos gains possibles.",
      icon: <Search className="w-5 h-5 text-[#2C4A7C]" />,
    },
    {
      num: "02",
      title: "Cadrage à prix fixe",
      bold: "Périmètre, coût et calendrier garantis.",
      desc: "Une proposition contractuelle transparente : vous connaissez le montant final avant de signer.",
      icon: <Compass className="w-5 h-5 text-[#2C4A7C]" />,
    },
    {
      num: "03",
      title: "Déploiement en 4 jours",
      bold: "Construction ciblée sans dispersion.",
      desc: "Nos strates logicielles modulaires permettent une mise en service opérationnelle en quelques jours.",
      icon: <Zap className="w-5 h-5 text-[#FF9500]" />,
    },
    {
      num: "04",
      title: "Mise en service & formation",
      bold: "Prise en main immédiate par vos équipes.",
      desc: "Vos données existantes sont migrées et chaque collaborateur est autonome dès le premier jour.",
      icon: <Rocket className="w-5 h-5 text-[#2C4A7C]" />,
    },
    {
      num: "05",
      title: "Suivi & Garantie continue",
      bold: "Votre outil évolue sans dérive.",
      desc: "Accompagnement continu assurant la disponibilité, la sécurité et la conformité de vos flux.",
      icon: <RefreshCw className="w-5 h-5 text-[#2C4A7C]" />,
    },
  ];

  return (
    <section id="parcours" className="py-24 sm:py-32 bg-[#F3F6FA] border-b border-[#E2E9F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Divider featuring Nomira Logo */}
        <NomiraDivider
          badge="02 · Le Parcours"
          align="center"
          theme="light"
          markHeight={28}
        />

        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A2838] tracking-tight mb-4">
            Un processus cadré au jour près, sans devis fluctuant
          </h2>
          <p className="text-lg text-[#4A6890] leading-relaxed">
            Du premier diagnostic jusqu&apos;à la mise en production, chaque étape est chiffrée et planifiée.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 text-left mb-14">
          {steps.map((step, i) => (
            <Card
              key={i}
              variant="light"
              hoverEffect
              className="flex flex-col justify-between p-6 group border-[#E2E9F3] hover:border-[#2C4A7C]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[#F3F6FA] border border-[#E2E9F3] flex items-center justify-center group-hover:bg-[#2C4A7C] group-hover:text-white transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors">
                      {step.icon}
                    </span>
                  </div>
                  <span className="font-heading font-bold text-sm text-[#FF9500]">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-[#1A2838] text-base mb-1 group-hover:text-[#2C4A7C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#ED7410] mb-2">
                  {step.bold}
                </p>
              </div>
              <p className="text-xs text-[#4A6890] leading-relaxed mt-2">
                {step.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setActiveSection(8)} // Jump to contact
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Lancer un diagnostic sans frais
          </Button>
        </div>
      </div>
    </section>
  );
}
