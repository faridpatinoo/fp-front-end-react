import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './autoPlaySwiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import AutoplaySlideComponent from './AutoplaySlideComponent';
import { DataContext } from '../../../Context/DataContext';

const AutoplaySwiperComponent = ({ }) => {
  const videos = useContext(DataContext);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper-2"
    >
      {videos
        .filter((video) => video.tags.includes('isBackground'))
        .sort((a, b) => {
          if (a.title === 'ShowReel (2024)') return -1;
        })
        .map((video) => (
          <SwiperSlide className='bkg-swiper-slide'>
            <AutoplaySlideComponent
              title={video.title}
              image={video.image}
              description={video.description}
              videoId={video._id}
              videoCategory={video.category}
              videoType={video.type}
            />
          </SwiperSlide>
        ))}

    </Swiper>
  )
}

export default AutoplaySwiperComponent;

