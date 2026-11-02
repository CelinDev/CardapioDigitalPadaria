"use client";

import React from "react";
import { Category, Product } from "@/types/menu";
import ProductItem from "./ProductItem";
import {
  Sandwich,
  Coffee,
  CupSoda,
  Milk,
  Citrus,
  Croissant,
  Cake,
} from "lucide-react";

interface ProductListProps {
  category: Category;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sandwich,
  Coffee,
  CupSoda,
  Milk,
  Citrus,
  Croissant,
  Cake,
};

export default function ProductList({
  category,
  products,
  onSelectProduct,
}: ProductListProps) {
  if (products.length === 0) {
    return null;
  }

  const IconComponent = ICON_MAP[category.iconName] || Coffee;

  return (
    <section
      id={`categoria-${category.id}`}
      aria-labelledby={`heading-${category.id}`}
      className="scroll-mt-28 rounded-2xl bg-[#FFF8F0] border border-[#D99AA0]/60 shadow-card overflow-hidden"
    >
      {/* Cabeçalho da Categoria inspirado no cardápio físico (Rosa Queimado e Dourado) */}
      <div className="bg-gradient-to-r from-[#B96F78] via-[#AD626B] to-[#713F45] px-4 sm:px-6 py-3.5 border-b-2 border-[#E8B75F] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#713F45] border border-[#E8B75F] shadow-sm">
            <IconComponent className="h-5 w-5 text-[#713F45]" aria-hidden="true" />
          </div>
          <div>
            <h2
              id={`heading-${category.id}`}
              className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#FFF8F0] uppercase"
            >
              {category.name}
            </h2>
            {category.subtitle && (
              <p className="text-xs text-[#FFF8F0]/90 font-normal">
                {category.subtitle}
              </p>
            )}
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-[#713F45]/70 px-2.5 py-0.5 text-xs font-medium text-[#E8B75F] border border-[#E8B75F]/50">
          {products.length} {products.length === 1 ? "item" : "itens"}
        </span>
      </div>

      {/* Lista de Produtos */}
      <div className="p-3 sm:p-5">
        <ul className="space-y-2" role="list">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

