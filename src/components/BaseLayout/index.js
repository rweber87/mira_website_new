import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Footer from '../Footer';
import Nav from '../Nav';
import HamburgerMenu from '../HamburgerMenu';
import useWindowSize from '../../hooks/windowResize';

import './styles.scss';

export default function BaseLayout(props) {
  const { children } = props;
  const { pathname } = useLocation();
  const [displayHamburger, setDisplayHamburger] = useState(false);

  useWindowSize((newSize) => {
    const { width } = newSize;
    if (width < 768) {
      setDisplayHamburger(true);
    } else {
      setDisplayHamburger(false);
    }
  });

  return (
    <>
      <Nav />
      {displayHamburger && <HamburgerMenu />}
      <div
        className={`main-wrapper ${
          pathname.includes('portfolio/') ? 'project' : ''
        }`}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
