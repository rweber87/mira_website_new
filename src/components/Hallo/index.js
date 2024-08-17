import React, { useEffect } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import gif from '../../assets/mira_hello.gif';

import './styles.scss';

export default function Hallo() {
  const text = [
    'Gestaltung ist Kommunikation und somit bin ich als Designerin auch Geschichtenerzählerin. Worum es in der Geschichte geht und was unterwegs alles passiert.',
    'Mein Herz schlägt besonders für kleine und mittelgroße Kunden, denen ich kreative und maßgeschneiderte Designlösungen anbiete. Ob visuelle Identität, Eventbewerbung, CD- oder Buchcover, Flyer oder Webseitengestaltung – gemeinsam spazieren wir den Weg von der ersten Idee bis zum fertigen Endprodukt. Ich liebe die kreative Zusammenarbeit und den Austausch von Ideen, um gemeinsam einzigartige und wirkungsvolle Designs zu entwickeln.',
    'Ich liebe es meine Kunden kennenzulernen und gemeinsam mit Ihnen ihre visuelle Sprache zu formen. ',
    'Als Allrounderin habe ich Spaß daran mich “zu strecken” und mich immer wieder neu herauszufordern.',
    'Ich liebe es, im Team zu arbeiten und gemeinsam Probleme zu lösen, und schätze offene und ehrliche Gespräche. Mit 12 Jahren Erfahrung in Print- und Digitalprojekten habe ich eine bunte Palette an Aufgaben gemeistert und dabei immer etwas Neues gelernt.',
    'Neben meinem Job bin ich leidenschaftlich in der Barbershop-Musikszene aktiv. Ich genieße Live-Musik, Kunsthandwerk, träume von einer besseren Zukunft und verbringe gerne Zeit mit inspirierenden Menschen, die mich motivieren. Ich bin gespannt auf neue Projekte und Abenteuer und freue mich darauf, mit engagierten und herzlichen Menschen zusammenzuarbeiten.',
  ];

  const canDo = [
    'Corporate Design',
    'Logos',
    'Web Design',
    'Buchcover und Magzingestaltung',
    'Konzeptionelle Beratung',
    'Klassischer Satz',
  ];

  useEffect(() => {
    window.scrollTo(-50, 0);
  }, []);

  return (
    <div className='two-column-wrapper'>
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
      <div className='two-column-wrapper__text'>
        {text.map((t, idx) => (
          <div key={`paragraph-text-${idx}`} className='paragraph'>
            {t}
          </div>
        ))}
        <div className='can-do'>
          <div className='can-do__title'>Was ich kann</div>
          {canDo.map((t, idx) => (
            <div key={`can-do-text-${idx}`} className='job'>
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
