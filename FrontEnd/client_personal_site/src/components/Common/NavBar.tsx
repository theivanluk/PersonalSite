import Link from 'next/link';

import styles from '@/styles/About.module.css';
import { SC_NavBar } from '../Styling/Styled';
import { useMobileScreen } from '@/hooks/ScreenSize';
import { HamburgerMenu } from './HamburgerMenu';

const tabLinks = [{
  url: "/Projects",
  title: "Projects"
}, {
  url: "/Blog",
  title: "Blog"
}, {
  url: "/About",
  title: "About"
}, {
  url: "/Contact_Me",
  title: "Contact"
}]

export default function NavBar() {

  const mobileScreen = useMobileScreen();

  const tabOptions = tabLinks.map(({url, title}) => <Link href={url}>{title}</Link> );

  return (
    <SC_NavBar>
      <Link href="/">Home</Link>
      {mobileScreen
        ? <>
          <HamburgerMenu>
            {tabOptions}
          </HamburgerMenu>
        </>
        : <>
          {tabOptions}
        </>
      }
    </SC_NavBar>
  )

}

