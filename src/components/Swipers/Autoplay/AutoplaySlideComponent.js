import React from 'react';
import PropTypes from 'prop-types';
import '../Autoplay/autoPlaySlide.css';

const AutoplaySlideComponent = ({ title, description, image }) => (
  <div className="swiper-slide background-swiper-slide">
    <div className="background-video">
      <img src='https://fpplusstorageaccount.blob.core.windows.net/fpplusimagescontainer/top-animations/top-a-01.png' />
      <div className="bkg-video-info">
        <div className="bkg-video-title">Blue-Bot</div>
        <div className="bkg-video-description">
          A test animated video for Huski, designed to preview upcoming information. This animation aims to effectively convey key details and generate excitement about the brand's forthcoming updates.
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

