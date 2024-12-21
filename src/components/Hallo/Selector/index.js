import { useState } from 'react';

import './styles.scss';
const categories = ['Print', 'Digital', 'Der Kleber', 'Teamwork'];
const words = [
  { word: 'Flyer', category: ['Print'] },
  { word: 'Visual Identity', category: ['Der Kleber'] },
  { word: 'Poster', category: ['Print'] },
  { word: 'Style Guides', category: ['Der Kleber'] },
  { word: 'Animation', category: ['Digital'] },
  { word: 'Geschäftsausstattung', category: ['Print'] },
  { word: 'Brainsprouting', category: ['Der Kleber'] },
  { word: 'Anzeigen', category: ['Print'] },
  { word: 'Inhalte strukturieren', category: ['Der Kleber'] },
  { word: 'Webdesign', category: ['Teamwork'] },
  { word: 'Messestände', category: ['Print'] },
  { word: 'Projekt- und Druckabwicklung', category: ['Der Kleber'] },
  { word: 'Außenwerbung', category: ['Print'] },
  { word: 'Bildbearbeitung und -retusche', category: ['Der Kleber'] },
  { word: 'Webdesign', category: ['Digital', 'Teamwork'] },
  { word: 'Buchcover', category: ['Print'] },
  { word: 'Broschüren und Magazine', category: ['Print'] },
  { word: 'Layout und Satz', category: ['Der Kleber'] },
  { word: 'Verpackung', category: ['Print'] },
  { word: 'Logoentwicklung', category: ['Der Kleber'] },
  { word: 'Typografie', category: ['Der Kleber'] },
  { word: 'Social Media', category: ['Teamwork'] },
  { word: 'Merchandise', category: ['Print'] },
  { word: 'Wireframing', category: ['Digital'] },
  { word: 'Banner und Roll-ups', category: ['Print'] },
  { word: 'Web Banner und Anzeigen ', category: ['Digital'] },
  { word: 'User Experience', category: ['Der Kleber'] },
  { word: 'User Experience', category: ['Der Kleber', 'Teamwork'] },
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
