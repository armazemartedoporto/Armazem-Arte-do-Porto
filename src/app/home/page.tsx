'use client';

import CardImagem from '@/components/CardImagem';
import ContainerTexto from '@/components/ContainerTexto';
import DivConteudo from '@/components/DivConteudo';
import DivMarrom from '@/components/DivMarrom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Images from '@/components/Images';
import RedesSociais from '@/components/RedesSociais';
import Texto from '@/components/Texto';
import Titulo from '@/components/Titulo';
import TituloColorido from '@/components/TituloColorido';
import { CSSProperties } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Home() {
  const imagens = [
    { id: 1, src: 'assets/Imagem3.jpg' },
    { id: 2, src: 'assets/Imagem4.jpg' },
    { id: 3, src: 'assets/Imagem5.jpg' },
    { id: 4, src: 'assets/Imagem6.jpg' },
    { id: 5, src: 'assets/Imagem7.jpg' },
    { id: 6, src: 'assets/Imagem8.jpg' },
    { id: 7, src: 'assets/Imagem9.jpg' },
    { id: 8, src: 'assets/Imagem10.jpg' },
  ];

  return (
    <>
      <Header />

      <DivMarrom>
        <>
          <Row className='w-100 '>
            <TituloColorido titulo='Fazendo Arte com Amor há 17 anos' />
          </Row>
          <Row className='w-100 pe-2'>
            <Swiper
              style={{
                '--swiper-pagination-color': '#fff',
                '--swiper-navigation-color': '#fff',
              } as CSSProperties}
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                568: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {imagens.map((imagem, index) => (<SwiperSlide key={index}>
                <CardImagem src={imagem.src}></CardImagem>
              </SwiperSlide>))}
            </Swiper>
          </Row>
        </>
      </DivMarrom>
      <DivConteudo>
        <>
          <Row>
            <ContainerTexto>
              <>
                <Titulo titulo='Peças feitas a mãos com qualidade e exclusividade' />
                <Texto texto='Bordados variados, crochê, tricô, madeira de demolição, lembranças da cidade e produtos de cunho étnicos como pintura em madeira, frivoleté, hardanger, vagonite, tear, macramé, biscuit aplicado, dentre outros. ' />
              </>
            </ContainerTexto>

            <Images src='assets/imagem1.jpg' alt='Loja' />
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
