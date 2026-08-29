export function ProblemSection() {
  const symptoms = [
    { icon: "📋", title: "Gestion manuelle", desc: "Vous gérez encore vos rendez-vous ou inscriptions sur papier ou WhatsApp" },
    { icon: "🔍", title: "Manque de visibilité", desc: "Vous n'avez aucune visibilité claire sur votre activité (qui doit quoi, à quelle date)" },
    { icon: "💸", title: "Pertes financières", desc: "Vous perdez des clients ou des paiements par manque de suivi" },
    { icon: "🧩", title: "Logiciels inadaptés", desc: "Les logiciels du marché sont soit trop génériques, soit hors de prix, soit trop complexes" },
  ];

  return (
    <section id="probleme" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
            Le constat
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
            Vous perdez du temps et de l'argent sur des tâches qui devraient être automatiques
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Carnet de rendez-vous, fichiers Excel dispersés, relances clients oubliées, facturation manuelle... Chaque heure passée sur ces tâches est une heure en moins pour développer votre activité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {symptoms.map((item, i) => (
            <div 
              key={i} 
              className="group flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 backdrop-blur-sm card-hover hover:border-blue-500/40 hover:bg-white active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100/60 text-blue-600 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-6 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-100 shadow-sm max-w-2xl">
            <p className="text-lg font-semibold text-blue-950 italic">
              « Et si votre outil n'existait pas encore parce que personne ne vous l'avait proposé au bon prix et au bon délai ? »
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
