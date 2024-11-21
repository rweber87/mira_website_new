import React, { useState } from 'react';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import useWindowSize from '../../hooks/windowResize';

import './styles.scss';

export default function Chevrons() {
  const [showChevrons, setShowChevrons] = useState(true);
  useWindowSize((newSize) => {
    const { width } = newSize;
    if (width > 768) {
      setShowChevrons(true);
    } else {
      setShowChevrons(false);
    }
  });

  return (
    <>
      {showChevrons ? (
        <div className='chevron-wrapper'>
          <ChevronLeft />
          <ChevronRight />
        </div>
      ) : (
        <div className='chevron-wrapper'>
          <ChevronRight />
        </div>
      )}
    </>
  );
}
