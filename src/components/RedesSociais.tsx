import { useRouter } from 'next/navigation';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const DIV = styled.div`
  margin: 0;
  width: 25%;

@media (max-width: 850px) {
    width: 40%;
   }

  @media (max-width: 550px) {
    width: 50%;
   }

  @media (max-width: 360px) {
    width: 75%;
   }
`;

export default function RedesSociais() {
  const router = useRouter();

  return (
    <DIV className='d-flex justify-content-around'>
      <FaFacebook size={30} style={{cursor: 'pointer'}} onClick={() => router.push('https://www.facebook.com/profile.php?id=61553462159195&mibextid=ZbWKwL')}/>
      <FaInstagram size={30} style={{ cursor: 'pointer' }}  onClick={() => router.push('https://www.instagram.com/armazem_arte_do_porto/')} />
      <FaYoutube size={30} style={{ cursor: 'pointer' }}  onClick={() => router.push('https://www.youtube.com/@ArmazemArtedoPorto')} />
      <FaWhatsapp size={30} style={{ cursor: 'pointer' }} onClick={() => router.push('https://wa.me/5542999544705')} />
    </DIV>

  );
}
