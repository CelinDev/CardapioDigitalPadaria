import { CakePriceTier, Category } from "@/types/menu";

export const CATEGORIES: Category[] = [
  {
    id: "lanches",
    name: "Lanches",
    shortName: "Lanches",
    subtitle: "Preparados na hora com carinho e tradição",
    iconName: "Sandwich",
  },
  {
    id: "bebidas-cafes",
    name: "Bebidas — Cafés",
    shortName: "Cafés",
    subtitle: "Cafés tradicionais e expressos selecionados",
    iconName: "Coffee",
  },
  {
    id: "bebidas-cappuccinos",
    name: "Bebidas — Cappuccinos",
    shortName: "Cappuccinos",
    subtitle: "Cremosos, quentes ou gelados",
    iconName: "CupSoda",
  },
  {
    id: "bebidas-chocolates",
    name: "Bebidas — Chocolates",
    shortName: "Chocolates",
    subtitle: "Opções quentes e geladas",
    iconName: "Milk",
  },
  {
    id: "bebidas-sucos-vitaminas",
    name: "Bebidas — Sucos e Vitaminas",
    shortName: "Sucos e Vitaminas",
    subtitle: "Refrescantes e nutritivos",
    iconName: "Citrus",
  },
  {
    id: "diversos",
    name: "Diversos",
    shortName: "Diversos",
    subtitle: "Quitutes clássicos de padaria para acompanhar seu café",
    iconName: "Croissant",
  },
  {
    id: "bolos-e-tortas",
    name: "Bolos e Tortas — Sabores Disponíveis",
    shortName: "Bolos e Tortas",
    subtitle: "Confeitaria artesanal — Valores por quilograma (KG)",
    highlight: true,
    iconName: "Cake",
  },
];

export const CAKE_PRICE_TIERS: CakePriceTier[] = [
  {
    id: "tier-40",
    title: "R$ 40,00/kg",
    subtitle: "Clássicos de confeitaria com recheios suaves e frutas",
    pricePerKg: 40.0,
    priceLabel: "R$ 40,00/kg",
    tierLevel: "tradicional",
    badgeText: "Sabores Tradicionais",
  },
  {
    id: "tier-45",
    title: "R$ 45,00/kg",
    subtitle: "Receitas queridinhas com chocolate, mousse e Leite Ninho",
    pricePerKg: 45.0,
    priceLabel: "R$ 45,00/kg",
    tierLevel: "especial",
    badgeText: "Sabores Especiais",
  },
  {
    id: "tier-50",
    title: "R$ 50,00/kg",
    subtitle: "Combinações trufadas, tortas finas e frutas selecionadas",
    pricePerKg: 50.0,
    priceLabel: "R$ 50,00/kg",
    tierLevel: "especial",
    badgeText: "Sabores Especiais",
  },
  {
    id: "tier-especiais",
    title: "Preços especiais",
    subtitle: "Nossas receitas nobres de confeitaria fina",
    pricePerKg: null,
    priceLabel: "R$ 70,00 a R$ 75,00/kg",
    tierLevel: "premium",
    badgeText: "Sabores Premium",
  },
  {
    id: "tier-outros",
    title: "Outras opções",
    subtitle: "Ideal para festas, comemorações e lanches da tarde",
    pricePerKg: 40.0,
    priceLabel: "R$ 40,00/kg",
    tierLevel: "outros",
    badgeText: "Opção Salgada",
  },
];

