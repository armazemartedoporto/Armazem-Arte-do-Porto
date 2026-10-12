import AnosDeFundacao from '@/components/AnosDeFundacao';
import { Container, Row } from '@/components/Bootstrap';
import Carrossel from '@/components/Carrossel';
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
import { imagemHome } from '@/data/imagens';

export default function Home() {
  return (
    <>
      <Header />

      <DivMarrom>
        <>
          <Row className='w-100 '>
            <TituloColorido titulo={<>Fazendo Arte com Amor há <AnosDeFundacao /> anos</>} />
          </Row>
          <Row className='w-100 pe-2'>
            <Carrossel />
          </Row>
        </>
      </DivMarrom>
      <DivConteudo>
        <>
          <Row>
            <ContainerTexto>
              <>
                <Titulo titulo='Peças feitas a mãos com qualidade e exclusividade' />
                <Texto texto='Trabalhos manuais feitos com linhas, agulhas, madeiras, pincéis nas mais variadas técnicas. ' />
              </>
            </ContainerTexto>

            <Images imagem={imagemHome} />
          </Row>
        </>
      </DivConteudo>

      <DivMarrom>
        <Container fluid>
          <Row>
            <TituloColorido titulo='Siga-nos nas redes' />
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
