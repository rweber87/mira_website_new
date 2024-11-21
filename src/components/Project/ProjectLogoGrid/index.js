import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectImageRow from '../ProjectImageRow/';
import AngledLine from '../../AngledLine';

import './styles.scss';

export default function ProjectLogoGrid({ companyInfo, imageGroups }) {
  useEffect(() => {
    window.scrollTo(-50, 0);
  }, []);

  return (
    <div className='image-grid-logo'>
      {imageGroups.map((group, index, groups) => (
        <div
          className='image-grid-row-wrapper'
          key={`${companyInfo.name}-${index}`}
        >
          <div className='image-grid-logo__row-wrapper'>
            <ProjectImageRow images={group} />
          </div>
          <div className='image-grid-logo__wrapper'>
            <div className='image-grid-logo__text-wrapper'>
              {companyInfo[index].url ? (
                <Link
                  className='name'
                  to={companyInfo[index].url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='name'>{companyInfo[index].name}</div>
                </Link>
              ) : (
                <div className='name'>{companyInfo[index].name}</div>
              )}

              <div className='description'>
                {companyInfo[index].description}
              </div>
            </div>
          </div>
          {index !== groups.length - 1 ? <AngledLine /> : null}
        </div>
      ))}
    </div>
  );
}
