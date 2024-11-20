import React from 'react';
import PropTypes from 'prop-types';
import '../ShowPreview/show.css';

import { Link } from 'react-router-dom';

const ShowComponent = ({ }) => (
  <div className='show-wrapper'>
    <div className='show-img-container'>
      <img src='https://fpplusstorageaccount.blob.core.windows.net/fpplusimagescontainer/top-animations/top-a-01.png' />
    </div>

    <div className='show-main-info'>
      <div className='show-category'>Animations</div>
      <div className='show-title'>Blue-Bot</div>
    </div>

    <div className='show-description-container'>
      <button className='show-play-button'>
        <img src='/imgs/icons/play.png' alt="Play Icon" /> Play
      </button>
      <div className='show-description'>A test animated video for Huski, designed to preview upcoming information. This animation aims to effectively convey key details and generate excitement about the brand's forthcoming updates.</div>
      <div className='show-type'>horizontal</div>
    </div>
  </div>
);

ShowComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  videoCategory: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
}

export default ShowComponent;