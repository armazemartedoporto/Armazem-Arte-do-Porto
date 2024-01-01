import { Row } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  src: string;

}

const Div = styled.div`
position: relative;
  max-width: 250px;
  height: 160px;
  overflow: hidden;
  border: 1px solid #000;

`;

const IMG = styled.img`
  position: absolute;
  left: 50%;
  top: 10%;
  height: 100%;
  width: auto;
  transform: translate(-50%,-10%);

  @media (max-width: 400px) {
    width: 90%;
  }
  `;

export default function ImageCarrousel({ src }: Props) {

  return (
    <Row className='d-flex justify-content-center'>
      <Div>
        <IMG src={src}></IMG>
      </Div>
    </Row>
  );
}
