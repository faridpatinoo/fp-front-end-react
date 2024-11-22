import React from 'react';
import PropTypes from 'prop-types';
import SwiperComponent from '../../Swipers/Carrousel/SwiperComponent';
import { Link } from 'react-router-dom';

const Section = ({ title, category }) => (
  <div className="section">
    <Link to={`/section?videosCategory=${category}`}>
      <div className="section-title">{title}</div>
    </Link>
    <SwiperComponent category={category} />
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Section;
