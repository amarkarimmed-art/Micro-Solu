export function ProblemSection() {
  const symptoms = [
    { icon: "📋", title: "Gestion manuelle", desc: "Vous gérez encore vos rendez-vous ou inscriptions sur papier ou WhatsApp" },
    { icon: "🔍", title: "Manque de visibilité", desc: "Vous n'avez aucune visibilité claire sur votre activité (qui doit quoi, à quelle date)" },
    { icon: "💸", title: "Pertes financières", desc: "Vous perdez des clients ou des paiements par manque de suivi" },
    { icon: "🧩", title: "Logiciels inadaptés", desc: "Les logiciels du marché sont soit trop génériques, soit hors de prix, soit trop complexes" },
  ];

  return (
    <section id="probleme" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-12">
          Vous perdez du temps et de l'argent sur des tâches qui devraient être automatiques
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16">
          Carnet de rendez-vous, fichiers Excel dispersés, relances clients oubliées, facturation manuelle... Chaque heure passée sur ces tâches est une heure en moins pour développer votre activité.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {symptoms.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-slate-800 italic max-w-2xl mx-auto">
            Et si votre outil n'existait pas encore parce que personne ne vous l'avait proposé au bon prix et au bon délai ?
          </p>
        </div>
      </div>
    </section>
  );
}
