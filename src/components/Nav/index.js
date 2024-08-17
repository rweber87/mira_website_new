import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu';
import useWindowSize from '../../hooks/windowResize';

import './styles.scss';

export default function Nav() {
  const [displayHamburger, setDisplayHamburger] = useState(false);
  const { pathname } = useLocation();

  useWindowSize((newSize) => {
    const { width } = newSize;
    if (width < 768) {
      setDisplayHamburger(true);
    } else {
      setDisplayHamburger(false);
    }
  });

  return (
    <nav
      className={`navbar ${pathname.includes('portfolio/') ? 'active' : ''}`}
    >
      <Link
        className={`navbar__name ${
          pathname.includes('portfolio/') ? 'active' : ''
        }`}
        to='/'
      >
        <span className='first_name'>mira</span>taferner
      </Link>
      {displayHamburger ? (
        <div className='navbar__links'>
          <HamburgerMenu />
        </div>
      ) : (
        <div className='navbar__links'>
          <Link
            className={`navbar__link ${
              pathname.includes('portfolio') ? 'active' : ''
            }`}
            to='/portfolio'
          >
            portfolio
          </Link>
          <Link
            className={`navbar__link ${
              pathname.includes('hallo') ? 'active' : ''
            }`}
            to='/hallo'
          >
            hallo
          </Link>
        </div>
      )}
    </nav>
  );
}
