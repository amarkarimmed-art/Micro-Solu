import Link from "next/link";

export function SolutionsSection() {
  const solutions = [
    { icon: "🩺", title: "Cabinets médicaux & dentaires", desc: "Agenda de rendez-vous, dossiers patients, rappels automatiques par SMS, facturation intégrée." },
    { icon: "🏫", title: "Écoles & centres de formation", desc: "Portail d'inscription en ligne, paiement des frais de scolarité, communication avec les parents." },
    { icon: "🛒", title: "Commerces & prestataires de service", desc: "Caisse, gestion de stock, réservation en ligne." },
  ];

  return (
    <section id="nos-solutions" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            Nos solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
            Un socle solide, adapté à votre métier
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Plutôt que de repartir de zéro à chaque projet, nous nous appuyons sur des briques logicielles éprouvées (agenda, facturation, gestion des paiements, communication client...) que nous configurons précisément pour votre activité. Vous obtenez un outil sur mesure, sans payer le prix d'un développement 100% from scratch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 overflow-hidden card-hover hover:-translate-y-2 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 active:scale-[0.97]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-2xl bg-blue-100/60 text-blue-600 flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 italic max-w-3xl mx-auto mb-8 text-lg">
            Votre activité ne rentre pas exactement dans ces cases ? C'est justement le principe : chaque solution est configurée pour votre réalité, pas l'inverse.
          </p>
          <Link 
            href="/demands" 
            className="relative overflow-hidden group inline-flex px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold transition-all duration-300 ease-out hover:bg-blue-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/40 active:scale-95 shadow-lg shadow-blue-600/30"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10 flex items-center gap-2">
              Décrire mon besoin
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
