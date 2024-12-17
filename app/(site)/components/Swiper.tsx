import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import BoxComponent from './BoxComponent'; // Assuming you have this component

const SwiperComponent = ({ botOptions }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = botOptions.length;

  // Calculate the width percentage based on the active slide
  const progressWidth = ((activeIndex + 1) / totalSlides) * 100;

  return (
    <div className="mt-20 mb-5">
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="swiper-container"
        navigation={false}
      >
        <div className="flex flex-col-reverse xl:flex-row gap-5">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 mt-4 xl:mt-0">
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
          </div>
        </div>
      </Swiper>

      <div className="rounded-2xl swiper-nav-bar mt-4 relative w-full h-2 bg-[#636363]">
        <div
          className="active-bar h-full rounded-2xl -translate-y-6 bg-[#D73B6B]"
          style={{
            width: `${progressWidth}%`,
            transform: `translateX(${(progressWidth / 100) * 100}%)`,
            transition: "transform 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default SwiperComponent;
