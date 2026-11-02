export type SaleUnit = "UN" | "KG" | "PORCAO" | "COPO" | "XICARA";

export type CategoryId =
  | "lanches"
  | "bebidas-cafes"
  | "bebidas-cappuccinos"
  | "bebidas-chocolates"
  | "bebidas-sucos-vitaminas"
  | "diversos"
  | "bolos-e-tortas";

export type CakeTierLevel = "tradicional" | "especial" | "premium" | "outros";

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  subtitle?: string;
  description?: string;
  highlight?: boolean;
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  price: number | null;
  unit?: SaleUnit;
  category: CategoryId;
  description: string;
  ingredients: string;
  observations?: string;
  options?: string[];
  available: boolean;
  image?: string;
  /** Exclusivo para a categoria de bolos e tortas */
  cakeTierId?: string;
  cakeTierBadge?: CakeTierLevel;
}

export interface CakePriceTier {
  id: string;
  title: string;
  subtitle: string;
  pricePerKg: number | null;
  priceLabel: string;
  tierLevel: CakeTierLevel;
  badgeText: string;
}

export interface BakeryInfo {
  name: string;
  subtitle: string;
  menuTitle: string;
  slogan?: string;
  address: {
    street: string;
    city: string;
    state: string;
    full: string;
  };
  phone: {
    display: string;
    raw: string;
    whatsappUrl: string;
    defaultMessage: string;
  };
}

