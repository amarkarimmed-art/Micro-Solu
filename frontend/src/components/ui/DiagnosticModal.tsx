"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Button } from "@/components/ui/Button";
import { BRANDING } from "@/config/branding";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSolution?: string;
}

export function DiagnosticModal({
  isOpen,
  onClose,
  defaultSolution = "",
}: DiagnosticModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    problem: defaultSolution,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultSolution) {
      setFormData((prev) => ({ ...prev, problem: defaultSolution }));
    }
  }, [defaultSolution]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0D1520]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E2E9F3] overflow-hidden z-10 transition-all transform scale-100 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header with Nomira Brand Identity */}
        <div className="bg-[#1A2838] px-6 py-5 border-b border-[#3A5C8A]/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <NomiraLogo variant="horizontal" theme="dark" height={36} />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#93A9C7] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer la boîte de dialogue"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="flex justify-center mb-4">
                <NomiraLogo variant="badge" theme="light" height={44} />
              </div>
              <div className="w-14 h-14 rounded-full bg-[#1D9E75]/15 text-[#1D9E75] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1A2838] mb-2 font-heading">
                Demande de Diagnostic Transmise
              </h3>
              <p className="text-sm text-[#4A6890] mb-6">
                Merci <span className="font-semibold text-[#1A2838]">{formData.name}</span>. Un consultant de l&apos;équipe Normina vous contactera sous 24h ouvrées avec un premier chiffrage.
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full justify-center"
              >
                Compris, fermer
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2C4A7C]/10 text-[#2C4A7C] border border-[#2C4A7C]/20 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF9500]" />
                  <span>30 min · 100% Gratuit & Sans engagement</span>
                </div>
                <h3 className="text-lg font-bold text-[#1A2838] font-heading">
                  Chiffrez votre gain de temps et d&apos;argent
                </h3>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-1.5">
                  Nom et Prénom <span className="text-[#ED7410]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex. Karim Benali"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-sm text-[#1A2838] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-1.5">
                    Téléphone / WhatsApp <span className="text-[#ED7410]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+212 6 XX XX XX XX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-sm text-[#1A2838] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@societe.ma"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-sm text-[#1A2838] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-1.5">
                  Votre Société ou Secteur
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ex. Clinique, Transport, Cabinet comptable, Commerce..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-sm text-[#1A2838] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-1.5">
                  Problème à résoudre ou solution visée
                </label>
                <textarea
                  rows={3}
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="Ex. Automatiser les relances de factures ou planifier les interventions terrain..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#C3D0E2] text-sm text-[#1A2838] focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={loading}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full justify-center shadow-lg shadow-[#FF9500]/20"
                >
                  {loading ? "Transmission..." : "Valider mon diagnostic 0 €"}
                </Button>
              </div>

              <div className="text-center pt-1 text-[11px] text-[#93A9C7]">
                Ou échangez directement via WhatsApp :{" "}
                <a
                  href={BRANDING.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF9500] font-semibold hover:underline"
                >
                  {BRANDING.contact.phone}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

