import React from 'react';
import ProjectImageRow from '../ProjectImageRow/';

import './styles.scss';

export default function ProjectImageGrid({ imageGroups, title }) {
  return (
    <div className='image-grid-project'>
      {imageGroups.map((group, index) => (
        <div
          className='image-grid-project__image-wrapper'
          key={`${title}-${index}`}
        >
          <ProjectImageRow images={group} />
        </div>
      ))}
    </div>
  );
}
