import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import styled from 'styled-components';

const ContainerDiv = styled(Container)`
  margin: 0;
  padding: 12px 24px;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    padding: 24px 48px;
   }

    @media (max-width: 360px) {
    padding: 15px 20px;
   }
`;

const IMG = styled.img`
  width: 80px;
  @media (max-width: 368px) {
    width: 60px;
   }

`;

const Paragrafo = styled.p`
margin: 0;
font-size: 0.9rem;

  @media (max-width: 468px) {
    font-size: 0.8rem;
   }

   @media (max-width: 368px) {
    font-size: 0.7rem;
   }
`;

const MenuFooter = styled(Col)`
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
   }
`;

export default function Footer() {

  return (
    <ContainerDiv fluid>
      <Col xs={4} md={2}>
        <IMG src='Logo 1.png'></IMG>
      </Col>
      <Col xs={8} md={6}>
        <Paragrafo>
          Praça Hercílio Luz, s/n <br />
          Espaço Estação União, Armazém I <br />
          Centro – Porto União – Santa Catarina <br/>
        </Paragrafo>
      </Col>
      <MenuFooter md={4}>
        <Navbar>
          <Nav className="" >
            <Nav.Link href="/Armazem-Arte-do-Porto/home" style={{ marginLeft: '10px' }}>Início</Nav.Link>
            <Nav.Link href="/Armazem-Arte-do-Porto/sobre" style={{ marginLeft: '10px' }}>Sobre</Nav.Link>
            <Nav.Link href="/Armazem-Arte-do-Porto/contato" style={{ marginLeft: '10px' }}>Contato</Nav.Link>
          </Nav>
        </Navbar>
      </MenuFooter>
    </ContainerDiv>

  );
}
