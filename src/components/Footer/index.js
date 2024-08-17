import React from 'react';

import './styles.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__text_wrapper'>
          <div className='footer__column'>
            <div className='name'>Mira Taferner</div>
            <div className='text'>Konzeption & Design</div>
          </div>
          <div className='footer__column'>
            <div className='text'>hello@mirataferner.com</div>
            <div className='text'>+49 176 552 852 94</div>
          </div>
          <div className='footer__last'>
            <div className='text'>Datenshutz</div>
            <div className='text'>Impressum</div>
          </div>
        </div>
      </div>
    </div>
  );
}
