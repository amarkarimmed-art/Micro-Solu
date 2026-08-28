import Link from "next/link";
import { getSolutions } from "@/services/api";
import type { Solution, PaginatedResponse } from "@/types";

export const revalidate = 60; // ISR cache 60s

export default async function Home() {
  let solutionsData: PaginatedResponse<Solution> = {
    data: [],
    meta: { current_page: 1, last_page: 1, per_page: 12, total: 0 },
  };

  try {
    solutionsData = await getSolutions(3);
  } catch {
    // fallback if API is unreachable during build
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-slate-900 to-slate-950 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Plateforme B2B de micro-solutions digitales
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto mb-6">
            Transformez vos défis en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">solutions digitales</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Décrivez votre problématique métier. Notre équipe conçoit et développe la solution sur mesure parfaitement adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demands"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-center"
              >
                Décrire mon problème
              </Link>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Processus simple
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-1 mb-12">
            Comment ça marche ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Décrivez votre problème</h3>
              <p className="text-slate-600 text-sm">
                Remplissez notre formulaire en quelques clics pour nous expliquer votre besoin métier ou votre blocage technique.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Analyse & Conception</h3>
              <p className="text-slate-600 text-sm">
                Nos experts étudient votre demande et vous proposent une architecture technique et un chiffrage précis.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Développement & Livraison</h3>
              <p className="text-slate-600 text-sm">
                Nous développons votre solution sur mesure, la testons rigoureusement et l&apos;installons pour vous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Engagements Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Nos engagements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-4">
              Pourquoi faire confiance à Micro-Solu ?
            </h2>
            <p className="text-slate-600 text-base">
              Nous combinons excellence technique, agilité et transparence pour propulser votre entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 font-bold text-lg">
                ★
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Qualité & Expérience</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Une équipe d&apos;ingénieurs seniors passionnés, cumulant des années d&apos;expérience dans la conception de solutions B2B robustes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 font-bold text-lg">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Rapidité de livraison</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Des cycles courts et une méthodologie agile pour concevoir et déployer votre application en un temps record.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 font-bold text-lg">
                €
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Prix juste & Transparent</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Un modèle de micro-solutions modulaires sans coûts cachés, offrant un retour sur investissement rapide et maîtrisé.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 font-bold text-lg">
                ✓
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Garantie & Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Toutes nos solutions incluent une garantie de bon fonctionnement, un support technique dédié et un suivi rigoureux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Prêt à digitaliser votre activité ?
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Parlons de votre projet dès aujourd&apos;hui. Aucun engagement requis.
          </p>
          <Link
            href="/demands"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-blue-900 font-bold hover:bg-slate-100 transition-colors shadow-lg"
          >
            Soumettre une demande
          </Link>
        </div>
      </section>
    </div>
  );
}
