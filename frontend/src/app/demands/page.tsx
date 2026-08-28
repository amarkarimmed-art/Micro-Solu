"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createDemand } from "@/services/api";
import Link from "next/link";
import { Suspense } from "react";

function DemandFormContent() {
  const searchParams = useSearchParams();
  const prefilledSolution = searchParams.get("solution") || "";

  const [form, setForm] = useState({
    company: "",
    contact_name: "",
    email: "",
    phone: "",
    problem: prefilledSolution
      ? `Je souhaite commander ou adapter la solution : ${prefilledSolution}`
      : "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await createDemand(form);
      setSuccess(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Sur mesure
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1 mb-3">
            Décrivez votre problème digital
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Nos équipes étudient votre besoin et vous reviennent avec une proposition technique sous 48h.
          </p>
        </div>

        {success ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Demande bien enregistrée !
            </h2>
            <p className="text-slate-600 mb-8 max-w-md mx-auto">
              Merci <span className="font-semibold">{form.contact_name}</span>. Notre équipe technique a bien reçu votre demande pour <span className="font-semibold">{form.company}</span> et vous contactera très rapidement à <span className="font-semibold">{form.email}</span>.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/solutions"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
              >
                Explorer le catalogue
              </Link>
              <Link
                href="/"
                className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium text-sm hover:bg-slate-200 transition-colors"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6"
          >
            {error && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Entreprise <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="ex: Acme Corp"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nom du contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.contact_name}
                  onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
                  placeholder="ex: Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email professionnel <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jean.dupont@acme.fr"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Décrivez votre problème ou besoin <span className="text-red-500">*</span>{" "}
                <span className="text-xs font-normal text-slate-400">(minimum 20 caractères)</span>
              </label>
              <textarea
                required
                rows={5}
                minLength={20}
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                placeholder="Expliquez vos processus actuels, vos blocages et l'objectif recherché..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 text-sm resize-none"
              />
              <div className="text-right text-xs text-slate-400 mt-1">
                {form.problem.length}/20 min
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || form.problem.length < 20}
              className="w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed text-base"
            >
              {submitting ? "Envoi en cours..." : "Soumettre ma demande"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function DemandsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Chargement...</div>}>
      <DemandFormContent />
    </Suspense>
  );
}
