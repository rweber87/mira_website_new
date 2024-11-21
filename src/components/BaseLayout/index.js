import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Footer from '../Footer';
import Nav from '../Nav';
import HamburgerMenu from '../HamburgerMenu';
import useWindowSize from '../../hooks/windowResize';
import HeaderImage from '../HeaderImage';
import ChevronUp from '../Chevrons/ChevronUp';

import './styles.scss';

export default function BaseLayout(props) {
  const { children } = props;
  const { pathname } = useLocation();
  const [displayHamburger, setDisplayHamburger] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'This is aaaaa Tab!';
      } else {
        document.title = 'Mira Taferner';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useWindowSize((newSize) => {
    const { width } = newSize;
    if (width < 769) {
      setDisplayHamburger(true);
    } else {
      setDisplayHamburger(false);
    }
  });

  return (
    <>
      <Nav />
      {displayHamburger && <HamburgerMenu />}
      <HeaderImage />
      <div
        className={`main-wrapper ${
          pathname.includes('portfolio/')
            ? 'project'
            : pathname.includes('hallo')
            ? 'hallo'
            : pathname.includes('impressum')
            ? 'impressum'
            : ''
        }`}
      >
        {children}
      </div>
      <ChevronUp />
      <Footer />
    </>
  );
}
