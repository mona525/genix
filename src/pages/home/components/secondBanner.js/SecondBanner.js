import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';
import bannerSrc from '../../../../assets/images/banner-two.png'

// import required modules
import { Navigation } from 'swiper/modules';

export default function SecondBanner() {
  return (
    <div style={{background: '#000', padding: '20px 0px 150px'}}>
      <div className='container'>
      <Swiper
        // pagination={{
        //   type: 'progressbar',
        // }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={bannerSrc} alt="offer banner"/>
            <button>Shop Now</button>
        </SwiperSlide>
        <SwiperSlide>
            <img src={bannerSrc} alt="offer banner"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={bannerSrc} alt="offer banner"/>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
