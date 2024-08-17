import React, { useEffect } from 'react';
import ProjectImageGrid from '../ProjectImageGrid';
import ProjectLogoGrid from '../ProjectLogoGrid';
import ProjectVideoGrid from '../ProjectVideoGrid';
import useProjectId from '../../../hooks/projectId';

import { tiles } from '../../Portfolio/tiles';

import './styles.scss';
import AngledLine from '../../AngledLine';

export default function ProjectPage() {
  const projectId = useProjectId();
  // eslint-disable-next-line
  const project = tiles.find((project) => project.id == projectId);
  const { page } = project;
  const isLogoPage = page.title === 'Logos' ? true : false;
  const isAnimation = page.videos?.length ? true : false;

  useEffect(() => {
    window.scrollTo(-50, 0);
  }, [projectId]);

  return (
    <>
      <div id='project-page' className='project-page__text-wrapper'>
        <div className='title'>{page.title}</div>
        <div className='description'>{page.description}</div>
        <div className='description_secondary'>{page.secondary}</div>
        <div className='secondary-wrapper'>
          <div className='description_secondary-main'>{page.secondaryMain}</div>
          <div className='description_secondary-description'>
            {page.secondaryDescription}
          </div>
        </div>
        <div className='secondary-wrapper'>
          <div className='description_third-main'>{page.thirdMain}</div>
          <div className='description_third-description'>
            {page.thirdDescription}
          </div>
        </div>
      </div>
      {isAnimation ? (
        <ProjectVideoGrid videoUrls={page.videos} />
      ) : isLogoPage ? (
        <ProjectLogoGrid
          imageGroups={page.images}
          companyInfo={page.companyInfo}
        />
      ) : (
        <>
          <ProjectImageGrid imageGroups={page.images} title={page.title} />
          {project.secondPage ? (
            <>
              <div className='angled-line-project'>
                <AngledLine />
              </div>
              <div className='project-page__text-wrapper'>
                <div className='title'>{project.secondPage.title}</div>
                <div className='description'>
                  {project.secondPage.description}
                </div>
                <div className='description_secondary'>
                  {project.secondPage.secondary}
                </div>
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
