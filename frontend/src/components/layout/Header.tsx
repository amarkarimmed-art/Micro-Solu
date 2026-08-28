import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
            M
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Micro<span className="text-blue-600">Solu</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="#comment-ca-marche" className="hover:text-blue-600 transition-colors">Comment ça marche</Link>
          <Link href="#nos-solutions" className="hover:text-blue-600 transition-colors">Nos solutions</Link>
          <Link href="#subventions" className="hover:text-blue-600 transition-colors">Subventions</Link>
          <Link href="#pourquoi-nous" className="hover:text-blue-600 transition-colors">Pourquoi nous</Link>
          <Link href="#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/demands"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20"
          >
            Demander un diagnostic gratuit
          </Link>
        </div>
      </div>
    </header>
  );
}
