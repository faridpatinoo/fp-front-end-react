import React from 'react';
import PropTypes from 'prop-types';
import '../ShowPreview/show.css';

import { Link } from 'react-router-dom';

const ShowComponent = ({ title, description, image, category, type }) => (
  <div className='show-wrapper'>
    <div className='show-img-container'>
      <img src={image} />
    </div>

    <div className='show-main-info'>
      <div className='show-category'>{category}</div>
      <div className='show-title'>{title}</div>
    </div>

    <div className='show-description-container'>
      <button className='show-play-button'>
        <img src='/imgs/icons/play.png' alt="Play Icon" /> Play
      </button>
      <div className='show-description'>{description}</div>
      <div className='show-type'>{type}</div>
    </div>
  </div>
);

ShowComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default ShowComponent;