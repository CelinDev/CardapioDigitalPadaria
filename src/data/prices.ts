/**
 * ARQUIVO CENTRALIZADO DE PREÇOS — PADARIA MASSA FINA
 *
 * Para alterar o preço de qualquer item:
 * - Informe o valor numérico usando ponto para centavos (ex: 15.00, 4.50).
 * - Caso o preço esteja em confirmação ou sob consulta, mantenha como `null`.
 *   O sistema exibirá automaticamente "Consulte o preço" (nunca exibe R$ 0,00).
 */
export const PRODUCT_PRICES: Record<string, number | null> = {
  // CATEGORIA: LANCHES
  "lanche-misto-quente": 15.0,
  "lanche-queijo-quente": 15.0,
  "lanche-misto-com-ovo": 17.0,
  "lanche-pao-com-linguica": 12.0,
  "lanche-x-tudo": 25.0,
  "lanche-sanduiche-natural": 10.0,
  "lanche-misto-frio": 8.0,
  "lanche-pao-com-mortadela": 6.0,
  "lanche-pao-com-mortadela-chapa": 12.0,
  "lanche-pao-com-ovo": 8.0,
  "lanche-pao-com-requeijao-chapa": 9.0,
  "lanche-pao-com-requeijao": 7.0,
  "lanche-pao-com-manteiga-chapa": 4.5,
  "lanche-pao-com-manteiga": 3.5,
  "lanche-omelete": 12.0,
  "lanche-omelete-com-queijo": 14.0,
  "lanche-omelete-peito-peru": 16.0,
  "lanche-tapioca-recheada": 16.0,
  "lanche-crepioca-recheada": 17.0,
  "lanche-pao-com-nutella": 14.0,
  "lanche-salgados": 8.0,
  "lanche-fatia-de-pizza": 10.0,

  // CATEGORIA: BEBIDAS — CAFÉS
  "cafe-coado": 2.0,
  "cafe-coado-grande": 4.0,
  "cafe-expresso": 4.5,
  "cafe-expresso-duplo": 9.0,
  "cafe-americano": 9.0, // Consultar preço
  "cafe-pingado": 6.0,
  "cafe-pingado-com-expresso": 7.5,

  // CATEGORIA: BEBIDAS — CAPPUCCINOS
  "capuccino-quente": 10.0,
  "capuccino-quente-especial": 16.0,
  "capuccino-gelado": 12.0,
  "capuccino-gelado-especial": 16.0,

  // CATEGORIA: BEBIDAS — CHOCOLATES
  "chocolate-quente": 8.00, // Confirmar preço
  "chocolate-quente-especial": 14.00, // Confirmar preço
  "chocolate-gelado": 10.00, // Confirmar preço
  "chocolate-gelado-especial": 14.00, // Confirmar preço
  "achocolatado-quente-gelado": 8.00, // Confirmar preço

  // CATEGORIA: BEBIDAS — SUCOS E VITAMINAS
  "suco-de-laranja": 8.50, // Confirmar preço
  "suco-detox": 10.00, // Confirmar preço
  "suco-de-abacaxi": 10.00, // Confirmar preço
  "vitamina-de-banana": 12.00, // Confirmar preço

  // CATEGORIA: DIVERSOS
  "diversos-pao-de-queijo": 4.5,
  "diversos-palito-de-parmesao": 2.0,
  "diversos-pao-de-queijo-recheado": 7.0, // Consultar preço
  "diversos-biscoitao": 3.5,
  "diversos-pao-de-queijo-recheado-chapa": 7.0,

  // CATEGORIA: BOLOS E TORTAS (Preços por KG)
  // R$ 40,00/kg
  "bolo-creme-com-abacaxi": 40.0,
  "bolo-creme-com-coco": 40.0,
  "bolo-creme-com-pessego": 40.0,
  "bolo-doce-de-leite-com-ameixa": 40.0,
  // R$ 45,00/kg
  "bolo-leite-ninho": 45.0,
  "bolo-floresta-branca": 45.0,
  "bolo-floresta-negra": 45.0,
  "bolo-mousse-de-chocolate": 45.0,
  "bolo-torta-bombom": 45.0,
  "bolo-brigadeiro": 45.0,
  // R$ 50,00/kg
  "bolo-leite-ninho-trufado": 50.0,
  "bolo-torta-de-limao": 50.0,
  "bolo-leite-ninho-com-nozes": 50.0,
  "bolo-leite-ninho-com-morango": 50.0,
  "bolo-prestigio": 50.0,
  "bolo-mousse-de-chocolate-trufado": 50.0,
  // Preços especiais
  "bolo-camafeu": 70.0,
  "bolo-nutella": 75.0,
  // Outras opções
  "bolo-salgado": 40.0,
};

