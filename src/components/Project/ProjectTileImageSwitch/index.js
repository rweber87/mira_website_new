import React, { useEffect, useState } from 'react';
import ProjectTile from '../ProjectTile/';

export default function ProjecTileImageSwitch({ tile }) {
  const [image, setImage] = useState(0);
  const [localTile, setLocalTile] = useState(tile);
  const max = tile.imageSrcs?.length - 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setImage(image + 1 > max ? 0 : image + 1);
      const newTile = { ...localTile };
      newTile.imageSrc = tile.imageSrcs[image];
      setLocalTile(newTile);
    }, 2000);
    return () => clearTimeout(timer);
  }, [image, setImage, tile, localTile, setLocalTile, max]);

  return <ProjectTile tile={localTile} />;
}
