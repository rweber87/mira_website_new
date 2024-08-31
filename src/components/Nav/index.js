import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    <div
      className={`navbar  ${pathname.includes('portfolio/') ? 'active' : ''}`}
    >
      <div className='navbar-wrapper'>
        <Link
          className={`navbar__name ${
            pathname.includes('portfolio/') ? 'active' : ''
          }`}
          to='/'
        >
          <span className='first_name'>mira</span>taferner
        </Link>
        {displayHamburger ? null : (
          <div className='navbar__wrapper'>
            <div className='navbar__links'>
              <Link
                className={`navbar__link ${
                  pathname.includes('portfolio')
                    ? 'active'
                    : pathname.includes('portfolio/')
                    ? 'portfolio-page'
                    : ''
                }`}
                to='/portfolio'
              >
                portfolio
              </Link>
              <Link
                className={`navbar__link hallo-link ${
                  pathname.includes('hallo')
                    ? 'active'
                    : pathname.includes('portfolio/')
                    ? 'portfolio-page'
                    : ''
                }`}
                to='/hallo'
              >
                hallo
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
