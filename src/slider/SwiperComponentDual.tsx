import React, {useRef, useEffect} from 'react';
import Swiper, {Swiper as SwiperInstance} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';

import './SwiperComponent.scss'




const SwiperComponent: React.FC = () => {
  const swiperProfRef = useRef<SwiperInstance | null>(null);
  const swiperContentRef = useRef<SwiperInstance | null>(null);
  
  useEffect(() => {
    swiperProfRef.current = new Swiper('.swiperProf', {
      loop: false,
      slidesPerView: 4,
    });
    
    swiperContentRef.current = new Swiper('.swiperContent', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      touchRatio: 0,
      loop: false,
    });
    
    if (swiperProfRef.current && swiperContentRef.current) {
      swiperProfRef.current.on('slideChange', () => {
        const idx = swiperProfRef.current!.realIndex;
        swiperContentRef.current!.slideToLoop(idx);
      });
    }
    
    // Cleanup function to destroy Swiper instances when the component is unmounted
    return () => {
      if (swiperProfRef.current) swiperProfRef.current.destroy();
      if (swiperContentRef.current) swiperContentRef.current.destroy();
    };
  }, []);
  
  return (
    <div>
      {/* 슬라이드 제어 가능한 정보 영역 */}
      <section className="sec_profile">
        <div className="swiper swiperProf">
          <div className="swiper-wrapper">
            <div className="swiper-slide">1 제어 가능한 영역</div>
            <div className="swiper-slide">2 제어 가능한 영역</div>
            <div className="swiper-slide">3 제어 가능한 영역</div>
            <div className="swiper-slide">4 제어 가능한 영역</div>
            <div className="swiper-slide">5 제어 가능한 영역</div>
            <div className="swiper-slide">6 제어 가능한 영역</div>
            <div className="swiper-slide">7 제어 가능한 영역</div>
          </div>
        </div>
      </section>
      {/* 슬라이드 제어 당하는 컨텐츠 영역 */}
      <section className="sec_content">
        <div className="swiper swiperContent">
          <div className="swiper-wrapper">
            <div className="swiper-slide">1 제어 당하는 영역</div>
            <div className="swiper-slide">2 제어 당하는 영역</div>
            <div className="swiper-slide">3 제어 당하는 영역</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SwiperComponent;
