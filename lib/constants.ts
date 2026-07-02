// Dados centrais da empresa — edite aqui para atualizar o site inteiro.

export const BUSINESS = {
  name: "Super Clean JP",
  legalTagline: "Higienização Profissional de Estofados",
  city: "João Pessoa",
  state: "PB",
  region: "João Pessoa e região metropolitana",
  whatsappDisplay: "+55 83 8716-8492",
  instagramUrl:
    "https://www.instagram.com/supercleanjp?igsh=dXQ4bjM3Y3Qxcjdq",
  instagramHandle: "@supercleanjp",
  siteUrl: "https://www.supercleanjp.com.br", // TODO: atualizar quando o domínio for registrado
};

// WhatsApp precisa do número em formato E.164 sem símbolos: 55 (Brasil) + DDD + número
export const WHATSAPP_NUMBER = "558387168492";

function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  default:
    "Olá! Vi o site da Super Clean JP e gostaria de solicitar um orçamento para higienização de estofados.",
  sofa: "Olá! Gostaria de solicitar um orçamento para higienização de sofá.",
  colchao: "Olá! Gostaria de solicitar um orçamento para higienização de colchão.",
  automotivo: "Olá! Gostaria de solicitar um orçamento para higienização automotiva.",
  tapeteCarpete: "Olá! Gostaria de solicitar um orçamento para higienização de tapetes e carpetes.",
  faq: "Olá! Tenho uma dúvida sobre os serviços da Super Clean JP.",
};

export const WHATSAPP_LINKS = {
  default: buildWhatsAppLink(WHATSAPP_MESSAGES.default),
  sofa: buildWhatsAppLink(WHATSAPP_MESSAGES.sofa),
  colchao: buildWhatsAppLink(WHATSAPP_MESSAGES.colchao),
  automotivo: buildWhatsAppLink(WHATSAPP_MESSAGES.automotivo),
  tapeteCarpete: buildWhatsAppLink(WHATSAPP_MESSAGES.tapeteCarpete),
  faq: buildWhatsAppLink(WHATSAPP_MESSAGES.faq),
};

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Antes e Depois", href: "#antes-depois" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];
