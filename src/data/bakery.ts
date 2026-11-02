import { BakeryInfo } from "@/types/menu";

export const BAKERY_INFO: BakeryInfo = {
  name: "PADARIA MASSA FINA",
  subtitle: "Panificadora & Confeitaria",
  menuTitle: "Cardápio",
  address: {
    street: "Rua Oswaldo Cruz, 200",
    city: "José Bonifácio",
    state: "SP",
    full: "Rua Oswaldo Cruz, 200 — José Bonifácio - SP",
  },
  phone: {
    display: "(17) 99106-5351",
    raw: "5517991065351",
    whatsappUrl: "https://wa.me/5517991065351",
    defaultMessage:
      "Olá! Acessei o cardápio digital da Padaria Massa Fina e gostaria de tirar uma dúvida.",
  },
};

/**
 * Gera o link direto para o WhatsApp da Padaria Massa Fina
 * com mensagem personalizada ou padrão.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || BAKERY_INFO.phone.defaultMessage;
  return `${BAKERY_INFO.phone.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

