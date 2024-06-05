import React from 'react';
import SwiperComponentNomal from "./slider/SwiperComponentNormal";
import SwiperComponentDual from "./slider/SwiperComponentDual";


import './App.scss';




function App () {
  
  return (
    <div className="mainWrap">
      {/* 첫 번째 Swiper */}
      <SwiperComponentNomal/>
      
      {/* 두 번째 Swiper */}
      <SwiperComponentDual/>
    </div>
  );
}

export default App;
