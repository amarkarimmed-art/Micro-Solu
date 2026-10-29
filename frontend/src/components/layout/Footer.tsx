"use client";

import Link from "next/link";
import { NomiraLogo } from "@/components/ui/NomiraLogo";
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, QrCode } from "lucide-react";
import { BRANDING } from "@/config/branding";

export function Footer() {
  return (
    <footer className="bg-[#1A2838] text-[#93A9C7] border-t border-[#3A5C8A]/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Manifesto */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block py-1 group/footer-logo">
                <NomiraLogo
                  variant="horizontal"
                  theme="dark"
                  height={42}
                  speed="normal"
                  className="transition-transform duration-300 group-hover/footer-logo:scale-[1.02]"
                />
              </Link>
            </div>
            <p className="text-sm text-[#C3D0E2] max-w-sm leading-relaxed">
              « Un problème visé. Un coût en moins. Des micro-solutions logicielles conçues pour libérer les dirigeants des gaspillages de temps et de ressources. »
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#8FB0DC]">
              <ShieldCheck className="w-4 h-4 text-[#FF9500]" />
              <span>Diagnostic sans engagement · Accompagnement jusqu&apos;à 70 % subventionné</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 border-b border-[#3A5C8A]/40 pb-2">
              Solutions & Parcours
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#constat" className="hover:text-[#FFA23C] transition-colors flex items-center gap-1 group">
                  <span>Le constat</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#parcours" className="hover:text-[#FFA23C] transition-colors flex items-center gap-1 group">
                  <span>Comment ça marche</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="hover:text-[#FFA23C] transition-colors flex items-center gap-1 group">
                  <span>Nos micro-solutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#subventions" className="hover:text-[#FFA23C] transition-colors flex items-center gap-1 group">
                  <span>Financements & Subventions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#FFA23C] transition-colors flex items-center gap-1 group">
                  <span>Foire aux questions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/carte-visite" className="hover:text-[#FFA23C] transition-colors flex items-center gap-1 group text-[#FFA23C]">
                  <span>Carte de visite officielle</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct & QR Code */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 border-b border-[#3A5C8A]/40 pb-2">
              Contact & Échange
            </h3>
            <ul className="space-y-3 text-sm text-[#C3D0E2]">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF9500] shrink-0" />
                <a
                  href={`mailto:${BRANDING.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BRANDING.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF9500] shrink-0" />
                <a
                  href={BRANDING.contact.telLink}
                  className="hover:text-white transition-colors font-medium"
                >
                  {BRANDING.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF9500] shrink-0" />
                <span>{BRANDING.contact.address}</span>
              </li>
              <li className="pt-2">
                <a
                  href={BRANDING.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF9500] hover:text-[#FFB300] transition-colors bg-[#2C4A7C]/40 px-3 py-1.5 rounded-full border border-[#3A5C8A]/50"
                >
                  <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
                  WhatsApp Direct (+212 6 61 57 42 47)
                </a>
              </li>
              <li className="pt-2 flex items-center gap-3 bg-[#141F2D] p-2.5 rounded-xl border border-[#3A5C8A]/30">
                <img
                  src="/brand/qr-nomira.png"
                  alt="QR Code nomira.ma"
                  className="w-12 h-12 rounded-lg bg-white p-1 shrink-0"
                />
                <div className="text-[11px] leading-tight">
                  <span className="font-bold text-white block">Scanner pour visiter</span>
                  <a
                    href={BRANDING.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFA23C] hover:underline"
                  >
                    {BRANDING.website.display}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row with brand signature */}
        <div className="pt-8 border-t border-[#3A5C8A]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8FB0DC] gap-4">
          <div className="flex items-center gap-2.5">
            <NomiraLogo variant="mark" theme="dark" height={20} />
            <p>© {new Date().getFullYear()} {BRANDING.name}. Tous droits réservés. Regagnez vos ressources.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <a
              href={BRANDING.website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF9500] hover:underline font-semibold"
            >
              {BRANDING.website.display}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
