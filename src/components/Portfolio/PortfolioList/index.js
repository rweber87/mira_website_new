import React, { useEffect } from 'react';
import { tiles } from '../tiles';
import ProjectTile from '../../Project/ProjectTile';

import './styles.scss';

export default function PortfolioList() {
  useEffect(() => {
    window.scrollTo(-50, 0);
  }, []);

  return (
    <div className='grid'>
      {tiles.map((tile, idx) => {
        return <ProjectTile key={tile.id * idx} tile={tile} />;
      })}
    </div>
  );
}
