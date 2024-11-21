import React from 'react';
import { useLocation } from 'react-router';
import { RowsPhotoAlbum } from 'react-photo-album';
import { tiles } from '../../components/Portfolio/tiles';
import { primaryUrl } from '../../components/Portfolio/tiles';

import './styles.scss';

export default function HeaderImage() {
  const { pathname } = useLocation();
  const path = pathname.split('/portfolio/').filter((t) => t);
  const tile = tiles.find((tile) => tile.id === Number(path));

  return tile?.headerImage ? (
    <div className='header-image-wrapper'>
      <RowsPhotoAlbum
        photos={[
          {
            src: tile.headerImage,
            width: 1280,
            height: 420,
            alt: tile.title + 'Header Img',
          },
        ]}
        rowConstraints={{ maxPhotos: 1 }}
      />
    </div>
  ) : pathname.includes('hallo') ? (
    <div className='header-image-wrapper'>
      <RowsPhotoAlbum
        photos={[
          {
            src: primaryUrl + 'Hallo_Mira_2_new.gif',
            width: 804,
            height: 334,
            alt: 'Header Gif',
          },
        ]}
        rowConstraints={{ maxPhotos: 1 }}
      />
    </div>
  ) : (
    <div className='empty-image-wrapper'></div>
  );
}
