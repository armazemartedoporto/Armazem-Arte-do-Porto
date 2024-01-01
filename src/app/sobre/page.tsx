'use client';

import ContainerTexto from '@/components/ContainerTexto';
import DivConteudo from '@/components/DivConteudo';
import DivMarrom from '@/components/DivMarrom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Images from '@/components/Images';
import RedesSociais from '@/components/RedesSociais';
import Texto from '@/components/Texto';
import TextoDivMarrom from '@/components/TextoDivMarrom';
import Titulo from '@/components/Titulo';
import TituloColorido from '@/components/TituloColorido';
import { Container, Row } from 'react-bootstrap';
import { VscDebugBreakpointLog } from 'react-icons/vsc';


export default function Sobre() {

  return (
    <>
      <Header />

      <DivMarrom>
        <>
          <Row className='w-100 '>
            <TituloColorido titulo='Artesanato de qualidade' />
          </Row>
          <Row className='w-100 '>
            <TextoDivMarrom titulo={'Missão: '} texto={'Manutenção do trabalho artesanal manual, dando ênfase no resgate étnico cultural. '} />
            <TextoDivMarrom titulo={'Visão: '} texto={'Buscar excelência da qualidade e acabamento do produto manual, privilegiando o trabalho artesanal étnico. '} />
            <TextoDivMarrom titulo={'Valores: '} texto={'Preservação, cultura, compromisso com qualidade, abnegação, respeito do fazer manual, resgate do valor cultural, bom atendimento.'} />
          </Row>

        </>
      </DivMarrom>
      <DivConteudo>
        <>
          <Row>
            <Images src='/assets/imagem2.jpg' alt='Loja' />
            <ContainerTexto>
              <>
                <Titulo titulo='Objetivo' />
                <Texto texto='O Armazém Arte do Porto – Associação de Artesãos de Porto União – SC se propõe a atuar como órgão representativo, congregador, beneficente e fomentador dos artesãos atuantes e moradores do Município de Porto União, oferecendo ao público o contato com a diversidade da arte que se encontra nesta cidade.' />
              </>
            </ContainerTexto>

          </Row>

        </>
      </DivConteudo>


      <DivMarrom>
        <Container fluid>
          <Row className='w-100 '>
            <TituloColorido titulo='Saiba mais sobre nossa trajetória:' />
          </Row>
          <Row className='d-flex justify-content-center'>
            <iframe
              src='https://www.youtube.com/embed/LplQo1TECVA?si=YDhihho5o5eQytOv'
              width="560" height="315"
              //frameBorder='0'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title='História Armazém Arte do Porto'
            />
          </Row>
        </Container>
      </DivMarrom>

      <DivConteudo>
        <>
          <Row>
            <ContainerTexto>
              <>
                <Titulo titulo='Mas vamos muito além... ' />
                <Row className='w-100 g-2'>
                  <div className='d-flex align-items-center'>
                    <VscDebugBreakpointLog size={30} style={{ margin: '0 10px 0 0' }} />
                    <Texto texto={'Atendemos artesãos sociais (não associados) de mais idade que produzem trabalho de interesse cultural para a associação.'} />
                  </div>
                  <div className='d-flex align-items-center'>
                    <VscDebugBreakpointLog size={25} style={{ margin: '0 10px 0 0' }} />
                    <Texto texto={'Premiamos artesãos não-associados ou In Memoriam com o troféu Valor Cultural desde 2013. '} />
                  </div>
                  <div className='d-flex align-items-center'>
                    <VscDebugBreakpointLog size={30} style={{ margin: '0 10px 0 0' }} />
                    <Texto texto={'Oferecemos um espaço aberto a comunidade artística ou expositores que precisem de um espaço físico para eventos.'} />
                  </div>
                </Row>
              </>
            </ContainerTexto>
            <Images src='/assets/imagem12.jpg' alt='Loja' />

          </Row>

        </>
      </DivConteudo>

      <DivMarrom>
        <Container fluid>
          <Row>
            <TituloColorido titulo='Siga-nos nas redes'></TituloColorido>
          </Row>
          <Row className='d-flex justify-content-center'>
            <RedesSociais />
          </Row>
        </Container>
      </DivMarrom>

      <Footer />
    </>
  );

}
