
//'use client';
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
const GTM_ID = 'G-7212BLMX3V';



const inter = Inter({ subsets: ['latin'] });
const anton = Anton({ weight: ['400'], subsets: ['latin'] });
const dancing = Dancing_Script({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Armazém Arte do Porto',
  description: 'Artesanato de Porto União - SC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="pt-br">
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ModaisProvider>
            {children}
          </ModaisProvider>
        </StyledComponentsRegistry>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
