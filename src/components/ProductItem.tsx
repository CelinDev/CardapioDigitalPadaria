"use client";

import React from "react";
import { Product } from "@/types/menu";
import { formatProductPrice } from "@/data/products";
import { ChevronRight } from "lucide-react";

interface ProductItemProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductItem({ product, onSelect }: ProductItemProps) {
  const formattedPrice = formatProductPrice(product.price, product.unit);
  const isPriceOnRequest = product.price === null;

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalhes de ${product.name} — ${formattedPrice}`}
        className="group w-full text-left flex items-center justify-between gap-3 px-3.5 sm:px-4 py-3.5 rounded-xl bg-white hover:bg-[#FFF8F0] active:bg-[#D99AA0]/20 border border-[#D99AA0]/40 hover:border-[#B96F78] transition-all duration-150 shadow-[0_1px_3px_rgba(113,63,69,0.04)] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#713F45]"
      >
        {/* Esquerda: Nome do produto e opções rápidas */}
        <div className="min-w-0 flex-1 pr-2">
          <div className="flex items-baseline gap-2">
            <span className="font-medium text-[15px] sm:text-base text-[#713F45] group-hover:text-[#582E33] transition-colors leading-snug">
              {product.name}
            </span>
          </div>

          {product.options && product.options.length > 0 && (
            <p className="mt-1 text-xs text-[#713F45]/80 flex flex-wrap items-center gap-1.5">
              <span className="font-semibold text-[#B96F78]">Opções:</span>
              {product.options.map((opt) => (
                <span
                  key={opt}
                  className="inline-flex items-center rounded-md bg-[#FFF8F0] px-2 py-0.5 text-[11px] font-medium text-[#713F45] border border-[#E8B75F]/70"
                >
                  {opt}
                </span>
              ))}
            </p>
          )}
        </div>

        {/* Linha pontilhada sutil de cardápio clássico em telas maiores */}
        <div
          className="hidden sm:block flex-1 border-b border-dotted border-[#D99AA0]/70 mx-2 self-center"
          aria-hidden="true"
        />

        {/* Direita: Preço + Pequeno indicador de interação */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          {isPriceOnRequest ? (
            <span className="inline-flex items-center rounded-full bg-[#FFF8F0] px-2.5 py-1 text-xs font-semibold text-[#713F45] border border-[#E8B75F]/80">
              {formattedPrice}
            </span>
          ) : (
            <span className="font-serif font-bold text-[15px] sm:text-base text-[#713F45] tabular-nums whitespace-nowrap">
              {formattedPrice}
            </span>
          )}

          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF8F0] text-[#B96F78] border border-[#E8B75F]/60 group-hover:bg-[#B96F78] group-hover:text-white group-hover:border-[#B96F78] transition-colors"
            aria-hidden="true"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </button>
    </li>
  );
}

