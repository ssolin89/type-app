import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';

import './SwiperComponentThumbs.scss'

import {FreeMode, Navigation, Thumbs, EffectFade} from 'swiper/modules';




const SwiperComponentThumbs: React.FC = () => {
  const [ thumbsSwiper, setThumbsSwiper ] = useState<SwiperType | null>(null);
  
  return (
    <div className="swiperThumbsArea">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[ FreeMode, Navigation, Thumbs ]}
        className="mySwiper mySwiperThumb"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="nature-1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="nature-2"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="nature-3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="nature-4"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="nature-5"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="nature-6"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="nature-7"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="nature-8"/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={10}
        effect={'fade'}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[ FreeMode, Navigation, Thumbs, EffectFade ]}
        className="mySwiperContent"
      >
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리</h3>
            <div className="adminTop">admin top area1</div>
            <div className="adminBottom">admin bottom area1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리</h3>
            <div className="adminTop">admin top area2</div>
            <div className="adminBottom">admin bottom area2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="nature-3"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="nature-4"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="nature-5"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="nature-6"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="nature-7"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="nature-8"/>
        </SwiperSlide>
      </Swiper>
    
    </div>
  );
};

export default SwiperComponentThumbs;
