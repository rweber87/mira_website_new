import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RowsPhotoAlbum } from 'react-photo-album';
import Behance from '../Icons/Behance';
import LinkedIn from '../Icons/LinkedIn';
import { tileUrl } from '../Portfolio/tiles';
import useWindowSize from '../../hooks/windowResize';

import './styles.scss';

export default function Hallo() {
  const [isMobileMode, setIsMobileMode] = useState(false);
  const canDo = [
    'Logoentwicklung',
    'Corporate Design',
    'Geschäftsausstattungen',
    'Website Design',
    'Buchcover- und Magazingestaltung',
    'Flyer- und Plakatgestaltung',
    'Animation',
    'Bildbearbeitung und Retusche',
    'Klassischer Satz',
    'Konzeptionelle Beratung',
    'Projekt- und Druckabwicklung',
  ];

  useEffect(() => {
    window.scrollTo(-50, 0);
  }, []);

  useWindowSize((newSize) => {
    const { width } = newSize;
    if (width < 768) {
      setIsMobileMode(true);
    } else {
      setIsMobileMode(false);
    }
  });

  return (
    <>
      {isMobileMode ? (
        <>
          <div className='two-column-wrapper'>
            <div className='two-column-wrapper__text'>
              <div className='section lust-text'>
                <div>Lust mit mir über ein Projekt zu sprechen? Reach out!</div>
              </div>
              <div className='section info-text'>
                <div>hallo@mirataferner.com</div>
                <div>+49 176 552 852 94</div>
              </div>
              <div className='section'>
                <Link
                  className='icon linkedin'
                  to='https://www.linkedin.com/in/mira-taferner-5b54a563/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedIn />
                </Link>
                <Link
                  className='icon behance'
                  to='https://www.behance.net/miratafernbf78'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Behance />
                </Link>
              </div>
            </div>
            <div className='mira-gif'>
              <RowsPhotoAlbum
                photos={[
                  {
                    src: tileUrl + 'hallo_Mira.gif',
                    width: 666,
                    height: 332,
                    alt: 'mira_gif',
                  },
                ]}
                rowConstraints={{ maxPhotos: 1 }}
              />
            </div>
          </div>
          <div className='about-me-section'>
            <div className='section header'>Über mich</div>
            <div className='section info-text'>
              Hier schreibe ich noch etwas über mich. Text in Arbeit.
            </div>
            <div className='header list'>Was ich anbiete</div>
            <ul className='info-text'>
              {canDo.map((c, idx) => (
                <li key={`can-do-${idx}`}>{c}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>
          <div className='two-column-wrapper'>
            <div className='two-column-wrapper__text'>
              <div className='section lust-text'>
                <div>Lust mit mir über ein Projekt zu sprechen? Reach out!</div>
              </div>
              <div className='section info-text'>
                <div>hallo@mirataferner.com</div>
                <div>+49 176 552 852 94</div>
              </div>
              <div className='section'>
                <Link
                  className='icon linkedin'
                  to='https://www.linkedin.com/in/mira-taferner-5b54a563/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LinkedIn />
                </Link>
                <Link
                  className='icon behance'
                  to='https://www.behance.net/miratafernbf78'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Behance />
                </Link>
              </div>
            </div>
            <div className='mira-gif'>
              <RowsPhotoAlbum
                photos={[
                  {
                    src: tileUrl + 'hallo_Mira.gif',
                    width: 666,
                    height: 332,
                    alt: 'mira_gif',
                  },
                ]}
                rowConstraints={{ maxPhotos: 1 }}
              />
            </div>
          </div>
          <div className='about-me-section'>
            <div className='section header'>Über mich</div>
            <div className='section info-text'>
              Hier schreibe ich noch etwas über mich. Text in Arbeit.
            </div>
            <div className='header list'>Was ich anbiete</div>
            <ul className='info-text'>
              {canDo.map((c, idx) => (
                <li key={`can-do-${idx}`}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
