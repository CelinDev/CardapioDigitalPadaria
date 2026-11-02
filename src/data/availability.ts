/**
 * ARQUIVO CENTRALIZADO DE DISPONIBILIDADE — PADARIA MASSA FINA
 *
 * Todos os produtos estão disponíveis (`true`) por padrão.
 * Para desativar temporariamente ou marcar um produto como indisponível,
 * adicione o ID do produto abaixo com o valor `false`.
 */

export const PRODUCT_AVAILABILITY_OVERRIDES: Record<string, boolean> = {
  // Exemplo:
  // "lanche-x-tudo": false,
};

export function isProductAvailable(productId: string): boolean {
  if (productId in PRODUCT_AVAILABILITY_OVERRIDES) {
    return PRODUCT_AVAILABILITY_OVERRIDES[productId];
  }
  return true;
}

