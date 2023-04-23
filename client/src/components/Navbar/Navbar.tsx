import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { easeInOut, motion } from 'framer-motion';

import images from './../../constants/images'
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logoBlue} alt="logo"/>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((link) =>
          <li key={`link-${link}`} className='app__flex p-text'>
            <div />
            <a href={`#${link}`}>{link}</a>
          </li>
        )}
        <li className='app__flex p-text'>
          <div />
          <a href="Ivan Luk Resume.pdf" target='_blank' rel='noreferrer' download="Ivan_Luk_Resume">Download My Resume!</a>
        </li>
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}/>
        {toggle && (
          <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ durationo: 0.85, ease: easeInOut}}>
            <HiX onClick={() => setToggle(false)}/>
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((link) =>
                <li key={link} >
                  <a
                      href={`#${link}`}
                      onClick={() => setToggle(false)}>
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </motion.div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;