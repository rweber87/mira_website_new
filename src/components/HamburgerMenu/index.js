import React, { useState } from 'react';
import { Cross as Hamburger } from 'hamburger-react';
import { Link, useLocation } from 'react-router-dom';
import { tiles } from '../Portfolio/tiles';

import './styles.scss';

export default function HamburgerMenu({ children }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mobile-menu'>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color='#ca5541' />
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <Link
          className={`hamburger__main-link ${
            pathname.includes('hallo') ? '' : ''
          }`}
          to='/hallo'
          onClick={() => setIsOpen(!isOpen)}
        >
          hallo
        </Link>
        <Link
          className={`hamburger__main-link ${
            pathname.includes('portfolio') ? '' : ''
          }`}
          to='/portfolio'
          onClick={() => setIsOpen(!isOpen)}
        >
          portfolio
        </Link>
        <div className='hamburger__sub-links'>
          {tiles
            .filter((tile) => tile.shouldHover)
            .map((tile) => (
              <Link
                className={`hamburger__sub-link ${
                  pathname.includes('portfolio') ? '' : ''
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
