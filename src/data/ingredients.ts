/**
 * ARQUIVO CENTRALIZADO DE INGREDIENTES — PADARIA MASSA FINA
 *
 * Todos os 65 produtos possuem uma base sugerida de ingredientes abaixo
 * para facilitar a sua edição e adaptação conforme a ficha técnica da padaria.
 */

export const DEFAULT_INGREDIENTS_MESSAGE =
  "Entre em contato com nossa equipe para consultar os detalhes deste produto.";

export const DEFAULT_CAKE_INGREDIENTS_MESSAGE =
  "Consulte nossa equipe sobre os sabores disponíveis, opções de recheio e encomendas.";

export const CUSTOM_PRODUCT_INGREDIENTS: Record<string, string> = {
  // ==========================================
  // CATEGORIA: LANCHES
  // ==========================================
  "lanche-misto-quente": "Pão francês, 4 fatias de presunto, 4 fatias de queijo mussarela e manteiga.",
  "lanche-queijo-quente": "Pão francês, 6 fatias de queijo mussarela e manteiga.",
  "lanche-misto-com-ovo": "Pão francês, 4 fatias de presunto, 4 fatias de queijo mussarela, ovo e manteiga.",
  "lanche-pao-com-linguica": "Pão francês, 1 gomo de linguiça aurora (opcional: tomate, cebola e alface).",
  "lanche-x-tudo": "Pão de hambúrguer, hambúrguer, presunto, queijo mussarela, ovo, bacon, alface e tomate (adapte conforme a receita da casa).",
  "lanche-sanduiche-natural": "Pão francês, maionese, cenoura, alface, tomate, 2 fatias de presunto, 2 fatias de muçarela.",
  "lanche-misto-frio": "Pão francês, presunto e queijo muçarela.",
  "lanche-pao-com-mortadela": "Pão francês e mortadela fatiada.",
  "lanche-pao-com-mortadela-chapa": "Pão francês, mortadela fatiada, 2 fatias de muçarela.",
  "lanche-pao-com-ovo": "Pão francês, ovo frito na chapa e manteiga.",
  "lanche-pao-com-requeijao-chapa": "Pão francês tostado na chapa e requeijão cremoso.",
  "lanche-pao-com-requeijao": "Pão francês e requeijão cremoso.",
  "lanche-pao-com-manteiga-chapa": "Pão francês tostado na chapa e manteiga.",
  "lanche-pao-com-manteiga": "Pão francês e manteiga.",
  "lanche-omelete": "Ovos batidos na hora, sal e orégano.",
  "lanche-omelete-com-queijo": "Ovos batidos na hora, 4 fatias de queijo muçarela derretido e tempero.",
  "lanche-omelete-peito-peru": "Ovos batidos na hora, 4 fatias de peito de peru fatiado, 2 fatias de queijo muçarela e tempero.",
  "lanche-tapioca-recheada": "Goma de tapioca hidratada e recheio à escolha (consulte as opções disponíveis com a equipe).",
  "lanche-crepioca-recheada": "Goma de tapioca, ovo e recheio à escolha (consulte as opções disponíveis com a equipe).",
  "lanche-pao-com-nutella": "Pão francês e creme de avelã Nutella.",
  "lanche-salgados": "Massa artesanal e recheios variados (doguinho, esfiha, enroladinho, hambúrguer, empada — consulte as opções do dia).",
  "lanche-fatia-de-pizza": "Massa de pizza da casa, molho de tomate artesanal, queijo mussarela, presunto e cream cheese.",

  // ==========================================
  // CATEGORIA: BEBIDAS — CAFÉS
  // ==========================================
  "cafe-coado": "Café torrado e moído coado na hora e água filtrada.",
  "cafe-coado-grande": "Café torrado e moído coado na hora e água filtrada.",
  "cafe-expresso": "Café expresso 100% extraído na hora.",
  "cafe-expresso-duplo": "Dose dupla de café expresso extraído na hora.",
  "cafe-americano": "Dose de café expresso e água quente filtrada.",
  "cafe-pingado": "Leite integral quente e café coado fresquinho.",
  "cafe-pingado-com-expresso": "Leite integral vaporizado e dose de café expresso.",

  // ==========================================
  // CATEGORIA: BEBIDAS — CAPPUCCINOS
  // ==========================================
  "capuccino-quente": "Base cremosa de cappuccino 3 Corações, leite integral.",
  "capuccino-quente-especial": "Base cremosa de cappuccino 3 Corações, leite integral, chantilly e Nutella.",
  "capuccino-gelado": "Base cremosa de cappuccino 3 Corações e gelo.",
  "capuccino-gelado-especial": "Base cremosa de cappuccino 3 Corações, leite integral, chantilly e Nutella.",

  // ==========================================
  // CATEGORIA: BEBIDAS — CHOCOLATES
  // ==========================================
  "chocolate-quente": "Leite integral e chocolate premium 3 Corações.",
  "chocolate-quente-especial": "Leite integral, chocolate premium 3 Corações, chantilly e Nutella.",
  "chocolate-gelado": "Leite integral, chocolate premium 3 Corações e gelo.",
  "chocolate-gelado-especial": "Leite integral, chocolate premium 3 Corações, chantilly, Nutella e gelo.",
  "achocolatado-quente-gelado": "Leite integral (quente ou gelado) e achocolatado tradicional.",

  // ==========================================
  // CATEGORIA: BEBIDAS — SUCOS E VITAMINAS
  // ==========================================
  "suco-de-laranja": "Suco de laranja natural Bott, com açúcar e gelo (Opcional).",
  "suco-detox": "Couve fresca, suco de laranja, abacaxi, gengibre, hortelã e maçã.",
  "suco-de-abacaxi": "Fruta natural de abacaxi batida na hora com água filtrada (opcional: hortelã).",
  "vitamina-de-banana": "Banana fresca selecionada batida na hora com leite gelado.",

  // ==========================================
  // CATEGORIA: DIVERSOS
  // ==========================================
  "diversos-pao-de-queijo": "Polvilho, queijo selecionado, ovos, leite e manteiga.",
  "diversos-palito-de-parmesao": "Massa artesanal assada com queijo parmesão gratinado.",
  "diversos-pao-de-queijo-recheado": "Pão de queijo tradicional (consulte as opções).",
  "diversos-biscoitao": "Polvilho, queijo, ovos e leite, assado no ponto tradicional de padaria.",
  "diversos-pao-de-queijo-recheado-chapa":
    "Pão de queijo preparado na chapa com opção de recheio de Nutella ou Presunto e queijo.",

  // ==========================================
  // CATEGORIA: BOLOS E TORTAS
  // ==========================================
  // R$ 40,00/kg
  "bolo-creme-com-abacaxi": "Pão de ló artesanal, creme de confeiteiro, abacaxi cozido em calda e cobertura de chantilly.",
  "bolo-creme-com-coco": "Pão de ló artesanal, creme de confeiteiro, coco ralado úmido e cobertura de chantilly.",
  "bolo-creme-com-pessego": "Pão de ló artesanal, creme de confeiteiro, pêssegos em calda picados e cobertura de chantilly.",
  "bolo-doce-de-leite-com-ameixa": "Pão de ló artesanal, doce de leite cremoso, ameixas pretas em calda e cobertura de chantilly.",

  // R$ 45,00/kg
  "bolo-leite-ninho": "Pão de ló, recheio cremoso de Leite Ninho e cobertura de chantininho.",
  "bolo-floresta-branca": "Pão de ló, leite ninho, cerejas em calda e raspas de chocolate branco.",
  "bolo-floresta-negra": "Pão de ló de chocolate, mousse de chocolate, cerejas em calda e raspas de chocolate meio amargo/ao leite.",
  "bolo-mousse-de-chocolate": "Pão de ló de chocolate, mousse de chocolate e cobertura de chocolate.",
  "bolo-torta-bombom": "Massa especial de confeitaria, creme branco/chocolate, bombons picados.",
  "bolo-brigadeiro": "Pão de ló de chocolate, brigadeiro tradicional cremoso, mousse de chocolate e granulado.",

  // R$ 50,00/kg
  "bolo-leite-ninho-trufado": "Pão de ló, creme de Leite Ninho e ganache trufada de chocolate.",
  "bolo-torta-de-limao": "Pão de ló, mousse cremoso de limão, cobertura suave e raspas de limão.",
  "bolo-leite-ninho-com-nozes": "Pão de ló, creme de Leite Ninho e nozes picadas selecionadas.",
  "bolo-leite-ninho-com-morango": "Pão de ló, creme de Leite Ninho e morangos frescos selecionados.",
  "bolo-prestigio": "Pão de ló de chocolate, recheio cremoso de beijinho de coco e cobertura de ganache de chocolate.",
  "bolo-mousse-de-chocolate-trufado": "Pão de ló de chocolate, mousse de chocolate e recheio trufado de chocolate nobre.",

  // Preços especiais (Sabores Premium)
  "bolo-camafeu": "Pão de ló fino, recheio nobre de doce de nozes cremoso (camafeu), chantilly e morangos.",
  "bolo-nutella": "Pão de ló de chocolate, recheio de creme de avelã Nutella e cobertura especial.",

  // Outras opções
  "bolo-salgado": "Pão de forma em camadas, recheio cremoso de frango desfiado, maionese temperada, cobertura de batata palha e salame.",
};

export function getProductIngredients(productId: string, isCake: boolean): string {
  if (CUSTOM_PRODUCT_INGREDIENTS[productId]) {
    return CUSTOM_PRODUCT_INGREDIENTS[productId];
  }
  return isCake ? DEFAULT_CAKE_INGREDIENTS_MESSAGE : DEFAULT_INGREDIENTS_MESSAGE;
}
