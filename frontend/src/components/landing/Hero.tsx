import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white py-24 lg:py-36">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-blue-500/10 animate-float">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-ping" />
          Standard 2026 — Logiciel Sur Mesure & Garanti
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
          Votre logiciel sur mesure, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">livré en 1 mois</span>, à prix fixe.
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nous développons des outils numériques adaptés à votre métier — gestion de rendez-vous, facturation, stock, inscriptions — sans les délais interminables ni les devis qui explosent en cours de route.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-sm font-medium backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:bg-white/10 hover:border-blue-400/30 shadow-md">
            ⏱ Livré en 1 mois
          </div>
          <div className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-sm font-medium backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:bg-white/10 hover:border-blue-400/30 shadow-md">
            💰 Prix forfaitaire
          </div>
          <div className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 text-sm font-medium backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:bg-white/10 hover:border-blue-400/30 shadow-md">
            🛠 Code garanti maintenable
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/demands"
            className="relative overflow-hidden group w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold transition-all duration-300 ease-out hover:bg-blue-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 text-center shadow-lg shadow-blue-600/30"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Demander un diagnostic gratuit
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
          <Link
            href="#comment-ca-marche"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 text-white font-semibold backdrop-blur-md border border-white/10 transition-all duration-300 ease-out hover:bg-white/20 hover:border-white/30 hover:scale-[1.03] active:scale-95 text-center shadow-lg"
          >
            Voir comment ça marche
          </Link>
        </div>
      </div>
    </section>
  );
}
