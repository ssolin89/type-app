import React from 'react';
import SwiperComponentNomal from "./slider/SwiperComponentNormal";
import SwiperComponentThumbs from "./slider/SwiperComponentThumb";

import ScrollableTabs from "./tabs/SlideTabs";


import './App.scss';




const App: React.FC = () => {
  
  return (
    <div className="mainWrap">
      {/* 첫 번째 Swiper */}
      <SwiperComponentNomal/>
      {/* Swiper Thumbs */}
      {/*<SwiperComponentThumbs/>*/}
      
      <ScrollableTabs/>
    </div>
  );
}

export default App;
