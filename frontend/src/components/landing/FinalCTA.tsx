"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NomiraDivider } from "@/components/ui/NomiraDivider";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    sector: "",
    friction: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:8000/api/demands", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur");
      router.push("/demands?success=1");
    } catch {
      router.push(
        `/demands?name=${encodeURIComponent(form.name)}&phone=${encodeURIComponent(
          form.phone
        )}&sector=${encodeURIComponent(form.sector)}&friction=${encodeURIComponent(
          form.friction
        )}`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1A2838] text-white py-24 sm:py-32"
    >
      {/* Background Nomira Pixel Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pixels" width="24" height="24" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="4" height="4" rx="1" fill="#FF9500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pixels)" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#2C4A7C]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Nomira Logo Mark */}
        <NomiraDivider
          badge="08 · Diagnostic Chiffré"
          align="center"
          theme="dark"
          markHeight={28}
        />

        <div className="text-center mb-12 flex flex-col items-center">
          <div className="mb-4">
            <NomiraLogo variant="horizontal" theme="dark" height={44} />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight mb-4 tracking-tight">
            Regagnez vos ressources dès ce mois-ci
          </h2>
          <p className="text-lg text-[#C3D0E2] max-w-2xl mx-auto leading-relaxed">
            Un diagnostic personnalisé de 30 minutes, 100 % gratuit et sans engagement, pour chiffrer précisément votre gain de temps et d&apos;argent.
          </p>
        </div>

        {/* Crisp Card Form adhering to brand styling */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[12px] p-8 sm:p-10 shadow-[0_8px_24px_rgba(19,27,36,0.15)] text-left border border-[#E2E9F3]"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                Votre Nom & Prénom
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Ex. Karim Benali"
                className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] text-[#1A2838] placeholder-[#93A9C7] focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] transition-all text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                Téléphone ou WhatsApp
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Ex. +212 6 61 57 42 47"
                className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] text-[#1A2838] placeholder-[#93A9C7] focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] transition-all text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                Votre Entreprise / Secteur d&apos;activité
              </label>
              <input
                name="sector"
                value={form.sector}
                onChange={handleChange}
                placeholder="Ex. PME, cabinet d'expertise, clinique, transport & logistique..."
                className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] text-[#1A2838] placeholder-[#93A9C7] focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] transition-all text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1A2838] mb-2">
                Votre principal point de friction opérationnel
              </label>
              <textarea
                name="friction"
                value={form.friction}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Ex. Nous perdons 15 heures chaque mois à relancer les factures impayées manuellement..."
                className="w-full px-4 py-3 rounded-[6px] border border-[#C3D0E2] text-[#1A2838] placeholder-[#93A9C7] focus:outline-none focus:ring-2 focus:ring-[#FF9500] focus:border-[#FF9500] transition-all text-sm"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E2E9F3]">
            <div className="flex items-center gap-2 text-xs text-[#4A6890]">
              <ShieldCheck className="w-4 h-4 text-[#1D9E75]" />
              <span>Réponse sous 24h ouvrées · Données 100 % confidentielles</span>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={submitting}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              {submitting ? "Traitement en cours..." : "Demander le diagnostic (0 €)"}
            </Button>
          </div>
        </form>

        {/* Quick Action Direct Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
          <a
            href="tel:+212661574247"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A2838] border border-[#3A5C8A]/60 text-white hover:border-[#FF9500] hover:text-[#FFA23C] transition-all shadow-md"
          >
            <span>📞 Appelez-nous : +212 6 61 57 42 47</span>
          </a>
          <a
            href="https://wa.me/212661574247"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A2838] border border-[#1D9E75]/60 text-[#4ADE80] hover:bg-[#1D9E75]/20 transition-all shadow-md"
          >
            <span>💬 WhatsApp Direct : +212 6 61 57 42 47</span>
          </a>
          <a
            href="https://www.Normina.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1A2838] border border-[#3A5C8A]/60 text-[#8FB0DC] hover:text-white transition-all shadow-md"
          >
            <span>🌐 Visitez notre site : www.Normina.ma</span>
          </a>
        </div>
      </div>
    </section>
  );
}
