import React, { useEffect } from 'react';
import './styles.scss';

export default function YouTubeList({ videoUrls }) {
  useEffect(() => {
    window.scrollTo(-50, 0);
  }, []);

  return (
    <div className='youtube-list'>
      {videoUrls.map((videoUrl, index) => (
        <div key={index} className='youtube-list__item'>
          <iframe
            className='youtube-video'
            src={videoUrl}
            title={`Grafikhaus Video ${index}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
