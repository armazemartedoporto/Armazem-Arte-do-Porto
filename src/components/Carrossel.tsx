'use client';

import { CSSProperties } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardImagem from '@/components/CardImagem';
import { carrossel } from '@/data/imagens';

export default function Carrossel() {
  return (
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
      {carrossel.map((imagem) => (
        <SwiperSlide key={imagem.src}>
          <CardImagem imagem={imagem} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
