"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createDemand } from "@/services/api";
import Link from "next/link";
import { Suspense } from "react";
import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
    <div className="py-16 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <Link href="/">
            <NomiraLogo variant="horizontal" theme="light" height={44} />
          </Link>
        </div>

        <NomiraDivider badge="Diagnostic sur mesure" align="center" theme="light" markHeight={28} />

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1A2838] tracking-tight mt-1 mb-3">
            Décrivez votre problématique de gestion
          </h1>
          <p className="text-[#4A6890] text-base max-w-xl mx-auto">
            Nos consultants étudient votre cas d&apos;usage et vous transmettent un cadrage chiffré sous 24h ouvrées.
          </p>
        </div>

        {success ? (
          <div className="bg-white rounded-[12px] border border-[#E2E9F3] p-8 sm:p-12 text-center shadow-sm">
            <div className="flex justify-center mb-6">
              <NomiraLogo variant="horizontal" theme="light" height={42} />
            </div>
            <div className="w-16 h-16 rounded-full bg-[#1D9E75]/15 text-[#1D9E75] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#1A2838] mb-3">
              Demande enregistrée avec succès
            </h2>
            <p className="text-[#4A6890] mb-8 max-w-md mx-auto">
              Merci <span className="font-semibold text-[#1A2838]">{form.contact_name}</span>. Notre équipe technique a bien reçu la description de votre besoin pour <span className="font-semibold text-[#1A2838]">{form.company}</span> et prendra contact à l&apos;adresse <span className="font-semibold text-[#1A2838]">{form.email}</span>.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="/">
                <Button variant="primary" size="md">
                  Retour à l&apos;accueil Nomira
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[12px] border border-[#E2E9F3] p-8 sm:p-10 shadow-sm space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E9F3]">
              <div className="flex items-center gap-2.5">
                <NomiraLogo variant="mark" theme="light" height={22} />
                <span className="text-xs font-bold text-[#1A2838] uppercase tracking-wider">
                  Dossier de Cadrage Rapide
                </span>
              </div>
              <span className="text-xs font-semibold text-[#FF9500] px-2.5 py-0.5 rounded-full bg-[#FF9500]/10 border border-[#FF9500]/20">
                Réponse sous 24h
              </span>
            </div>
            {error && (
              <div className="p-4 rounded-[6px] bg-[#D8412A]/10 border border-[#D8412A]/30 text-[#D8412A] text-sm font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                  Entreprise <span className="text-[#ED7410]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="ex: Cabinet Médical Atlas"
                  className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all text-[#1A2838] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                  Nom du contact <span className="text-[#ED7410]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.contact_name}
                  onChange={(e) => setForm({ ...form, contact_name: e.target.value })}
                  placeholder="ex: Dr. Youssef Alami"
                  className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all text-[#1A2838] text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                  Email professionnel <span className="text-[#ED7410]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="contact@cabinet-atlas.ma"
                  className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all text-[#1A2838] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                  Téléphone ou WhatsApp
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+212 6 XX XX XX XX"
                  className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all text-[#1A2838] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                Décrivez votre problème ou besoin <span className="text-[#ED7410]">*</span>{" "}
                <span className="text-[11px] font-normal text-[#93A9C7]">(minimum 20 caractères)</span>
              </label>
              <textarea
                required
                rows={5}
                minLength={20}
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                placeholder="Détaillez vos processus manuels actuels, le temps consacré et le résultat attendu..."
                className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all text-[#1A2838] text-sm resize-none"
              />
              <div className="text-right text-xs text-[#93A9C7] mt-1">
                {form.problem.length}/20 min
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={submitting || form.problem.length < 20}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full justify-center"
            >
              {submitting ? "Envoi en cours..." : "Transmettre ma demande"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function DemandsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-[#4A6890]">Chargement...</div>}>
      <DemandFormContent />
    </Suspense>
  );
}
