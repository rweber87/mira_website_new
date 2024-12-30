import React, { useEffect } from 'react';
import './styles.scss';

export default function YouTubeList({ videoUrls, styleProp }) {
  useEffect(() => {
    window.scrollTo(-50, 0);
  }, []);

  return (
    <div className='video-list' style={styleProp}>
      {videoUrls.map((videoUrl, index) => (
        <div
          key={index}
          className='video-list__item'
          style={videoUrls.length < 2 ? { marginBottom: '0px' } : {}}
        >
          <video
            className='video'
            src={videoUrl}
            controls
            autoPlay
            playsInline
            muted
            loop
          />
        </div>
      ))}
    </div>
  );
}
