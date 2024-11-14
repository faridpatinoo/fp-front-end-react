import React from 'react';
import PropTypes from 'prop-types';
import '../Autoplay/autoPlaySlide.css';

import { Link } from 'react-router-dom';

const AutoplaySlideComponent = ({ title, description, image, videoId, videoType, videoCategory }) => (
  <div className="swiper-slide background-swiper-slide">
    <div className="background-video">
      <img src={image} />
      <div className="bkg-video-info">
        <div className="bkg-video-title">{title}</div>
        <div className="bkg-video-description">
          {description}
        </div>
        <Link to={`/showPreview?videoId=${videoId}&videoType=${videoType}&videoCategory=${videoCategory}`}>
          <button className="bkg-video-button">Watch Now</button>
        </Link>
      </div>
    </div>
  </div>
);

AutoplaySlideComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  videoCategory: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
}

export default AutoplaySlideComponent;

