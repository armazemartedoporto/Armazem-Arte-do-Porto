// Todas as imagens do site. Ao trocar uma imagem, altere só o `src`
// e preencha o `alt` com a descrição do que aparece na foto.
export interface ImagemDados {
  src: string;
  nome: string;
  alt: string;
}

export const logo: ImagemDados = { src: '/assets/Logo_3.png', nome: 'Logo do menu', alt: 'Armazém Arte do Porto' };
export const logoRodape: ImagemDados = { src: '/Logo 1.png', nome: 'Logo do rodapé', alt: 'Logo' };

export const imagemHome: ImagemDados = { src: '/assets/imagem1.jpg', nome: 'Home - peças feitas a mão', alt: '' };
export const imagemContato: ImagemDados = { src: '/assets/Associacao2.jpg', nome: 'Contato - fachada', alt: 'Fachada do Armazém I onde fica a loja' };
export const imagemObjetivo: ImagemDados = { src: '/assets/Imagem2.jpg', nome: 'Sobre - objetivo', alt: 'Vários produtos, como colares, caixas e panos de prato' };
export const imagemSobreFinal: ImagemDados = { src: '/assets/Imagem12.jpg', nome: 'Sobre - final da página', alt: 'Sala de eventos do Armazém I' };

export const carrossel: ImagemDados[] = [
  { src: '/assets/Imagem3.jpg', nome: 'Carrossel 1', alt: '' },
  { src: '/assets/Imagem4.jpg', nome: 'Carrossel 2', alt: '' },
  { src: '/assets/Imagem6.jpg', nome: 'Carrossel 3', alt: '' },
  { src: '/assets/Imagem7.jpg', nome: 'Carrossel 4', alt: '' },
  { src: '/assets/Imagem8.jpg', nome: 'Carrossel 5', alt: '' },
  { src: '/assets/Imagem9.jpg', nome: 'Carrossel 6', alt: '' },
  { src: '/assets/Imagem10.jpg', nome: 'Carrossel 7', alt: '' },
  { src: '/assets/Imagem14.jpg', nome: 'Carrossel 8', alt: '' },
  { src: '/assets/Imagem15.jpg', nome: 'Carrossel 9', alt: '' },
  { src: '/assets/Imagem17.jpg', nome: 'Carrossel 10', alt: '' },
  { src: '/assets/Imagem18.jpg', nome: 'Carrossel 11', alt: '' },
  { src: '/assets/Imagem19.jpg', nome: 'Carrossel 12', alt: '' },
];
