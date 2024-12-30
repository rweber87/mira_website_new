import { useState } from 'react';

import './styles.scss';
const categories = ['Print', 'Digital', 'Der Kleber', 'Teamwork'];
const words = [
  { word: 'Flyer', category: ['Print'] },
  { word: 'Visual Identity', category: ['Der Kleber'] },
  { word: 'Poster', category: ['Print'] },
  { word: 'Style Guides', category: ['Der Kleber'] },
  { word: 'Animation', category: ['Digital'] },
  { word: 'User Experience', category: ['Der Kleber', 'Teamwork'] },
  { word: 'Anzeigen', category: ['Print', 'Digital'] },
  { word: 'Geschäftsausstattung', category: ['Print'] },
  { word: 'Inhalte strukturieren', category: ['Der Kleber'] },
  { word: 'Messestände', category: ['Print'] },
  { word: 'Druckabwicklung', category: ['Der Kleber'] },
  { word: 'Buchcover', category: ['Print'] },
  { word: 'Bildbearbeitung', category: ['Der Kleber'] },
  { word: 'Außenwerbung', category: ['Print'] },
  { word: 'Banner', category: ['Print'] },
  { word: 'Broschüren & Magazine', category: ['Print'] },
  { word: 'Web Design', category: ['Digital', 'Teamwork'] },
  { word: 'Layout & Satz', category: ['Der Kleber'] },
  { word: 'Roll-ups', category: ['Print'] },
  { word: 'Logoentwicklung', category: ['Der Kleber'] },
  { word: 'Verpackung', category: ['Print'] },
  { word: 'Typografie', category: ['Der Kleber'] },
  { word: 'Social Media', category: ['Teamwork'] },
  { word: 'Wireframing', category: ['Digital'] },
  { word: 'Merchandise', category: ['Print'] },
  { word: 'Web Banner ', category: ['Digital'] },
  { word: 'Projektabwicklung', category: ['Der Kleber'] },
  { word: 'Brainsprouting', category: ['Der Kleber'] },
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
          {words.map((word, idx) => (
            <div
              key={`${idx}-${word}`}
              className={`word ${
                word.category.includes(category) ? 'selected' : 'not-selected'
              }`}
            >
              {word.word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
