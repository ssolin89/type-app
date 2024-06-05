import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

import './SwiperComponentNormal.scss'




const SwiperComponentNomal: React.FC = () => {
  return (
    <>
      
      <Swiper
        className="normalSwiper"
        spaceBetween={16}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: SwiperType) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="itemInner">slide1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="itemInner">slide2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="itemInner">slide3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="itemInner">slide4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="itemInner">slide5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="itemInner">slide5</div>
        </SwiperSlide>
      </Swiper>
    
    </>
  );
};

export default SwiperComponentNomal;
