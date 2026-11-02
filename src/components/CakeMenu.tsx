"use client";

import React from "react";
import { CakePriceTier, Category, Product } from "@/types/menu";
import { CAKE_PRICE_TIERS } from "@/data/categories";
import { formatProductPrice } from "@/data/products";
import { BAKERY_INFO, getWhatsAppLink } from "@/data/bakery";
import {
  Cake,
  Sparkles,
  Scale,
  Crown,
  Star,
  Award,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";

interface CakeMenuProps {
  category: Category;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

function getTierVisuals(tier: CakePriceTier) {
  switch (tier.tierLevel) {
    case "tradicional":
      return {
        Icon: Award,
        badgeBg: "bg-[#B96F78] text-[#FFF8F0]",
        headerBorder: "border-[#B96F78]",
        cardBg: "bg-white",
      };
    case "especial":
      return {
        Icon: Star,
        badgeBg: "bg-[#713F45] text-[#E8B75F] border border-[#E8B75F]",
        headerBorder: "border-[#E8B75F]",
        cardBg: "bg-white",
      };
    case "premium":
      return {
        Icon: Crown,
        badgeBg:
          "bg-gradient-to-r from-[#713F45] to-[#582E33] text-[#E8B75F] border border-[#E8B75F]",
        headerBorder: "border-[#E8B75F]",
        cardBg: "bg-gradient-to-br from-white to-[#FFF8F0]",
      };
    default:
      return {
        Icon: Cake,
        badgeBg: "bg-[#B96F78]/90 text-[#FFF8F0]",
        headerBorder: "border-[#D99AA0]",
        cardBg: "bg-white",
      };
  }
}

export default function CakeMenu({
  category,
  products,
  onSelectProduct,
}: CakeMenuProps) {
  if (products.length === 0) {
    return null;
  }

  const cakeWhatsappLink = getWhatsAppLink(
    "Olá! Acessei o cardápio digital da Padaria Massa Fina e gostaria de consultar sobre bolos, tortas e encomendas."
  );

  return (
    <section
      id={`categoria-${category.id}`}
      aria-labelledby={`heading-${category.id}`}
      className="scroll-mt-28 rounded-2xl bg-gradient-to-b from-[#713F45] via-[#8B4D55] to-[#713F45] p-1 sm:p-1.5 shadow-modal border-2 border-[#E8B75F]"
    >
      <div className="rounded-xl bg-[#FFF8F0] overflow-hidden">
        {/* Cabeçalho Especial da Confeitaria */}
        <div className="relative bg-gradient-to-r from-[#713F45] via-[#9E5760] to-[#713F45] px-4 sm:px-6 py-5 text-center border-b-2 border-[#E8B75F]">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8B75F]/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#E8B75F] border border-[#E8B75F]/60 mb-2">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Confeitaria Especial &amp; Encomendas</span>
          </div>

          <h2
            id={`heading-${category.id}`}
            className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#FFF8F0] tracking-wide uppercase"
          >
            {category.name}
          </h2>

          <p className="mt-1 text-xs sm:text-sm text-[#FFF8F0]/90 max-w-xl mx-auto">
            Sabores artesanais preparados com ingredientes selecionados para tornar
            suas comemorações inesquecíveis.
          </p>

          {/* Aviso Obrigatório de Preço por Quilograma (KG) */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#FFF8F0] px-4 py-2 text-xs sm:text-sm font-bold text-[#713F45] border-2 border-[#E8B75F] shadow-sm">
            <Scale className="h-4 w-4 text-[#B96F78] shrink-0" aria-hidden="true" />
            <span>
              IMPORTANTE: Todos os valores abaixo são por quilograma (KG).
            </span>
          </div>

          {/* Legenda de Destaques: Sabores Tradicionais, Especiais e Premium */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#B96F78] px-3 py-1 font-semibold text-[#FFF8F0] border border-[#FFF8F0]/30">
              <Award className="h-3 w-3 text-[#E8B75F]" />
              Sabores Tradicionais (R$ 40,00/kg)
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#713F45] px-3 py-1 font-semibold text-[#FFF8F0] border border-[#E8B75F]/60">
              <Star className="h-3 w-3 text-[#E8B75F]" />
              Sabores Especiais (R$ 45,00 e R$ 50,00/kg)
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#582E33] px-3 py-1 font-semibold text-[#E8B75F] border border-[#E8B75F]">
              <Crown className="h-3 w-3 text-[#E8B75F]" />
              Sabores Premium (R$ 70,00 e R$ 75,00/kg)
            </span>
          </div>
        </div>

        {/* Faixas de Preço por Quilograma */}
        <div className="p-3.5 sm:p-6 space-y-6">
          {CAKE_PRICE_TIERS.map((tier) => {
            const tierProducts = products.filter(
              (p) => p.cakeTierId === tier.id
            );

            if (tierProducts.length === 0) {
              return null;
            }

            const { Icon, badgeBg, headerBorder } = getTierVisuals(tier);

            return (
              <div
                key={tier.id}
                className={`rounded-2xl bg-white border-2 ${headerBorder} shadow-sm overflow-hidden`}
              >
                {/* Cabeçalho da Faixa de Preço */}
                <div className="bg-[#FFF8F0] px-4 py-3 border-b border-[#D99AA0]/50 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${badgeBg}`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {tier.badgeText}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#713F45]">
                      {tier.title}
                    </h3>
                  </div>

                  <span className="text-xs font-medium text-[#713F45]/80">
                    {tier.subtitle}
                  </span>
                </div>

                {/* Lista de Sabores da Faixa */}
                <ul
                  className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                  role="list"
                >
                  {tierProducts.map((cake) => {
                    const priceText = formatProductPrice(cake.price, cake.unit);
                    const isPremium = cake.cakeTierBadge === "premium";

                    return (
                      <li key={cake.id}>
                        <button
                          type="button"
                          onClick={() => onSelectProduct(cake)}
                          aria-label={`Ver detalhes do bolo ${cake.name} — ${priceText}`}
                          className={`group w-full text-left flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 transition-all duration-150 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#713F45] ${
                            isPremium
                              ? "bg-gradient-to-r from-[#FFF8F0] to-white border-[#E8B75F] hover:border-[#713F45] shadow-sm"
                              : "bg-[#FFF8F0]/55 hover:bg-[#FFF8F0] border-[#D99AA0]/45 hover:border-[#B96F78]"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Suporte para fotografia real futura de cada bolo */}
                            {cake.image ? (
                              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-[#E8B75F]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={cake.image}
                                  alt={cake.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                            ) : (
                              <span
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                                  isPremium
                                    ? "bg-[#713F45] text-[#E8B75F] border-[#E8B75F]"
                                    : "bg-white text-[#B96F78] border-[#D99AA0]/60"
                                }`}
                                aria-hidden="true"
                              >
                                {isPremium ? (
                                  <Crown className="h-4 w-4" />
                                ) : (
                                  <Cake className="h-4 w-4" />
                                )}
                              </span>
                            )}

                            <div className="min-w-0">
                              <span className="block font-medium text-[15px] text-[#713F45] group-hover:text-[#582E33] truncate">
                                {cake.name}
                              </span>
                              <span className="block text-[11px] text-[#713F45]/75">
                                Preço por quilograma
                              </span>
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-2">
                            <span className="font-serif font-bold text-sm sm:text-base text-[#713F45] whitespace-nowrap">
                              {priceText}
                            </span>
                            <span
                              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#B96F78] border border-[#E8B75F]/70 group-hover:bg-[#B96F78] group-hover:text-white transition-colors"
                              aria-hidden="true"
                            >
                              <ChevronRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          {/* Banner de Encomendas e Consulta de Sabores */}
          <div className="rounded-2xl bg-gradient-to-r from-[#713F45] via-[#8B4D55] to-[#B96F78] p-4 sm:p-5 text-[#FFF8F0] border border-[#E8B75F] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-serif text-base sm:text-lg font-bold text-[#FFF8F0]">
                Deseja encomendar um bolo ou consultar pronta-entrega?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-[#FFF8F0]/90">
                Consulte nossa equipe sobre os sabores disponíveis, opções de
                recheio e encomendas pelo telefone{" "}
                <strong className="text-[#E8B75F]">
                  {BAKERY_INFO.phone.display}
                </strong>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
              <a
                href={cakeWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#E8B75F] px-4 py-2.5 text-xs sm:text-sm font-bold text-[#713F45] shadow-sm hover:bg-[#f2c572] transition-colors"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Encomendar via WhatsApp</span>
              </a>
              <a
                href={`tel:+${BAKERY_INFO.phone.raw}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF8F0]/15 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#FFF8F0] border border-[#FFF8F0]/40 hover:bg-[#FFF8F0]/25 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#E8B75F]" aria-hidden="true" />
                <span>{BAKERY_INFO.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

