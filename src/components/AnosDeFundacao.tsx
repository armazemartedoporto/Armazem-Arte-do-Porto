'use client';

import { useEffect, useState } from 'react';
import { anosDeFundacao } from '@/utils/anos';

// O site é estático: o valor do build serve de base e o navegador
// atualiza para o ano atual do visitante.
export default function AnosDeFundacao() {
  const [anos, setAnos] = useState(anosDeFundacao);

  useEffect(() => {
    setAnos(anosDeFundacao());
  }, []);

  return <>{anos}</>;
}
