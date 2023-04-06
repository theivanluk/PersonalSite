import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';

export type IGlobalContext = {
  openMenu: boolean,
  setOpenMenu: Function
}

export const GlobalContext = createContext<IGlobalContext>({
  openMenu: false,
  setOpenMenu: () => {}
});

export default function App({ Component, pageProps }: AppProps) {

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{openMenu, setOpenMenu}}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}
