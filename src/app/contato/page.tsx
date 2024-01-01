'use client';

import ContainerTexto from '@/components/ContainerTexto';
import DivConteudo from '@/components/DivConteudo';
import DivMarrom from '@/components/DivMarrom';
import Header from '@/components/Header';
import Images from '@/components/Images';
import RedesSociais from '@/components/RedesSociais';
import Texto from '@/components/Texto';
import Titulo from '@/components/Titulo';
import TituloColorido from '@/components/TituloColorido';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

const TextoDiv = styled.div`
@media (max-width: 450px) {
    font-size: 0.9rem;
   }

`;

export default function Sobre() {

  return (
    <>
      <Header />
      <DivConteudo>
        <>
          <Row>
            <Images src='/assets/Associação2.jpg' alt='Fachada da loja' />
            <ContainerTexto>
              <>
                <Titulo titulo='Venha nos visitar' />
                <Texto texto={`
                Praça Hercílio Luz, s/n \n
                Espaço Estação União, Armazém I \n
                Centro – Porto União – Santa Catarina
                `} />
              </>
            </ContainerTexto>

          </Row>

        </>
      </DivConteudo>
      <DivMarrom>
        <>
          <Row className='mt-4 w-100'>
            <div className='d-flex justify-content-center flex-column'>
              <TituloColorido titulo='Entre em contato conosco' />
              <TextoDiv className='d-flex justify-content-center flex-column mb-3'>

                <div className='d-flex justify-content-center  flex-wrap'>Telefone:<br/> <a href='tel:+5542999544705'> (42) 99954-4705</a></div>
                <div className='d-flex justify-content-center flex-wrap'>Email: <a href='mailto:armazemartedoporto@gmail.com'> armazemartedoporto@gmail.com</a></div>

              </TextoDiv>
              <Row className='d-flex justify-content-center'>
                <RedesSociais />
              </Row>
              {/* <Texto texto={'Telefone e WhatsApp: (42) 99954-4705'} /> */}
            </div>
          </Row>
        </>
      </DivMarrom>
    </>
  );

}
