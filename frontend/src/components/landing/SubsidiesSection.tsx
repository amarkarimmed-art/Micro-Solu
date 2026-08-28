export function SubsidiesSection() {
  return (
    <section id="subventions" className="py-20 bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
          Votre transformation numérique peut être financée jusqu'à 90% par l'État
        </h2>
        <div className="space-y-4 text-lg text-blue-100 text-center max-w-3xl mx-auto mb-12">
          <p>
            Dans le cadre des programmes MOWAKABA et Digital Morocco 2030, une grande partie du coût de votre projet peut être prise en charge par des subventions publiques dédiées à la digitalisation des TPE/PME marocaines.
          </p>
          <p>
            Nous vous accompagnons pour vérifier votre éligibilité et monter le dossier — en plus du développement de votre solution.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/10 border border-white/20">
            <h3 className="font-bold mb-2">🔎 Vérification incluse</h3>
            <p className="text-blue-100 text-sm">Vérification d'éligibilité incluse dans le diagnostic gratuit</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/10 border border-white/20">
            <h3 className="font-bold mb-2">📝 Accompagnement</h3>
            <p className="text-blue-100 text-sm">Accompagnement dans les démarches</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/10 border border-white/20">
            <h3 className="font-bold mb-2">🙌 Sans expertise</h3>
            <p className="text-blue-100 text-sm">Aucune expertise administrative requise de votre part</p>
          </div>
        </div>

        <div className="text-center">
          <a href="#cta" className="inline-flex px-8 py-4 rounded-xl bg-white text-blue-900 font-bold hover:bg-blue-50 shadow-lg transition-colors">
            Vérifier mon éligibilité
          </a>
        </div>
      </div>
    </section>
  );
}
