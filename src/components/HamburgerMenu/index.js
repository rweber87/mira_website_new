import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';
import { tiles } from '../Portfolio/tiles';

import './styles.scss';

export default function HamburgerMenu() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const tmp = pathname.slice(pathname.lastIndexOf('/'), pathname.length);
  const path = tmp.split('/')[1];

  const setOpenHelper = () => {
    const scopedIsOpen = !isOpen;
    setIsOpen(scopedIsOpen);

    if (scopedIsOpen) {
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = 'auto';
      document.body.style.overflow = '';
    }
  };

  return (
    <div className='mobile-menu'>
      <Hamburger toggled={isOpen} toggle={setOpenHelper} color='#01dcd1' />
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <Link
          className={`hamburger__main-link hallo ${
            pathname.includes('hallo') ? 'active' : ''
          }`}
          to='/hallo'
          onClick={() => setOpenHelper()}
        >
          Hallo
        </Link>
        <Link
          className={`hamburger__main-link ${
            pathname.includes('portfolio') ? 'active' : ''
          }`}
          to='/portfolio'
          onClick={() => setOpenHelper()}
        >
          Portfolio
        </Link>
        <div className='hamburger__sub-links'>
          {tiles
            .filter((tile) => tile.isProjectTile)
            .map((tile, idx) => (
              <Link
                key={`link-${tile.page.title}-${idx}`}
                className={`hamburger__sub-link ${
                  path === `${tile.id}` ? 'active' : ''
                }`}
                to={`/portfolio/${tile.id}`}
                onClick={() => setOpenHelper()}
              >
                {tile.botText ? (
                  <span className='type-span'>
                    <div>
                      {tile.topText}
                      {/* <span className='bar'>|</span>
                      {tile.botText} */}
                    </div>
                  </span>
                ) : (
                  tile.page.title
                )}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
