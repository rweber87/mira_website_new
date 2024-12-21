import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tiles } from '../../Portfolio/tiles';
import useProjectId from '../../../hooks/projectId';
import usePageNavigation from '../../../hooks/hasNextPreviousPage';
import useWindowSize from '../../../hooks/windowResize';

import './styles.scss';

export default function ChevronLeft(props) {
  // eslint-disable-next-line no-unused-vars
  const [_, setIsMobileMode] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState(
    window.innerWidth > 768 ? 0.25 : 0.5
  );
  const pages = tiles.filter((tile) => tile.isProjectTile);
  const projectId = useProjectId();
  const { hasPrevious, prevId } = usePageNavigation(pages, projectId);
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
      className='left'
      to={hasPrevious ? `/portfolio/${prevId}` : '/portfolio'}
      onMouseEnter={() => setStrokeWidth(0.5)}
      onMouseLeave={() => setStrokeWidth(0.25)}
    >
      <button className='chevron-icon'>
        <svg
          width='100px'
          height='100px'
          viewBox='0 0 24 24'
          role='img'
          aria-labelledby='chevronLeftIconTitle'
          stroke='#CA5541'
          strokeWidth={strokeWidth}
          strokeLinecap='square'
          strokeLinejoin='miter'
          fill='none'
          {...props}
          style={style}
        >
          <title id='chevronLeftIconTitle'>{'Chevron Left'}</title>
          <polyline points='14 18 8 12 14 6 14 6' />
        </svg>
      </button>
    </Link>
  );
}
