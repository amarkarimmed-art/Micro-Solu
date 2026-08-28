import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base">
                M
              </div>
              <span className="text-lg font-bold text-white">Micro-Solu</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Plateforme B2B de micro-solutions digitales. Nous concevons et développons des applications sur mesure pour booster votre activité.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>

              <li>
                <Link href="/demands" className="hover:text-white transition-colors">
                  Soumettre un problème
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact & Légal
            </h3>
            <p className="text-sm text-slate-400 mb-2">contact@micro-solu.fr</p>
            <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Micro-Solu. Tous droits réservés.</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          Plateforme propulsée par Laravel & Next.js
        </div>
      </div>
    </footer>
  );
}
