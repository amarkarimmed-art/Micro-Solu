export function ValuePropSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-8">
          Comment on tient un délai de 1 mois, sérieusement ?
        </h2>
        <div className="space-y-4 text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
          <p>
            La plupart des agences sont lentes parce qu'elles repartent de zéro à chaque projet, et parce que chaque étape (cadrage, développement, tests) se fait manuellement, en série.
          </p>
          <p>
            Nous avons construit un pipeline de développement assisté par intelligence artificielle qui couvre tout le cycle : recueil de vos besoins, priorisation, planification, développement, tests, mise en production. Résultat : moins de temps perdu en allers-retours, moins d'erreurs humaines, et un délai qu'on peut vous garantir dès le départ.
          </p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 text-center mb-8">
          Ce que ça change concrètement pour vous
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-3xl mb-4">⏱</div>
            <p className="font-medium text-slate-800">
              Un délai qu'on peut annoncer avec confiance, pas "on verra"
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-3xl mb-4">✅</div>
            <p className="font-medium text-slate-800">
              Moins d'erreurs, donc moins d'allers-retours et de frais cachés
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-3xl mb-4">🛠</div>
            <p className="font-medium text-slate-800">
              Un code propre et documenté, donc maintenable dans la durée — pas un bricolage que seul un développeur peut comprendre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
