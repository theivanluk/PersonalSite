import Link from 'next/link';

import styles from '@/styles/About.module.css';
import { SC_NavBar } from '../Styling/Styled';
import { useMobileScreen } from '@/hooks/ScreenSize';
import { HamburgerMenu } from './HamburgerMenu';

export default function NavBar() {

  const mobileScreen = useMobileScreen();

  return (
    <SC_NavBar>
      <Link href="/">Home</Link>
      {mobileScreen
        ? <>
          <HamburgerMenu>
            <Link href="/Projects">Projects</Link>
            <Link href="Blog">Blog</Link>
            <Link href="/About">About</Link>
            <Link href="/Contact_Me">Contact</Link>
          </HamburgerMenu>
        </>
        : <>
          <Link href="/Projects">Projects</Link>
          <Link href="Blog">Blog</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact_Me">Contact</Link>
        </>
      }
    </SC_NavBar>
  )

}

