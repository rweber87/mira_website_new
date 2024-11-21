import { useState } from 'react';

import './styles.scss';
const categories = ['Print', 'Digital', 'Leistungen'];
const words = [
  { word: 'Logoentwicklung', category: 'Digital' },
  { word: 'Geschäftsausstattungen', category: 'Print' },
  { word: 'Visual Identity', category: 'Digital' },
  { word: 'Style Guides', category: 'Print' },
  { word: 'Flyer', category: 'Digital' },
  { word: 'Poster', category: 'Digital' },
  { word: 'Bücher', category: 'Print' },
  { word: 'Kataloge & Magazine', category: 'Leistungen' },
  { word: 'Verpackungen', category: 'Digital' },
  { word: 'Merchandise ', category: 'Leistungen' },
  { word: 'Banner & Roll-ups', category: 'Leistungen' },
  { word: 'Web Banner ', category: 'Leistungen' },
  { word: 'Anzeigen', category: 'Leistungen' },
  { word: 'Messestände', category: 'Digital' },
  { word: 'Außenwerbung', category: 'Print' },
  { word: 'Gestaltung, Satz und Reinzeichnung ', category: 'Digital' },
  { word: 'Web Design & UI/UX', category: 'Leistungen' },
  { word: 'Animation', category: 'Leistungen' },
  { word: 'Bildbearbeitung und -retusche', category: 'Print' },
  { word: 'Projekt- und Druckabwicklung', category: 'Print' },
  { word: 'Inhalte strukturieren', category: 'Digital' },
  { word: 'Ideen sammeln', category: 'Leistungen' },
];

export default function Selector() {
  const [category, setCategory] = useState('Print');
  return (
    <div className='middle-section-wrapper'>
      <div className='middle-section-wrapper__text-wrapper'>
        <div className='categories-wrapper'>
          {categories.map((cat, idx) => (
            <div
              className={`category ${category === cat ? 'selected' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
              {idx < categories.length - 1 && <span className='pipe'>|</span>}
            </div>
          ))}
        </div>
        <div className='words-wrapper'>
          {words.map((word) => (
            <div
              className={`word ${category === word.category ? 'selected' : ''}`}
            >
              {word.word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
