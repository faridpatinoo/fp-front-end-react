import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SlideComponent from '../../Swipers/Carrousel/SlideComponent';

import '../SectionPage/sectionPage.css'

import { DataContext } from '../../../Context/DataContext';

const SectionPage = () => {
  const videos = useContext(DataContext);

  return (
    <main className="section-page-container">
      <div className="section-page-title">Animations</div>
      <div className="container-page-grid">
        {videos
          .filter(video => video.category === 'Animations')
          .map(video => (
            <SlideComponent
              key={video._id}
              imgSrc={video.image}
              playIconSrc='/imgs/icons/play.png'
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
