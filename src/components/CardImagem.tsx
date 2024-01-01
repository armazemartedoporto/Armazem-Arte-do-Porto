import { PropsWithChildren } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  src: string;
}

const DivCard = styled(Card)`

width: 100%;
height: 200px;
background:#333;
color: #fff;
font-size: 30px;
margin: 0 20px;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
border: none;

@media (max-width: 450px) {
    margin: 0 5px;
  }
`;

const Imagem = styled.img`
height: 250px;
width: fit-content;
position: absolute;
  top: -10%;
  width: auto;

`;

export default function CardImagem({ src }: Props) {
  return (
    <DivCard >
      <Imagem src={src}></Imagem>
    </DivCard>

  );
}
