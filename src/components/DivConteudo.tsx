import { Container } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const DivContainer = styled(Container)`
  padding: 12px 24px;
  box-shadow: -10px 0px 13px -7px #aba09a, 10px 0px 13px -7px #f9f9f9, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media (min-width: 768px) {
    padding: 24px 48px;
   }

    @media (max-width: 360px) {
    padding: 15px 20px;
   }
`;

export default function DivConteudo({ children }: Props) {

  return (
    <DivContainer className='d-flex justify-content-center flex-wrap' fluid>
      {children}
    </DivContainer>
  );

}
