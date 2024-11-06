import './App.css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        breakpoints={{
          2228: {
            slidesPerView: 6
          },
          1900: {
            slidesPerView: 5,
          },
          1570: {
            slidesPerView: 4,
          },
          1080: {
            slidesPerView: 3,
          },
          684: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 1,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
