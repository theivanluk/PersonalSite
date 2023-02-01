import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import { useState } from 'react';
import NavBar from './../components/NavBar';
import Layout from '@/components/Layout';


export default function Home() {


  return (
    <>
      <Layout name={'Personal Site'}>
        <div className={styles.grid}>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 >
              Deploy <span>-&gt;</span>
            </h2>
            <p >
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </Layout>
    </>
  )
}
