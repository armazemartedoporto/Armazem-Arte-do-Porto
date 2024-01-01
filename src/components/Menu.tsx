import styled from 'styled-components';
import * as React from 'react';
import { Container, Nav, NavDropdown, Navbar, NavbarBrand, NavbarCollapse } from 'react-bootstrap';

const IMG = styled.img`
  width:200px;
  @media (max-width: 400px) {
    width: 90%;
  }
  /* @media (max-width: 358px) {
    width: 80%;
  } */
  `;

const NavbarMod = styled(Navbar)`
  @media (max-width: 360px) {
    padding: 0;
  }
  `;

// const NavbarCollapseMod = styled(NavbarCollapse)`
// @media (max-width: 575px) {
//   background: #e9dfdb;
//   }
// `;

const NavbarBrandMod = styled(NavbarBrand)`
  @media (max-width: 360px) {
    width: 70%;
  }
  @media (max-width: 330px) {
    width: 60%;
  }
`;

export default function Menu() {

  return (
    <>

      <Navbar collapseOnSelect expand="sm" className="" sticky="top">
        <Container className='justify-content-between'>
          <NavbarBrandMod href="/home" >
            <IMG
              src="/assets/Logo_3.png"
              className="d-inline-block align-top align-left"
              alt="Armazém Arte do Porto"
            />
          </NavbarBrandMod>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav" className='justify-content-end' >
            <Nav className="" >
              <Nav.Link href="/home" style={{ marginLeft: '10px' }}>Início</Nav.Link>
              <Nav.Link href="/sobre" style={{ marginLeft: '10px' }}>Sobre</Nav.Link>
              <Nav.Link href="/contato" style={{ marginLeft: '10px' }}>Contato</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

    </>
  );
}
