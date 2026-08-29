import Link from "next/link";

export function ProcessSection() {
  const steps = [
    {
      num: "1",
      title: "Diagnostic",
      bold: "On identifie précisément votre problème.",
      desc: "Un échange (gratuit, sans engagement) pour comprendre votre activité, vos points de friction et ce qui vous ferait vraiment gagner du temps.",
      icon: "🎯",
    },
    {
      num: "2",
      title: "Cadrage",
      bold: "On fixe le périmètre, le prix et le délai — avant de commencer.",
      desc: "Vous recevez une proposition claire : ce qui sera livré, combien ça coûte, et quand. Aucune mauvaise surprise en cours de route.",
      icon: "📐",
    },
    {
      num: "3",
      title: "Développement (2 à 3 semaines)",
      bold: "On construit votre solution.",
      desc: "Grâce à notre méthode de développement assisté par IA, nous allons vite sans sacrifier la qualité ni les tests.",
      icon: "⚙️",
    },
    {
      num: "4",
      title: "Mise en production + formation",
      bold: "On vous met en route.",
      desc: "Installation, migration de vos données existantes si besoin, et formation de votre équipe pour une prise en main immédiate.",
      icon: "🚀",
    },
    {
      num: "5",
      title: "Maintenance récurrente",
      bold: "On reste à vos côtés.",
      desc: "Un abonnement mensuel de maintenance garantit que votre outil continue de fonctionner, d'évoluer et de rester sécurisé.",
      icon: "🤝",
    },
  ];

  return (
    <section id="comment-ca-marche" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-bold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
          Le parcours
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4">
          Un parcours simple, cadré, sans surprise
        </h2>
        <p className="text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
          Du premier échange à la mise en service, vous savez toujours où vous en êtes.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group p-6 bg-white rounded-3xl border border-slate-200 shadow-sm card-hover hover:border-blue-400/40 active:scale-[0.97] flex flex-col transition-all duration-300"
            >
              <div className="relative inline-flex self-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-blue-600 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {step.num}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
              <p className="text-slate-700 text-sm mb-2">{step.bold}</p>
              <p className="text-slate-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link 
            href="/demands" 
            className="relative overflow-hidden group inline-flex px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold transition-all duration-300 ease-out hover:bg-blue-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/40 active:scale-95 shadow-lg shadow-blue-600/30"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10 flex items-center gap-2">
              Démarrer mon diagnostic
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
