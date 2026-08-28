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
      // Route vers /demands en fallback pour ne jamais perdre le prospect
      router.push(`/demands?name=${encodeURIComponent(form.name)}&phone=${encodeURIComponent(form.phone)}&sector=${encodeURIComponent(form.sector)}&friction=${encodeURIComponent(form.friction)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
          Prêt à savoir combien de temps — et d'argent — vous pourriez gagner ?
        </h2>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Le diagnostic est gratuit, sans engagement, et vous donne une réponse claire sur le périmètre, le prix et le délai.
        </p>

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
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Secteur d'activité</label>
              <input
                name="sector"
                value={form.sector}
                onChange={handleChange}
                placeholder="Ex. Cabinet médical, école, commerce..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 disabled:opacity-50"
            >
              {submitting ? "Envoi en cours..." : "Demander mon diagnostic gratuit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
