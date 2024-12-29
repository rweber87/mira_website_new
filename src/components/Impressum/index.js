import React, { useEffect } from 'react';

import './styles.scss';

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(-50, 0);
  }, []);

  return (
    <div className='impressum-wrapper'>
      <div className='section-wrapper'>
        <div className='section-header'>Impressum</div>
        <div className='section-text-section'>
          <div className='section-text bold'>Angaben gemäß § 5 TMG</div>
          <div className='section-text'>Mira Taferner</div>
          <div className='section-text'>Konzeption und Gestaltung</div>
          <div className='section-text'>Baaderstraße 23</div>
          <div className='section-text'>80469 München</div>
        </div>
        <div className='section-text-section'>
          <div className='section-text'>hallo@mirataferner.com</div>
          <div className='section-text'>+49 176 552 852 94</div>
        </div>
        <div className='section-text-section'>
          <div className='section-text bold'>Web-Support</div>
          <div className='section-text'>Robbie Weber</div>
          <div className='section-text'>rob.weber87@gmail.com</div>
        </div>
        <div className='section-text-section'>
          <div className='section-text'>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer <br />
            Verbraucherschlichtungsstelle teilzunehmen.
          </div>
        </div>
      </div>
      <div className='section-wrapper npb'>
        <div className='section-header'>Datenschutzerklärung</div>
        <div className='section-text-section'>
          <div className='section-text'>
            Mir ist der Schutz Ihrer persönlichen Daten wichtig. Ich behandle
            Ihre personenbezogenen Daten vertraulich und entsprechend den
            gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </div>
        </div>
        <div className='section-text-section'>
          <div className='section-text bold'>
            Datenerfassung auf dieser Webseite
          </div>
          <div className='section-text'>
            Die grundsätzliche Nutzung dieser Website ist ohne jede Angabe
            personenbezogener Daten möglich. Das heißt, die Website verwendet
          </div>
          <div className='section-text'>
            <ul style={{ paddingLeft: '20px', marginTop: '0' }}>
              <li>keine Cookies</li>
              <li>
                IP-Adressen zur Auswertung von Seitenzugriffs-Statistiken nur in
                verkürzer/anonymisierter Form
              </li>
              <li>
                und keine externen Google Web Fonts oder andere eingebundene
                Google-Inhalte, welche Nutzerinformationen an Google
                weiterleiten
              </li>
            </ul>
          </div>
        </div>

        <div className='section-text-section'>
          <div className='section-text bold'>Server-Logfiles</div>
          <div className='section-text'>
            Der Seitenprovider erhebt Daten über Zugriffe auf die Website und
            speichern diese als »Server-Logfiles« auf dem Server der Website ab.
            Folgende Daten werden so erfasst:
          </div>
          <div className='section-text'>
            <ul style={{ paddingLeft: '20px', marginTop: '0' }}>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
          </div>
        </div>

        <div className='section-text-section'>
          <div className='section-text bold'>
            Schutz Ihrer Daten bei Kontaktaufnahme
          </div>
          <div className='section-text'>
            Wenn Sie mir eine E-Mail schreiben, werden auf diese Weise Ihre
            Mailadresse und ggf. weitere eingegebene Daten an mich übermittelt.
            Ich gebe Ihre persönlichen Daten nicht an Dritte weiter und bewahre
            sie nicht länger auf als für den vorgesehenen Zweck notwendig ist
            oder bis Sie die Löschung wünschen. Ich weise darauf hin, dass die
            Datenübertragung im Internet (z. B. bei der Kommunikation per
            E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
            Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </div>
        </div>
      </div>
    </div>
  );
}
