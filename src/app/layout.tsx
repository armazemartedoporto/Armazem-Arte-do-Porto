
//'use client';
import type { Metadata } from 'next';
import { Inter, Anton, Dancing_Script } from 'next/font/google';
import 'globals.css';
import { ModaisProvider } from '@/context/ModaisContext';
import 'bootstrap/dist/css/bootstrap.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

      <body className={inter.className}>
        <ModaisProvider>
          {children}
        </ModaisProvider>
      </body>
    </html>
  );
}
