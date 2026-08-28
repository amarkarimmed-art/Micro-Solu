import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6">
          Votre logiciel sur mesure, livré en 1 mois, à prix fixe annoncé d'avance.
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
          Nous développons des outils numériques adaptés à votre métier — gestion de rendez-vous, facturation, stock, inscriptions — sans les délais interminables ni les devis qui explosent en cours de route.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-200 text-sm font-medium">⏱ Livré en 1 mois</div>
          <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-200 text-sm font-medium">💰 Prix forfaitaire</div>
          <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-200 text-sm font-medium">🛠 Code garanti maintenable</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/demands"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-center"
          >
            Demander un diagnostic gratuit
          </Link>
          <Link
            href="#comment-ca-marche"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors text-center"
          >
            Voir comment ça marche
          </Link>
        </div>
      </div>
    </section>
  );
}
