import NavBar from './NavBar';
import Header from './Header';
import styles from '@/styles/Home.module.css';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
  name: string;
}

const Layout: FC<Props> = ({ children, name }) => {
  return (
    <>
      <Header name={name}/>
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout;