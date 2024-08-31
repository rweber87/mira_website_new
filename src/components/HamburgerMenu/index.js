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

  return (
    <div className='mobile-menu'>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color='#ca5541' />
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <Link
          className={`hamburger__main-link ${
            pathname.includes('hallo') ? 'active' : ''
          }`}
          to='/hallo'
          onClick={() => setIsOpen(!isOpen)}
        >
          hallo
        </Link>
        <Link
          className={`hamburger__main-link ${
            pathname.includes('portfolio') ? 'active' : ''
          }`}
          to='/portfolio'
          onClick={() => setIsOpen(!isOpen)}
        >
          portfolio
        </Link>
        <div className='hamburger__sub-links'>
          {tiles
            .filter((tile) => tile.shouldHover)
            .map((tile, idx) => (
              <Link
                key={`link-${tile.page.title}-${idx}`}
                className={`hamburger__sub-link ${
                  path === `${tile.id}` ? 'active' : ''
                }`}
                to={`/portfolio/${tile.id}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {tile.page.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
