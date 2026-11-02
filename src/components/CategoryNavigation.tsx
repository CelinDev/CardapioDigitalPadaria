"use client";

import React, { useRef, useEffect } from "react";
import { Category, CategoryId } from "@/types/menu";
import {
  Sandwich,
  Coffee,
  CupSoda,
  Milk,
  Citrus,
  Croissant,
  Cake,
  Search,
  X,
} from "lucide-react";

interface CategoryNavigationProps {
  categories: Category[];
  activeCategory: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
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

export default function CategoryNavigation({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: CategoryNavigationProps) {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeBtn = buttonRefs.current[activeCategory];
    const container = navContainerRef.current;
    if (activeBtn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      const offset =
        btnRect.left -
        containerRect.left -
        containerRect.width / 2 +
        btnRect.width / 2;
      container.scrollBy({ left: offset, behavior: "smooth" });
    }
  }, [activeCategory]);

  return (
    <nav
      aria-label="Categorias do cardápio"
      className="sticky top-0 z-30 bg-[#FFF8F0]/95 backdrop-blur-md border-b border-[#D99AA0]/50 shadow-sm"
    >
      <div className="mx-auto max-w-4xl px-3 sm:px-4 py-2.5">
        {/* Barra de busca rápida opcional */}
        <div className="relative mb-2.5">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#713F45]/70"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar lanche, café, bolo ou bebida..."
            aria-label="Buscar produto no cardápio"
            className="w-full rounded-full bg-white pl-10 pr-9 py-2 text-sm text-[#713F45] placeholder-[#713F45]/55 border border-[#D99AA0]/60 focus:border-[#B96F78] focus:outline-none focus:ring-2 focus:ring-[#B96F78]/25 transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Limpar busca"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#713F45]/70 hover:bg-[#D99AA0]/20 hover:text-[#713F45]"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Lista horizontal de categorias (Mobile-First) */}
        <div
          ref={navContainerRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5 scroll-smooth"
          role="tablist"
        >
          {categories.map((category) => {
            const IconComponent = ICON_MAP[category.iconName] || Coffee;
            const isActive = activeCategory === category.id;
            const isCake = category.highlight;

            return (
              <button
                key={category.id}
                ref={(el) => {
                  buttonRefs.current[category.id] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(category.id)}
                className={`group relative flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#713F45] ${
                  isActive
                    ? "bg-[#713F45] text-[#FFF8F0] shadow-sm border border-[#E8B75F]"
                    : isCake
                    ? "bg-[#B96F78]/15 text-[#713F45] border border-[#E8B75F] hover:bg-[#B96F78]/25"
                    : "bg-white text-[#713F45] border border-[#D99AA0]/50 hover:border-[#B96F78] hover:bg-[#D99AA0]/15"
                }`}
              >
                <IconComponent
                  className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-colors ${
                    isActive
                      ? "text-[#E8B75F]"
                      : isCake
                      ? "text-[#B96F78]"
                      : "text-[#B96F78] group-hover:text-[#713F45]"
                  }`}
                />
                <span>{category.shortName}</span>
                {isCake && !isActive && (
                  <span
                    className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-[#E8B75F]"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

