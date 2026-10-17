import type { Metadata } from 'next';
import { Inter, Anton, Dancing_Script } from 'next/font/google';
import './globals.css';
import { ModaisProvider } from '@/context/ModaisContext';
import 'bootstrap/dist/css/bootstrap.css';
import StyledComponentsRegistry from '@/app/registry';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Script from 'next/script';
const GA_ID = 'G-7212BLMX3V';

// Usadas via variável CSS nos styled-components (Titulo e TituloColorido)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const anton = Anton({ weight: ['400'], subsets: ['latin'], variable: '--font-anton' });
const dancing = Dancing_Script({ weight: ['700'], subsets: ['latin'], variable: '--font-dancing' });

const SITE_URL = 'https://armazemartedoporto.github.io/Armazem-Arte-do-Porto';
const DESCRICAO = 'Associação de Artesãos de Porto União - SC. Peças feitas à mão com qualidade e exclusividade: linhas, agulhas, madeiras, pincéis e muito mais.';

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: 'Armazém Arte do Porto | Artesanato de Porto União - SC',
    template: '%s | Armazém Arte do Porto',
  },
  description: DESCRICAO,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Armazém Arte do Porto',
    title: 'Armazém Arte do Porto',
    description: DESCRICAO,
    url: `${SITE_URL}/`,
    images: [{ url: `${SITE_URL}/assets/Imagem3-v2.jpg`, alt: 'Artesanato do Armazém Arte do Porto' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="pt-br">
      <body className={`${inter.variable} ${anton.variable} ${dancing.variable}`}>
        <StyledComponentsRegistry>
          <ModaisProvider>
            {children}
          </ModaisProvider>
        </StyledComponentsRegistry>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
