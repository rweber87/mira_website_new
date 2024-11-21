import React, { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import useWindowSize from '../../../hooks/windowResize';

import 'react-photo-album/rows.css';
import './styles.scss';

export default function ProjectImageRow({ images }) {
  const [maxPhotos, setMaxPhotos] = useState(images.length);
  const [rowSpacing, setRowSpace] = useState(15);

  useWindowSize((newSize) => {
    const { width } = newSize;
    if (width < 768) {
      setMaxPhotos(1);
      setRowSpace(74);
    } else {
      setMaxPhotos(2);
      setRowSpace(64);
    }
  });

  return (
    <div className='image-row'>
      <RowsPhotoAlbum
        photos={images}
        rowConstraints={{ maxPhotos }}
        spacing={rowSpacing}
      />
    </div>
  );
}
