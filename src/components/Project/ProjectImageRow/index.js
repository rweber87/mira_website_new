import React, { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import useWindowSize from '../../../hooks/windowResize';

import 'react-photo-album/rows.css';
import './styles.scss';

export default function ProjectImageRow({ images }) {
  const [maxPhotos, setMaxPhotos] = useState(images.length);

  useWindowSize((newSize) => {
    const { width } = newSize;
    if (width < 768) {
      setMaxPhotos(1);
    } else {
      setMaxPhotos(2);
    }
  });

  return (
    <div className='image-row'>
      <RowsPhotoAlbum photos={images} rowConstraints={{ maxPhotos }} />
    </div>
  );
}
