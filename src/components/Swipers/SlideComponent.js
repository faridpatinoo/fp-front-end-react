import React from 'react';
import PropTypes from 'prop-types';
import './slide.css';

const SlideComponent = ({ imgSrc, playIconSrc, top, title, type, year }) => (
  <div className='image-container'>
    <img className='thumbnail' src={imgSrc} alt={title} />
    <button className='play-button'>
      <img src={playIconSrc} alt="Play icon" />
    </button>
    <div className='description-container'>
      <div className='video-number'>{top}</div>
      <div className='video-specs'>
        <div className='video-title'>{title}</div>
        <div className='video-extra-info'>{year} &#183; {type}</div>
      </div>
    </div>
  </div>
);

SlideComponent.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  playIconSrc: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SlideComponent;
