"use client";

import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Card } from "@/components/ui/Card";
import { Target, Coins, ShieldCheck, Scale } from "lucide-react";

export function WhyUsSection() {
  const points = [
    {
      icon: <Target className="w-6 h-6 text-[#2C4A7C]" />,
      title: "Maîtrise immédiate de vos flux métiers",
      desc: "Nos strates logicielles répondent à des secteurs identifiés. Zéro temps perdu à vous faire réexpliquer les bases de votre activité.",
    },
    {
      icon: <Coins className="w-6 h-6 text-[#FF9500]" />,
      title: "Forfait fixe connu avant de signer",
      desc: "Vous savez précisément ce que vous payez avant de valider. Pas de facturation horaire flottante ni d&apos;imprévu en cours de route.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2C4A7C]" />,
      title: "Code pérenne, documenté et réversible",
      desc: "Aucune dépendance technique captive. Votre socle est propre, exportable et administrable en toute liberté.",
    },
    {
      icon: <Scale className="w-6 h-6 text-[#2C4A7C]" />,
      title: "Subventions mobilisées à 70 %",
      desc: "Accompagnement administratif complet pour activer les dispositifs publics et alléger votre trésorerie dès le premier jour.",
    },
  ];

  return (
    <section id="pourquoi-nous" className="py-24 sm:py-32 bg-white border-b border-[#E2E9F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Nomira Logo */}
        <NomiraDivider
          badge="06 · Nos Différenciateurs"
          align="center"
          theme="light"
          markHeight={28}
        />

        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <div className="mb-4">
            <NomiraLogo variant="horizontal" theme="light" height={36} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A2838] tracking-tight mb-4">
            Pourquoi choisir Nomira plutôt qu&apos;une agence ou un freelance isolé ?
          </h2>
          <p className="text-lg text-[#4A6890] leading-relaxed">
            La rigueur d&apos;un éditeur de logiciel, la réactivité d&apos;un partenaire dédié.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <Card
              key={i}
              variant="light"
              hoverEffect
              className="flex items-start gap-5 p-8 group border-[#E2E9F3] hover:border-[#2C4A7C]"
            >
              <div className="w-12 h-12 rounded-[10px] bg-[#F3F6FA] border border-[#E2E9F3] flex items-center justify-center shrink-0 group-hover:bg-[#2C4A7C] group-hover:text-white transition-colors duration-300">
                <span className="group-hover:text-white transition-colors">
                  {p.icon}
                </span>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1A2838] mb-2 group-hover:text-[#2C4A7C] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[#4A6890] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
