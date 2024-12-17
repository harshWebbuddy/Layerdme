import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import BoxComponent from './BoxComponent';

const SwiperComponent = ({ botOptions }) => {
  return (
    <div className="mt-20 mb-5">
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false, 
        }}
        modules={[Autoplay]} // Ensure Autoplay module is registered
        className="swiper-container"
      >
        {botOptions.map((option, index) => (
          <SwiperSlide key={index}>
            <BoxComponent
              option={option}
              index={index}
              isFullWidth={true}
              data-aos="flip-left"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;