export const email = 'associportouniao@gmail.com';

// O primeiro da lista é o principal (usado no ícone do WhatsApp).
export const telefones = [
  { cargo: 'Tesoureira', ddd: '42', numero: '99954-4705' },
  { cargo: 'Presidente', ddd: '42', numero: '99922-4041' },
];

export const exibir = (t: (typeof telefones)[number]) => `(${t.ddd}) ${t.numero}`;
const digitos = (t: (typeof telefones)[number]) => `55${t.ddd}${t.numero.replace(/\D/g, '')}`;
export const linkTel = (t: (typeof telefones)[number]) => `tel:+${digitos(t)}`;
export const linkWhatsapp = (t: (typeof telefones)[number]) => `https://wa.me/${digitos(t)}`;
export const linkEmail = `mailto:${email}`;

export const todosTelefones = telefones.map(exibir).join(' / ');
