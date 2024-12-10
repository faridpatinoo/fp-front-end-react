import React from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../Sections/Sections';

const DynamicSection = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const videoCategory = searchParams.get('videoCategory');
  const videoType = searchParams.get('videoType');

  if (!videoCategory) {
    return <div>Category not found!</div>; // Mostrar un mensaje de error o un fallback.
  }

  return (
    <>
      <Section title={`Discover: ${videoCategory}`} category={videoCategory} />
    </>
  );
};

export default DynamicSection;
