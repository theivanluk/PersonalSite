import React, { FC } from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import NavBar from './NavBar';
import { APP_BUILD_MANIFEST } from 'next/dist/shared/lib/constants';

interface HeaderProps {
  name: String
}

const Header: React.FC<HeaderProps> = ({name}) => {

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={`${name} page`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div>
        {name}
      </div>
    </>
  )
}

export default Header;