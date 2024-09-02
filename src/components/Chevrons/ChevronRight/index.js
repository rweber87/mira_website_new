import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProjectId from '../../../hooks/projectId';
import usePageNavigation from '../../../hooks/hasNextPreviousPage';

import { tiles } from '../../Portfolio/tiles';

import './styles.scss';

export default function ChevronRight(props) {
  const [strokeWidth, setStrokeWidth] = useState(0.25);
  const pages = tiles.filter((tile) => tile.shouldHover);
  const projectId = useProjectId();
  const { firstId, hasNext, nextId } = usePageNavigation(pages, projectId);

  return (
    <Link
      className='right'
      to={`/portfolio/${hasNext ? nextId : firstId}`}
      onMouseEnter={() => setStrokeWidth(0.5)}
      onMouseLeave={() => setStrokeWidth(0.25)}
    >
      <button className='chevron-icon'>
        <svg
          width='100px'
          height='100px'
          viewBox='0 0 24 24'
          role='img'
          aria-labelledby='chevronRightIconTitle'
          stroke='#CA5541'
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
