import styled from 'styled-components';
import Image from 'next/image';
import { Col } from 'react-bootstrap';

interface Props {
  src: string;
  alt: string;
}

// Crie um componente estilizado para a imagem responsiva
const ResponsiveImage = styled(Image)`
 width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center; /* Mantenha a posição central da imagem como padrão */

  @media (min-width: 601px) {
    /* Aplique estilos apenas no desktop */
    height: 300px; /* Defina a altura desejada para o desktop */
    object-position: top; /* Mova o corte da imagem para o topo (ajuste conforme necessário) */
     overflow: hidden; /* Oculta a parte excedente da imagem */
  }
`;

const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 300px; /* Defina um valor máximo para evitar que a imagem fique muito grande */
  margin: 0 auto; /* Centralize o contêiner */
`;

export default function Images({ src, alt }: Props) {
  return (
    //   <Col xs={6} md={12}>
    //     <Div>
    //       {/*
    //       <Img src={src}></Img>
    // </Col>*/}
    //     </Div>
    //   </Col>
    <Col md={4} xs={12}>
      <ResponsiveContainer>
        <ResponsiveImage
          src={src}
          alt={alt}
          width={20}
          height={40}
          layout="responsive"
        />
      </ResponsiveContainer>
    </Col>
  );

}
