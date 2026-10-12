'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { Col } from 'react-bootstrap';
import { caminho } from '@/utils/caminho';
import { ImagemDados } from '@/data/imagens';

interface Props {
  imagem: ImagemDados;
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
  max-width: 250px; /* Defina um valor máximo para evitar que a imagem fique muito grande */
  margin: 0 auto; /* Centralize o contêiner */
`;

export default function Images({ imagem }: Props) {
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
          src={caminho(imagem.src)}
          alt={imagem.alt}
          width={300}
          height={300}
          //layout="responsive"
        />
      </ResponsiveContainer>
    </Col>
  );

}
