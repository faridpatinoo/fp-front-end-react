import React, { useRef, useState } from 'react';
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

const AutoplaySwiperComponent = ({ }) => {
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
      <SwiperSlide>
        <AutoplaySlideComponent />
      </SwiperSlide>
      <SwiperSlide>
        <AutoplaySlideComponent />
      </SwiperSlide>
    </Swiper>
  )
}

export default AutoplaySwiperComponent;

