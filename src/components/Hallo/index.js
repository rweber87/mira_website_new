import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RowsPhotoAlbum } from 'react-photo-album';
import Behance from '../Icons/Behance';
import LinkedIn from '../Icons/LinkedIn';
import gif from '../../assets/mira_hello.gif';

import './styles.scss';

export default function Hallo() {
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

  return (
    <div>
      <div className='two-column-wrapper'>
        <div className='two-column-wrapper__text'>
          <div className='section lust-text'>
            <div>Lust mit mir über ein Projekt zu sprechen?</div>
            <div>Reach out!</div>
          </div>
          <div className='section'>
            <div>hallo@mirataferner.com</div>
            <div>+49 176 552 852 94</div>
          </div>
          <div className='section'>
            <Link
              className='icon linkedin'
              to='https://www.linkedin.com/in/mira-taferner-5b54a563/'
            >
              <LinkedIn />
            </Link>
            <Link
              className='icon behance'
              to='https://www.behance.net/miratafernbf78'
            >
              <Behance />
            </Link>
          </div>
        </div>
        <div className='mira-gif'>
          <RowsPhotoAlbum
            photos={[
              {
                src: gif,
                width: 1620,
                height: 1080,
                alt: 'mira_gif',
              },
            ]}
            rowConstraints={{ maxPhotos: 1 }}
          />
        </div>
      </div>
      <div className='about-me-section'>
        <div className='section header'>Über mich</div>
        <div className='section'>
          Hier schreibe ich noch etwas über mich. Text in Arbeit.
        </div>
        <div className='header list'>Was ich anbiete</div>
        <ul>
          {canDo.map((c) => (
            <li>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
