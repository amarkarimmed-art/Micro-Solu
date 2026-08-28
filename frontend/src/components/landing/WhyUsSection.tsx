export function WhyUsSection() {
  const points = [
    {
      icon: "🎯",
      title: "On connaît votre métier",
      desc: "Nos solutions sont pensées pour des secteurs précis, pas pour \"toutes les entreprises\". Moins d'allers-retours pour vous expliquer votre activité.",
    },
    {
      icon: "💰",
      title: "Prix fixe, annoncé avant tout engagement",
      desc: "Vous savez combien ça coûte avant de dire oui. Pas de facturation à l'heure, pas de dérive de budget.",
    },
    {
      icon: "🛡",
      title: "Garantie de qualité et de maintenabilité",
      desc: "Votre code n'est pas une boîte noire. Il est documenté, propre, et peut être repris par n'importe quel développeur si besoin — vous n'êtes jamais bloqué.",
    },
    {
      icon: "🇲🇦",
      title: "Financement facilité",
      desc: "Éligibilité aux subventions publiques vérifiée dès le départ, pour réduire votre investissement réel.",
    },
  ];

  return (
    <section id="pourquoi-nous" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-16">
          Pourquoi nous plutôt qu'un freelance ou un logiciel générique ?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((p, i) => (
            <div key={i} className="flex gap-4 p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-3xl">{p.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
