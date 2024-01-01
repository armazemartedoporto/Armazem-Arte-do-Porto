import { Col } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  texto: string;
  titulo?: string;
}

const Paragrafo = styled.div`
  display: flex;
  justify-content: start;
  line-height: 20px;
   @media (min-width: 1094px) {
    font-size: 1.1rem;
    line-height: 25px;
   }

   @media (max-width: 468px) {
    font-size: 0.9rem;
    line-height: 15px;
   }
`;

export default function TextoDivMarrom({ texto, titulo }: Props) {

  return (
    <Paragrafo>
      {titulo ? <Col xs={3} md={1}><strong>{titulo }</strong></Col> : null}
      <Col><span>{texto.split('\n').map((pedacoTexto, index) => <div key={index}>{pedacoTexto} </div>)}</span>
      </Col>
    </Paragrafo>
  );
}
