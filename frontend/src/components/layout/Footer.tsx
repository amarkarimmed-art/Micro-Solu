import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-md shadow-blue-500/20">
                M
              </div>
              <span className="text-lg font-bold text-white">MicroSolu</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm italic">
              "Des logiciels sur mesure, livrés vite, sans mauvaise surprise."
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#comment-ca-marche" className="hover:text-white transition-colors">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="#nos-solutions" className="hover:text-white transition-colors">
                  Nos solutions
                </Link>
              </li>
              <li>
                <Link href="#subventions" className="hover:text-white transition-colors">
                  Subventions
                </Link>
              </li>
              <li>
                <Link href="#pourquoi-nous" className="hover:text-white transition-colors">
                  Pourquoi nous
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact & Support
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span>💬 WhatsApp :</span>
                <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  +212 6 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📧 Email :</span>
                <a href="mailto:contact@microsolu.ma" className="hover:text-white transition-colors">
                  contact@microsolu.ma
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞 Tél :</span>
                <a href="tel:+212522000000" className="hover:text-white transition-colors">
                  +212 5 22 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} MicroSolu. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-400">Mentions légales</Link>
            <Link href="#" className="hover:text-slate-400">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
