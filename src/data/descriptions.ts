/**
 * ARQUIVO CENTRALIZADO DE DESCRIÇÕES — PADARIA MASSA FINA
 *
 * Todos os 65 produtos do cardápio estão listados abaixo por categoria.
 * Você pode ajustar livremente qualquer texto conforme o preparo exato da padaria.
 */

export const DEFAULT_PRODUCT_DESCRIPTION =
  "Entre em contato com nossa equipe para consultar os detalhes deste produto.";

export const DEFAULT_CAKE_DESCRIPTION =
  "Consulte nossa equipe sobre os sabores disponíveis, opções de recheio e encomendas.";

export const CUSTOM_PRODUCT_DESCRIPTIONS: Record<string, string> = {
  // ==========================================
  // CATEGORIA: LANCHES
  // ==========================================
  "lanche-misto-quente":
    "Clássico misto quente preparado na hora na chapa, com pão fresquinho crocante por fora, presunto e queijo mussarela derretido.",
  "lanche-queijo-quente":
    "Pão fresquinho tostado na chapa com generosa camada de queijo mussarela bem derretido.",
  "lanche-misto-com-ovo":
    "Nosso tradicional misto quente na chapa, reforçado com ovo frito na hora, presunto e queijo mussarela derretido.",
  "lanche-pao-com-linguica":
    "Lanche saboroso preparado no pão francês fresquinho com linguiça chapeada suculenta.",
  "lanche-x-tudo":
    "Lanche completo e bem servido, preparado na chapa para quem busca uma refeição caprichada e cheia de sabor.",
  "lanche-sanduiche-natural":
    "Opção leve e refrescante preparada com ingredientes frescos selecionados. Consulte os sabores do dia com nossa equipe.",
  "lanche-misto-frio":
    "Sanduíche tradicional servido frio no pão fresquinho com presunto e queijo mussarela.",
  "lanche-pao-com-mortadela":
    "Clássico de padaria no pão francês fresquinho com fatias caprichadas de mortadela.",
  "lanche-pao-com-mortadela-chapa":
    "Pão francês tostado na chapa com mortadela dourada e quentinha, realçando todo o sabor.",
  "lanche-pao-com-ovo":
    "Pão francês fresquinho com ovo preparado na hora na chapa, simples e delicioso.",
  "lanche-pao-com-requeijao-chapa":
    "Pão francês passado na chapa com camada generosa de requeijão cremoso aquecido e levemente dourado.",
  "lanche-pao-com-requeijao":
    "Pão francês fresquinho servido com requeijão cremoso de qualidade.",
  "lanche-pao-com-manteiga-chapa":
    "O tradicional pão na chapa quentinho e crocante, preparado com manteiga derretida no ponto certo.",
  "lanche-pao-com-manteiga":
    "Pão francês fresquinho do dia servido com manteiga.",
  "lanche-omelete":
    "Omelete leve e macia preparada na hora com ovos batidos e tempero suave da casa.",
  "lanche-omelete-com-queijo":
    "Omelete quentinha feita na hora e recheada com queijo mussarela derretido.",
  "lanche-omelete-peito-peru":
    "Omelete especial preparada na hora com peito de peru e queijo derretido, leve e nutritiva.",
  "lanche-tapioca-recheada":
    "Tapioca feita na hora com goma fresquinha e recheio caprichado. Consulte as opções de recheio disponíveis.",
  "lanche-crepioca-recheada":
    "Massa leve de tapioca com ovo preparada na chapa e servida bem recheada. Consulte as opções de recheio.",
  "lanche-pao-com-nutella":
    "Pão fresquinho recheado com generosa camada do autêntico creme de avelã Nutella.",
  "lanche-salgados":
    "Salgados tradicionais de padaria, assados ou fritos, sempre fresquinhos. Consulte as opções disponíveis no balcão.",
  "lanche-fatia-de-pizza":
    "Fatia generosa de pizza de padaria com massa macia e cobertura caprichada. Consulte os sabores do dia.",

  // ==========================================
  // CATEGORIA: BEBIDAS — CAFÉS
  // ==========================================
  "cafe-coado":
    "Café tradicional passado na hora, com aroma acolhedor e sabor caseiro na medida certa.",
  "cafe-coado-grande":
    "Café tradicional passado na hora, com aroma acolhedor e sabor caseiro na medida certa.",
  "cafe-expresso":
    "Café expresso encorpado e aromático, extraído na hora com grãos selecionados e crema aveludada.",
  "cafe-expresso-duplo":
    "Dose dupla do nosso café expresso para quem aprecia um sabor mais intenso e revigorante.",
  "cafe-americano":
    "Café expresso suavizado com água quente, resultando em uma bebida leve, aromática e equilibrada.",
  "cafe-pingado":
    "O clássico pingado de padaria: leite quente cremoso com um toque de café coado fresquinho.",
  "cafe-pingado-com-expresso":
    "Leite quente vaporizado combinado com uma dose de café expresso encorpado.",

  // ==========================================
  // CATEGORIA: BEBIDAS — CAPPUCCINOS
  // ==========================================
  "capuccino-quente":
    "Bebida quente e cremosa preparada com café, leite e um toque suave de chocolate e canela.",
  "capuccino-quente-especial":
    "Versão especial e ainda mais cremosa do nosso cappuccino quente, perfeita para adoçar o seu momento.",
  "capuccino-gelado":
    "Cappuccino batido bem gelado e cremoso, ideal para refrescar com todo o sabor do café.",
  "capuccino-gelado-especial":
    "Nosso cappuccino gelado em versão especial, super cremoso e preparado no capricho.",

  // ==========================================
  // CATEGORIA: BEBIDAS — CHOCOLATES
  // ==========================================
  "chocolate-quente":
    "Chocolate quente cremoso e reconfortante, preparado com leite e cacau selecionado.",
  "chocolate-quente-especial":
    "Receita especial de chocolate quente mais denso e aveludado, perfeito para dias mais frescos.",
  "chocolate-gelado":
    "Bebida de chocolate bem gelada e cremosa, refrescante a qualquer hora do dia.",
  "chocolate-gelado-especial":
    "Versão especial do nosso chocolate gelado, ainda mais cremosa e saborosa.",
  "achocolatado-quente-gelado":
    "Leite batido ou aquecido com achocolatado tradicional, disponível na versão quente ou gelada.",

  // ==========================================
  // CATEGORIA: BEBIDAS — SUCOS E VITAMINAS
  // ==========================================
  "suco-de-laranja":
    "Suco natural de laranja espremido na hora, refrescante e rico em vitamina C.",
  "suco-detox":
    "Suco funcional e refrescante preparado com ingredientes naturais selecionados para dar mais disposição ao seu dia.",
  "suco-de-abacaxi":
    "Suco natural de abacaxi batido na hora, leve, digestivo e muito refrescante.",
  "vitamina-de-banana":
    "Vitamina cremosa batida na hora com banana selecionada e leite gelado, nutritiva e saborosa.",

  // ==========================================
  // CATEGORIA: DIVERSOS
  // ==========================================
  "diversos-pao-de-queijo":
    "Pão de queijo tradicional assado com casquinha dourada por fora e interior macio e quentinho.",
  "diversos-palito-de-parmesao":
    "Palito assado dourado e crocante com toque marcante de queijo parmesão, ótimo para acompanhar o café.",
  "diversos-pao-de-queijo-recheado":
    "Nosso pão de queijo macio com recheio especial. Consulte os sabores disponíveis com nossa equipe.",
  "diversos-biscoitao":
    "Biscoitão caseiro tradicional de padaria, crocante por fora, macio por dentro e perfeito com café coado.",
  "diversos-pao-de-queijo-recheado-chapa":
    "Pão de queijo tostado na chapa, crocante e quentinho, com opções de recheio: Nutella ou Presunto e queijo.",

  // ==========================================
  // CATEGORIA: BOLOS E TORTAS (Preços por KG)
  // ==========================================
  // Faixa R$ 40,00/kg
  "bolo-creme-com-abacaxi":
    "Pão de ló macio recheado com creme suave de confeitaria e pedacinhos selecionados de abacaxi. Consulte pronta-entrega e encomendas.",
  "bolo-creme-com-coco":
    "Bolo clássico e delicado com recheio de creme aveludado e coco ralado selecionado. Consulte pronta-entrega e encomendas.",
  "bolo-creme-com-pessego":
    "Combinação tradicional de massa fofinha, creme leve de confeitaria e pêssegos em calda. Consulte pronta-entrega e encomendas.",
  "bolo-doce-de-leite-com-ameixa":
    "Receita consagrada com recheio cremoso de doce de leite artesanal e ameixas macias. Consulte pronta-entrega e encomendas.",

  // Faixa R$ 45,00/kg
  "bolo-leite-ninho":
    "Bolo super macio com recheio e cobertura cremosa preparada com autêntico Leite Ninho. Consulte pronta-entrega e encomendas.",
  "bolo-floresta-branca":
    "Massa clara delicada com chantilly fresquinho, cerejas selecionadas e raspas de chocolate branco. Consulte pronta-entrega e encomendas.",
  "bolo-floresta-negra":
    "Clássico de massa de chocolate com chantilly, cerejas em calda e generosas raspas de chocolate. Consulte pronta-entrega e encomendas.",
  "bolo-mousse-de-chocolate":
    "Para os amantes de cacau: massa macia recheada com mousse aerada e cremosa de chocolate. Consulte pronta-entrega e encomendas.",
  "bolo-torta-bombom":
    "Torta especial recheada com creme suave, pedaços de bombom e cobertura de chocolate. Consulte pronta-entrega e encomendas.",
  "bolo-brigadeiro":
    "O queridinho das festas: massa fofinha de chocolate com recheio e cobertura de brigadeiro cremoso e granulado. Consulte pronta-entrega e encomendas.",

  // Faixa R$ 50,00/kg
  "bolo-leite-ninho-trufado":
    "Combinação irresistível de creme de Leite Ninho com camada trufada de chocolate nobre. Consulte pronta-entrega e encomendas.",
  "bolo-torta-de-limao":
    "Torta fina e equilibrada com creme cítrico de limão e cobertura leve e delicada. Consulte pronta-entrega e encomendas.",
  "bolo-leite-ninho-com-nozes":
    "Sabor sofisticado que une a suavidade do creme de Leite Ninho ao toque crocante de nozes selecionadas. Consulte pronta-entrega e encomendas.",
  "bolo-leite-ninho-com-morango":
    "Um dos sabores mais pedidos: creme aveludado de Leite Ninho combinado com morangos selecionados. Consulte pronta-entrega e encomendas.",
  "bolo-prestigio":
    "Massa úmida de chocolate com recheio cremoso de coco e cobertura de ganache de chocolate. Consulte pronta-entrega e encomendas.",
  "bolo-mousse-de-chocolate-trufado":
    "Receita intensa que combina mousse aerada de chocolate com recheio trufado cremoso. Consulte pronta-entrega e encomendas.",

  // Preços especiais (Sabores Premium)
  "bolo-camafeu":
    "Sabor Premium de confeitaria fina, preparado com recheio nobre de nozes e acabamento delicado. Consulte pronta-entrega e encomendas.",
  "bolo-nutella":
    "Sabor Premium elaborado com recheio generoso do autêntico creme de avelã Nutella. Consulte pronta-entrega e encomendas.",

  // Outras opções
  "bolo-salgado":
    "Bolo salgado artesanal, úmido e muito bem temperado, perfeito para festas, confraternizações e lanches especiais. Consulte pronta-entrega e encomendas.",
};

export function getProductDescription(productId: string, isCake: boolean): string {
  if (CUSTOM_PRODUCT_DESCRIPTIONS[productId]) {
    return CUSTOM_PRODUCT_DESCRIPTIONS[productId];
  }
  return isCake ? DEFAULT_CAKE_DESCRIPTION : DEFAULT_PRODUCT_DESCRIPTION;
}
