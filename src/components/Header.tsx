import { Container, Row, Col } from 'react-bootstrap';
import { styled } from 'styled-components';
import Menu from './Menu';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  //margin: 0px 0px 10px 0px;
  padding: 10px;
  background: #f4f0ee;
  align-items: center;
  -webkit-box-shadow: -10px 0px 13px -7px #d6ccc7, -10px 0px 13px -7px #e7ddd8, 0px 5px 5px 5px rgba(0, 0, 0, 0);;
  box-shadow: -10px 0px 13px -7px #aba09a, 10px 0px 13px -7px #f9f9f9, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  position: relative;

  @media (max-width: 360px) {
    padding: 0px;
  }
`;

export default function Header() {

  return (
    <Container className='p-0' fluid>
      <Div>
        <Row style={{width: '100%'}}>

          <Col md={12}>
            <Menu/>
          </Col>
        </Row>
      </Div>
    </Container>
  );
}
