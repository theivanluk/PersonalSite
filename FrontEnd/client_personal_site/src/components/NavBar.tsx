import Link from 'next/link';

import styles from '@/styles/About.module.css';

export default function NavBar() {
  return (
    <div className={styles.center}>
      <Link className={styles.thirteen} href="/">Home</Link>
      <Link className={styles.thirteen} href="/Projects">Projects</Link>
      <Link className={styles.thirteen} href="Blog">Blog</Link>
      <Link className={styles.thirteen} href="/About">About</Link>
      <Link className={styles.thirteen} href="/Contact_Me">Contact</Link>
    </div>
  )

}

