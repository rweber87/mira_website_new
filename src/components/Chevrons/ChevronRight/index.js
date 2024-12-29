import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProjectId from '../../../hooks/projectId';
import usePageNavigation from '../../../hooks/hasNextPreviousPage';
import useWindowSize from '../../../hooks/windowResize';

import { tiles } from '../../Portfolio/tiles';

import './styles.scss';

export default function ChevronRight(props) {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsMobileMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(
    window.innerWidth > 768 ? 0.25 : 0.5
  );
  const pages = tiles.filter((tile) => tile.isProjectTile);
  const projectId = useProjectId();
  const { hasNext, nextId } = usePageNavigation(pages, projectId);
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

  return (
    <Link
      className='right'
      to={hasNext ? `/portfolio/${nextId}` : '/portfolio'}
      onMouseEnter={() => setStrokeWidth(0.5)}
      onMouseLeave={() => setStrokeWidth(0.25)}
    >
      <button className='chevron-icon'>
        <svg
          style={style}
          width='100px'
          height='100px'
          viewBox='0 0 24 24'
          role='img'
          aria-labelledby='chevronRightIconTitle'
          stroke={strokeWidth === 0.5 ? '#01dcd1' : '#CA5541'}
          strokeWidth={strokeWidth}
          strokeLinecap='square'
          strokeLinejoin='miter'
          fill='none'
          color='#000000'
          {...props}
        >
          <title id='chevronRightIconTitle'>{'Chevron Right'}</title>
          <polyline points='10 6 16 12 10 18 10 18' />
        </svg>
      </button>
    </Link>
  );
}
