import React from 'react';
import PropTypes from 'prop-types';
import SwiperComponent from '../Swipers/Carrousel/SwiperComponent';

const Section = ({ title, category }) => (
  <div className="section">
    <div className="section-title">{title}</div>
    <SwiperComponent category={category} />
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Section;
