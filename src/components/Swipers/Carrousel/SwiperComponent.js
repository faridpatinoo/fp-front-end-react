import React, { useState, useEffect, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Carrousel/swiper.css';
import '../../Sections/sections.css';

import SlideComponent from './SlideComponent';
import { DataContext } from '../../../Context/DataContext';

const SwiperComponent = ({ category }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const videos = useContext(DataContext);

  return (
    <Swiper
      onSwiper={setSwiperRef}
      spaceBetween={20}
      pagination={{ category: 'fraction' }}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        2228: { slidesPerView: 6 },
        1900: { slidesPerView: 5 },
        1570: { slidesPerView: 4 },
        1080: { slidesPerView: 3 },
        684: { slidesPerView: 2 },
        500: { slidesPerView: 1 },
      }}
      className="mySwiper"
    >
      {videos
        .filter((video) => video.category === category && video.top < 11)
        .sort((a, b) => a.top - b.top)
        .map((video) => (
          <SwiperSlide key={video.id}>
            <SlideComponent
              imgSrc={video.image}
              playIconSrc="/imgs/icons/play.png"
              top={video.top}
              title={video.title}
              year={video.year}
              type={video.type}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperComponent;
