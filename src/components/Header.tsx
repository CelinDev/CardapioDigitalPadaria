import React from "react";
import { BAKERY_INFO } from "@/data/bakery";
import Logo from "./Logo";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#713F45] via-[#9E5760] to-[#B96F78] text-[#FFF8F0] border-b-4 border-[#E8B75F]">
      {/* Padrão decorativo sutil de fundo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(#FFF8F0 1px, transparent 1px), radial-gradient(#E8B75F 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
        aria-hidden="true"
      />

      {/* Moldura superior dourada */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#713F45] via-[#E8B75F] to-[#713F45]" />

      <div className="relative mx-auto max-w-4xl px-4 pt-5 pb-6 sm:pt-7 sm:pb-8 text-center">
        {/* Logo Oficial no Topo */}
        <div className="mb-3 flex justify-center">
          <Logo />
        </div>

        {/* Nome da marca e subtítulo em destaque */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#FFF8F0] drop-shadow-sm">
          {BAKERY_INFO.name}
        </h1>

        <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-[#FFF8F0]/90">
          {BAKERY_INFO.subtitle}
        </p>

        {/* Selo Cardápio */}
        <div className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-[#713F45]/85 px-5 py-1.5 border border-[#E8B75F]/80 shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#E8B75F]" aria-hidden="true" />
          <span className="font-serif text-sm sm:text-base font-semibold tracking-widest uppercase text-[#E8B75F]">
            {BAKERY_INFO.menuTitle}
          </span>
          <Sparkles className="h-3.5 w-3.5 text-[#E8B75F]" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}

