"use client";

import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Card } from "@/components/ui/Card";
import { ClipboardList, EyeOff, AlertCircle, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigation } from "@/context/NavigationContext";

export function ProblemSection() {
  const { setActiveSection } = useNavigation();

  const symptoms = [
    {
      icon: <ClipboardList className="w-6 h-6 text-[#2C4A7C]" />,
      title: "Gestion manuelle répétitive",
      desc: "Vos équipes passent 14 heures par mois sur des ressaisies WhatsApp ou papier.",
      impact: "14 h / mois perdues",
    },
    {
      icon: <EyeOff className="w-6 h-6 text-[#2C4A7C]" />,
      title: "Visibilité financière floue",
      desc: "Sans tableau de bord direct, vous ignorez qui vous doit quoi et à quelle date précise.",
      impact: "Impayés en retard",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-[#FF9500]" />,
      title: "Pertes de clients et de revenus",
      desc: "Le défaut de relance automatisée cause en moyenne 8 % de déperdition de chiffre d&apos;affaires.",
      impact: "−8 % de revenus",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#2C4A7C]" />,
      title: "Logiciels de masse inadaptés",
      desc: "Les outils génériques sont soit surdimensionnés, soit trop rigides pour vos processus métiers réels.",
      impact: "Abonnements inutiles",
    },
  ];

  return (
    <section id="constat" className="py-24 sm:py-32 bg-white relative overflow-hidden border-b border-[#E2E9F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Parallel Strata Divider featuring Nomira Logo */}
        <NomiraDivider
          badge="01 · Le Constat"
          align="center"
          theme="light"
          markHeight={28}
        />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A2838] tracking-tight mb-6">
            Vos relances et vos tableaux Excel vous coûtent cher chaque semaine
          </h2>
          <p className="text-lg text-[#4A6890] leading-relaxed">
            Chaque heure absorbée par des tâches administratives manuelles est une ressource financière et humaine retirée à votre développement.
          </p>
        </div>

        {/* 4 Crisp Cards with Lucide Outline Icons & Direct Metrics */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {symptoms.map((item, i) => (
            <Card
              key={i}
              variant="light"
              hoverEffect
              className="flex flex-col sm:flex-row items-start gap-5 p-7 group transition-all duration-300 hover:border-[#2C4A7C]/40"
            >
              <div className="w-12 h-12 rounded-[10px] bg-[#F3F6FA] border border-[#E2E9F3] flex items-center justify-center shrink-0 group-hover:bg-[#2C4A7C] group-hover:text-white transition-colors duration-300">
                <span className="group-hover:text-white transition-colors">
                  {item.icon}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="text-base font-bold text-[#1A2838]">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#F3F6FA] text-[#ED7410] border border-[#FF9500]/20">
                    {item.impact}
                  </span>
                </div>
                <p className="text-sm text-[#4A6890] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Manifesto Quote Box */}
        <div className="max-w-3xl mx-auto p-8 rounded-[12px] bg-[#1A2838] text-white border border-[#3A5C8A]/50 shadow-md text-center flex flex-col items-center">
          <div className="mb-4">
            <NomiraLogo variant="mark" theme="dark" height={32} />
          </div>
          <p className="font-heading text-lg sm:text-xl font-semibold mb-5 text-[#F3F6FA]">
            « Vous saurez avant de signer ce que vous économisez. C&apos;est l&apos;engagement Normina. »
          </p>
          <div className="flex justify-center">
            <Button
              variant="primary"
              size="sm"
              onClick={() => setActiveSection(2)} // To parcours
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Découvrir la méthode en 4 étapes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
