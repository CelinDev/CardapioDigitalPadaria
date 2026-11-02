import React from "react";
import { BAKERY_INFO, getWhatsAppLink } from "@/data/bakery";
import Logo from "./Logo";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const whatsappLink = getWhatsAppLink();

  return (
    <footer className="mt-12 bg-[#713F45] text-[#FFF8F0] border-t-4 border-[#E8B75F]">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:py-10">
        <div className="flex flex-col items-center text-center">
          <Logo compact />

          <p className="mt-3 font-serif text-lg font-bold tracking-wide text-[#FFF8F0]">
            {BAKERY_INFO.name} — {BAKERY_INFO.subtitle}
          </p>

          <p className="mt-1 font-serif italic text-sm text-[#E8B75F]">
            &ldquo;{BAKERY_INFO.slogan}&rdquo;
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#FFF8F0]/90">
            <span className="inline-flex items-center gap-1.5">
              <MapPin
                className="h-4 w-4 text-[#E8B75F] shrink-0"
                aria-hidden="true"
              />
              {BAKERY_INFO.address.full}
            </span>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#E8B75F] hover:underline font-semibold"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {BAKERY_INFO.phone.display}
            </a>
          </div>

          <div className="mt-6 w-full border-t border-[#B96F78]/40 pt-4 text-xs text-[#FFF8F0]/75 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              © {new Date().getFullYear()} {BAKERY_INFO.name}. Todos os direitos
              reservados.
            </p>
            <p>Cardápio Digital Oficial — Consulta na mesa via QR Code</p>
          </div>
        </div>
      </div>

      {/* Botão flutuante discreto para WhatsApp em telas móveis */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Padaria Massa Fina pelo WhatsApp"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#713F45] hover:bg-[#582E33] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#FFF8F0] border-2 border-[#E8B75F] shadow-modal transition-transform hover:scale-105"
      >
        <MessageCircle className="h-4 w-4 text-[#E8B75F]" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </footer>
  );
}

