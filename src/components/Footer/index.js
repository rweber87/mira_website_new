import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__text_wrapper'>
          <div className='footer__column'>
            <div className='lets_connect'>Let's Connect</div>
            <div className='text'>
              <a
                href='mailto:hallo@mirataferner.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-footer-link'
              >
                hallo@mirataferner.com
              </a>
            </div>
            <div className='text'>
              <a href='tel:+4917655285294' className='text-footer-link'>
                +49 176 552 852 94
              </a>
            </div>
          </div>
          <div className='footer__column'>
            <Link to='/impressum-datunschutz' className='text-link impressum'>
              Impressum & Datenshutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
