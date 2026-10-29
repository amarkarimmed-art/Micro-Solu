"use client";

import { useState } from "react";
import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "Combien coûte une micro-solution Normina ?",
      a: "Chaque projet est chiffré à prix forfaitaire définitif dès le diagnostic initial gratuit. Vous connaissez le montant exact avant tout engagement, sans aucun frais masqué en cours de déploiement.",
    },
    {
      q: "Comment garantissez-vous un déploiement en quelques jours ?",
      a: "Nos strates logicielles sont préconçues, modulaires et testées. Nous n'avons qu'à configurer vos règles de gestion et vos données, ce qui élimine les mois de développement redondant.",
    },
    {
      q: "Mes collaborateurs ont-ils besoin de compétences techniques ?",
      a: "Non. Nos interfaces sont épurées, intuitives et adaptées aux personnes sans affinité technique. Une session de formation pratique de votre équipe est systématiquement incluse.",
    },
    {
      q: "Que se passe-t-il après la mise en service ?",
      a: "Un suivi de disponibilité et de maintenance préventive assure la sécurité, les sauvegardes et l'assistance réactive de vos outils.",
    },
    {
      q: "Comment fonctionne l'aide et la subvention de l'État ?",
      a: "Normina effectue un test d'éligibilité immédiat lors du premier échange et monte pour vous le dossier de prise en charge financière.",
    },
    {
      q: "Mon secteur d'activité est très spécifique, est-ce adapté ?",
      a: "Nos strates s'adaptent précisément à vos processus réels (gestion de plannings atypiques, facturation par paliers, workflows réglementés, etc.).",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#F3F6FA] border-b border-[#E2E9F3] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Nomira Logo */}
        <NomiraDivider
          badge="07 · Foire Aux Questions"
          align="center"
          theme="light"
          markHeight={28}
        />

        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="mb-4">
            <NomiraLogo variant="mark" theme="light" height={32} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1A2838] tracking-tight mb-4">
            Tout ce que vous devez savoir avant de démarrer
          </h2>
          <p className="text-base text-[#4A6890]">
            Des réponses claires, transparentes et directes.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-[12px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#2C4A7C] shadow-[0_4px_16px_rgba(19,27,36,0.06)]"
                    : "border-[#E2E9F3] hover:border-[#C3D0E2]"
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer select-none"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`text-base font-bold transition-colors ${
                    isOpen ? "text-[#2C4A7C]" : "text-[#1A2838]"
                  }`}>
                    {item.q}
                  </span>
                  <span
                    className={`ml-4 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? "bg-[#FF9500] text-white rotate-180"
                        : "bg-[#F3F6FA] text-[#2C4A7C]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#4A6890] leading-relaxed border-t border-[#E2E9F3]/50">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
