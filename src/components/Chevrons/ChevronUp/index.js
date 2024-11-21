import React, { useState } from 'react';

import './styles.scss';

export default function ChevronUp({ props }) {
  const [strokeWidth, setStrokeWidth] = useState(0.25);
  const style = {
    transition: 'stroke-width 0.3s ease',
  };

  return (
    <button
      className='chevron-icon up'
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
