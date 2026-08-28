"use client";
import { useState } from "react";

export function FAQSection() {
  const faqs = [
    {
      q: "Combien ça coûte réellement ?",
      a: "Cela dépend de votre besoin exact. C'est justement l'objet du diagnostic gratuit : vous recevez un prix fixe et définitif avant de vous engager — jamais une estimation floue.",
    },
    {
      q: "Le délai d'un mois, c'est vraiment tenable ?",
      a: "Oui, grâce à notre méthode de développement assisté par IA qui structure et accélère chaque étape (cadrage, développement, tests). Le délai est fixé dès le cadrage, pas improvisé en cours de route.",
    },
    {
      q: "Et si je ne suis pas technique du tout ?",
      a: "Aucun problème. Vous n'avez rien à configurer vous-même : nous nous occupons de tout, y compris de la formation de votre équipe à la mise en service.",
    },
    {
      q: "Que se passe-t-il après la livraison ? Je suis bloqué si un problème survient ?",
      a: "Non. Un abonnement de maintenance mensuel prend en charge le suivi, les mises à jour et le support. Et le code étant propre et documenté, vous n'êtes jamais dépendant d'une seule personne.",
    },
    {
      q: "Puis-je vraiment être financé par l'État ?",
      a: "Nous vérifions votre éligibilité aux programmes MOWAKABA et Digital Morocco 2030 dès le diagnostic initial, sans frais.",
    },
    {
      q: "Et si mon activité ne correspond à aucun des exemples présentés ?",
      a: "Ces exemples illustrent notre méthode, pas une liste fermée. Décrivez-nous votre besoin : c'est justement notre travail de l'adapter.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
            Questions fréquentes
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm card-hover hover:border-blue-400/40"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <span 
                  className={`ml-4 w-8 h-8 rounded-full flex items-center justify-center text-blue-600 bg-blue-50 transition-all duration-300 ${open === i ? "rotate-180 bg-blue-600 text-white scale-110" : ""}`}
                >▾</span>
              </button>
              <div 
                className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">{item.a}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
