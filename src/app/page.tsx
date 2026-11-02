"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "@/components/Header";
import CategoryNavigation from "@/components/CategoryNavigation";
import ProductList from "@/components/ProductList";
import CakeMenu from "@/components/CakeMenu";
import ProductModal from "@/components/ProductModal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { CategoryId, Product } from "@/types/menu";
import { Hand, SearchX } from "lucide-react";

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("lanches");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const availableProducts = useMemo(
    () => PRODUCTS.filter((item) => item.available),
    []
  );

  const filteredProducts = useMemo(() => {
    const query = normalizeText(searchQuery.trim());
    if (!query) return availableProducts;

    return availableProducts.filter((product) => {
      const nameMatch = normalizeText(product.name).includes(query);
      const optionsMatch = product.options?.some((opt) =>
        normalizeText(opt).includes(query)
      );
      return nameMatch || Boolean(optionsMatch);
    });
  }, [availableProducts, searchQuery]);

  const handleSelectCategory = useCallback((categoryId: CategoryId) => {
    setActiveCategory(categoryId);
    const sectionEl = document.getElementById(`categoria-${categoryId}`);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  // Atualiza a categoria ativa conforme o cliente rola a página no celular
  useEffect(() => {
    const handleScroll = () => {
      const offset = 160;
      for (const category of CATEGORIES) {
        const el = document.getElementById(`categoria-${category.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalMatchingProducts = filteredProducts.length;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho Oficial */}
      <Header />

      {/* Navegação Horizontal Fixa entre Categorias */}
      <CategoryNavigation
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Conteúdo Principal do Cardápio */}
      <main className="flex-1 mx-auto w-full max-w-4xl px-3 sm:px-4 pt-4 pb-8">
        {/* Dica de Interatividade para o Cliente na Mesa */}
        <div className="mb-5 flex items-center justify-center gap-2 rounded-xl bg-[#FFF8F0]/95 px-3.5 py-2.5 text-center text-xs sm:text-sm font-medium text-[#713F45] border border-[#E8B75F] shadow-2xs">
          <Hand
            className="h-4 w-4 text-[#B96F78] shrink-0"
            aria-hidden="true"
          />
          <span>
            Toque em qualquer produto do cardápio para ver detalhes, opções e
            informações.
          </span>
        </div>

        {/* Estado de Busca sem Resultados */}
        {totalMatchingProducts === 0 ? (
          <div className="my-8 rounded-2xl bg-[#FFF8F0] p-8 text-center border border-[#E8B75F] shadow-card">
            <SearchX
              className="mx-auto h-10 w-10 text-[#B96F78]"
              aria-hidden="true"
            />
            <h2 className="mt-3 font-serif text-lg sm:text-xl font-bold text-[#713F45]">
              Nenhum item encontrado para &ldquo;{searchQuery}&rdquo;
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#713F45]/80">
              Verifique a grafia ou limpe a busca para visualizar todas as
              categorias do cardápio.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#713F45] px-5 py-2 text-xs sm:text-sm font-semibold text-[#FFF8F0] border border-[#E8B75F] hover:bg-[#582E33] transition-colors"
            >
              Mostrar todo o cardápio
            </button>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {CATEGORIES.map((category) => {
              const categoryProducts = filteredProducts.filter(
                (p) => p.category === category.id
              );

              if (category.id === "bolos-e-tortas") {
                return (
                  <CakeMenu
                    key={category.id}
                    category={category}
                    products={categoryProducts}
                    onSelectProduct={setSelectedProduct}
                  />
                );
              }

              return (
                <ProductList
                  key={category.id}
                  category={category}
                  products={categoryProducts}
                  onSelectProduct={setSelectedProduct}
                />
              );
            })}
          </div>
        )}

        {/* Seção de Contato, Endereço e WhatsApp */}
        <ContactSection />
      </main>

      {/* Rodapé Oficial */}
      <Footer />

      {/* Modal de Detalhes do Produto */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

