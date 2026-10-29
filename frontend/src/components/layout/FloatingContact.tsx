"use client";

import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { BRANDING } from "@/config/branding";
import { NomiraLogo } from "@/components/ui/NomiraLogo";

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in-left bg-[#1A2838]/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-[#3A5C8A]/60 text-white flex flex-col gap-2.5 transition-all duration-300 hover:border-[#FF9500]/50 group/floating">
      <div className="flex items-center justify-between gap-3 border-b border-[#3A5C8A]/40 pb-2">
        <div className="flex items-center gap-2">
          <NomiraLogo variant="mark" theme="dark" height={18} />
          <span className="text-xs font-bold text-white tracking-wide">
            Nomira Direct
          </span>
        </div>
        <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" title="Disponible" />
      </div>
      <div className="flex items-center gap-3">
        <Phone className="w-4 h-4 text-[#FF9500]" />
        <a
          href={`tel:${BRANDING.contact.phone.replace(/\s+/g, "")}`}
          className="text-xs font-semibold hover:text-[#FFA23C] transition-colors"
        >
          {BRANDING.contact.phone}
        </a>
        <a
          href={`https://wa.me/${BRANDING.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 p-1 rounded-full bg-[#1D9E75]/20 hover:bg-[#1D9E75]/40 text-[#1D9E75] hover:scale-110 transition-transform"
          title="WhatsApp direct"
        >
          <MessageSquare className="w-3.5 h-3.5" />
        </a>
      </div>
      <div className="flex items-center gap-3 border-t border-[#3A5C8A]/40 pt-2">
        <Mail className="w-4 h-4 text-[#8FB0DC]" />
        <a
          href={`mailto:${BRANDING.contact.email}`}
          className="text-xs text-[#C3D0E2] hover:text-white transition-colors"
        >
          {BRANDING.contact.email}
        </a>
      </div>
    </div>
  );
};
