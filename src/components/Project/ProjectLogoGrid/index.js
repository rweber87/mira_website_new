import React from 'react';
import ProjectImageRow from '../ProjectImageRow/';
import AngledLine from '../../AngledLine';

import './styles.scss';

export default function ProjectLogoGrid({ companyInfo, imageGroups }) {
  return (
    <div className='image-grid-logo'>
      {imageGroups.map((group, index, groups) => (
        <div key={`${companyInfo.name}-${index}`}>
          <ProjectImageRow images={group} />
          <div className='image-grid-logo__text-wrapper'>
            <div className='name'>{companyInfo[index].name}</div>
            <div className='description'>{companyInfo[index].description}</div>
          </div>
          {index !== groups.length - 1 ? <AngledLine /> : null}
        </div>
      ))}
    </div>
  );
}
