'use client';

import { createContext, useContext, useState } from 'react';


interface IModaisContexto {
  carregando: boolean;
  alterarCarregamento: (boolean: boolean) => void;
  menuAberto: boolean;
  alterarMenu: (boolean: boolean) => void;
}

export const ModaisContexto = createContext({} as IModaisContexto);

export function ModaisProvider({ children }: { children: React.ReactNode }) {
  const [carregando, setCarregando] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  /* Alterar tela de carregamento */
  function alterarCarregamento(boolean: boolean) {
    setCarregando(boolean);
  }

  /* Alterar menu (aberto / fechado) */
  function alterarMenu(boolean: boolean) {
    setMenuAberto(boolean);
  }

  return (
    <ModaisContexto.Provider value={{
      carregando,
      alterarCarregamento,
      menuAberto,
      alterarMenu
    }}>
      {children}
    </ModaisContexto.Provider>
  );
}

export function useModais(): IModaisContexto {
  const context = useContext(ModaisContexto);

  if (!context) {
    throw new Error('useAuth Error!');
  }

  return context;
}
