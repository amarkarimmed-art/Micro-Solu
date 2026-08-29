export function ValuePropSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            Notre avantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-8 leading-tight">
            Comment on tient un délai de 1 mois, sérieusement ?
          </h2>
        </div>

        <div className="space-y-5 text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          <p className="bg-slate-50 border border-slate-100 rounded-2xl p-6 card-hover hover:border-blue-200">
            La plupart des agences sont lentes parce qu'elles repartent de zéro à chaque projet, et parce que chaque étape (cadrage, développement, tests) se fait manuellement, en série.
          </p>
          <p className="bg-slate-50 border border-slate-100 rounded-2xl p-6 card-hover hover:border-blue-200">
            Nous avons construit un <strong className="text-blue-700">pipeline de développement assisté par intelligence artificielle</strong> qui couvre tout le cycle : recueil de vos besoins, priorisation, planification, développement, tests, mise en production. Résultat : moins de temps perdu en allers-retours, moins d'erreurs humaines, et un délai qu'on peut vous garantir dès le départ.
          </p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
          Ce que ça change concrètement pour vous
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "⏱", text: "Un délai qu'on peut annoncer avec confiance, pas \"on verra\"" },
            { icon: "✅", text: "Moins d'erreurs, donc moins d'allers-retours et de frais cachés" },
            { icon: "🛡", text: "Un code propre et documenté, donc maintenable dans la durée" },
          ].map((b, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 card-hover hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/5 active:scale-[0.98]"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-blue-600 flex items-center justify-center text-3xl mb-5 mx-auto group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {b.icon}
              </div>
              <p className="font-medium text-slate-800 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
