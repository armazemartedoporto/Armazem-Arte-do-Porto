import { Container } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const ContainerDiv = styled(Container)`
  background: #e9dfdb;
  width: 100%;
  height: fit-content;
  padding: 0 0 20px 0;
  box-shadow: -10px 0px 13px -7px #aba09a, 10px 0px 13px -7px #f9f9f9, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export default function DivMarrom({ children }: Props) {

  return (
    <ContainerDiv className='d-flex justify-content-center flex-wrap' fluid>
      {children}
    </ContainerDiv>

  );
}
