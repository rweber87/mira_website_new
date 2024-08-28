import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default function Tile({ tile }) {
  const { imageSrc, topText, botText, id, shouldHover } = tile;
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {shouldHover ? (
        <Link
          to={`/portfolio/${id}`}
          className={`tile ${hovered ? 'hovered' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={imageSrc}
            alt=''
            className={`tile__image ${hovered ? 'hovered' : ''}`}
          />
          <div className={`tile__overlay ${hovered ? 'hovered' : ''}`}>
            <span className='tile__text'>{topText}</span>
            {botText && <span className='tile__bot-text'>{botText}</span>}
          </div>
        </Link>
      ) : (
        <div className='tile'>
          <img src={imageSrc} alt='' className='tile__image' />
        </div>
      )}
    </>
  );
}
