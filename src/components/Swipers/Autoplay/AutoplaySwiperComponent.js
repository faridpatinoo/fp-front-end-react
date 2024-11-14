import React, { useRef, useState, useContext } from 'react';
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
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {videos
        .filter((video) => video.tags.includes('isBackground'))
        .sort((a, b) => {
          if (a.title === 'ShowReel (2024)') return -1;
        })
        .map((video) => (
          <SwiperSlide>
            <AutoplaySlideComponent
              title={video.title}
              image={video.image}
              description={video.description}
            />
          </SwiperSlide>
        ))}

    </Swiper>
  )
}

export default AutoplaySwiperComponent;

