import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/scss/effect-fade';
import {IoCloseCircleOutline} from "react-icons/io5";

import './SwiperComponentThumbs.scss'

import {FreeMode, Navigation, Thumbs, EffectFade} from 'swiper/modules';




const SwiperComponentThumbs: React.FC = () => {
  const [ thumbsSwiper, setThumbsSwiper ] = useState<SwiperType | null>(null);
  
  return (
    <div className="swiperThumbsArea">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={5.5}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[ FreeMode, Navigation, Thumbs ]}
        className="mySwiper mySwiperThumb"
      >
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리1</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리2</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리3</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리4</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리5</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리6</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리7</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리8</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tabTitleInner">
            <h3>연동마켓 카테고리 관리9</h3>
            <button type="button"><IoCloseCircleOutline/></button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={10}
        effect={'fade'}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[ FreeMode, Navigation, Thumbs, EffectFade ]}
        allowTouchMove={false}
        className="mySwiperContent"
      >
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리1</h3>
            <div className="adminTop">admin top area1</div>
            <div className="adminBottom">admin bottom area1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리2</h3>
            <div className="adminTop">admin top area2</div>
            <div className="adminBottom">admin bottom area2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리3</h3>
            <div className="adminTop">admin top area3</div>
            <div className="adminBottom">admin bottom area3</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리4</h3>
            <div className="adminTop">admin top area4</div>
            <div className="adminBottom">admin bottom area4</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리5</h3>
            <div className="adminTop">admin top area5</div>
            <div className="adminBottom">admin bottom area5</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리6</h3>
            <div className="adminTop">admin top area6</div>
            <div className="adminBottom">admin bottom area6</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리7</h3>
            <div className="adminTop">admin top area7</div>
            <div className="adminBottom">admin bottom area7</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리8</h3>
            <div className="adminTop">admin top area8</div>
            <div className="adminBottom">admin bottom area8</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contentInner">
            <h3>연동마켓 카테고리 관리9</h3>
            <div className="adminTop">admin top area9</div>
            <div className="adminBottom">admin bottom area9</div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    
    </div>
  );
};

export default SwiperComponentThumbs;
