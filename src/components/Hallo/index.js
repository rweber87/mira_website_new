import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RowsPhotoAlbum } from 'react-photo-album';
import Behance from '../Icons/Behance';
import LinkedIn from '../Icons/LinkedIn';
import { tileUrl } from '../Portfolio/tiles';
import useWindowSize from '../../hooks/windowResize';
import Selector from './Selector';

import './styles.scss';

export default function Hallo() {
  const [isMobileMode, setIsMobileMode] = useState(false);
  const canDo = [
    'langjährige und vertrauensvolle Geschäftsbeziehungen schätzt und pflegst',
    'gerne eine extra Runde drehst, um zu einem stimmigen Ergebnis zu kommen, das Ästhetik und Funktionalität gleichwertig berücksichtigt',
    'offen für ehrliches Feedback und neue Perspektiven bist',
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
      <div className='top-section-wrapper'>
        <div className='top-section-wrapper__text-wrapper'>
          <div className='top-section-wrapper__text first'>
            Ich bin selbstständige Mediengestalterin mit{' '}
            {new Date().getFullYear() - 2011} Jahre Berufserfahrung in
            verschiedenen Branchen. Über die Jahre ist eine bunte Palette
            verschiedener Projekte entstanden. Ich verstehe mich als
            Allrounderin, die Spaß daran hat, sich zu strecken und sich in neue
            Themen und Tools einzuarbeiten. Es ist mir wichtig, zu verstehen,
            was meine Kunden bewegt und antreibt. Dieses Wissen ermöglicht es
            mir, gestalterisch den besten Weg zu finden.
          </div>
          <div className='top-section-wrapper__text'>
            Mein Arbeitsplatz befindet sich mitten im Zentrum der Stadt München.
            Wenn ich nicht gerade im schönsten Hinterhof-Büro der Welt bin und
            arbeite, liebe ich es mit dem Radl zu fahren, meinen Pflanzen Namen
            zu geben und mit meinem Barbershop-Quartett „Veto“ auf der Bühne zu
            stehen.
          </div>
        </div>
      </div>
      <Selector />
      <div className='bottom-section-wrapper'>
        <div className='bottom-section-wrapper__text-wrapper'>
          <div className='bottom-section-wrapper__text-header'>
            Du bist bei mir an der richtigen Adresse, wenn du
          </div>
          <div className='bottom-section-wrapper__text'>
            <ul className='info-text'>
              {canDo.map((c, idx) => (
                <li key={`can-do-${idx}`}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
    // <>
    //   {isMobileMode ? (
    //     <>
    //       <div className='two-column-wrapper'>
    //         <div className='two-column-wrapper__text'>
    //           <div className='section lust-text'>
    //             <div>Lust mit mir über ein Projekt zu sprechen? Reach out!</div>
    //           </div>
    //           <div className='section info-text'>
    //             <div>hallo@mirataferner.com</div>
    //             <div>+49 176 552 852 94</div>
    //           </div>
    //           <div className='section'>
    //             <Link
    //               className='icon linkedin'
    //               to='https://www.linkedin.com/in/mira-taferner-5b54a563/'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //             >
    //               <LinkedIn />
    //             </Link>
    //             <Link
    //               className='icon behance'
    //               to='https://www.behance.net/miratafernbf78'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //             >
    //               <Behance />
    //             </Link>
    //           </div>
    //         </div>
    //         <div className='mira-gif'>
    //           <RowsPhotoAlbum
    //             photos={[
    //               {
    //                 src: tileUrl + 'hallo_Mira.gif',
    //                 width: 666,
    //                 height: 332,
    //                 alt: 'mira_gif',
    //               },
    //             ]}
    //             rowConstraints={{ maxPhotos: 1 }}
    //           />
    //         </div>
    //       </div>
    //       <div className='about-me-section'>
    //         <div className='section header'>Über mich</div>
    //         <div className='section info-text'>
    //           Hier schreibe ich noch etwas über mich. Text in Arbeit.
    //         </div>
    //         <div className='header list'>Was ich anbiete</div>
    //         <ul className='info-text'>
    //           {canDo.map((c, idx) => (
    //             <li key={`can-do-${idx}`}>{c}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     </>
    //   ) : (
    //     <div>
    //       <div className='two-column-wrapper'>
    //         <div className='two-column-wrapper__text'>
    //           <div className='section lust-text'>
    //             <div>Lust mit mir über ein Projekt zu sprechen? Reach out!</div>
    //           </div>
    //           <div className='section info-text'>
    //             <div>hallo@mirataferner.com</div>
    //             <div>+49 176 552 852 94</div>
    //           </div>
    //           <div className='section'>
    //             <Link
    //               className='icon linkedin'
    //               to='https://www.linkedin.com/in/mira-taferner-5b54a563/'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //             >
    //               <LinkedIn />
    //             </Link>
    //             <Link
    //               className='icon behance'
    //               to='https://www.behance.net/miratafernbf78'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //             >
    //               <Behance />
    //             </Link>
    //           </div>
    //         </div>
    //         <div className='mira-gif'>
    //           <RowsPhotoAlbum
    //             photos={[
    //               {
    //                 src: tileUrl + 'hallo_Mira.gif',
    //                 width: 666,
    //                 height: 332,
    //                 alt: 'mira_gif',
    //               },
    //             ]}
    //             rowConstraints={{ maxPhotos: 1 }}
    //           />
    //         </div>
    //       </div>
    //       <div className='about-me-section'>
    //         <div className='section header'>Über mich</div>
    //         <div className='section info-text'>
    //           Hier schreibe ich noch etwas über mich. Text in Arbeit.
    //         </div>
    //         <div className='header list'>Was ich anbiete</div>
    //         <ul className='info-text'>
    //           {canDo.map((c, idx) => (
    //             <li key={`can-do-${idx}`}>{c}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}
