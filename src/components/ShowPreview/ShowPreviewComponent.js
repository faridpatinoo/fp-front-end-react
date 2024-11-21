import React, { useContext } from 'react';
import ShowComponent from './ShowComponent';
import { DataContext } from '../../Context/DataContext';

const ShowPreviewComponent = () => {
  const url = new URL(window.location.href);
  const videoId = url.searchParams.get('videoId');

  const videos = useContext(DataContext);
  return (
    <>
      {videos
        .filter((video) => video._id === videoId)
        .map((video) => (
          <ShowComponent
            title={video.title}
            description={video.description}
            image={video.image}
            category={video.category}
            type={video.type}
          />
        ))}
    </>
  );
}

export default ShowPreviewComponent;