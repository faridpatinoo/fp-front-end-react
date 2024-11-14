import React from 'react';
import PropTypes from 'prop-types';
import '../Carrousel/slide.css';
import { Link } from 'react-router-dom';

const SlideComponent = ({ imgSrc, playIconSrc, top, title, type, year, videoId, videoType, videoCategory }) => (
  <div className='image-container'>
    <Link to={`/showPreview?videoId=${videoId}&videoType=${videoType}&videoCategory=${videoCategory}`}>
      <img className='thumbnail' src={imgSrc} alt={title} />
      <button className='play-button'>
        <img src={playIconSrc} alt="Play icon" />
      </button>
    </Link>
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
  videoId: PropTypes.string.isRequired,
  videoType: PropTypes.string.isRequired,
  videoCategory: PropTypes.string.isRequired,
};

export default SlideComponent;
