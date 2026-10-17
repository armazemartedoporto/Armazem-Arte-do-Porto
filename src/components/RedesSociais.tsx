'use client';

import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import { redesSociais } from '@/data/links';

const DIV = styled.div`
  margin: 0;
  width: 30%;

@media (max-width: 850px) {
    width: 50%;
   }

  @media (max-width: 550px) {
    width: 60%;
   }

  @media (max-width: 360px) {
    width: 75%;
   }
`;

const Link = styled.a`
  color: inherit;
  line-height: 0;
`;

const redes = [
  { nome: 'Facebook', href: redesSociais.facebook, Icone: FaFacebook },
  { nome: 'Instagram', href: redesSociais.instagram, Icone: FaInstagram },
  { nome: 'YouTube', href: redesSociais.youtube, Icone: FaYoutube },
  { nome: 'WhatsApp', href: redesSociais.whatsapp, Icone: FaWhatsapp },
  { nome: 'Email', href: redesSociais.email, Icone: FaEnvelope },
];

export default function RedesSociais() {
  return (
    <DIV className='d-flex justify-content-around'>
      {redes.map(({ nome, href, Icone }) => (
        <Link key={nome} href={href} target='_blank' rel='noopener noreferrer' aria-label={nome}>
          <Icone size={30} />
        </Link>
      ))}
    </DIV>
  );
}
