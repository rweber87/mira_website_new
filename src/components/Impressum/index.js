import React, { useEffect } from 'react';

import './styles.scss';

export default function Impressum() {
  const websiteList = [
    'Uhrzeit zum Zeitpunkt des Zugriffes',
    'Menge der gesendeten Daten in Byte',
    'Quelle/Verweis, von welchem Sie auf die Seite gelangten',
    'Verwendeter Browser',
    'Verwendetes Betriebssystem',
    'Verwendete IP-Adresse',
  ];

  useEffect(() => {
    window.scrollTo(-50, 0);
  }, []);

  return (
    <div className='impressum-wrapper'>
      <div className='section-wrapper'>
        <div className='section-header'>Impressum</div>
        <div className='section-text-section'>
          <div className='section-text'>Mira Taferner</div>
          <div className='section-text'>Konzeption und Gestaltung</div>
          <div className='section-text'>Baaderstraße 23</div>
          <div className='section-text'>80469 München</div>
        </div>
        <div className='section-text-section'>
          <div className='section-text'>hallo@mirataferner.com</div>
          <div className='section-text'>+49 176 552 852 94</div>
        </div>
      </div>
      <div className='section-wrapper'>
        <div className='section-header'>Datenschutzerklärung</div>
        <div className='section-text-section'>
          <div className='section-text'>
            Wir halten uns an die Grundsätze der Datenvermeidung und
            Datensparsamkeit.
          </div>
          <div className='section-text'>
            Wir speichern keine personenbezogenen Daten.
          </div>
        </div>
      </div>
      <div className='section-wrapper'>
        <div className='section-header'>Zugriffsdaten</div>
        <div className='section-text-section'>
          <div className='section-text'>
            Der Seitenprovider, erheben Daten über Zugriffe auf die Website und
            speichern diese als „Server-Logfiles“ auf dem Server der Website ab.
            Folgende Daten werden so protokolliert:
          </div>
        </div>
        <div className='section-text-section'>
          <div className='secondary-header'>Besuchte Website</div>
          <div className='section-text'>
            <ul>
              {websiteList.map((p, idx) => (
                <li key={`impressum-${idx}`}>{p}</li>
              ))}
            </ul>
          </div>
          <div className='section-text'>
            Die Server-Logfiles werden für maximal 7 Tage gespeichert und
            anschließend gelöscht. Die Speicherung der Daten erfolgt aus
            Sicherheitsgründen, um z. B. Missbrauchsfälle aufklären zu können.
            Müssen Daten aus Beweisgründen aufgehoben werden, sind sie solange
            von der Löschung ausgenommen bis der Vorfall endgültig geklärt ist.
          </div>
        </div>
      </div>
    </div>
  );
}
