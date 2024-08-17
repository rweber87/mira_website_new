import React from 'react';
import { Link } from 'react-router-dom';
import useProjectId from '../../../hooks/projectId';
import usePageNavigation from '../../../hooks/hasNextPreviousPage';

import { tiles } from '../../Portfolio/tiles';

import './styles.scss';

export default function ChevronRight(props) {
  const pages = tiles.filter((tile) => tile.shouldHover);
  const projectId = useProjectId();
  const { hasNext, nextId } = usePageNavigation(pages, projectId);

  return (
    <Link
      className={`right ${hasNext ? '' : 'hide'}`}
      to={`/portfolio/${nextId}`}
    >
      <button className='chevron-icon'>
        <svg
          width='100px'
          height='100px'
          viewBox='0 0 24 24'
          role='img'
          aria-labelledby='chevronRightIconTitle'
          stroke='#CA5541'
          strokeWidth={0.5}
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
