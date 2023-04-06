import Header from './Header';
import styles from '@/styles/Home.module.css';
import React, { FC, ReactNode } from 'react';
import { SC_Layout, SC_Main } from '../Styling/Styled';
import NavBar from './NavBar';

type Props = {
  children: ReactNode | ReactNode[];
  name: string;
}

const Layout: FC<Props> = ({ children, name }) => {
  return (
    <>
      <Header name={name}/>
      <SC_Main >
        <NavBar />
        <SC_Layout>
          {children}
        </SC_Layout>
      </SC_Main>
    </>
  )
}

export default Layout;