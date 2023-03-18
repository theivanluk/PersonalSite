import Link from 'next/link';

import styles from '@/styles/About.module.css';

export default function NavBar() {
  return (
    <div >
      <Link href="/">Home</Link>
      <Link href="/Projects">Projects</Link>
      <Link href="Blog">Blog</Link>
      <Link href="/About">About</Link>
      <Link href="/Contact_Me">Contact</Link>
    </div>
  )

}

