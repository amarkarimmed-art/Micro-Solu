import Link from "next/link";

export function ProcessSection() {
  const steps = [
    {
      num: "1",
      title: "Diagnostic",
      bold: "On identifie précisément votre problème.",
      desc: "Un échange (gratuit, sans engagement) pour comprendre votre activité, vos points de friction et ce qui vous ferait vraiment gagner du temps.",
    },
    {
      num: "2",
      title: "Cadrage",
      bold: "On fixe le périmètre, le prix et le délai — avant de commencer.",
      desc: "Vous recevez une proposition claire : ce qui sera livré, combien ça coûte, et quand. Aucune mauvaise surprise en cours de route.",
    },
    {
      num: "3",
      title: "Développement (2 à 3 semaines)",
      bold: "On construit votre solution.",
      desc: "Grâce à notre méthode de développement assisté par IA, nous allons vite sans sacrifier la qualité ni les tests.",
    },
    {
      num: "4",
      title: "Mise en production + formation",
      bold: "On vous met en route.",
      desc: "Installation, migration de vos données existantes si besoin, et formation de votre équipe pour une prise en main immédiate.",
    },
    {
      num: "5",
      title: "Maintenance récurrente",
      bold: "On reste à vos côtés.",
      desc: "Un abonnement mensuel de maintenance garantit que votre outil continue de fonctionner, d'évoluer et de rester sécurisé.",
    },
  ];

  return (
    <section id="comment-ca-marche" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Un parcours simple, cadré, sans surprise
        </h2>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
          Du premier échange à la mise en service, vous savez toujours où vous en êtes.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
          {steps.map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                {step.num}
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-700 text-sm mb-2">{step.bold}</p>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link href="/demands" className="inline-flex px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-colors">
            Démarrer mon diagnostic
          </Link>
        </div>
      </div>
    </section>
  );
}
