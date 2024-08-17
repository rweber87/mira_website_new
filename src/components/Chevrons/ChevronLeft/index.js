import React from 'react';
import { Link } from 'react-router-dom';
import { tiles } from '../../Portfolio/tiles';
import useProjectId from '../../../hooks/projectId';
import usePageNavigation from '../../../hooks/hasNextPreviousPage';

import './styles.scss';

export default function ChevronLeft(props) {
  const pages = tiles.filter((tile) => tile.shouldHover);
  const projectId = useProjectId();
  const { hasPrevious, prevId } = usePageNavigation(pages, projectId);

  return (
    <Link
      className={`left ${hasPrevious ? '' : 'hide'}`}
      to={`/portfolio/${prevId}`}
    >
      <button className='chevron-icon'>
        <svg
          width='100px'
          height='100px'
          viewBox='0 0 24 24'
          role='img'
          aria-labelledby='chevronLeftIconTitle'
          stroke='#CA5541'
          strokeWidth={0.5}
          strokeLinecap='square'
          strokeLinejoin='miter'
          fill='none'
          {...props}
        >
          <title id='chevronLeftIconTitle'>{'Chevron Left'}</title>
          <polyline points='14 18 8 12 14 6 14 6' />
        </svg>
      </button>
    </Link>
  );
}
