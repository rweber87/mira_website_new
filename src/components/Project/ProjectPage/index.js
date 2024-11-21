import React, { useEffect, useState } from 'react';
import ProjectImageGrid from '../ProjectImageGrid';
import ProjectLogoGrid from '../ProjectLogoGrid';
import ProjectVideoGrid from '../ProjectVideoGrid';
import useProjectId from '../../../hooks/projectId';
import useWindowSize from '../../../hooks/windowResize';

import { tiles } from '../../Portfolio/tiles';

import './styles.scss';
import AngledLine from '../../AngledLine';

export default function ProjectPage() {
  const [isMobile, setIsMobile] = useState(false);
  const projectId = useProjectId();
  // eslint-disable-next-line
  const project = tiles.find((project) => project.id == projectId);
  const { page } = project;
  const isLogoPage =
    page.title === 'Logos & Geschäftsausstattungen' ? true : false;
  const isAnimation = page.videos?.length ? true : false;

  useEffect(() => {
    window.scrollTo(-50, 0);
  }, [projectId]);

  useWindowSize((newSize) => {
    const { width } = newSize;
    setIsMobile(width < 769);
  });

  return (
    <>
      <div id='project-page' className='project-page__text-wrapper'>
        {page.type ? (
          <span className='title-type-wrapper'>
            <div className='title'>{page.type}</div>
            {!isMobile && <div className='title bar'>|</div>}
            <div className='title lh'>{page.title}</div>
          </span>
        ) : (
          <div className='title lh'>{page.title}</div>
        )}
        {page.description && (
          <div className='description'>{page.description}</div>
        )}
        {page.secondary && (
          <div className='description_secondary'>{page.secondary}</div>
        )}
        {page.secondaryMain && (
          <div className='secondary-wrapper'>
            <div className='description_secondary-main'>
              {page.secondaryMain}
            </div>
            <div className='description_secondary-description'>
              {page.secondaryDescription}
            </div>
          </div>
        )}
        {page.thirdMain && (
          <div className='secondary-wrapper'>
            <div className='description_third-main'>{page.thirdMain}</div>
            <div
              className='description_third-description'
              dangerouslySetInnerHTML={{ __html: page.thirdDescription }}
            ></div>
          </div>
        )}
        {page.fourthMain && (
          <div className='secondary-wrapper'>
            <div className='description_third-main'>{page.fourthMain}</div>
            <div className='description_third-description'>
              {page.fourthDescription}
            </div>
          </div>
        )}
      </div>
      {isAnimation ? (
        <>
          <ProjectVideoGrid videoUrls={page.videos} />
        </>
      ) : isLogoPage ? (
        <ProjectLogoGrid
          imageGroups={page.images}
          companyInfo={page.companyInfo}
        />
      ) : (
        <>
          <ProjectImageGrid imageGroups={page.images} title={page.title} />
          {page.video && (
            <ProjectVideoGrid
              videoUrls={page.video}
              styleProp={{ marginTop: '2rem', marginBottom: '2rem' }}
            />
          )}
          {page.secondImages && (
            <>
              {page.thirdImages && <AngledLine />}
              <ProjectImageGrid
                imageGroups={page.secondImages}
                title={page.title}
              />
              {page.thirdImages && <AngledLine />}
            </>
          )}
          {page.thirdImages && (
            <ProjectImageGrid
              imageGroups={page.thirdImages}
              title={page.title}
            />
          )}
          {project.secondPage ? (
            <>
              <div className='angled-line-project'>
                <AngledLine />
              </div>
              <div className='project-page__text-wrapper'>
                {project.secondPage.title && (
                  <div className='title'>{project.secondPage.title}</div>
                )}
                {project.secondPage.description && (
                  <div className='description'>
                    {project.secondPage.description}
                  </div>
                )}
                {project.secondPage.secondary && (
                  <div className='description_secondary'>
                    {project.secondPage.secondary}
                  </div>
                )}{' '}
              </div>
              <ProjectImageGrid
                imageGroups={project.secondPage.images}
                title={project.secondPage.title}
              />
            </>
          ) : null}
        </>
      )}
    </>
  );
}
