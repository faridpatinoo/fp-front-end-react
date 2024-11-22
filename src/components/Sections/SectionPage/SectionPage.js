import React, { useContext } from 'react';
import SlideComponent from '../../Swipers/Carrousel/SlideComponent';

import '../SectionPage/sectionPage.css'

import { DataContext } from '../../../Context/DataContext';

const SectionPage = () => {
  const url = new URL(window.location.href);
  const videosCategory = url.searchParams.get('videosCategory');

  const videos = useContext(DataContext);

  return (
    <main className="section-page-container">
      <div className="section-page-title">Animations</div>
      <div className="container-page-grid">
        {videos
          .filter(video => video.category === videosCategory)
          .sort((a, b) => a.top - b.top)
          .map(video => (
            <SlideComponent
              key={video._id}
              imgSrc={video.image}
              top={video.top}
              title={video.title}
              year={video.year}
              type={video.type}
              videoId={video._id}
              videoCategory={video.category}
              videoType={video.type}
            />
          ))}
      </div>
    </main>
  );
};


export default SectionPage;
