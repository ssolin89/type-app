import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types'; // Swiper 타입 임포트
import {EffectFade, Navigation, Pagination} from 'swiper/modules';


import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

import './App.scss';




function App () {
  return (
    <div className="mainWrap">
      {/* 첫 번째 Swiper */}
      <Swiper
        className="normalSwiper"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: SwiperType) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      
      {/* 두 번째 Swiper */}
      <Swiper
        className="fadeSwiper"
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ EffectFade, Navigation, Pagination ]}
        spaceBetween={30}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: SwiperType) => console.log(swiper)}
      >
        <SwiperSlide>Slide A</SwiperSlide>
        <SwiperSlide>Slide B</SwiperSlide>
        <SwiperSlide>Slide C</SwiperSlide>
        <SwiperSlide>Slide D</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
