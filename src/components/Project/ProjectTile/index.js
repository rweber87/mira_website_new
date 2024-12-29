import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useIsElementInCenter from '../../../hooks/useIsElementInCenter';

import './styles.scss';

export default function Tile({ tile }) {
  const { classValue, imageSrc, link, topText, botText, id, isProjectTile } =
    tile;
  const [hovered, setHovered] = useState(false);
  const [isInCenter, elementRef] = useIsElementInCenter();

  useEffect(() => {
    if (window.innerWidth < 769) {
      setHovered(isInCenter);
    }
  }, [isInCenter]);

  return (
    <>
      {isProjectTile ? (
        <Link
          to={`/portfolio/${id}`}
          className={`tile ${hovered ? 'hovered' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          ref={elementRef}
        >
          <img
            src={imageSrc}
            alt=''
            className={`tile__image ${hovered ? 'hovered' : ''}`}
          />
          <div className={`tile__overlay ${hovered ? 'hovered' : ''}`}>
            <span
              className='tile__text'
              dangerouslySetInnerHTML={{ __html: topText }}
            ></span>
            {botText && <span className='tile__bot-text'>{botText}</span>}
          </div>
        </Link>
      ) : link ? (
        <Link
          to={link}
          className={`tile ${hovered ? 'hovered' : ''}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          target={
            link.includes('https') || link.includes('mailto') ? '_blank' : ''
          }
          rel={
            link.includes('https') || link.includes('mailto')
              ? 'noopener noreferrer'
              : ''
          }
          ref={elementRef}
        >
          <div
            className={`tile ${classValue} ${hovered ? 'hovered' : ''}`}
            dangerouslySetInnerHTML={{ __html: topText }}
          ></div>
        </Link>
      ) : (
        <div
          className={`tile ${classValue}`}
          dangerouslySetInnerHTML={{ __html: topText }}
          ref={elementRef}
        ></div>
      )}
    </>
  );
}
