import { CategoryId, CakeTierLevel, Product, SaleUnit } from "@/types/menu";
import { isProductAvailable } from "./availability";
import { getProductDescription } from "./descriptions";
import { getProductIngredients } from "./ingredients";
import { PRODUCT_PRICES } from "./prices";

interface RawProductSeed {
  id: string;
  name: string;
  category: CategoryId;
  unit?: SaleUnit;
  options?: string[];
  observations?: string;
  image?: string;
  cakeTierId?: string;
  cakeTierBadge?: CakeTierLevel;
}

const RAW_PRODUCTS: RawProductSeed[] = [
  // ==========================================
  // CATEGORIA: LANCHES (22 itens)
  // ==========================================
  { id: "lanche-misto-quente", name: "Misto quente", category: "lanches", unit: "UN" },
  { id: "lanche-queijo-quente", name: "Queijo quente", category: "lanches", unit: "UN" },
  { id: "lanche-misto-com-ovo", name: "Misto c/ ovo", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-linguica", name: "Pão com linguiça", category: "lanches", unit: "UN" },
  { id: "lanche-x-tudo", name: "X-Tudo", category: "lanches", unit: "UN" },
  { id: "lanche-sanduiche-natural", name: "Sanduíche natural", category: "lanches", unit: "UN" },
  { id: "lanche-misto-frio", name: "Misto frio", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-mortadela", name: "Pão com mortadela", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-mortadela-chapa", name: "Pão com mortadela chapa", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-ovo", name: "Pão com ovo", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-requeijao-chapa", name: "Pão com requeijão chapa", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-requeijao", name: "Pão com requeijão", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-manteiga-chapa", name: "Pão com manteiga chapa", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-manteiga", name: "Pão com manteiga", category: "lanches", unit: "UN" },
  { id: "lanche-omelete", name: "Omelete", category: "lanches", unit: "UN" },
  { id: "lanche-omelete-com-queijo", name: "Omelete c/ queijo", category: "lanches", unit: "UN" },
  { id: "lanche-omelete-peito-peru", name: "Omelete peito peru", category: "lanches", unit: "UN" },
  { id: "lanche-tapioca-recheada", name: "Tapioca recheada", category: "lanches", unit: "UN" },
  { id: "lanche-crepioca-recheada", name: "Crepioca recheada", category: "lanches", unit: "UN" },
  { id: "lanche-pao-com-nutella", name: "Pão com Nutella", category: "lanches", unit: "UN" },
  { id: "lanche-salgados", name: "Salgados", category: "lanches", unit: "UN" },
  { id: "lanche-fatia-de-pizza", name: "Fatia de pizza", category: "lanches", unit: "UN" },

  // ==========================================
  // CATEGORIA: BEBIDAS — CAFÉS (6 itens)
  // ==========================================
  { id: "cafe-coado", name: "Café coado", category: "bebidas-cafes", unit: "XICARA" },
  { id: "cafe-coado-grande", name: "Café coado grande", category: "bebidas-cafes", unit: "XICARA" },
  { id: "cafe-expresso", name: "Café expresso", category: "bebidas-cafes", unit: "XICARA" },
  { id: "cafe-expresso-duplo", name: "Expresso duplo", category: "bebidas-cafes", unit: "XICARA" },
  {
    id: "cafe-americano",
    name: "Americano",
    category: "bebidas-cafes",
    unit: "XICARA",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },
  { id: "cafe-pingado", name: "Pingado", category: "bebidas-cafes", unit: "COPO" },
  { id: "cafe-pingado-com-expresso", name: "Pingado com expresso", category: "bebidas-cafes", unit: "COPO" },

  // ==========================================
  // CATEGORIA: BEBIDAS — CAPPUCCINOS (4 itens)
  // ==========================================
  { id: "capuccino-quente", name: "Capuccino quente", category: "bebidas-cappuccinos", unit: "XICARA" },
  { id: "capuccino-quente-especial", name: "Cap. quente especial", category: "bebidas-cappuccinos", unit: "XICARA" },
  { id: "capuccino-gelado", name: "Capuccino gelado", category: "bebidas-cappuccinos", unit: "COPO" },
  { id: "capuccino-gelado-especial", name: "Cap. gelado especial", category: "bebidas-cappuccinos", unit: "COPO" },

  // ==========================================
  // CATEGORIA: BEBIDAS — CHOCOLATES (5 itens)
  // ==========================================
  {
    id: "chocolate-quente",
    name: "Chocolate quente",
    category: "bebidas-chocolates",
    unit: "XICARA",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },
  {
    id: "chocolate-quente-especial",
    name: "Chocolate quente especial",
    category: "bebidas-chocolates",
    unit: "XICARA",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },
  {
    id: "chocolate-gelado",
    name: "Chocolate gelado",
    category: "bebidas-chocolates",
    unit: "COPO",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },
  {
    id: "chocolate-gelado-especial",
    name: "Chocolate gelado especial",
    category: "bebidas-chocolates",
    unit: "COPO",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },
  {
    id: "achocolatado-quente-gelado",
    name: "Achoco. quente/gelado",
    category: "bebidas-chocolates",
    unit: "COPO",
    observations: "Disponível na versão quente ou gelada. Consulte o preço com nossa equipe.",
  },

  // ==========================================
  // CATEGORIA: BEBIDAS — SUCOS E VITAMINAS (4 itens)
  // ==========================================
  {
    id: "suco-de-laranja",
    name: "Suco de laranja",
    category: "bebidas-sucos-vitaminas",
    unit: "COPO",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },
  {
    id: "suco-detox",
    name: "Detox",
    category: "bebidas-sucos-vitaminas",
    unit: "COPO",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },
  {
    id: "suco-de-abacaxi",
    name: "Suco de abacaxi",
    category: "bebidas-sucos-vitaminas",
    unit: "COPO",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },
  {
    id: "vitamina-de-banana",
    name: "Vitamina de banana",
    category: "bebidas-sucos-vitaminas",
    unit: "COPO",
    observations: "Valor sob consulta com nossa equipe de atendimento.",
  },

  // ==========================================
  // CATEGORIA: DIVERSOS (5 itens)
  // ==========================================
  { id: "diversos-pao-de-queijo", name: "Pão de queijo", category: "diversos", unit: "UN" },
  { id: "diversos-palito-de-parmesao", name: "Palito de parmesão", category: "diversos", unit: "UN" },
  {
    id: "diversos-pao-de-queijo-recheado",
    name: "Pão de queijo recheado",
    category: "diversos",
    unit: "UN",
    observations: "Consulte os recheios disponíveis e o valor com nossa equipe.",
  },
  { id: "diversos-biscoitao", name: "Biscoitão", category: "diversos", unit: "UN" },
  {
    id: "diversos-pao-de-queijo-recheado-chapa",
    name: "Pão de queijo recheado na chapa",
    category: "diversos",
    unit: "UN",
    options: ["Nutella", "Presunto e queijo"],
    observations: "Escolha entre as opções de recheio: Nutella ou Presunto e queijo.",
  },

  // ==========================================
  // CATEGORIA: BOLOS E TORTAS (19 itens — Preço por KG)
  // ==========================================
  // R$ 40,00/kg
  {
    id: "bolo-creme-com-abacaxi",
    name: "Creme com abacaxi",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-40",
    cakeTierBadge: "tradicional",
    observations: "Valor referente ao quilograma (R$ 40,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-creme-com-coco",
    name: "Creme com coco",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-40",
    cakeTierBadge: "tradicional",
    observations: "Valor referente ao quilograma (R$ 40,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-creme-com-pessego",
    name: "Creme com pêssego",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-40",
    cakeTierBadge: "tradicional",
    observations: "Valor referente ao quilograma (R$ 40,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-doce-de-leite-com-ameixa",
    name: "Doce de leite com ameixa",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-40",
    cakeTierBadge: "tradicional",
    observations: "Valor referente ao quilograma (R$ 40,00/kg). Encomendas e pronta-entrega sob consulta.",
  },

  // R$ 45,00/kg
  {
    id: "bolo-leite-ninho",
    name: "Leite Ninho",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-45",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 45,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-floresta-branca",
    name: "Floresta branca",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-45",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 45,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-floresta-negra",
    name: "Floresta negra",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-45",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 45,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-mousse-de-chocolate",
    name: "Mousse de chocolate",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-45",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 45,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-torta-bombom",
    name: "Torta bombom",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-45",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 45,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-brigadeiro",
    name: "Brigadeiro",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-45",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 45,00/kg). Encomendas e pronta-entrega sob consulta.",
  },

  // R$ 50,00/kg
  {
    id: "bolo-leite-ninho-trufado",
    name: "Leite Ninho trufado",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-50",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 50,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-torta-de-limao",
    name: "Torta de limão",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-50",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 50,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-leite-ninho-com-nozes",
    name: "Leite Ninho com nozes",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-50",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 50,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-leite-ninho-com-morango",
    name: "Leite Ninho com morango",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-50",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 50,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-prestigio",
    name: "Prestígio",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-50",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 50,00/kg). Encomendas e pronta-entrega sob consulta.",
  },
  {
    id: "bolo-mousse-de-chocolate-trufado",
    name: "Mousse de chocolate trufado",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-50",
    cakeTierBadge: "especial",
    observations: "Valor referente ao quilograma (R$ 50,00/kg). Encomendas e pronta-entrega sob consulta.",
  },

  // Preços especiais (Sabores Premium)
  {
    id: "bolo-camafeu",
    name: "Camafeu",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-especiais",
    cakeTierBadge: "premium",
    observations: "Sabor Premium — Valor referente ao quilograma (R$ 70,00/kg). Encomendas sob consulta.",
  },
  {
    id: "bolo-nutella",
    name: "Nutella",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-especiais",
    cakeTierBadge: "premium",
    observations: "Sabor Premium — Valor referente ao quilograma (R$ 75,00/kg). Encomendas sob consulta.",
  },

  // Outras opções
  {
    id: "bolo-salgado",
    name: "Bolo salgado",
    category: "bolos-e-tortas",
    unit: "KG",
    cakeTierId: "tier-outros",
    cakeTierBadge: "outros",
    observations: "Valor referente ao quilograma (R$ 40,00/kg). Encomendas sob consulta.",
  },
];

export const PRODUCTS: Product[] = RAW_PRODUCTS.map((seed) => {
  const isCake = seed.category === "bolos-e-tortas";
  const price = seed.id in PRODUCT_PRICES ? PRODUCT_PRICES[seed.id] : null;
  return {
    id: seed.id,
    name: seed.name,
    price,
    unit: seed.unit,
    category: seed.category,
    description: getProductDescription(seed.id, isCake),
    ingredients: getProductIngredients(seed.id, isCake),
    observations: seed.observations,
    options: seed.options,
    available: isProductAvailable(seed.id),
    image: seed.image,
    cakeTierId: seed.cakeTierId,
    cakeTierBadge: seed.cakeTierBadge,
  };
});

/**
 * Formata o preço do produto segundo as regras oficiais do cardápio:
 * - Nunca exibe R$ 0,00 para preços não confirmados (`null`).
 * - Exibe "Consulte o preço" quando o preço é `null`.
 * - Adiciona "/kg" quando a unidade de venda é `KG`.
 */
export function formatProductPrice(price: number | null, unit?: SaleUnit): string {
  if (price === null || price === undefined || price <= 0) {
    return "Consulte o preço";
  }

  const formattedNumber = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (unit === "KG") {
    return `R$ ${formattedNumber}/kg`;
  }

  return `R$ ${formattedNumber}`;
}

export function getProductsByCategory(categoryId: CategoryId): Product[] {
  return PRODUCTS.filter((product) => product.category === categoryId && product.available);
}

export function getCakesByTier(tierId: string): Product[] {
  return PRODUCTS.filter(
    (product) =>
      product.category === "bolos-e-tortas" &&
      product.cakeTierId === tierId &&
      product.available
  );
}

