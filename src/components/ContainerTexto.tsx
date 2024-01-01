import { Col } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const Coluna = styled(Col)`
  margin-bottom: 20px;
    @media (min-width: 768px) {
    padding: 0 30px;
   }
`;

export default function ContainerTexto({ children }: Props) {

  return (
    <Coluna md={8} sm={12} className='align-self-center'>
      {children}
    </Coluna>
  );
}
