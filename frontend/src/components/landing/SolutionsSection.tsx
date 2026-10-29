"use client";

import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Stethoscope, GraduationCap, Store, ArrowRight, Check, Sparkles } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";

export function SolutionsSection() {
  const { setActiveSection } = useNavigation();

  const solutions = [
    {
      icon: <Stethoscope className="w-6 h-6 text-[#2C4A7C]" />,
      title: "Santé & Cabinets médicaux",
      desc: "Agenda en ligne synchronisé, fiches patient sécurisées, rappels SMS automatisés et gestion des encaissements sans ressaisie.",
      features: [
        "Réduction de 75 % des rendez-vous non honorés",
        "Dossiers patients conformes et chiffrés",
        "Rappels automatisés 24 h avant consultation",
      ],
      metric: "−12 h / mois",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#2C4A7C]" />,
      title: "Formation & Établissements",
      desc: "Portail d&apos;inscription autonome, encaissement échelonné, attestations générées en 1 clic et suivi des présences.",
      features: [
        "Paiements mensualisés automatisés",
        "Génération instantanée des conventions",
        "Tableau de bord de rentabilité par session",
      ],
      metric: "100 % automatisé",
    },
    {
      icon: <Store className="w-6 h-6 text-[#FF9500]" />,
      title: "Commerces & Prestataires",
      desc: "Gestion de stock temps réel, devis et factures reliés, relances impayés programmées et réservation directe.",
      features: [
        "Relances impayés envoyées en 3 clics",
        "Catalogue synchronisé sans double saisie",
        "Accès mobile pour vos équipes terrain",
      ],
      metric: "0 impayé oublié",
    },
  ];

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-[#F3F6FA] border-b border-[#E2E9F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Nomira Logo */}
        <NomiraDivider
          badge="04 · Les Micro-Solutions"
          align="center"
          theme="light"
          markHeight={28}
        />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A2838] tracking-tight mb-6">
            Des strates logicielles adaptées à vos contraintes de gestion
          </h2>
          <p className="text-lg text-[#4A6890] leading-relaxed">
            Plutôt que d&apos;imposer un progiciel lourd et complexe, Nomira assemble uniquement les fonctionnalités indispensables à votre rentabilité.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {solutions.map((s, i) => (
            <Card
              key={i}
              variant="light"
              hoverEffect
              className="flex flex-col justify-between p-7 group border-[#E2E9F3] hover:border-[#2C4A7C]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-[10px] bg-[#F3F6FA] border border-[#E2E9F3] flex items-center justify-center group-hover:bg-[#2C4A7C] group-hover:text-white transition-colors duration-300">
                    <span className="group-hover:text-white transition-colors">
                      {s.icon}
                    </span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E2E9F3] text-[#2C4A7C] font-heading">
                    {s.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1A2838] mb-3 group-hover:text-[#2C4A7C] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[#4A6890] leading-relaxed mb-6">
                  {s.desc}
                </p>

                <div className="space-y-2 border-t border-[#E2E9F3] pt-4 mb-6">
                  {s.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1A2838]">
                      <Check className="w-4 h-4 text-[#FF9500] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setActiveSection(8)} // To contact
                className="w-full justify-center group-hover:bg-[#2C4A7C] group-hover:text-white group-hover:border-[#2C4A7C]"
              >
                Chiffrer ce cas d&apos;usage
              </Button>
            </Card>
          ))}
        </div>

        {/* Custom Demand Card with Nomira Logo Emblem */}
        <div className="max-w-4xl mx-auto p-8 rounded-[12px] bg-white border border-[#E2E9F3] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="shrink-0 p-3 rounded-xl bg-[#F3F6FA] border border-[#E2E9F3] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#FF9500]" />
            </div>
            <div className="text-left">
              <h4 className="text-lg font-bold text-[#1A2838] mb-1">
                Votre métier exige un workflow particulier ?
              </h4>
              <p className="text-sm text-[#4A6890]">
                C&apos;est le cœur de mission de Nomira : composer votre outil sur mesure en 4 jours chrono.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => setActiveSection(8)}
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Décrire votre processus
          </Button>
        </div>
      </div>
    </section>
  );
}
