import type { Metadata } from 'next';
import ContainerTexto from '@/components/ContainerTexto';
import DivConteudo from '@/components/DivConteudo';
import DivMarrom from '@/components/DivMarrom';
import Header from '@/components/Header';
import Images from '@/components/Images';
import RedesSociais from '@/components/RedesSociais';
import Texto from '@/components/Texto';
import Titulo from '@/components/Titulo';
import TituloColorido from '@/components/TituloColorido';
import { FaWhatsapp } from 'react-icons/fa';
import { Row } from '@/components/Bootstrap';
import TextoDiv from '@/components/TextoDiv';
import { email, exibir, linkEmail, linkTel, linkWhatsapp, telefones, todosTelefones } from '@/data/contatos';
import { imagemContato } from '@/data/imagens';

export const metadata: Metadata = {
  title: 'Contato',
  description: `Venha nos visitar: Praça Hercílio Luz, Espaço Estação União, Armazém I, Centro - Porto União - SC. Tel: ${todosTelefones}.`,
};

export default function Sobre() {

  return (
    <>
      <Header />
      <DivConteudo>
        <>
          <Row>
            <Images imagem={imagemContato} />
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

                {telefones.map((t) => (
                  <div key={t.cargo} className='d-flex justify-content-center flex-wrap'>
                    {t.cargo}: <a href={linkTel(t)} className='mx-1'>{exibir(t)}</a>
                    <a href={linkWhatsapp(t)} target='_blank' rel='noopener noreferrer' aria-label={`WhatsApp da ${t.cargo.toLowerCase()}`} style={{ color: 'inherit' }}><FaWhatsapp /></a>
                  </div>
                ))}
                <div className='d-flex justify-content-center flex-wrap'>Email: <a href={linkEmail} className='mx-1'>{email}</a></div>

              </TextoDiv>
              <Row className='d-flex justify-content-center'>
                <RedesSociais />
              </Row>
            </div>
          </Row>
        </>
      </DivMarrom>
    </>
  );

}
