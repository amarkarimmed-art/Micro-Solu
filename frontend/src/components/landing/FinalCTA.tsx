"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function FinalCTA() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    sector: "",
    friction: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      router.push(`/demands?name=${encodeURIComponent(form.name)}&phone=${encodeURIComponent(form.phone)}&sector=${encodeURIComponent(form.sector)}&friction=${encodeURIComponent(form.friction)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-950 text-white py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Prêt à savoir combien de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">temps — et d'argent</span> — vous pourriez gagner ?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Le diagnostic est gratuit, sans engagement, et vous donne une réponse claire sur le périmètre, le prix et le délai.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl text-left">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nom</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Téléphone / WhatsApp</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+212 6 XX XX XX XX"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Secteur d'activité</label>
              <input
                name="sector"
                value={form.sector}
                onChange={handleChange}
                placeholder="Ex. Cabinet médical, école, commerce..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                En une phrase, votre principal point de friction aujourd'hui
              </label>
              <textarea
                name="friction"
                value={form.friction}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Ex. Je gère trop de rendez-vous à la main..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              disabled={submitting}
              className="relative overflow-hidden group w-full px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold transition-all duration-300 ease-out hover:bg-blue-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/40 active:scale-[0.98] shadow-lg shadow-blue-600/30 disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative z-10">
                {submitting ? "Envoi en cours..." : "Demander mon diagnostic gratuit"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
