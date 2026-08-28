import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-95">
            M
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
            Micro<span className="text-blue-600 transition-colors duration-300 group-hover:text-blue-500">Solu</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {[
            { href: "#comment-ca-marche", label: "Comment ça marche" },
            { href: "#nos-solutions", label: "Nos solutions" },
            { href: "#subventions", label: "Subventions" },
            { href: "#pourquoi-nous", label: "Pourquoi nous" },
            { href: "#faq", label: "FAQ" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="relative py-1 hover:text-blue-600 transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/demands"
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm overflow-hidden group shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/30 transform transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative">Demander un diagnostic gratuit</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
