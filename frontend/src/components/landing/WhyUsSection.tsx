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
    <section id="pourquoi-nous" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            Nos différenciateurs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight">
            Pourquoi nous plutôt qu'un freelance ou un logiciel générique ?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div 
              key={i} 
              className="group flex gap-5 p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 card-hover hover:border-blue-400/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-blue-600 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
