import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {IoCloseCircleOutline} from "react-icons/io5";

import './SwiperComponentTabs.scss'

import {FreeMode, Navigation} from 'swiper/modules';




const SwiperComponentTabs: React.FC = () => {
  const [ tabsSwiper, setTabsSwiper ] = useState<SwiperType | null>(null);
  const [ activeTab, setActiveTab ] = useState(0);
  
  const handleTabClick = (index: number) => {
    if (tabsSwiper) {
      tabsSwiper.slideTo(index);
    }
    setActiveTab(index);
  };
  
  return (
    <div className="swiperTabsArea">
      <Swiper
        onSwiper={setTabsSwiper}
        spaceBetween={4}
        slidesPerView={5.5}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[ FreeMode, Navigation ]}
        className="mySwiper mySwiperTab"
      >
        {[ ...Array(9).keys() ].map(index => (
          <SwiperSlide key={index} onClick={() => handleTabClick(index)}>
            <div className={`tabTitleInner ${activeTab === index ? 'active' : ''}`}>
              <h3>연동마켓 카테고리 관리{index + 1}</h3>
              <button type="button"><IoCloseCircleOutline/></button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponentTabs;
