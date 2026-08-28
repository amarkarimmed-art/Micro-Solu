import Link from "next/link";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Cabinets médicaux & dentaires",
      desc: "Agenda de rendez-vous, dossiers patients, rappels automatiques par SMS, facturation intégrée.",
    },
    {
      title: "Écoles & centres de formation",
      desc: "Portail d'inscription en ligne, paiement des frais de scolarité, communication avec les parents.",
    },
    {
      title: "Commerces & prestataires de service",
      desc: "Caisse, gestion de stock, réservation en ligne.",
    },
  ];

  return (
    <section id="nos-solutions" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center mb-6">
          Un socle solide, adapté à votre métier
        </h2>
        <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16">
          Plutôt que de repartir de zéro à chaque projet, nous nous appuyons sur des briques logicielles éprouvées (agenda, facturation, gestion des paiements, communication client...) que nous configurons précisément pour votre activité. Vous obtenez un outil sur mesure, sans payer le prix d'un développement 100% from scratch.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 italic max-w-3xl mx-auto mb-8">
            Votre activité ne rentre pas exactement dans ces cases ? C'est justement le principe : chaque solution est configurée pour votre réalité, pas l'inverse.
          </p>
          <Link href="/demands" className="inline-flex px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-colors">
            Décrire mon besoin
          </Link>
        </div>
      </div>
    </section>
  );
}
