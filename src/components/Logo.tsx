import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  compact?: boolean;
}

/**
 * Componente da Logo Oficial da Padaria Massa Fina (Restaurada em 4x HD).
 * Utiliza a imagem oficial em alta definição (`public/images/logo-massa-fina.png`)
 * com fundo transparente sobre uma moldura clara e elegante com filete dourado (#E8B75F),
 * garantindo contraste perfeito tanto para os ramos de trigo e nome em vermelho
 * quanto para o chapéu de confeiteiro e "Panificadora & Confeitaria".
 */
export default function Logo({ className = "", compact = false }: LogoProps) {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
    >
      <div
        className={`relative flex items-center justify-center rounded-3xl bg-gradient-to-b from-white to-[#FFF8F0] border-2 border-[#E8B75F] shadow-[0_8px_28px_rgba(74,37,42,0.28)] ${
          compact
            ? "px-4 py-2.5 sm:px-5 sm:py-3"
            : "px-6 py-4 sm:px-8 sm:py-5"
        }`}
      >
        {/* Filete ornamental interno suave */}
        <div
          className="pointer-events-none absolute inset-1.5 rounded-2xl border border-[#D99AA0]/45"
          aria-hidden="true"
        />

        <Image
          src="/images/logo-massa-fina.png"
          alt="Logo Oficial Padaria Massa Fina — Panificadora & Confeitaria"
          width={2152}
          height={948}
          priority={!compact}
          className={
            compact
              ? "relative z-10 h-14 sm:h-16 w-auto object-contain"
              : "relative z-10 h-24 sm:h-32 md:h-36 w-auto object-contain"
          }
        />
      </div>
    </div>
  );
}
