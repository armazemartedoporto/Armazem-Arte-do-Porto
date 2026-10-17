'use client';

import Image from 'next/image';
import Link from 'next/link';
import { caminho } from '@/utils/caminho';
import { logoRodape } from '@/data/imagens';
import { todosTelefones } from '@/data/contatos';
import { paginas } from '@/data/links';
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

const IMG = styled(Image)`
  width: auto;
  @media (max-width: 368px) {
    width: 80%;
    height: 80%;
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
        <IMG
          src={caminho(logoRodape.src)}
          width={100}
          height={100}
          alt={logoRodape.alt}
        />
      </Col>
      <Col xs={8} md={6}>
        <Paragrafo>
          Praça Hercílio Luz, s/n <br />
          Espaço Estação União, Armazém I <br />
          Centro – Porto União – Santa Catarina <br />
          Tel: {todosTelefones}
        </Paragrafo>
      </Col>
      <MenuFooter md={4}>
        <Navbar>
          <Nav className="" >
            {paginas.map((pagina) => (
              <Nav.Link key={pagina.href} as={Link} href={pagina.href} style={{ marginLeft: '10px' }}>{pagina.nome}</Nav.Link>
            ))}
          </Nav>
        </Navbar>
      </MenuFooter>
    </ContainerDiv>

  );
}
