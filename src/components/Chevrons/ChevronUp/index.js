import React, { useState } from 'react';
import { useLocation } from 'react-router';
import useWindowSize from '../../../hooks/windowResize';

import './styles.scss';

export default function ChevronUp({ props }) {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [_, setIsMobileMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(
    window.innerWidth > 768 ? 0.25 : 0.5
  );
  const style = {
    transition: 'stroke-width 0.3s ease',
  };

  useWindowSize((newSize) => {
    const { width } = newSize;
    if (width < 769) {
      setIsMobileMode(true);
    } else {
      setIsMobileMode(false);
    }
  });

  const determineBackgroundClass = () => {
    return pathname.includes('impressum')
      ? 'impressum'
      : pathname.includes('portfolio') && !pathname.includes('portfolio/')
      ? 'portfolio'
      : '';
  };

  return (
    <button
      className={`chevron-icon up ${determineBackgroundClass()}`}
      onMouseEnter={() => setStrokeWidth(0.5)}
      onMouseLeave={() => setStrokeWidth(0.25)}
      onClick={() => window.scrollTo({ top: 0, left: -50, behavior: 'smooth' })}
    >
      <svg
        style={style}
        width='100px'
        height='100px'
        viewBox='0 0 24 24'
        role='img'
        aria-labelledby='chevronUpIconTitle'
        stroke='#CA5541'
        strokeWidth={strokeWidth}
        strokeLinecap='square'
        strokeLinejoin='miter'
        fill='none'
        color='#000000'
      >
        <title id='chevronUpIconTitle'>{'Chevron Up'}</title>
        <polyline points='18 14 12 8 6 14' />
      </svg>
    </button>
  );
}
