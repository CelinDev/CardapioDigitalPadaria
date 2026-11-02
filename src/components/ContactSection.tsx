import React from "react";
import { BAKERY_INFO, getWhatsAppLink } from "@/data/bakery";
import { MapPin, Phone, MessageCircle, Sparkles } from "lucide-react";

export default function ContactSection() {
  const whatsappLink = getWhatsAppLink();

  return (
    <section
      id="contato"
      aria-labelledby="heading-contato"
      className="mt-10 rounded-2xl bg-[#FFF8F0] border-2 border-[#E8B75F] shadow-card overflow-hidden"
    >
      <div className="bg-gradient-to-r from-[#B96F78] via-[#AD626B] to-[#713F45] px-4 sm:px-6 py-4 border-b-2 border-[#E8B75F] flex items-center gap-2.5">
        <Sparkles className="h-5 w-5 text-[#E8B75F]" aria-hidden="true" />
        <h2
          id="heading-contato"
          className="font-serif text-lg sm:text-xl font-bold text-[#FFF8F0] tracking-wide uppercase"
        >
          Contato, Encomendas e Localização
        </h2>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
        {/* Endereço e Telefone */}
        <div className="space-y-4">
          <div>
            <h3 className="font-serif text-lg font-bold text-[#713F45]">
              {BAKERY_INFO.name} — {BAKERY_INFO.subtitle}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#713F45]/85">
              Fale com nossa equipe para tirar dúvidas sobre produtos, consultar
              sabores de bolos do dia ou realizar encomendas especiais.
            </p>
          </div>

          <div className="space-y-3">
            {/* Endereço */}
            <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-[#D99AA0]/60">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF8F0] text-[#B96F78] border border-[#E8B75F]">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#B96F78]">
                  Endereço
                </span>
                <p className="text-sm sm:text-base font-medium text-[#713F45]">
                  {BAKERY_INFO.address.street}
                </p>
                <p className="text-xs sm:text-sm text-[#713F45]/85">
                  {BAKERY_INFO.address.city} - {BAKERY_INFO.address.state}
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-3 rounded-xl bg-white p-3.5 border border-[#D99AA0]/60">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF8F0] text-[#B96F78] border border-[#E8B75F]">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#B96F78]">
                  Telefone e WhatsApp
                </span>
                <a
                  href={`tel:+${BAKERY_INFO.phone.raw}`}
                  className="text-base sm:text-lg font-serif font-bold text-[#713F45] hover:text-[#B96F78] transition-colors"
                >
                  {BAKERY_INFO.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cartão de Chamada para o WhatsApp */}
        <div className="rounded-2xl bg-gradient-to-br from-[#713F45] to-[#9E5760] p-5 sm:p-6 text-center text-[#FFF8F0] border border-[#E8B75F] shadow-sm">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8F0]/15 border border-[#E8B75F]">
            <MessageCircle
              className="h-6 w-6 text-[#E8B75F]"
              aria-hidden="true"
            />
          </div>

          <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FFF8F0]">
            Atendimento pelo WhatsApp
          </h4>
          <p className="mt-1.5 text-xs sm:text-sm text-[#FFF8F0]/90 leading-relaxed">
            Clique no botão abaixo para conversar diretamente com a equipe da{" "}
            <strong>Padaria Massa Fina</strong> pelo WhatsApp.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#E8B75F] hover:bg-[#f3c674] px-6 py-3 text-sm font-bold text-[#713F45] shadow-md transition-all duration-150"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Falar no WhatsApp {BAKERY_INFO.phone.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

