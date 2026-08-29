export function SubsidiesSection() {
  return (
    <section id="subventions" className="relative py-24 bg-blue-950 text-white overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-6 animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            Subvention d'État
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 leading-tight">
            Votre transformation numérique peut être <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">financée jusqu'à 90%</span> par l'État
          </h2>
        </div>

        <div className="space-y-4 text-lg text-blue-100 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          <p className="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover hover:border-emerald-400/30 backdrop-blur-sm">
            Dans le cadre des programmes <strong className="text-white">MOWAKABA</strong> et <strong className="text-white">Digital Morocco 2030</strong>, une grande partie du coût de votre projet peut être prise en charge par des subventions publiques dédiées à la digitalisation des TPE/PME marocaines.
          </p>
          <p className="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover hover:border-emerald-400/30 backdrop-blur-sm">
            Nous vous accompagnons pour vérifier votre éligibilité et monter le dossier — en plus du développement de votre solution.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { icon: "🔎", title: "Vérification incluse", desc: "Vérification d'éligibilité incluse dans le diagnostic gratuit" },
            { icon: "📝", title: "Accompagnement", desc: "Accompagnement dans les démarches" },
            { icon: "🙌", title: "Sans expertise", desc: "Aucune expertise administrative requise de votre part" },
          ].map((b, i) => (
            <div 
              key={i} 
              className="group p-6 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md card-hover hover:border-emerald-400/40 active:scale-[0.96]"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 group-hover:bg-emerald-400 group-hover:text-blue-950 transition-all duration-300">
                {b.icon}
              </div>
              <h3 className="font-bold mb-1 text-white">{b.title}</h3>
              <p className="text-blue-100 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#cta" 
            className="relative overflow-hidden group inline-flex px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-emerald-500/40 active:scale-95 shadow-lg shadow-emerald-500/25"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10 flex items-center gap-2">
              Vérifier mon éligibilité
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
