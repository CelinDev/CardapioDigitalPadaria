import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#B96F78",
};

export const metadata: Metadata = {
  title: "Padaria Massa Fina — Cardápio",
  description:
    "Confira o cardápio da Padaria Massa Fina. Conheça nossos lanches, cafés, bebidas, salgados, bolos e tortas.",
  keywords: [
    "Padaria Massa Fina",
    "Cardápio Digital",
    "Panificadora e Confeitaria",
    "José Bonifácio SP",
    "Lanches",
    "Cafés",
    "Bolos e Tortas",
    "Encomendas de Bolos",
  ],
  authors: [{ name: "Padaria Massa Fina — Panificadora & Confeitaria" }],
  openGraph: {
    title: "Padaria Massa Fina — Cardápio",
    description:
      "Confira o cardápio da Padaria Massa Fina. Conheça nossos lanches, cafés, bebidas, salgados, bolos e tortas.",
    type: "website",
    locale: "pt_BR",
    siteName: "Padaria Massa Fina — Panificadora & Confeitaria",
    images: [
      {
        url: "/images/logo-original-hd.png",
        width: 2192,
        height: 1024,
        alt: "Logo Oficial Padaria Massa Fina — Panificadora & Confeitaria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Padaria Massa Fina — Cardápio",
    description:
      "Confira o cardápio da Padaria Massa Fina. Conheça nossos lanches, cafés, bebidas, salgados, bolos e tortas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#713F45] selection:text-[#FFF8F0]">
        {children}
      </body>
    </html>
  );
}

