import React from 'react';
import PropTypes from 'prop-types';
import '../Autoplay/autoPlaySlide.css';

const AutoplaySlideComponent = ({ title, description, image }) => (
  <div className="swiper-slide background-swiper-slide">
    <div className="background-video">
      <img src={image} />
      <div className="bkg-video-info">
        <div className="bkg-video-title">{title}</div>
        <div className="bkg-video-description">
          {description}
        </div>
        <a href="show.html?videoId=${video._id}&videoType=${video.type}&videoCategory=${video.category}">
          <button className="bkg-video-button">Watch Now</button>
        </a>
      </div>
    </div>
  </div>
);

AutoplaySlideComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default AutoplaySlideComponent;

