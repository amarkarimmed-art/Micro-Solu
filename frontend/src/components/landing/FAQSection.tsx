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
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-16">
          Questions fréquentes
        </h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <span className={`ml-4 text-blue-600 transition-transform ${open === i ? "rotate-180" : ""}`}>▾</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-slate-600">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
