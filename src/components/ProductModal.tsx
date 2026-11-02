"use client";

import React, { useEffect } from "react";
import { Product } from "@/types/menu";
import { CATEGORIES } from "@/data/categories";
import { formatProductPrice } from "@/data/products";
import { getWhatsAppLink } from "@/data/bakery";
import {
  X,
  Info,
  UtensilsCrossed,
  Sparkles,
  MessageCircle,
  Scale,
  CheckCircle2,
} from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) {
    return null;
  }

  const category = CATEGORIES.find((c) => c.id === product.category);
  const formattedPrice = formatProductPrice(product.price, product.unit);
  const isCake = product.category === "bolos-e-tortas";
  const isPriceOnRequest = product.price === null;

  const whatsappProductMessage = isCake
    ? `Olá! Acessei o cardápio digital da Padaria Massa Fina e gostaria de consultar sobre o bolo "${product.name}" (${formattedPrice}).`
    : `Olá! Acessei o cardápio digital da Padaria Massa Fina e gostaria de tirar uma dúvida sobre o item "${product.name}".`;

  const whatsappUrl = getWhatsAppLink(whatsappProductMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-2.5 sm:p-4 bg-[#4A252A]/70 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      onClick={onClose}
    >
      {/* Container do Modal — não ultrapassa os limites da tela (max-h-[90vh]) */}
      <div
        className="relative w-full max-w-lg max-h-[90vh] flex flex-col rounded-2xl bg-[#FFF8F0] border-2 border-[#E8B75F] shadow-modal overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <div className="bg-gradient-to-r from-[#713F45] via-[#9E5760] to-[#B96F78] px-4 sm:px-6 py-4 border-b-2 border-[#E8B75F] flex items-start justify-between gap-3 shrink-0">
          <div className="min-w-0">
            {category && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF8F0]/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#FFF8F0] border border-[#E8B75F]/60 mb-1.5">
                <Sparkles className="h-3 w-3 text-[#E8B75F]" aria-hidden="true" />
                {category.shortName}
              </span>
            )}
            <h2
              id="modal-product-title"
              className="font-serif text-xl sm:text-2xl font-bold text-[#FFF8F0] leading-snug"
            >
              {product.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela de detalhes"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#713F45] text-[#FFF8F0] border border-[#E8B75F] hover:bg-[#582E33] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B75F] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Conteúdo Rolável do Modal */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-[#713F45]">
          {/* Imagem Opcional do Produto */}
          {product.image && (
            <div className="overflow-hidden rounded-xl border-2 border-[#E8B75F]/80 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-48 sm:h-56 w-full object-cover"
              />
            </div>
          )}

          {/* Bloco de Preço e Unidade */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-3.5 sm:p-4 border border-[#D99AA0]/70 shadow-2xs">
            <div>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#B96F78]">
                {isCake ? "Valor por Quilograma (KG)" : "Valor do Produto"}
              </span>
              <span
                className={`mt-0.5 block font-serif font-bold ${
                  isPriceOnRequest
                    ? "text-base sm:text-lg text-[#713F45]"
                    : "text-xl sm:text-2xl text-[#713F45]"
                }`}
              >
                {formattedPrice}
              </span>
            </div>

            {isCake && (
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#FFF8F0] px-3 py-1.5 text-xs font-semibold text-[#713F45] border border-[#E8B75F]">
                <Scale className="h-3.5 w-3.5 text-[#B96F78]" aria-hidden="true" />
                Vendido por KG
              </span>
            )}
          </div>

          {/* Opções disponíveis (ex: Pão de queijo recheado na chapa) */}
          {product.options && product.options.length > 0 && (
            <div className="rounded-xl bg-white p-3.5 sm:p-4 border border-[#E8B75F]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#713F45] flex items-center gap-1.5 mb-2">
                <CheckCircle2
                  className="h-4 w-4 text-[#B96F78]"
                  aria-hidden="true"
                />
                Opções Disponíveis
              </h3>
              <ul className="flex flex-wrap gap-2">
                {product.options.map((option) => (
                  <li
                    key={option}
                    className="rounded-lg bg-[#FFF8F0] px-3 py-1.5 text-sm font-semibold text-[#713F45] border border-[#B96F78]/50"
                  >
                    • {option}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Descrição do Produto */}
          <div className="rounded-xl bg-white p-3.5 sm:p-4 border border-[#D99AA0]/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#B96F78] flex items-center gap-1.5 mb-1.5">
              <Info className="h-4 w-4 text-[#B96F78]" aria-hidden="true" />
              Descrição
            </h3>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#713F45]">
              {product.description}
            </p>
          </div>

          {/* Ingredientes */}
          <div className="rounded-xl bg-white p-3.5 sm:p-4 border border-[#D99AA0]/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#B96F78] flex items-center gap-1.5 mb-1.5">
              <UtensilsCrossed
                className="h-4 w-4 text-[#B96F78]"
                aria-hidden="true"
              />
              Ingredientes e Composição
            </h3>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#713F45]">
              {product.ingredients}
            </p>
          </div>

          {/* Possíveis Observações */}
          {product.observations && (
            <div className="rounded-xl bg-[#B96F78]/10 p-3.5 sm:p-4 border border-[#B96F78]/40">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#713F45] mb-1">
                Observações
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#713F45]/90">
                {product.observations}
              </p>
            </div>
          )}
        </div>

        {/* Rodapé do Modal com Botão de Consulta WhatsApp e Fechar */}
        <div className="bg-white px-4 sm:px-6 py-3.5 border-t border-[#D99AA0]/50 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#713F45] hover:bg-[#582E33] px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#FFF8F0] border border-[#E8B75F] transition-colors"
          >
            <MessageCircle
              className="h-4 w-4 text-[#E8B75F]"
              aria-hidden="true"
            />
            <span>Consultar pelo WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#FFF8F0] hover:bg-[#D99AA0]/25 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#713F45] border border-[#B96F78] transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

