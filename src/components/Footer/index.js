import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__text_wrapper'>
          <div className='footer__column'>
            <div className='get_in_touch'>Get in touch</div>
          </div>
          <div className='footer__column'>
            <div className='text'>hello@mirataferner.com</div>
          </div>
          <div className='footer__column'>
            <div className='text'>+49 176 552 852 94</div>
          </div>
          <div className='footer__column'>
            <Link to='/impressum-datunschutz' className='text-link'>
              Impressum & Datenshutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
