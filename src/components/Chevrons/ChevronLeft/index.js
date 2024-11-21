import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { tiles } from '../../Portfolio/tiles';
import useProjectId from '../../../hooks/projectId';
import usePageNavigation from '../../../hooks/hasNextPreviousPage';

import './styles.scss';

export default function ChevronLeft(props) {
  const [strokeWidth, setStrokeWidth] = useState(0.25);
  const pages = tiles.filter((tile) => tile.isProjectTile);
  const projectId = useProjectId();
  const { hasPrevious, lastId, prevId } = usePageNavigation(pages, projectId);
  const style = {
    transition: 'stroke-width 0.3s ease',
  };

  return (
    <Link
      className='left'
      to={`/portfolio/${hasPrevious ? prevId : lastId}`}
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
